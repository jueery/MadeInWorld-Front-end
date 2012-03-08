/**
$("#testtab").tab({
	tabId:"#tabtag",    // 切换控制器的 ID
	tabTag:"li",        // 切换控制器标签
	conId:"#tabcon",    // 内容容器 ID
	conTag:"div",       // 容器标签
	auto:true,          // 自动切换
	act:"click",        // 点击触发 也可以不设置 默认就为 click 设置为 mouseover 则为划过
	effact:"scrolly",   // 效果为纵向滚动,横向滚动效果为 scrollx
	dft:0,              // 设置起始显示序列
	effact:"slow"       // "slow" 效果
})
**/

/* <![CDATA[ */
jQuery(document).ready(function(){

function cur(ele,currentClass,tag){
		ele= jQuery(ele)? jQuery(ele):ele;
		if(!tag){
			ele.addClass(currentClass).siblings().removeClass(currentClass);
			}else{
				ele.addClass(currentClass).siblings(tag).removeClass(currentClass);
			}
	}
  
  jQuery.fn.tab=function(options){
  
	var org={
		tabId:    "",
		tabTag:   "",
		conId:    "",
		conTag:   "",
		curClass: "cur",
		act:      "click",
		dft:      0,
		effact:   null,
		auto:     false,
		autotime: 3000,
		aniSpeed: 500
		}	
		
	jQuery.extend(org,options);
	
	var t=false;
	var k=0;
	var _this=jQuery(this);
	var tagwrp=jQuery(org.tabId);
	var conwrp=jQuery(org.conId);
	var tag=tagwrp.find(org.tabTag);
	var con=conwrp.find(org.conTag);	
	var len=tag.length;
	var taght=parseInt(tagwrp.css("height"));
	var conwh=conwrp.get(0).offsetWidth;
	var conht=conwrp.get(0).offsetHeight;
	var curtag=tag.eq(org.dft);
	//prepare
	cur(curtag,org.curClass);
	con.eq(org.dft).show().siblings(org.conTag).hide();
	
	if(org.effact=="scrollx"){
		var padding=parseInt(con.css("padding-left"))+parseInt(con.css("padding-right"));										
		_this.css({
				  "position"   :"relative",
				  "height"     :taght+conht+"px",
				  "overflow"   :"hidden" 
				  });				
		
		conwrp.css({
				   "width"     :len*conwh+"px",
				   "height"    :conht+"px",
				   "position"  :"absolute",
				   "top"       :taght+"px"
				   });
		
		con.css({
				"float"        :"left",
				"width"        :conwh-padding+"px",
				"display"      :"block"
				});
		}
		
	if(org.effact=="scrolly"){
		var padding=parseInt(con.css("padding-top"))+parseInt(con.css("padding-bottom"));										
		_this.css({
				  "position"   :"relative",
				  "height"     :taght+conht+"px",
				  "overflow"   :"hidden" 
				  });
		tagwrp.css({
				   "z-index"   :100
				   })		
		conwrp.css({
				   "width"     :"100%",
				   "height"    :len*conht+"px",
				   "position"  :"absolute",
				   "z-index"   :99												 
				   })		
		con.css({
				"height"       :conht-padding+"px",
				"float"        :"none",											
				"display"      :"block"
				});
		}	
	
	tag.css({"cursor":"pointer"})
	    .each(function(i){
		tag.eq(i).bind(org.act,function(){
				cur(this,org.curClass);	
				k=i;
				switch(org.effact){					
					case "slow"    : con.eq(i).show("slow").siblings(org.conTag).hide("slow");
					break;
					case "fast"    : con.eq(i).show("fast").siblings(org.conTag).hide("fast");
					break;
					case "scrollx" : conwrp.animate({left:-i*conwh+"px"},org.aniSpeed);
					break;
					case "scrolly" : conwrp.animate({top:-i*conht+taght+"px"},org.aniSpeed);
					break;
					default        : con.eq(i).show().siblings(org.conTag).hide();
					break;
					//End of switch
					}			
				}		
			)									  
		})	
	
	if(org.auto){		
		var drive=function(){
			if(org.act=="mouseover"){
				tag.eq(k).mouseover();
				}else if(org.act=="click"){
				tag.eq(k).click();
				}			
			k++;			
			if(k==len) k=0;			
			}
		t=setInterval(drive,org.autotime);	
		}
    		
	//End of $.fn.tab	
	}

})
/* ]]> */