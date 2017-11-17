// 列表页
$(function (){
	// (必吃小吃)列表页
	// 轮播图banner
	 var mySwiper = new Swiper ('.banner_box .swiper-container', {
	    direction: 'horizontal',
	    loop: true,
	    autoplay:5000,
	    // 如果需要分页器
	   pagination : '.swiper-pagination',
		paginationType : 'fraction'
	  })        

// 列表模块轮播图
	 var mySwiper2 = new Swiper ('#swiper_module', {
	    direction: 'horizontal',
	    loop: true,
	    autoplay:5000,
	    
	    // 如果需要分页器
	   pagination : '.swiper-pagination',
	   paginationType : 'bullets'
	  })  

// (必吃小吃)详情页
// 轮播图banner
	 var mySwiper3 = new Swiper ('#snack_detail .swiper-container', {
	    direction: 'horizontal',
	    loop: true,
	    autoplay:5000,
	    
	    // 如果需要分页器
	   pagination : '.swiper-pagination',
		paginationType : 'fraction'
	  })

actived($('.tab_box').find('.tab'));

// 弹窗(一键拨打)的出现和消失
shadowList($('.list_modules'),'.phone',$('#phone_call').find('.btn_cancel'),$('#phone_call'));
shadow($('.func_module').find('.phone'),$('#phone_call').find('.btn_cancel'),$('#phone_call'));
// 弹窗(评论)的出现和消失
shadow($('.main_nav').find('.nav_speak'),$('#speak').find('.btn_cancel'),$('#speak'));
// 弹窗(文字介绍)的出现和消失
shadow($('.text_detail'),$('#text_detail').find('.btn_cancel'),$('#text_detail'));
// 点赞评论
	showHide($(".ex_nav .nav_tab"),$(".ex_tab"));
	active($('.main_nav').find('.nav_item'));
// 视频弹窗
shadow($('.video_vr').find('.video_btn'),$('#video_win').find('.btn_cancel'),$('#video_win'));	

})

// 官方推荐和离我最近切换显示
function actived(dom){
	dom.on('click',function (){
		$(this).find('.active_line').show();
		$(this).siblings('.tab').find('.active_line').hide();	
	})
};
// 列表一键拨打的弹窗
function shadowList(dom,domT,dom1,target){
	dom.on('click',domT,function(){
		target.show();
	});
	dom1.on('click',function(){
		target.hide();		
	})
};
// 弹窗出现与消失
function shadow(dom,dom1,target){
	dom.on('click',function(){
		target.show();
	});
	dom1.on('click',function(){
		target.hide();		
	})
};
// 点赞评论切换
	function showHide(dom,tab){
		dom.on('click',function(){
			var i = $(this).index()
			tab.eq(i).show().siblings().hide();
			dom.eq(i).addClass("textColor").siblings().removeClass("textColor");
			dom.find(".ex_icon").removeClass("active");
			dom.eq(i).find(".ex_icon").addClass("active");
		})
	}
	// 下方点赞和评论激活
	function active(dom){
		dom.on('click',function(){
			$(this).addClass('active').siblings().removeClass('active');

		})
	};
// 语音介绍开始暂停
$('.radio_btn').on('click','.radio_start',function(){
	$(this).toggleClass('active');
	 var audio = document.getElementById('voice');
	if ($(this).hasClass('active')) {
		audio.play();
	}else{
		audio.pause();
	}
})
// 详情页文字介绍查看更多
$(function(){
	ifMore($(".text_show").find('.textareaa_show'));
 	ifMore($(".text_show").find('.module_height'));
 	// 
 	$(".text_more").on("click",function(){
			$(this).parents(".text_present").find(".text_show").toggleClass("active");
			$(this).find(".up_down").toggleClass("active");
			 var item = $(this).parent().find(".text_show").hasClass("active")
			if(item){
				$(this).find(".show_hide").text("收起全部")
				$(this).css("box-shadow"," inherit");
			}else{
				$(this).find(".show_hide").text("展开全部")
				$(this).css("box-shadow"," 0px -10px 24px rgb(255, 255, 255)");
			}
		})
});
function ifMore(dom1){
		var textHgight = dom1.height();
		 if(textHgight>54){
		 	dom1.parents('.text_present').find(".text_more").css("display","block");
		 };
	};