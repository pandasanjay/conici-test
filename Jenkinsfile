def SERVE_PID
pipeline {
    agent none
    stages {
         stage("Build") {
             agent {
                docker { image 'node:12.14-alpine'}
            }
            
             stages{
                stage("install dependency") {
                    steps {
                        echo "Running build ${env.BUILD_ID} on ${env.JENKINS_URL}"
                        sh 'npm ci'
                    }
                }
                stage("Build") {
                    steps {
                        sh "npm run build"
                    }
                }
                stage("Unit Test") {
                    steps {
                        sh "./node_modules/.bin/jest"
                    }
                }
             }
         }   
         stage("Bdd Test") {
            agent {
                docker { image 'cypress/base:10' }
            }
            stages{
                stage('start local server') {
                    steps {
                        sh 'npm run cy:verify'
                        // start local server in the background
                        // we will shut it down in "post" command block
                        sh "nohup npm run start:ci &"
                        script {
                            SERVE_PID = sh(
                                script: 'echo $!',
                                returnStdout: true
                            )
                        }
                        sh "echo ${SERVE_PID}"
                        sh "./node_modules/.bin/wait-on http://localhost:9000"
                    }
                }
                stage('Run bdd') {
                    steps {
                        echo "Running build ${env.BUILD_ID}"
                        sh "npm run cy:run"
                    }
                }
            }
            post {
                always {
                    echo 'Stopping local server'
                    sh "kill ${SERVE_PID}"
                }
            }
            

        }
    }   

}