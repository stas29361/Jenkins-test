pipeline {
   agent any
   stages {
      stage('Clear test reports'){
         steps {
            sh(""" rm -rf $WORKSPACE/allure-results """)
            sh(""" rm -rf $WORKSPACE/allure-report """)
         }
      }
      stage('Installation'){
         steps {
            bat 'npm install'
            bat 'npx playwright install'
         }
      }
      stage('e2e-tests'){
        steps {
          retry(3) {
            bat  "npx playwright test "
            echo "1---------------------"
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