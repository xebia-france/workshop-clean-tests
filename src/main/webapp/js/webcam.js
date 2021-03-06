navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

var WebcamLive = {

		video : document.querySelector("#live"),
		canvas : document.querySelector("canvas"),
		restUrlForSave : '/rest/photos/save',
		dataToSend : null,
		
		init : function(stream){
			this.video.classList.remove("hidden");
			this.stream = stream;
		    if (window.URL) {
		        this.video.src = window.URL.createObjectURL(stream);
		    } else {
		        this.video.src = stream;
		    }
			return this;
		},
		snapshot : function () {
			var ctx = this.canvas.getContext("2d");
		    if (this.stream) {
		        ctx.drawImage(this.video, 0, 0, 640, 480, 0, 0, 300, 150);
		        // "image/webp" works in Chrome.
		        // Other browsers will fall back to image/png.
		        snapshotResult.src = this.canvas.toDataURL('image/jpeg');
                var lengthToExclude = 'data:image/jpeg;base64,'.length;
                this.dataToSend = snapshotResult.src.substr(lengthToExclude, snapshotResult.src.length - lengthToExclude);
		    }
		}
};

var IPWebcamLive = {
        //restUrlForSave : '/rest/photos/saveWithURL',
        restUrlForSave : '/rest/photos/saveWithURL',
        dataToSend : null,

		init : function(){
		    this.urlVideo = document.querySelector("#urlVideo");
		    this.urlPhoto = document.querySelector("#urlPhoto");

		    document.querySelector(".ipWebcamResult").src = "/img/dog.jpeg";//brest

		    document.querySelector("#urls").classList.remove("hidden");
		    document.querySelector("#urls").display = "inline-block;";

		    document.querySelector(".startIPWebcam").addEventListener('click', function () {
		        //snapshotBtn.classList.remove("hidden");
		        snapshotBtn.classList.add("visible");
		        document.querySelector(".ipWebcamResult").src = IPWebcamLive.urlVideo.value;
		    }, false);		    
			
			return this;
		},
		getUrlPhoto : function(){
			return this. urlPhoto.value || "/img/dog.jpeg";
		},
		
		snapshot : function(){
			//see http://stackoverflow.com/questions/20424279/canvas-todataurl-securityerror
			snapshotResult.src = this.getUrlPhoto();
			this.dataToSend = this.getUrlPhoto();
			console.log(this.dataToSend);
		}
}