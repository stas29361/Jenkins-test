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
            catchError(stageResult: 'FAILURE') {
                    retry(3) {
                      script {
                        try {
                           bat 'npx playwright test --project="chromium"'
                           echo "privet chrome"
                        } catch (Exception e) {
                            if (e.getMessage().contains("Timed out")) {
                                bat 'npx playwright test --project="chromium"'
                                echo "Error in chrome, restart the comand ************************************************"
                            } else {
                                error('Appear error chrome')
                            }
                        }
                      }
                    }
                }
            }
        }
    stage('firefox'){
          steps {
            catchError(stageResult: 'FAILURE') {
                    retry(3) {
                      script{
                        try {
                           bat 'npx playwright test --project="firefox"'
                           echo "privet firefoxfirefoxfirefoxfirefoxfirefoxfirefoxfirefoxfirefoxfirefoxfirefox"
                        } catch (Exception e) {
                            if (e.getMessage().contains("rererererererer")) {
                                bat 'npx playwright test --project="firefox"'
                                echo "Error in firefox, restart the comand ************************************************"
                            } else {
                                error('Appear error firefox')
                            }
                        }
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


