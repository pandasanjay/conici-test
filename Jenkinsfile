pipeline {
    agent none
    stages {
            
        stage("install dependency") {
            agent {
                docker { 
                    image 'node:12.14-alpine'
                }
            }
            steps {
                sh "npm install"
            }
        }
        stage("Build") {
            agent {
                docker { 
                    image 'node:12.14-alpine'
                }
            }
            steps {
                sh "npm build"
            }
        }
        stage("Unit Test") {
            agent {
                docker { 
                    image 'node:12.14-alpine'
                }
            }
            steps {
                sh "./node_modules/.bin/jest"
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