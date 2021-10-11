if(typeof jQuery === 'undefined') {
    var headTag = document.getElementsByTagName("head")[0];
    var jqTag = document.createElement('script');
   	jqTag.type = 'text/javascript';
   	jqTag.src = 'https://code.jquery.com/jquery-1.7.2.min.js';
    jqTag.onload = jq_show;
    headTag.appendChild(jqTag);
} else {
	jq_show();
}
function jq_show() {
	jQuery(document).ready(function() {
	if(typeof window.yxsc=='undefined') {
		jQuery('body').prepend('<div id="yx-sli1" style="position:fixed;bottom:0px;left:0px;width:100%;height:65px;background-color:#fff;z-index:999999999999;text-align:center;border:0;padding:0;box-sizing:content-box;"><div style="display:block;font-family:Arial;font-size:13px;width:100%;height:15px;line-height:13px;border:none;margin:0;padding:0;background-color:#171258;color:#ffffff;text-align:center;font-family:Arial;font-size:13px;line-height:13px;"><a href="https://ad2bitcoin.com/index.php?ref=heny007" style="color:#fff;text-decoration:underline;border:none;margin:0;padding:0;" target="_blank">إدعمنا بالنقر على الاشهارات 💰</a><div style="position:absolute;right:0px;top:0px;width:15px;height:15px;border:none;margin:0;padding:0;line-height:13px;"><img src="https://github.com/HeNy007/HeNy007.github.io/raw/main/safelink/but_close.png" width="13" height="13" onclick="document.getElementById(\'yx-sli1\').style.display=\'none\';" style="cursor:pointer;border:none;margin:0;padding:0;" /></a></div></div><div style="position:relative;left:50%;margin-left:-150px;width:468px;height:60px;box-sizing:content-box;background-color:#fff;padding:0;"><iframe src="https://ad2bitcoin.com/ad.php?ref=heny007&width=468" marginwidth="0" marginheight="0" width="468" height="60" scrolling="no" border="0" frameborder="0"></iframe></div></div>');
		        window.yxsc=true;
	}
    });
}
