pipeline{
    agent any
    stages{
        stage('Build'){
            steps{
                bat ' docker build -t  WBMBackend .'
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