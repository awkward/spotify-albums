//Load Spotify API components
var sp = getSpotifyApi(1);
var m = sp.require('sp://import/scripts/api/models');
var v = sp.require("sp://import/scripts/api/views");
var ui = sp.require("sp://import/scripts/ui");
var player = m.player; 
var track = player.track;
var library = m.library;
var application = m.application;

//Calculate Margin on resize
$(window).resize(function(){ 
	fillScreen(); 
});

//Calculate margin to make the album fill the screen
function fillScreen(){
  //Total width of window min margin
  var windowWidth = $(document).width();
  
  //Width of an album cover + default margin
  var albumWidth = 220;
  
  //Calculate extra margin
  var albumExtraMargin;
  
  //Number of albums per row
  var row = Math.floor(windowWidth/albumWidth);
    
  //Calculate remainging pixels after reducing the album width + minimal margin
  var remainingPx = windowWidth - (row*albumWidth);
  var remainingPx = remainingPx/2;
  
  //Calculate total margin
  var albumMargin = Math.floor(remainingPx/row)+20;
  
  //Calculate remaining pixels after all the margin is divided
  var comparison = Math.floor(remainingPx/row)*row;
  var rest = (remainingPx - comparison);
  rest = Math.floor(rest);
    
  $('#library').css('padding-left',rest);
  $('#library .sp-player').css({'margin-left':+albumMargin,'margin-right':+albumMargin});
}