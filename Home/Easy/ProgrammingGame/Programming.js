// Function to set the attribute and navigate to the page
function navigateToPage(id, url) {
    document.getElementById(id).setAttribute('href', url);
    window.location.href = url; // Navigate to the URL
  }
  


  let MUSICINFO = localStorage.getItem('playMusicInfo');
  let MUSICBACKGROUND = document.getElementById('audioBackground');
  
  
  function checkMusicBackground(music){
      let convertedToInt = parseInt(music);
      if(convertedToInt){
        MUSICBACKGROUND.play();
      }
  }
  
  checkMusicBackground(MUSICINFO);
  
  



  // Add onclick event listeners to elements with different IDs
  document.getElementById('js').onclick = function() { navigateToPage('js', 'jsScript.html'); };
  document.getElementById('py').onclick = function() { navigateToPage('py', 'py.html'); };
  document.getElementById('cpp').onclick = function() { navigateToPage('cpp', 'cpp.html'); };
  document.getElementById('java').onclick = function() { navigateToPage('java', 'java.html'); };
  document.getElementById('cSharp').onclick = function() { navigateToPage('cSharp', 'cSharp.html'); };
  // Easy/gamesImg/JavaScript_Logo.png
  // C:\Users\moises\Desktop\TriggerGame_Project\Home\Easy\gamesImg\JavaScript_Logo.png


