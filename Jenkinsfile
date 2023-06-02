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
                    bat 'npx playwright test --project="chromium"'
                    echo "privet rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr"
                 } catch (Exception e) {
                    def errorMessage = e.getMessage() 
                    echo "poka tttttttttttttttttttttttttttttttttttttttttttttttttttt"
                    if (errorMessage.contains("rererererererer")) {
                      bat 'npx playwright test --project="chromium"'
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
                    bat 'npx playwright test --project="firefox"'
                 } catch (Exception e) {
                    def errorMessage = e.getMessage() 
                    if (errorMessage.contains("Test timeout")) {
                      bat 'npx playwright test --project="firefox"'
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


