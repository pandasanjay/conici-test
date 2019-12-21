pipeline {
    agent none
    stages {
         stage("Build") {
            docker { 
                image 'node:12.14-alpine'
            }
             stages{
                stage("install dependency") {
                    steps {
                        sh "npm install"
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
                docker { image 'cypress/included:3.2.0' }
            }
            steps {
                sh "cypress run"
            }
        }
    }   

}