// This was just a quick look at changing text on a page
// there could be more tags you should ignore and there could be a better way of doing this all together
var ignoreTags = ["NOSCRIPT","SCRIPT","STYLE"];
var nodeIterator = document.createNodeIterator(
    document,
    NodeFilter.SHOW_TEXT,
    function (node){
      var parentTag = node.parentNode.tagName.toUpperCase();
      if ( ignoreTags.indexOf(parentTag)==-1 ) {return true} else {return false};
    },
    false
);

var node;
var div = document.createElement('div');
div.id ='popup';
div.innerHTML = "Hello";

var temptxt = document.getElementsByTagName('body')[0].appendChild(div);


var text = new Array("ADDYY","NKE","BUD");



while ( (node = nodeIterator.nextNode()) ) {
	for (var i = 0; i <= 10; i++) {
	   		node.data = node.data.replace(text[i],temptxt );
	 }
   
}


 // function boss (){
 //          var div = document.createElement('div');
 //          div.id ='popup';
 //          document.getElementsByTagName('body')[0].appendChild(div);
 //          div.innerHTML = "Hello";
 //          }