/**
* @author : Benjamin Cassinat <benftwc@gmail.com>
* https://github.com/benftwc/youtube-full-screen
*
* Provide an Youtube fullscreen integration (old method)
* to allow all browser to use it.
*
* Keep in minds : It use the FLASH Youtube Embed Player,
* and can't be used on iPhone right now, you'll have to
* change the loadPlayer() method in order to load HTML5 
* Youtube Player.
*
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
          myWidth = (document.body.clientWidth);
          myHeight = (document.body.clientHeight);
        }
        scalePlayer(myWidth, myHeight, 40)
      }

      function scalePlayer(w, h, offset) {
        resizePlayer(w - offset, h - offset);
      }
      // Set the loaded player to a specific height and width.
      function resizePlayer(width, height) {
        var playerObj = document.getElementById("ytPlayer");
        playerObj.height = height;
        playerObj.width = width;
      }
      
      function loadPlayer() {
        var videoID = "QC-ma8dV-2w"
        var params = { allowScriptAccess: "always" };
        var atts = { id: "ytPlayer" };

        swfobject.embedSWF("http://www.youtube.com/v/" + videoID + 
                           "?version=3&enablejsapi=1&playerapiid=player1", 
                           "videoDiv", "560", "340", "9", null, null, params, atts);
      }
      function _run() {
        loadPlayer();
      }
      google.setOnLoadCallback(_run);
      initYoutubeFullScreen();