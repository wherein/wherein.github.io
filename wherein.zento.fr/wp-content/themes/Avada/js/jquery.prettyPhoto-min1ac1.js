(function(e){function t(){var e=location.href;return hashtag=-1!==e.indexOf("#prettyPhoto")?decodeURI(e.substring(e.indexOf("#prettyPhoto")+1,e.length)):!1}function n(e,t){e=e.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var n=RegExp("[\\?&]"+e+"=([^&#]*)").exec(t);return null==n?"":n[1]}e.prettyPhoto={version:"3.1.5"};e.fn.prettyPhoto=function(r){function i(){e(".pp_loaderIcon").hide();projectedTop=scroll_pos.scrollTop+(S/2-m.containerHeight/2);0>projectedTop&&(projectedTop=0);$ppt.fadeTo(settings.animation_speed,1);$pp_pic_holder.find(".pp_content").animate({height:m.contentHeight,width:m.contentWidth},settings.animation_speed);$pp_pic_holder.animate({top:projectedTop,left:0>x/2-m.containerWidth/2?0:x/2-m.containerWidth/2,width:m.containerWidth},settings.animation_speed,function(){$pp_pic_holder.find(".pp_hoverContainer,#fullResImage").height(m.height).width(m.width);$pp_pic_holder.find(".pp_fade").fadeIn(settings.animation_speed);isSet&&"image"==f(pp_images[set_position])?$pp_pic_holder.find(".pp_hoverContainer").show():$pp_pic_holder.find(".pp_hoverContainer").hide();settings.allow_expand&&(m.resized?e("a.pp_expand,a.pp_contract").show():e("a.pp_expand").hide());settings.autoplay_slideshow&&!T&&!g&&e.prettyPhoto.startSlideshow();settings.changepicturecallback();g=!0});isSet&&settings.overlay_gallery&&"image"==f(pp_images[set_position])?(itemWidth=57,navWidth="facebook"==settings.theme||"pp_default"==settings.theme?50:30,itemsPerPage=Math.floor((m.containerWidth-100-navWidth)/itemWidth),itemsPerPage=itemsPerPage<pp_images.length?itemsPerPage:pp_images.length,totalPage=Math.ceil(pp_images.length/itemsPerPage)-1,0==totalPage?(navWidth=0,$pp_gallery.find(".pp_arrow_next,.pp_arrow_previous").hide()):$pp_gallery.find(".pp_arrow_next,.pp_arrow_previous").show(),galleryWidth=itemsPerPage*itemWidth,fullGalleryWidth=pp_images.length*itemWidth,$pp_gallery.css("margin-left",-(galleryWidth/2+navWidth/2)).find("div:first").width(galleryWidth+5).find("ul").width(fullGalleryWidth).find("li.selected").removeClass("selected"),goToPage=Math.floor(set_position/itemsPerPage)<totalPage?Math.floor(set_position/itemsPerPage):totalPage,e.prettyPhoto.changeGalleryPage(goToPage),$pp_gallery_li.filter(":eq("+set_position+")").addClass("selected")):$pp_pic_holder.find(".pp_content").unbind("mouseenter mouseleave");r.ajaxcallback()}function s(t){$pp_pic_holder.find("#pp_full_res object,#pp_full_res embed").css("visibility","hidden");$pp_pic_holder.find(".pp_fade").fadeOut(settings.animation_speed,function(){e(".pp_loaderIcon").show();t()})}function o(e,t){resized=!1;u(e,t);imageWidth=e;imageHeight=t;if((E>x||w>S)&&doresize&&settings.allow_resize&&!d){resized=!0;for(fitting=!1;!fitting;)E>x?(imageWidth=x-30,imageHeight=t/e*imageWidth):w>S?(imageHeight=S-100,imageWidth=e/t*imageHeight):fitting=!0,w=imageHeight,E=imageWidth;(E>x||w>S)&&o(E,w);u(imageWidth,imageHeight)}return{width:Math.floor(imageWidth),height:Math.floor(imageHeight),containerHeight:Math.floor(w),containerWidth:Math.floor(E)+2*settings.horizontal_padding,contentHeight:Math.floor(y),contentWidth:Math.floor(b),resized:resized}}function u(t,n){t=parseFloat(t);n=parseFloat(n);$pp_details=$pp_pic_holder.find(".pp_details");$pp_details.width(t);detailsHeight=parseFloat($pp_details.css("marginTop"))+parseFloat($pp_details.css("marginBottom"));$pp_details=$pp_details.clone().addClass(settings.theme).width(t).appendTo(e("body")).css({position:"absolute",top:-1e4});detailsHeight+=$pp_details.height();detailsHeight=34>=detailsHeight?36:detailsHeight;$pp_details.remove();$pp_title=$pp_pic_holder.find(".ppt");$pp_title.width(t);titleHeight=parseFloat($pp_title.css("marginTop"))+parseFloat($pp_title.css("marginBottom"));$pp_title=$pp_title.clone().appendTo(e("body")).css({position:"absolute",top:-1e4});titleHeight+=$pp_title.height();$pp_title.remove();y=n+detailsHeight;b=t;w=y+titleHeight+$pp_pic_holder.find(".pp_top").height()+$pp_pic_holder.find(".pp_bottom").height();E=t}function f(e){return e.match(/youtube\.com\/watch/i)||e.match(/youtu\.be/i)?"youtube":e.match(/vimeo\.com/i)?"vimeo":e.match(/\b.mov\b/i)?"quicktime":e.match(/\b.swf\b/i)?"flash":e.match(/\biframe=true\b/i)?"iframe":e.match(/\bajax=true\b/i)?"ajax":e.match(/\bcustom=true\b/i)?"custom":"#"==e.substr(0,1)?"inline":"image"}function l(){doresize&&"undefined"!=typeof $pp_pic_holder&&(scroll_pos=c(),contentHeight=$pp_pic_holder.height(),contentwidth=$pp_pic_holder.width(),projectedTop=S/2+scroll_pos.scrollTop-contentHeight/2,0>projectedTop&&(projectedTop=0),contentHeight>S||$pp_pic_holder.css({top:projectedTop,left:x/2+scroll_pos.scrollLeft-contentwidth/2}))}function c(){if(self.pageYOffset)return{scrollTop:self.pageYOffset,scrollLeft:self.pageXOffset};if(document.documentElement&&document.documentElement.scrollTop)return{scrollTop:document.documentElement.scrollTop,scrollLeft:document.documentElement.scrollLeft};if(document.body)return{scrollTop:document.body.scrollTop,scrollLeft:document.body.scrollLeft}}function h(){settings.social_tools&&(facebook_like_link=settings.social_tools.replace("{location_href}",encodeURIComponent(location.href)));settings.markup=settings.markup.replace("{pp_social}","");e("body").append(settings.markup);$pp_pic_holder=e(".pp_pic_holder");$ppt=e(".ppt");$pp_overlay=e("div.pp_overlay");if(isSet&&settings.overlay_gallery){currentGalleryPage=0;toInject="";for(var t=0;t<pp_images.length;t++)pp_images[t].match(/\b(jpg|jpeg|png|gif)\b/gi)?(classname="",img_src=pp_images[t]):(classname="default",img_src=""),toInject+="<li class='"+classname+"'><a href='#'><img src='"+img_src+"' width='50' alt='' /></a></li>";toInject=settings.gallery_markup.replace(/{gallery}/g,toInject);$pp_pic_holder.find("#pp_full_res").after(toInject);$pp_gallery=e(".pp_pic_holder .pp_gallery");$pp_gallery_li=$pp_gallery.find("li");$pp_gallery.find(".pp_arrow_next").click(function(){e.prettyPhoto.changeGalleryPage("next");e.prettyPhoto.stopSlideshow();return!1});$pp_gallery.find(".pp_arrow_previous").click(function(){e.prettyPhoto.changeGalleryPage("previous");e.prettyPhoto.stopSlideshow();return!1});$pp_pic_holder.find(".pp_content").hover(function(){$pp_pic_holder.find(".pp_gallery:not(.disabled)").fadeIn()},function(){$pp_pic_holder.find(".pp_gallery:not(.disabled)").fadeOut()});itemWidth=57;$pp_gallery_li.each(function(t){e(this).find("a").click(function(){e.prettyPhoto.changePage(t);e.prettyPhoto.stopSlideshow();return!1})})}settings.slideshow&&($pp_pic_holder.find(".pp_nav").prepend('<a href="#" class="pp_play">Play</a>'),$pp_pic_holder.find(".pp_nav .pp_play").click(function(){e.prettyPhoto.startSlideshow();return!1}));$pp_pic_holder.attr("class","pp_pic_holder "+settings.theme);$pp_overlay.css({opacity:0.8,height:e(document).height(),width:e(window).width()}).bind("click",function(){settings.modal||e.prettyPhoto.close()});e("a.pp_close").bind("click",function(){e.prettyPhoto.close();return!1});settings.allow_expand&&e("a.pp_expand").bind("click",function(){e(this).hasClass("pp_expand")?(e(this).removeClass("pp_expand").addClass("pp_contract"),doresize=!1):(e(this).removeClass("pp_contract").addClass("pp_expand"),doresize=!0);s(function(){e.prettyPhoto.open()});return!1});$pp_pic_holder.find(".pp_previous, .pp_nav .pp_arrow_previous").bind("click",function(){e.prettyPhoto.changePage("previous");e.prettyPhoto.stopSlideshow();return!1});$pp_pic_holder.find(".pp_next, .pp_nav .pp_arrow_next").bind("click",function(){e.prettyPhoto.changePage("next");e.prettyPhoto.stopSlideshow();return!1});l()}r=jQuery.extend({hook:"rel",animation_speed:"fast",hd:!0,ajaxcallback:function(){},slideshow:5e3,autoplay_slideshow:!1,opacity:.8,show_title:!0,allow_resize:!0,allow_expand:!0,default_width:600,default_height:344,counter_separator_label:"/",theme:"pp_default",horizontal_padding:20,hideflash:!1,wmode:"opaque",autoplay:!0,modal:!1,deeplinking:!0,overlay_gallery:!0,overlay_gallery_max:30,keyboard_shortcuts:!0,changepicturecallback:function(){},callback:function(){},ie6_fallback:!0,markup:'<div class="pp_pic_holder"> <div class="ppt">&nbsp;</div> <div class="pp_top"> <div class="pp_left"></div> <div class="pp_middle"></div> <div class="pp_right"></div> </div> <div class="pp_content_container"> <div class="pp_left"> <div class="pp_right"> <div class="pp_content"> <div class="pp_loaderIcon"></div> <div class="pp_fade"> <a href="#" class="pp_expand" title="Expand the image">Expand</a> <div class="pp_hoverContainer"> <a class="pp_next" href="#">next</a> <a class="pp_previous" href="#">previous</a> </div> <div id="pp_full_res"></div> <div class="pp_details"> <div class="pp_nav"> <a href="#" class="pp_arrow_previous">Previous</a> <p class="currentTextHolder">0/0</p> <a href="#" class="pp_arrow_next">Next</a> </div> <p class="pp_description"></p> <div class="pp_social">{pp_social}</div> <a class="pp_close" href="#">Close</a> </div> </div> </div> </div> </div> </div> <div class="pp_bottom"> <div class="pp_left"></div> <div class="pp_middle"></div> <div class="pp_right"></div> </div> </div> <div class="pp_overlay"></div>',gallery_markup:'<div class="pp_gallery"> <a href="#" class="pp_arrow_previous">Previous</a> <div> <ul> {gallery} </ul> </div> <a href="#" class="pp_arrow_next">Next</a> </div>',image_markup:'<img id="fullResImage" src="{path}" />',flash_markup:'<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="{width}" height="{height}"><param name="wmode" value="{wmode}" /><param name="allowfullscreen" value="true" /><param name="allowscriptaccess" value="always" /><param name="movie" value="{path}" /><embed src="{path}" type="application/x-shockwave-flash" allowfullscreen="true" allowscriptaccess="always" width="{width}" height="{height}" wmode="{wmode}"></embed></object>',quicktime_markup:'<object classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="//www.apple.com/qtactivex/qtplugin.cab" height="{height}" width="{width}"><param name="src" value="{path}"><param name="autoplay" value="{autoplay}"><param name="type" value="video/quicktime"><embed src="{path}" height="{height}" width="{width}" autoplay="{autoplay}" type="video/quicktime" pluginspage="//www.apple.com/quicktime/download/"></embed></object>',iframe_markup:'<iframe src ="{path}" width="{width}" height="{height}" frameborder="no"></iframe>',inline_markup:'<div class="pp_inline">{content}</div>',custom_markup:"",social_tools:'<div class="twitter"><a href="//twitter.com/share" class="twitter-share-button" data-count="none">Tweet</a><script type="text/javascript" src="//platform.twitter.com/widgets.js"></script></div><div class="facebook"><iframe src="//www.facebook.com/plugins/like.php?locale=en_US&href={location_href}&amp;layout=button_count&amp;show_faces=true&amp;width=500&amp;action=like&amp;font&amp;colorscheme=light&amp;height=23" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:500px; height:23px;" allowTransparency="true"></iframe></div>'},r);var p=this,d=!1,m,g,y,b,w,E,S=e(window).height(),x=e(window).width(),T;current_as_setting=r.autoplay_slideshow;current_og_setting=r.overlay_gallery;doresize=!0;scroll_pos=c();e(window).unbind("resize.prettyphoto").bind("resize.prettyphoto",function(){l();S=e(window).height();x=e(window).width();"undefined"!=typeof $pp_overlay&&$pp_overlay.height(e(document).height()).width(x)});r.keyboard_shortcuts&&e(document).unbind("keydown.prettyphoto").bind("keydown.prettyphoto",function(t){if("undefined"!=typeof $pp_pic_holder&&$pp_pic_holder.is(":visible"))switch(t.keyCode){case 37:e.prettyPhoto.changePage("previous");t.preventDefault();break;case 39:e.prettyPhoto.changePage("next");t.preventDefault();break;case 27:settings.modal||e.prettyPhoto.close(),t.preventDefault()}});e.prettyPhoto.initialize=function(){settings=r;"pp_default"==settings.theme&&(settings.horizontal_padding=16);theRel=e(this).attr(settings.hook);galleryRegExp=/\[(?:.*)\]/;pp_images=(isSet=galleryRegExp.exec(theRel)?!0:!1)?jQuery.map(p,function(t){if(-1!=e(t).attr(settings.hook).indexOf(theRel))return e(t).attr("href")}):e.makeArray(e(this).attr("href"));pp_titles=isSet?jQuery.map(p,function(t){if(-1!=e(t).attr(settings.hook).indexOf(theRel))return e(t).find("img").attr("alt")?e(t).find("img").attr("alt"):""}):e.makeArray(e(this).find("img").attr("alt"));pp_descriptions=isSet?jQuery.map(p,function(t){if(-1!=e(t).attr(settings.hook).indexOf(theRel))return e(t).attr("title")?e(t).attr("title"):""}):e.makeArray(e(this).attr("title"));pp_images.length>settings.overlay_gallery_max&&(settings.overlay_gallery=!1);1==pp_images.length?(settings.autoplay_slideshow=!1,settings.overlay_gallery=!1,e(".pp_previous, .pp_next").remove()):(settings.autoplay_slideshow=current_as_setting,settings.overlay_gallery=current_og_setting);set_position=jQuery.inArray(e(this).attr("href"),pp_images);rel_index=isSet?set_position:e("a["+settings.hook+"^='"+theRel+"']").index(e(this));h(this);settings.allow_resize&&e(window).bind("scroll.prettyphoto",function(){l()});e.prettyPhoto.open();1==pp_images.length&&e(".pp_previous, .pp_next").remove();!1===r.show_desc&&e(".pp_description").remove();return!1};e.prettyPhoto.open=function(t,s,u,l){"undefined"==typeof settings&&(settings=r,pp_images=e.makeArray(t),pp_titles=s?e.makeArray(s):e.makeArray(""),pp_descriptions=u?e.makeArray(u):e.makeArray(""),isSet=1<pp_images.length?!0:!1,set_position=l?l:0,h(t.target));settings.hideflash&&e("object,embed,iframe[src*=youtube],iframe[src*=vimeo]").css("visibility","hidden");1<e(pp_images).size()?e(".pp_nav").show():e(".pp_nav").hide();e(".pp_loaderIcon").show();settings.deeplinking&&"undefined"!=typeof theRel&&(location.hash=theRel+"/"+rel_index+"/");settings.social_tools&&(facebook_like_link=settings.social_tools.replace("{location_href}",encodeURIComponent(location.href)),$pp_pic_holder.find(".pp_social").html(facebook_like_link));$ppt.is(":hidden")&&$ppt.css("opacity",0.8).show();$pp_overlay.show();$pp_pic_holder.find(".currentTextHolder").text(set_position+1+settings.counter_separator_label+e(pp_images).size());"undefined"!=typeof pp_descriptions[set_position]&&""!=pp_descriptions[set_position]?$pp_pic_holder.find(".pp_description").show().html(unescape(pp_descriptions[set_position])):$pp_pic_holder.find(".pp_description").hide();movie_width=parseFloat(n("width",pp_images[set_position]))?n("width",pp_images[set_position]):settings.default_width.toString();movie_height=parseFloat(n("height",pp_images[set_position]))?n("height",pp_images[set_position]):settings.default_height.toString();d=!1;-1!=movie_height.indexOf("%")&&(movie_height=parseFloat(e(window).height()*parseFloat(movie_height)/100-150),d=!0);-1!=movie_width.indexOf("%")&&(movie_width=parseFloat(e(window).width()*parseFloat(movie_width)/100-150),d=!0);$pp_pic_holder.fadeIn(function(){settings.show_title&&""!=pp_titles[set_position]&&"undefined"!=typeof pp_titles[set_position]?$ppt.html(unescape(pp_titles[set_position])):$ppt.html("&nbsp;");imgPreloader="";skipInjection=!1;switch(f(pp_images[set_position])){case"image":imgPreloader=new Image;nextImage=new Image;isSet&&set_position<e(pp_images).size()-1&&(nextImage.src=pp_images[set_position+1]);prevImage=new Image;isSet&&pp_images[set_position-1]&&(prevImage.src=pp_images[set_position-1]);$pp_pic_holder.find("#pp_full_res")[0].innerHTML=settings.image_markup.replace(/{path}/g,pp_images[set_position]);imgPreloader.onload=function(){m=o(imgPreloader.width,imgPreloader.height);i()};imgPreloader.onerror=function(){alert("Image cannot be loaded. Make sure the path is correct and image exist.");e.prettyPhoto.close()};imgPreloader.src=pp_images[set_position];break;case"youtube":m=o(movie_width,movie_height);movie_id=n("v",pp_images[set_position]);""==movie_id&&(movie_id=pp_images[set_position].split("youtu.be/index.html"),movie_id=movie_id[1],0<movie_id.indexOf("?")&&(movie_id=movie_id.substr(0,movie_id.indexOf("?"))),0<movie_id.indexOf("&")&&(movie_id=movie_id.substr(0,movie_id.indexOf("&"))));movie="//www.youtube.com/embed/"+movie_id;n("rel",pp_images[set_position])?movie+="?rel="+n("rel",pp_images[set_position]):movie+="?rel=1";settings.autoplay&&(movie+="&autoplay=1");settings.hd&&(movie+="&vq=hd1080");toInject=settings.iframe_markup.replace(/{width}/g,m.width).replace(/{height}/g,m.height).replace(/{wmode}/g,settings.wmode).replace(/{path}/g,movie);break;case"vimeo":m=o(movie_width,movie_height);movie_id=pp_images[set_position];movie="//player.vimeo.com/video/"+movie_id.match(/http(s?):\/\/(www\.)?vimeo.com\/(\d+)/)[3]+"?title=0&amp;byline=0&amp;portrait=0";settings.autoplay&&(movie+="&autoplay=1;");vimeo_width=m.width+"/embed/?moog_width="+m.width;toInject=settings.iframe_markup.replace(/{width}/g,vimeo_width).replace(/{height}/g,m.height).replace(/{path}/g,movie);break;case"quicktime":m=o(movie_width,movie_height);m.height+=15;m.contentHeight+=15;m.containerHeight+=15;toInject=settings.quicktime_markup.replace(/{width}/g,m.width).replace(/{height}/g,m.height).replace(/{wmode}/g,settings.wmode).replace(/{path}/g,pp_images[set_position]).replace(/{autoplay}/g,settings.autoplay);break;case"flash":m=o(movie_width,movie_height);flash_vars=pp_images[set_position];flash_vars=flash_vars.substring(pp_images[set_position].indexOf("flashvars")+10,pp_images[set_position].length);filename=pp_images[set_position];filename=filename.substring(0,filename.indexOf("?"));toInject=settings.flash_markup.replace(/{width}/g,m.width).replace(/{height}/g,m.height).replace(/{wmode}/g,settings.wmode).replace(/{path}/g,filename+"?"+flash_vars);break;case"iframe":m=o(movie_width,movie_height);frame_url=pp_images[set_position];frame_url=frame_url.substr(0,frame_url.indexOf("iframe")-1);toInject=settings.iframe_markup.replace(/{width}/g,m.width).replace(/{height}/g,m.height).replace(/{path}/g,frame_url);break;case"ajax":doresize=!1;m=o(movie_width,movie_height);skipInjection=doresize=!0;e.get(pp_images[set_position],function(e){toInject=settings.inline_markup.replace(/{content}/g,e);$pp_pic_holder.find("#pp_full_res")[0].innerHTML=toInject;i()});break;case"custom":m=o(movie_width,movie_height);toInject=settings.custom_markup;break;case"inline":myClone=e(pp_images[set_position]).clone().append('<br clear="all" />').css({width:settings.default_width}).wrapInner('<div id="pp_full_res"><div class="pp_inline"></div></div>').appendTo(e("body")).show(),doresize=!1,m=o(e(myClone).width(),e(myClone).height()),doresize=!0,e(myClone).remove(),toInject=settings.inline_markup.replace(/{content}/g,e(pp_images[set_position]).html())}!imgPreloader&&!skipInjection&&($pp_pic_holder.find("#pp_full_res")[0].innerHTML=toInject,i())});t=f(pp_images[set_position]);"youtube"==t||"vimeo"==t||"quicktime"==t||"flash"==t?e(".pp_gallery").hide():e(".pp_content").hover(function(){e(".pp_gallery:not(.disabled)").fadeIn()},function(){e(".pp_gallery:not(.disabled)").fadeOut()});return!1};e.prettyPhoto.changePage=function(t){currentGalleryPage=0;"previous"==t?(set_position--,0>set_position&&(set_position=e(pp_images).size()-1)):"next"==t?(set_position++,set_position>e(pp_images).size()-1&&(set_position=0)):set_position=t;rel_index=set_position;doresize||(doresize=!0);settings.allow_expand&&e(".pp_contract").removeClass("pp_contract").addClass("pp_expand");s(function(){e.prettyPhoto.open()})};e.prettyPhoto.changeGalleryPage=function(e){"next"==e?(currentGalleryPage++,currentGalleryPage>totalPage&&(currentGalleryPage=0)):"previous"==e?(currentGalleryPage--,0>currentGalleryPage&&(currentGalleryPage=totalPage)):currentGalleryPage=e;slide_speed="next"==e||"previous"==e?settings.animation_speed:0;slide_to=currentGalleryPage*itemsPerPage*itemWidth;$pp_gallery.find("ul").animate({left:-slide_to},slide_speed)};e.prettyPhoto.startSlideshow=function(){"undefined"==typeof T?($pp_pic_holder.find(".pp_play").unbind("click").removeClass("pp_play").addClass("pp_pause").click(function(){e.prettyPhoto.stopSlideshow();return!1}),T=setInterval(e.prettyPhoto.startSlideshow,settings.slideshow)):e.prettyPhoto.changePage("next")};e.prettyPhoto.stopSlideshow=function(){$pp_pic_holder.find(".pp_pause").unbind("click").removeClass("pp_pause").addClass("pp_play").click(function(){e.prettyPhoto.startSlideshow();return!1});clearInterval(T);T=void 0};e.prettyPhoto.close=function(){$pp_overlay.is(":animated")||(e.prettyPhoto.stopSlideshow(),$pp_pic_holder.stop().find("object,embed").css("visibility","hidden"),e("div.pp_pic_holder,div.ppt,.pp_fade").fadeOut(settings.animation_speed,function(){e(this).remove()}),$pp_overlay.fadeOut(settings.animation_speed,function(){settings.hideflash&&e("object,embed,iframe[src*=youtube],iframe[src*=vimeo]").css("visibility","visible");e(this).remove();e(window).unbind("scroll.prettyphoto");-1!==location.href.indexOf("#prettyPhoto")&&(location.hash="prettyPhoto");settings.callback();doresize=!0;g=!1;delete settings}))};!pp_alreadyInitialized&&t()&&(pp_alreadyInitialized=!0,hashRel=hashIndex=t(),hashIndex=hashIndex.substring(hashIndex.indexOf("index.html")+1,hashIndex.length-1),hashRel=hashRel.substring(0,hashRel.indexOf("index.html")),setTimeout(function(){e("a["+r.hook+"^='"+hashRel+"']:eq("+hashIndex+")").trigger("click")},50));return this.unbind("click.prettyphoto").bind("click.prettyphoto",e.prettyPhoto.initialize)}})(jQuery);var pp_alreadyInitialized=!1;