pipeline {
    agent {
        docker { image 'node:9-alpine' }
    }
    stages {
        stage("dependency") {
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
                sh "npm test"
            }
        }
        stage("Bdd Test") {
            steps {
                sh "./node_modules/.bin/cypress run"
            }
        }
    }
}