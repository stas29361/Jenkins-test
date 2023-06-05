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
            script{
            bat 'npx playwright test --project="chromium"'
            def commandOutput = currentBuild.rawBuild.getLog(1000)
            echo "${commandOutput} ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++"
            if (commandOutput.contains('NS_ERROR_UNKNOWN_PROTOCOL')) {
              echo "11111111111111111111111111111111111111111111111111111111"
                bat 'npx playwright test --project="chromium"'
            } 
            }
                    // retry(3) {
                    //   script {
                    //     try {
                    //       echo "privet chrome"
                    //        bat 'npx playwright test --project="chromium"'
                    //     } catch (Exception e) {
                    //         if (e. getStackTrace().contains("script returned exit code 1")) {
                    //             bat 'npx playwright test --project="chromium"'
                    //             echo "Error in chrome, restart the comand ************************************************"
                    //         } else {
                    //           echo "${e.getStackTrace()} 11111111111111111111111111111111111111111111111111111111111"
                    //             error('Appear error chrome')
                    //         }
                    //     }
                    //   }
                    // }
                }
            }
        }
    stage('firefox'){
          steps {
            catchError(stageResult: 'FAILURE') {
              script{
            bat 'npx playwright test --project="firefox"'
            def commandOutput = currentBuild.rawBuild.getLog(1000)
            if (commandOutput.contains('NS_ERROR_UNKNOWN_PROTOCOL')) {
              echo "22222222222222222222222222222222222222222222222222222222"
                bat 'npx playwright test --project="firefox"'
            } 
              }
                    // retry(3) {
                    //   script{
                    //     try {
                    //        bat 'npx playwright test --project="firefox"'
                    //        echo "privet firefoxfirefoxfirefoxfirefoxfirefoxfirefoxfirefoxfirefoxfirefoxfirefox"
                    //     } catch (Exception e) {
                    //         if (e.getMessage().contains("script returned exit code 1")) {
                    //             bat 'npx playwright test --project="firefox"'
                    //             echo "Error in firefox, restart the comand ************************************************"
                    //         } else {
                    //             echo "${e.getStackTrace()} 22222222222222222222222222222222222222222222222222222222222"
                    //             error('Appear error firefox')
                    //         }
                    //     }
                    //   }
                    // }
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


