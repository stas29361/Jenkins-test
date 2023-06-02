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
                            if (e.getMessage().contains("rererererererer")) {
                                bat 'npx playwright test --project="chromium"'
                                echo "Ошибка в этапе 'chrome', перезапуск команды..."
                            } else {
                                error('Произошла ошибка в этапе "webkit"')
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
                                echo "Ошибка в этапе 'firefox', перезапуск команды..."
                            } else {
                                error('Произошла ошибка в этапе "webkit"')
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


