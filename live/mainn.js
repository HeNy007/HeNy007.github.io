
function writeHTMLasJS(){
	var HeNy007 = "";
	HeNy007 += "  <!-- Top Bar --> ";
	HeNy007 += "  <div id=\"top-bar\"> ";
	HeNy007 += "   <h2>Aliwix Team - مجموعة أليويكس</h2> ";
	HeNy007 += "  </div>";
	HeNy007 += "  <ul id=\"container\"></ul> ";
	HeNy007 += "  </div>";
	HeNy007 += "<center>";
	HeNy007 += " <img class=\"animated-gif\" src=\"http://www.enigma2.net/wp-content/uploads/2018/07/iptv-ads.gif\" onclick=\"window.location='https://aliwixplay.netlify.app';\"><br>";
	HeNy007 += "<br>";
	HeNy007 += " <div>";
	HeNy007 += " <iframe src=\"https://live.koooragoal.com/\"></iframe>";
	HeNy007 += "</div>";
	HeNy007 += "</center>";

	document.getElementById("js_html").innerHTML = HeNy007;
}

writeHTMLasJS();
