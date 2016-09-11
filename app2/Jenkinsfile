node {
    stage('clean') {
        sh "./gradlew clean"
    }

    stage('backend tests') {
        sh "./gradlew test"
    }

    stage('packaging') {
        sh "./gradlew bootRepackage -Pprod -x test"
    }
}
