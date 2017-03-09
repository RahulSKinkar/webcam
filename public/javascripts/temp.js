navigator.getUserMedia  = navigator.getUserMedia ||
navigator.webkitGetUserMedia ||
navigator.mozGetUserMedia ||
navigator.msGetUserMedia;

var video = document.querySelector('video');
//
//
//
// if (navigator.getUserMedia) {
//   navigator.getUserMedia({audio: true, video: true}, function(stream) {
//     video.src = window.URL.createObjectURL(stream);
//   }, errorCallback);
// } else {
//   // video.src = 'somevideo.webm'; // fallback.
// }

var hdConstraints = {
  video: {
    mandatory: {
      minWidth: 1280,
      minHeight: 720
    }
  }
};

var vgaConstraints = {
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

// navigator.getUserMedia(hdConstraints, successCallback, errorCallback);
navigator.getUserMedia(vgaConstraints, successCallback, errorCallback);
