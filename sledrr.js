function FeaturedPost(a){(function(e){var h={blogURL:"",MaxPost:5,idcontaint:"#featuredpost",ImageSize:500,interval:10000,autoplay:false,loadingClass:"loadingxx",pBlank:"http://3.bp.blogspot.com/-v45kaX-IHKo/VDgZxWv0xUI/AAAAAAAAHAo/QJQf8Dlh3xc/s1600/grey.gif",MonthNames:["يناير","فبراير","مارس","ابريل","مايو","يونيو","يوليو","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر"],tagName:false};h=e.extend({},h,a);var g=e(h.idcontaint);var c=h.blogURL;var d=h.MaxPost*200;if(h.blogURL===""){c=window.location.protocol+"//"+window.location.host}g.html('
<div id="slides">
   <ul class="randomnya"></ul>
</div>
<div id="buttons"><a href="#" id="prevx" title="prev"></a><a href="#" id="nextx" title="next"></a></div>
').addClass(h.loadingClass);var f=function(w){var q,k,m,u,x,p,t,v,r,l="",s=w.feed.entry;for(var o=0;o<s.length;o++){for(var n=0;n<s[o].link.length;n++){if(s[o].link[n].rel=="alternate"){q=s[o].link[n].href;break}}if("media$thumbnail"in s[o]){u=s[o].media$thumbnail.url.replace(/\/s[0-9]+\-c/g,"/s"+h.ImageSize+"-c")}else{u=h.pBlank.replace(/\/s[0-9]+(\-c|\/)/,"/s"+h.ImageSize+"$1")}k=s[o].title.$t;r=s[o].published.$t.substring(0,10);m=s[o].author[0].name.$t;x=r.substring(0,4);p=r.substring(5,7);t=r.substring(8,10);v=h.MonthNames[parseInt(p,10)-1];l+='
<li>
   <a href="'+q+'">
      <div class="overlayx"></div>
      <img class="random" src="'+u+'">
      <h4>'+k+'</h4>
   </a>
   <div class="label_text"><span class="date"><span class="price">'+t+'</span> <span class="EGP">'+v+'</span> </span> <span class="autname">'+m+"</span></div>
</li>
"}e("ul",g).append(l)};var b=function(){var i="/-/"+h.tagName;if(h.tagName===false){i="";e.ajax({url:c+"/feeds/posts/default"+i+"?max-results="+h.MaxPost+"&orderby=published&alt=json-in-script",success:f,dataType:"jsonp",cache:true})}else{e.ajax({url:c+"/feeds/posts/default"+i+"?max-results="+h.MaxPost+"&orderby=published&alt=json-in-script",success:f,dataType:"jsonp",cache:true})}(function(){setTimeout(function(){e("#prevx").click(function(){e("#slides li:first").before(e("#slides li:last"));return false});e("#nextx").click(function(){e("#slides li:last").after(e("#slides li:first"));return false});if(h.autoplay){var k=h.interval;var l=setInterval("rotate()",k);e("#slides li:first").before(e("#slides li:last"));e("#slides").hover(function(){clearInterval(l)},function(){l=setInterval("rotate()",k)});function j(){e("#nextx").click()}}g.removeClass(h.loadingClass)},d)})()};e(document).ready(b)})(jQuery)};function rotate(){$('#nextx').click();};document.write('')
