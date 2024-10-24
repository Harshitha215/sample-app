pipeline {
    agent any 

    stages {
        stage('Harshitha') {
            steps {
                script {
                    // Checkout code from Git repository
                    checkout scm
                }
            }
        }

        stage('Build') {
            steps {
                script {
                    echo 'Installing dependencies... HI HARSHA'
                    sh 'npm install'
                }
            }
        }

        stage('Test') {
            steps {
                script {
                    echo 'Running tests...'
                    // Add your test command here
                    // e.g., sh 'npm test'
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    echo 'Checking if the application is already running...'
                    def isRunning = sh(script: "lsof -i :3000 | grep LISTEN", returnStatus: true) == 0

                    if (isRunning) {
                        echo 'Application is already running. Restarting...'
                        // Kill the existing application
                        sh 'pkill -f "node app.js"'
                    } else {
                        echo 'No existing application found. Deploying...'
                    }

                    // Start the application
                    sh 'nohup node app.js > app.log 2>&1 &'
                    echo 'Application deployed and running!'
                }
            }
        }
    }

    post {
        always {
            echo 'Cleaning up...'
            // Optional: Clean up actions (like removing temp files)
        }

        success {
            echo 'Pipeline completed successfully!'
        }

        failure {
            echo 'Pipeline failed. Please check the logs.'
        }
    }
}

