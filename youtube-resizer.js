/**
       * Resizing the player in JavaScript.
       */
      
      function initYoutubeFullScreen() {
        var myWidth = 0, myHeight = 0;
        if( typeof( window.innerWidth ) == 'number' ) {
          //Non-IE
          myWidth = window.innerWidth;
          myHeight = window.innerHeight;
        } else if( document.documentElement && ( document.documentElement.clientWidth || document.documentElement.clientHeight ) ) {
          //IE 6+ in 'standards compliant mode'
          myWidth = document.documentElement.clientWidth;
          myHeight = document.documentElement.clientHeight;
        } else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) {
          //IE 4 compatible
          myWidth = document.body.clientWidth;
          myHeight = document.body.clientHeight;
        }
        scalePlayer(myWidth, myHeight)
      }

      function scalePlayer(w, h) {
        resizePlayer(w, h);
      }
      // Set the loaded player to a specific height and width.
      function resizePlayer(width, height) {
        var playerObj = document.getElementById("ytPlayer");
        playerObj.height = height;
        playerObj.width = width;
      }
      
      // The "main method" of this sample. Called when someone clicks "Run".
      function loadPlayer() {
        // The video to load
        var videoID = "ylLzyHk54Z0"
        // Lets Flash from another domain call JavaScript
        var params = { allowScriptAccess: "always" };
        // The element id of the Flash embed
        var atts = { id: "ytPlayer" };
        // All of the magic handled by SWFObject (http://code.google.com/p/swfobject/)
        swfobject.embedSWF("http://www.youtube.com/v/" + videoID + 
                           "?version=3&enablejsapi=1&playerapiid=player1", 
                           "videoDiv", "560", "340", "9", null, null, params, atts);
      }
      function _run() {
        loadPlayer();
      }
      google.setOnLoadCallback(_run);
      initYoutubeFullScreen();