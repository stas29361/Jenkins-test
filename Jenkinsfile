pipeline {
   agent any
   stages {
      stage('Installation'){
         steps {
            bat 'npm install'
            bat 'npx playwright install'
         }
      }
     stage('chromium') {
      steps {
        script {
            try {
                def command = "npx playwright test "
                bat(returnStatus: true, script: command)
            } catch (Exception e) {
                def errorMessage = e.getMessage() 
                if (errorMessage.contains("Test timeout")) {
                  def retryCommand = "npx playwright test "
                  bat(returnStatus: true, script: retryCommand)
                }
                currentBuild.result = 'FAILURE'
            }
        }
    }
}
      stage('Test reports') {
         steps {
            allure([includeProperties: false, jdk: '', reportBuildPolicy: 'ALWAYS', results: [[path: 'allure-results']]])
         }
      }
   }
}


