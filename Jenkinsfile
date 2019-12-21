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
                        sh 'npm run cy:verify'
                    }
                }
                stage("Build") {
                    steps {
                        sh "npm build"
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
                        // start local server in the background
                        // we will shut it down in "post" command block
                        sh 'nohup npm run start:ci &'
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
                    sh 'pkill -f http-server'
                }
            }
            

        }
    }   

}