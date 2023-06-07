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
                    def fileName = "log"
                    def searchDirectory = new File("${env.JENKINS_HOME}\\jobs")
                    
                    def files = org.apache.commons.io.FileUtils.listFiles(searchDirectory, [fileName] as String[], true)
                    
                    if (files) {
                        def filePath = files[0].getAbsolutePath()
                        echo "file path have found: ${filePath}"
                    } else {
                        echo "file path have not found"
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
    stage('firefox'){
          steps {
           script {
                    def fileName = "log"
                    def searchDirectory = new File("${env.JENKINS_HOME}\\jobs")
                    
                    def files = org.apache.commons.io.FileUtils.listFiles(searchDirectory, [fileName] as String[], true)
                    
                    if (files) {
                        def filePath = files[0].getAbsolutePath()
                        echo "file path have found: ${filePath}"
                    } else {
                        echo "file path have not found"
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
      stage('Test reports') {
         steps {
            allure([includeProperties: false, jdk: '', reportBuildPolicy: 'ALWAYS', results: [[path: 'allure-results']]])
         }
      }
   }
}


