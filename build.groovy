node(){
    def imageName = 'try'
    def hostPost= '4000'
    def guestPost= '4000'

	stage("build artifact"){
		sh "docker build -t {$imageName} ."
	}
	stage("deploy"){
    	sh "docker run -i -t -d -p ${$hostPost}:{$guestPost} {$imageName}"
    }
}