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
                'publish docker image'
            }
        }
    }
}