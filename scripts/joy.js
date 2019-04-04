//************************************************//
      //  DECLARE & INITIALISE VARIABLES //
//*************************************************//

  var wakeUp = new Audio("https://www.dropbox.com/s/c1ggyqe9jbvtaq4/Feeling.mp3?dl=0");
  var shower = new Audio("https://www.dropbox.com/s/icmbahfcljdaq9e/shower.mp3?dl=0");
  var exercise = new Audio("https://www.dropbox.com/s/99tv5ma2ej4atup/Single_Ladies.mp3?dl=0");
  var headphones = new Audio("https://www.dropbox.com/s/xuq6199scfa5fxt/BB.wav?dl=0");
  var sleep = new Audio("https://www.dropbox.com/s/htgtku7a3zmdgjp/Lucky.mp3?raw=1");
  var isPlaying = false;

//************************************************//
      //  TOGGLE PLAY ON WAKE UP BUTTON //
//*************************************************//

 function togglePlayWakeUp() {
    if (isPlaying) {
      wakeUp.pause();
    }else {
      wakeUp.play();
    }
  }

  wakeUp.onplaying = function() {
    isPlaying = true;
  };
  
  wakeUp.onpause = function() {
    isPlaying = false;
  };

//************************************************//
      //  TOGGLE PLAY ON SHOWER BUTTON //
//*************************************************//

  function togglePlayShower() {
    if (isPlaying) {
      shower.pause();
    }else {
      shower.play();
    }
  }

  shower.onplaying = function() {
    isPlaying = true;
  };
  
  shower.onpause = function() {
    isPlaying = false;
  };

  //************************************************//
      //  TOGGLE PLAY ON EXERCISE BUTTON //
//*************************************************//

  function togglePlayExercise() {
    if (isPlaying) {
      exercise.pause();
    }else {
      exercise.play();
    }
  }

  exercise.onplaying = function() {
    isPlaying = true;
  };
  
  exercise.onpause = function() {
    isPlaying = false;
  };


//************************************************//
      //  TOGGLE PLAY ON HEADPHONES BUTTON //
//*************************************************//

 function togglePlayHeadphones() {
    if (isPlaying) {
      headphones.pause();
    }else {
      headphones.play();
    }
  }

  headphones.onplaying = function() {
    isPlaying = true;
  };
  
  headphones.onpause = function() {
    isPlaying = false;
  };

//************************************************//
      //  TOGGLE PLAY ON SLEEP BUTTON //
//*************************************************//

  function togglePlaySleep() {
    if (isPlaying) {
      sleep.pause();
    }else {
      sleep.play();
    }
  }

  sleep.onplaying = function() {
    isPlaying = true;
  };
  
  sleep.onpause = function() {
    isPlaying = false;
  };


//************************************************//
      //  STOP SONGS - RESET TO BEGINNING //
//*************************************************//

function resetWakeUp(){
  wakeUp.currentTime = 0;
  wakeUp.pause();
}

function resetShower(){
  shower.currentTime = 0;
  shower.pause();
}

function resetExercise(){
  exercise.currentTime = 0;
  exercise.pause();
}

function resetHeadphones(){
  headphones.currentTime = 0;
  headphones.pause();
}

function resetSleep(){
  sleep.currentTime = 0;
  sleep.pause();
}
