
/* 메인 비주얼  슬라이드 스크립트 */
$(function(){


	/*footer  menu_etc*/
	$('.chatbot_delete a').bind('click',function(){
		var etcH=$('.menu_etc ul').height();



		if($(this).parent().hasClass('on') == true){
			$(this).parent().removeClass('on');
			$('#footer_wrap').removeClass('etc_active');
			$('.menu_etc').animate({
				height:'0px'
				
			},800,function(){
				$(' .menu_etc ul').css({'display':'none'});

			});
		}else{
			$(this).parent().addClass('on');
			$('#footer_wrap').addClass('etc_active');
			$(' .menu_etc ul').css({'display':'block'});
			$('.menu_etc').animate({
				height:etcH			
			},800);
		}
	});

	/*// footer  menu_etc*/


	$('.bot_btn_slid').slick({
	  dots: true,
	  infinite: true,
	  speed: 300,
	  slidesToShow: 1,
	  adaptiveHeight: true
	});


	/*이미지 사이즈*/
	
	$('.img_wrap.con_style01').each(function () { 
		var ImgWrapImgH1 = $(this).find('.img_con').height();
		var ImgWrapImgH1c = ImgWrapImgH1 /2;
	
		$(this).find('.img_txt span').css({'margin-top':ImgWrapImgH1c});
		

	});



	$('.img_wrap.img_style01').each(function () {
		var ImgNum = $(this).children('div').length;
		var ImgNumW = 100/ImgNum;
		var ImgNumWc = ImgNumW -'2' +'%';
		$(this).children('div').css({'width':ImgNumWc});

		var ImgbW = $(this).children('div').width();
		$(this).children('div').find('.img_con').height(ImgbW);

		var ImgbH = $(this).children('div').height();
		$(this).css({'line-height':ImgbH});	/*'height':ImgbH,*/
		$(this).find('.img_con img').height(ImgbW);


		$('.img_wrap.img_style01 .img_con img').each(function () {
			var ImgWMLeft = $(this).width();
			 var ImgWMarginL = ImgWMLeft / 2;
			 $(this).css({'margin-left':-ImgWMarginL});


			 if($(this).height() > $(this).width() ||  $(this).parent('.img_con').width() > $(this).parent('.img_con').height() ){
			 	var ImgWMT = $(this).height();
				var ImgWMTop = ImgWMT / 2;

			 	$(this).css({'width':'100%','height':'auto','margin-top':-ImgWMTop,'top':'50%','left':'0','margin-left':'0'});
			 	

			 }if($(this).height() < $(this).width() || $(this).parent('.img_con').width() < $(this).parent('.img_con').height() ){		
			 		$(this).css({'width':'100%','height':'auto','margin-top':'0','top':'0','left':'0','margin-left':'0'});
			 }if($(this).height() < $(this).parent('.img_con').height()){
			 	//이미지가 컨텐츠 높이보다 작을때
			 	 var imgHH=$(this).parent('.img_con').height();
			 		$(this).css({'width':'auto','height':imgHH,'margin-top':'0','top':'0','left':'0','margin-left':'0'});
			 }




		});
		


	
		





	});

	$('.img_wrap.img_style02 ,.img_wrap.img_style03').each(function () {
		var ImgbW = $(this).children('div').width();
		$(this).children('div').find('.img_con').height(ImgbW);


		$('.img_wrap.img_style02 .img_con img, .img_wrap.img_style03 .img_con img').each(function () {
			var ImgWMLeft2 = $(this).width();
			 var ImgWMarginL2 = ImgWMLeft2 / 2;
			 $(this).css({'margin-left':-ImgWMarginL2});



			 if($(this).height() > $(this).width()||  $(this).parent('.img_con').width() > $(this).parent('.img_con').height() ){
			 	var ImgWMT = $(this).height();
				var ImgWMTop = ImgWMT / 2;

			 	$(this).css({'width':'100%','height':'auto','margin-top':-ImgWMTop,'top':'50%','margin-left':'0','left':'0'});

			 }if($(this).height() < $(this).width() || $(this).parent('.img_con').width() < $(this).parent('.img_con').height() ){		
			 		$(this).css({'width':'100%','height':'auto','margin-top':'0','top':'0','left':'0','margin-left':'0'});
			 }if($(this).height() < $(this).parent('.img_con').height()){
			 	//이미지가 컨텐츠 높이보다 작을때
			 	 var imgHH=$(this).parent('.img_con').height();
			 		$(this).css({'width':'auto','height':imgHH,'margin-top':'0','top':'0','left':'0','margin-left':'0'});
			 }

		 

		});

		var ImgWrapImgH1 = $(this).find('.img_con').height();
		var ImgWrapImgH1c = ImgWrapImgH1 /2;
	
		$(this).find('.img_txt span').css({'margin-top':ImgWrapImgH1c});
		

	});




	//슬라이드



	var SlidDotW=$('.bot_btn_slid .slick-dots').width();
	var SlidDotWc =SlidDotW/2;
	$('.bot_btn_slid .slick-dots').css({'margin-left':-SlidDotWc});


	//팝업리스트버튼
	$('.popup_list_btn li a').bind('click',function(){
		$('.popup_list_btn li').removeClass('on');
		$(this).parent('li').addClass('on');

	});


});
//팝업

$(function(){


	//달력팝업 선택스타일
	$('#calendar tr td').bind('click',function(){
		var CTxt=$(this).text();

		if($(this).hasClass('on')){
			$(this).removeClass('on');
			$(this).find('p').removeClass('check');
			$(this).find('span').removeClass('check');


			if($(this).hasClass('today_check')){
				$(this).find('p').append("<em></em>");
				$(this).find('p.check').remove();
				$(this).find('span.check').remove();
				$(this).find('span').text(CTxt);

			}else{
				$(this).find('p').remove();
				$(this).find('span').remove();
			}
			
		}else{
			$(this).addClass('on');
			$(this).append("<p></p>");
			$(this).find('p').addClass('check');
			$(this).find('span').addClass('check');

			if($(this).hasClass('today_check')){
				$(this).find('span').text(CTxt);

			}else{
				$(this).append("<span>"+ CTxt +"</span>");
			}
		}


		$('.poup_close_btn').bind('click',function(){
			$('#calendar tr td').removeClass('on');
			$('#calendar tr td').find('p').removeClass('check');
			$('#calendar tr td').find('span').removeClass('check');

			$('#calendar tr td').each(function(){
				if($(this).hasClass('today_check')){
					$(this).find('p').append("<em></em>");
					$(this).find('p.check').remove();
					$(this).find('span.check').remove();
					$(this).find('span').text(CTxt);

				}else{
					$(this).find('p').remove();
					$(this).find('span').remove();
				}
			});

		});

		
	});


	$('.poup_close_btn').bind('click',function(){
		$('.popup_bg').removeClass('active');
		$('.popup_wrap').removeClass('active');
		$('.popup_wrap div').removeClass('on');

	});


	$('#popup_btn_phone button').bind('click',function(){
		$('.popup_bg').addClass('active');
		$('.popup_wrap').addClass('active');
		$('.popup_wrap #popup_phone').addClass('on');

		//팝업가운데 위치

		var popupwH= $('.popup_wrap div.on').height();
		var popupwHc =popupwH/2;
		$('.popup_wrap').css({'margin-top':-popupwHc});

	});


	

	
	$('#popup_btn_address button').bind('click',function(){
		$('.popup_bg').addClass('active');
		$('.popup_wrap').addClass('active');
		$('.popup_wrap #popup_address').addClass('on');

		//팝업가운데 위치

		var popupwH= $('.popup_wrap div.on').height();
		var popupwHc =popupwH/2;
		$('.popup_wrap').css({'margin-top':-popupwHc});

	});
	$('#popup_btn_address button').bind('click',function(){
		$('.popup_bg').addClass('active');
		$('.popup_wrap').addClass('active');
		$('.popup_wrap #popup_address').addClass('on');

		//팝업가운데 위치

		var popupwH= $('.popup_wrap div.on').height();
		var popupwHc =popupwH/2;
		$('.popup_wrap').css({'margin-top':-popupwHc});

	});

	$('#popup_btn_calendar button').bind('click',function(){
		$('.popup_bg').addClass('active');
		$('.popup_wrap').addClass('active');
		$('.popup_wrap #popup_calendar').addClass('on');

		//팝업가운데 위치

		var popupwH= $('.popup_wrap div.on').height();
		var popupwHc =popupwH/2;
		$('.popup_wrap').css({'margin-top':-popupwHc});

	});



});
