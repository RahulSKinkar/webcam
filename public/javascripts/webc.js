navigator.getUserMedia  = navigator.getUserMedia ||
navigator.webkitGetUserMedia ||
navigator.mozGetUserMedia ||
navigator.msGetUserMedia;

var video = document.querySelector('video');
var button = document.getElementById('btnVidCap');
var removeBtn = document.getElementById('btnRemoveVid');


var constraints = {
  video: {
    mandatory: {
      maxWidth: 640,
      maxHeight: 360
    }
  }
};

var successCallback = function(stream) {
  video.src = window.URL.createObjectURL(stream);
};

var errorCallback = function(e) {
  console.log('Rejected!', e);
};


button.addEventListener('click', function(){
  navigator.getUserMedia(constraints, successCallback, errorCallback);
})
removeBtn.addEventListener('click', function(){
  // video.src = "";
  window.URL.revokeObjectURL(video.src);
})
// navigator.getUserMedia(hdConstraints, successCallback, errorCallback);
