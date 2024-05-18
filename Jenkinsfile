pipeline{
    agent any
    stages{
        stage('Build'){
            steps{
                sh 'docker build -t  WBMBackend .'
            }
            
        }
        stage('Test'){
            steps{
                echo 'run test'
            }
        }
        stage('Deploy'){
            steps{
                echo 'publish docker image'
            }
        }
    }
}
