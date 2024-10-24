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
                    // Add any test commands here
                }
            }
        }
        stage('Deploy') {
            steps {
                script {
                    echo 'Deploying application...'
                    // Run the application in the background and log output
                    sh 'nohup node app.js > app.log 2>&1 &'
                }
            }
        }
    }
}
app.listen(port, () => {
    console.log(`App running at http://localhost:${port}`);
});

