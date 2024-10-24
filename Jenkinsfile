pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                script {
                    sh 'npm install'
                }
            }
        }
        stage('Test') {
            steps {
                script {
                    echo 'Running tests...'
                    // Add test commands here
                }
            }
        }
        stage('Deploy') {
    steps {
        script {
            sh '''
            # Kill any existing instance of the app running on port 3000
            if lsof -i :3000; then
                kill -9 $(lsof -t -i :3000)
            fi
            echo "Deploying application..."
            node app.js &
            '''
        }
    }
}


