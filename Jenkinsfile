pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                sh 'npm install' // Install dependencies
            }
        }
        stage('Test') {
            steps {
                echo 'Running tests...' // Add test commands if needed
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying application...'
                sh 'pkill -f node || true' // Kill any running instance of the app
                sh 'nohup node app.js > app.log 2>&1 &' // Start the app in the background
            }
        }
    }
}

