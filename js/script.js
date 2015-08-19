/**
 * flashembed 0.28. Adobe Flash embedding script
 *
 * http://flowplayer.org/tools/flash-embed.html
 *
 * Copyright (c) 2008 Tero Piirainen (tero@flowplayer.org)
 *
 * Released under the MIT License:
 * http://www.opensource.org/licenses/mit-license.php
 *
 * >> Basically you can do anything you want but leave this header as is <<
 *
 * Since: 				03/11/2008
 * Version: 0.28 		05/26/2008
 */
function flashembed(g,h,j){if(typeof g=='string')g=document.getElementById(g);var k={src:'#',width:'100%',height:'100%',version:null,loadEvent:null,onFail:null,expressInstall:null,allowfullscreen:true,allowscriptaccess:'always',quality:'high',bgcolor:'#ffffff',type:'application/x-shockwave-flash',pluginspage:'http://www.adobe.com/go/getflashplayer'};extend(k,h);var l=k.loadEvent;k.loadEvent=null;if(l){if(!g)return;g['on'+l]=function(){return load()}}else{return load()}function extend(a,b){if(b){for(key in b){a[key]=b[key]}}}function load(){var a=getVersion();var b=k.version;var c=k.expressInstall;if(!g)return;if(!b||isSupported(b)){k.onFail=k.version=k.expressInstall=null;g.innerHTML=getHTML();return g.firstChild}else if(k.onFail){var d=k.onFail.call(k,getVersion(),j);if(d)g.innerHTML=d}else if(b&&c&&isSupported([6,65])){extend(k,{src:c});j={MMredirectURL:location.href,MMplayerType:'PlugIn',MMdoctitle:document.title};g.innerHTML=getHTML()}else{if(g.innerHTML.replace(/\s/g,'')!=''){}else{g.innerHTML="<h2>Flash version "+b+" or greater is required</h2>"+"<h3>"+(a[0]>0?"Your version is "+a:"You have no flash plugin installed")+"</h3>"+"<p>Download latest version from <a href='"+k.pluginspage+"'>here</a></p>"}}g['on'+l]=null}function isSupported(a){var b=getVersion();var c=(b[0]>a[0])||(b[0]==a[0]&&b[1]>=a[1]);return c}function getHTML(){var a="";if(typeof j=='function')j=j();if(navigator.plugins&&navigator.mimeTypes&&navigator.mimeTypes.length){a='<embed type="application/x-shockwave-flash" ';extend(k,{name:k.id});for(var b in k){if(k[b]!=null)a+=[b]+'="'+k[b]+'"\n\t'}if(j){a+='flashvars=\'';for(var b in j){a+=[b]+'='+asString(j[b])+'&'}a+='\''}a+='/>'}else{a='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" ';a+='width="'+k.width+'" height="'+k.height+'"';if(document.all&&parseInt(navigator.appVersion)<=6){k.id="_"+(""+Math.random()).substring(5)}if(k.id)a+=' id="'+k.id+'"';a+='>';a+='\n\t<param name="movie" value="'+k.src+'" />';k.id=k.src=k.width=k.height=null;for(var b in k){if(k[b]!=null)a+='\n\t<param name="'+b+'" value="'+k[b]+'" />'}if(j){a+='\n\t<param name="flashvars" value=\'';for(var b in j){a+=[b]+'='+asString(j[b])+'&'}a+='\' />'}a+="</object>"}return a}function getVersion(){var a=[0,0];if(navigator.plugins&&typeof navigator.plugins["Shockwave Flash"]=="object"){var b=navigator.plugins["Shockwave Flash"].description;if(typeof b!="undefined"){b=b.replace(/^.*\s+(\S+\s+\S+$)/,"$1");var c=parseInt(b.replace(/^(.*)\..*$/,"$1"),10);var d=/r/.test(b)?parseInt(b.replace(/^.*r(.*)$/,"$1"),10):0;a=[c,d]}}else if(window.ActiveXObject){try{var f=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7")}catch(e){try{var f=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");a=[6,0];f.AllowScriptAccess="always"}catch(e){if(a[0]==6)return}try{var f=new ActiveXObject("ShockwaveFlash.ShockwaveFlash")}catch(e){}}if(typeof f=="object"){var b=f.GetVariable("$version");if(typeof b!="undefined"){b=b.replace(/^\S+\s+(.*)$/,"$1").split(",");a=[parseInt(b[0],10),parseInt(b[2],10)]}}}return a}function asString(b){switch(typeOf(b)){case'string':return'"'+b.replace(new RegExp('(["\\\\])','g'),'\\$1')+'"';case'array':return'['+map(b,function(a){return asString(a)}).join(',')+']';case'object':var c=[];for(var d in b){c.push('"'+d+'":'+asString(b[d]))}return'{'+c.join(',')+'}'}return String(b).replace(/\s/g," ").replace(/\'/g,"\"")}function typeOf(a){if(a===null||a===undefined)return false;var b=typeof a;return(b=='object'&&a.push)?'array':b}if(window.attachEvent){window.attachEvent("onbeforeunload",function(){__flash_unloadHandler=function(){};__flash_savedUnloadHandler=function(){}})}function map(a,b){var c=[];for(var i in a){c[i]=b(a[i])}return c}flashembed.getVersion=getVersion;flashembed.isSupported=isSupported;return g}if(typeof jQuery=='function'){(function($){$.fn.extend({flashembed:function(a,b){return this.each(function(){new flashembed(this,a,b)})}})})(jQuery)}

$(function(){
    var $header = $('#header');
    var $body = $('body');
    var stickyHeaderTop = $header.offset().top;
    var filmWidth = $('#promotionfilm').width() / 100 * 80;

    $(window).scroll(function(){
        if($(window).scrollTop() > stickyHeaderTop ) {
            $header.addClass('navbar-fixed-top');
            $body.css('padding-top',  $header.height() + 20 + 'px');
            $body.css('position', 'relative')
        } else {
            $header.removeClass('navbar-fixed-top');
            $body.css('padding-top', 0);
        }
    });

    flashembed(
        "promotionfilm",
        {
            src: 'js/flowplayer-dark.swf',
            width: filmWidth,
            height: filmWidth * 9 / 16
        },
        {
            config: {
                videoFile: '../media/lipaj.flv',
                initialScale: 'scale',
                autoPlay: true,
                useHWScaling: true,
                loop: true,
                useSmoothing: true,
                showStopButton: false,
                showScrubber: true,
                showVolumeSlider: true,
                showMuteVolumeButton: true,
                showFullScreenButton: true,
                showMenu: false,
                controlsOverVideo: 'ease',
                controlBarBackgroundColor: -1,
                controlBarGloss: 'low',
                useNativeFullScreen: true
            }
        }
    );
});
