pipeline {
   agent any
   stages {
      stage('Installation'){
         steps {
            bat 'npm install'
            bat 'npx playwright install'
         }
      }
     stage('end-2-end') {
      parallel{
        stage('chrome'){
          steps {
              script {
                 try {
                    def command = 'npx playwright test --project="chromium"'
                    bat(returnStatus: true, script: command)
                    echo "privet rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr"
                 } catch (Exception e) {
                    def errorMessage = e.getMessage() 
                    echo "poka tttttttttttttttttttttttttttttttttttttttttttttttttttt"
                    if (errorMessage.contains("rererererererer")) {
                      def retryCommand = 'npx playwright test --project="chromium"'
                      bat(returnStatus: true, script: retryCommand)
                      echo "chrome retry----------------------------------------"
                    } else {
                      currentBuild.result = 'FAILURE'
                      }
                      
                    }
                }
            }
        }
        stage ('firefox') {
          steps {
              script {
                 try {
                    def command = 'npx playwright test --project="firefox"'
                    bat(returnStatus: true, script: command)
                 } catch (Exception e) {
                    def errorMessage = e.getMessage() 
                    if (errorMessage.contains("Test timeout")) {
                      def retryCommand = 'npx playwright test --project="firefox"'
                      bat(returnStatus: true, script: retryCommand)
                      echo "firefox retry----------------------------------------"
                    } else {
                      currentBuild.result = 'FAILURE'
                      }
                    }
                }
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


