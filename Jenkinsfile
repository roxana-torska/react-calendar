pipeline {
    agent any
    options {
        buildDiscarder(logRotator(numToKeepStr:'5'))
    }
    triggers {
        pollSCM('H */1 * * *')
    }
    tools {
        nodejs 'NodeJS 12.16.1'
    }
    stages {
        stage('build') {
            steps {
                sh 'npm install'
                sh 'npm run build'
            }
        }
        stage('sonar-analyze') {
            when {
                branch 'dev'
            }
            steps {
                script {
                    def scannerHome = tool 'SonarQube Scanner';
                    withSonarQubeEnv('Forcelate SonarQube') {
                        sh "${scannerHome}/bin/sonar-scanner";
                    }
                }
            }
        }
        stage('deployment-aws-s3') {
            when {
                branch 'master'
            }
            steps {
                withAWS(region:'eu-central-1',credentials:'FORCELATE_AWS_CREDENTIALS') {
                    s3Delete(bucket: 'forcestage.com', path:'')
                    s3Upload(bucket: 'forcestage.com', workingDir:'build', includePathPattern:'**/*', path:'');
                }
            }
        }
    }
    post {
        always {
            script {
                // https://issues.jenkins-ci.org/browse/JENKINS-46325
                // https://jenkins.io/doc/book/pipeline/jenkinsfile/
                // Workaround: ['SUCCESS'] isEqualTo [null]
                if (currentBuild.result == null) {
                    currentBuild.result = 'SUCCESS'
                }
            }
            alwaysNotifications()
        }
        failure {
            failureNotifications()
        }
    }
}

def alwaysNotifications() {
    emailext (
        to: "$FORCELATE_CTO, $FORCELATE_CALENDAR_DEVELOPERS",
        subject: '${DEFAULT_SUBJECT}',
        body: '''${SCRIPT, template="pipeline-changes.template"}'''
    )
}

def failureNotifications() {
    emailext (
        to: "$FORCELATE_ADMINISTRATORS",
        subject: '${DEFAULT_SUBJECT}',
        body: '''${SCRIPT, template="pipeline-changes.template"}'''
    )
}
