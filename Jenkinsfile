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
        // Kill any existing instance of the application
        sh 'echo "your_sudo_password" | sudo -S pkill -f node || true'
        // Start the application in the background and log output
        sh 'nohup node app.js > app.log 2>&1 &'
            }
        }
    }
}

