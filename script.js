var basePage = {
  width: 1024,
  height: 720,
  scale: 1,
  scaleX: 1,
  scaleY: 1
};

var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
var h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

$(function(){
  var $page = $('#outer');
  if(w>480){
	$('#outer').addClass('outer');
	$('#wrap').addClass('wrap');
	getPageSize(); 
	scalePages($page, pageWidth+17, pageHeight+17);	
	 
	$(window).resize(_.debounce(function () {
		getPageSize(); 
		scalePages($page, pageWidth, pageHeight);
	
    }, 0));
  }else{
 
	$('#wrap').removeClass('wrap');
	$('#outer').removeClass('outer');
  }
  
    
function getPageSize() {
  pageHeight = $('#wrap').height();
  pageWidth = $('#wrap').width();
}

function scalePages(page, maxWidth, maxHeight) {            
  var scaleX = 1, scaleY = 1;                      
  scaleX = maxWidth / basePage.width;
  scaleY = maxHeight / basePage.height;
  basePage.scaleX = scaleX;
  basePage.scaleY = scaleY;
  basePage.scale = (scaleX > scaleY) ? scaleY : scaleX;

  var newLeftPos = Math.abs(Math.floor(((basePage.width * basePage.scale) - maxWidth)/2));
  var newTopPos = Math.abs(Math.floor(((basePage.height * basePage.scale) - maxHeight)/2));

  page.attr('style', '-webkit-transform:scale(' + basePage.scale + ');-moz-transform:scale(' + basePage.scale + ');zoom:1;left:' + newLeftPos + 'px;top:' + newTopPos + 'px;');
}

});
