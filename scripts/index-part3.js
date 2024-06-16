$(document).ready(function() {  
			    function adjustDivSizeAndPosition() {  
			        var size = {  
			            width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,  
			            height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight  
			        }; 
					$('#div2').css({
						'height': size.height * 7.5 / 10 + 'px',   
						'width': size.width * 9/ 10 + 'px',  
						'left': size.width * 1 / 20 + 'px',
						'top': size.height * 2.8/ 20 + 'px'
					});
					
					
					var $div2 = $('#div2');  
					var $div2Image = $div2.find('img'); // 假设图片是div2的直接子元素  
					var div2ImageTop = $div2Image.position().top; // 图片相对于div2的顶部位置  
					var div2Top = $div2.position().top; // div2相对于视口的位置  
					var div2Bottom = $div2.position().bottom;
					var imageTopToViewport = div2Top + div2ImageTop;  // 计算图片顶部到视口顶部的距离 
					var $div1 = $('#div1');  
					var div1Height = $div1.height(); // 获取div1的当前高度  
					        // 计算div1的top值，使其位于屏幕顶端到div2图片顶部的间隙的正中间  
					var maxTop = imageTopToViewport - div1Height;
					var div1Top = (imageTopToViewport - div1Height / 2);  
					if (div1Top > maxTop){
						div1Top = maxTop;
					};
					if (div1Top < 0) { // 确保div1不会超出屏幕顶部  
					    div1Top = 0;  
					}  
					
					$div1.css({  
						'width': size.width * 7/ 10 + 'px',
					    'top': (div1Top-12) + 'px',  
					    'left': size.width * 3 / 20 + 'px',  
					    // 'margin': '0 auto' // 注意：这不会影响绝对定位元素的水平位置  
					});
					
					$('#sofa1').css({
						'height': size.height * 353 / 1800 + 'px', 
						'width': size.width * 973 / 2880 + 'px',  
						'left': size.width * 1400 / 2880 + 'px',
						'top': size.height * 906/ 1800 + 'px'
					});
					$('#sofa2').css({
						// 'height': size.height * 494 / 1800 + 'px', 
						'width': size.width * 421 / 2880 + 'px',  
						'left': size.width * 152 / 2880 + 'px',
						'top': size.height * 1020/ 1800 + 'px'
					});
					$('#f').css({
						'height': size.height * 441 / 1800 + 'px', 
						'width': size.width * 423 / 2880 + 'px',  
						'left': size.width * 91 / 2880 + 'px',
						'top': size.height * 750/ 1800 + 'px'
					});
					$('#m').css({
						'height': size.height * 440 / 1800 + 'px', 
						'width': size.width * 319 / 2880 + 'px',  
						'left': size.width * 1939 / 2880 + 'px',
						'top': size.height * 660/ 1800 + 'px'
					});
					$('#c').css({
						'height': size.height * 309 / 1800 + 'px', 
						'width': size.width * 285 / 2880 + 'px',  
						'left': size.width * 1500 / 2880 + 'px',
						'top': size.height * 805/ 1800 + 'px'
					});
					$('#kt').css({
						'height': size.height * 204 / 1800 + 'px', 
						'width': size.width * 406 / 2880 + 'px',  
						'left': size.width * 48 / 2880 + 'px',
						'top': size.height * 73/ 1800 + 'px'
					});
					$('#deng').css({
						'height': size.height * 388 / 1800 + 'px', 
						'width': size.width * 300 / 2880 + 'px',  
						'left': size.width * 1587 / 2880 + 'px',
						'top': size.height * 0/ 1800 + 'px'
					});
					$('#zw').css({
						'height': size.height * 262 / 1800 + 'px', 
						'width': size.width * 200 / 2880 + 'px',  
						'left': size.width * 2400 / 2880 + 'px',
						'top': size.height * 939/ 1800 + 'px'
					});
					$('#hp').css({
						'height': size.height * 134 / 1800 + 'px', 
						'width': size.width * 152 / 2880 + 'px',  
						'left': size.width * 1150 / 2880 + 'px',
						'top': size.height * 1023/ 1800 + 'px'
					});
					$('#ws').css({
						'height': size.height * 164 / 1800 + 'px', 
						'width': size.width * 64 / 2880 + 'px',  
						'left': size.width * 935 / 2880 + 'px',
						'top': size.height * 681/ 1800 + 'px'
					});
					$('#men').css({
						'height': size.height * 867 / 1800 + 'px', 
						'width': size.width * 364 / 2880 + 'px',  
						'left': size.width * 750 / 2880 + 'px',
						'top': size.height * 247/ 1800 + 'px'
					});
					
					$('#div3').css({
						'height': size.height * 120 / 1800 + 'px',
						'width': size.width * 2536/ 2880 + 'px', 
						'left': size.width * 172 / 2880 + 'px',
						'top': size.height * 1600/ 1800 + 'px'
					});
					
					$('#tip1').css({
						'height': size.height * 1 / 10 + 'px', 
						'width': size.width * 2.3/ 10 + 'px',
						'left': size.width * 4.5 / 20 + 'px',
						'top': size.height * 15.5/ 20 + 'px'
					});
					$('#tip2').css({
						'height': size.height * 1 / 10 + 'px', 
						'width': size.width * 2.3/ 10 + 'px',  
						'left': size.width * 7.5 / 20 + 'px',
						'top': size.height * 15.5/ 20 + 'px'
					});
					$('#tip3').css({
						'height': size.height * 1 / 10 + 'px', 
						'width': size.width * 2.3/ 10 + 'px',  
						'left': size.width * 10.5 / 20 + 'px',
						'top': size.height * 15.5/ 20 + 'px'
					});
					
					$('#father').css({
						'height': size.height * 400 / 1800 + 'px', 
						'width': size.width * 600/ 2880 + 'px',  
						'left': size.width * 500 / 2880 + 'px',
						'top': size.height * 600/ 1800 + 'px'
					});
					
					$('.mo1').css({
						'width': size.width * 550/ 2880 + 'px',
						'left': size.width * 2080 / 2880 + 'px',
						'top': size.height * 700/ 1800 + 'px'
					});
					$('.mo2').css({
						'width': size.width * 550/ 2880 + 'px',
						'left': size.width * 2080 / 2880 + 'px',
						'top': size.height * 580/ 1800 + 'px'
					});
					$('.mo3').css({
						'width': size.width * 550/ 2880 + 'px',
						'left': size.width * 2080 / 2880 + 'px',
						'top': size.height * 650/ 1800 + 'px'
					});
					$('.chi1').css({ 
						'width': size.width * 341/ 2880 + 'px',
						'left': size.width * 1400 / 2880 + 'px',
						'top': size.height * 900/ 1800 + 'px'
					});
					$('.chi2').css({
						'width': size.width * 341/ 2880 + 'px',
						'left': size.width * 1400 / 2880 + 'px',
						'top': size.height * 880/ 1800 + 'px'
					});
					$('.chi3').css({
						'width': size.width * 341/ 2880 + 'px',
						'left': size.width * 1400 / 2880 + 'px',
						'top': size.height * 880/ 1800 + 'px'
					});
					$('.sfatxt').css({
						// 'height': size.height * 391 / 1800 + 'px', 
						// 'width': size.width * 700/ 2880 + 'px',  
						// 'left': size.width * 307 / 2880 + 'px',
						'top': size.height * 250/ 1800 + 'px'
					});
					$('.smotxt').css({
						'width': size.width * 450/ 2880 + 'px',
						'left': size.width * 2200 / 2880 + 'px',
						'top': size.height * 780/ 1800 + 'px'
					});
					$('.schitxt').css({ 
						'width': size.width * 400/ 2880 + 'px',
						'left': size.width * 1300 / 2880 + 'px',
						'top': size.height * 850/ 1800 + 'px'
					});
					
				}
				// 初始调整  
				adjustDivSizeAndPosition();  
				  
				// 监听窗口大小调整事件  
				$(window).resize(function() {  
				    adjustDivSizeAndPosition();  
				});  
			});
			$(document).ready(function() {  
			        // 页面加载时隐藏弹出div  
			    $('#tip1').hide();   
			    $('#button1').hover(  
			        function() { // 鼠标悬停时触发  
						$('#tip1').fadeIn('slow'); // 显示弹出div  
			        },  
			        function() { // 鼠标离开时触发  
			             $('#tip1').fadeOut('slow'); // 隐藏弹出div  
			        }  
			    );  
			});
			//兴趣
			
			$(document).ready(function() {
			        // 页面加载时隐藏弹出div  
			    $('#tip2').hide();   
			    $('#button2').hover(  
			        function() { // 鼠标悬停时触发
			        	$('#tip2').fadeIn('slow'); // 显示弹出div  
			        },  
			        function() { // 鼠标离开时触发  
			             $('#tip2').fadeOut('slow'); // 隐藏弹出div  
			        } 
			    );  
			});
			//分化
			
			$(document).ready(function() {
			        // 页面加载时隐藏弹出div  
			    $('#tip3').hide();   
			    $('#button3').hover(  
			        function() { // 鼠标悬停时触发
			        	$('#tip3').fadeIn('slow'); // 显示弹出div  
			        },  
			        function() { // 鼠标离开时触发  
			             $('#tip3').fadeOut('slow'); // 隐藏弹出div  
			        }  
			    );  
			});
			//软广
			$(document).ready(function() {
			        // 页面加载时隐藏弹出div  
			    $("#chat3 .bubble").each(function (i) {
			      var bubble = $(this);
			      setTimeout(function () {
			        bubble.css("display", "flex");
			        bubble.addClass("animate__animated animate__fadeInUpBig");
			      }, delay);
			      delay += 800;
			    });  
			});
			//软广
			
			
			$(document).ready(function() {
				
				var clickCount1 = 1; // 初始次数为1
				var clickCount2 = 1; // 初始次数为1
			    var clickCount3 = 1; // 初始次数为1 
				// var facontent1;	var facontent2;	var facontent3;	var facontent4;	var facontent5;
				// var mocontent2;
				// var chicontent3;
				  
				function judge(){
					if(clickCount1 === 1 && clickCount2 === 1 && clickCount3 === 1)
					{
						$('.fa1').fadeIn('slow'); 
						$('.mo1').fadeIn('slow'); 
						$('.chi1').fadeIn('slow'); 
						
						$('.fa2').hide();
						$('.mo2').hide(); 
						$('.chi2').hide();
						
						$('.fa3').hide();
						$('.mo3').hide(); 
						$('.chi3').hide();
						
						$('.sfatxt').hide();
						$('.smotxt').hide(); 
						$('.schitxt').hide();
					}  // 111 
					if(clickCount1 === 1 && clickCount2 === 1 && clickCount3 === 2)
					{
						$('.fa1').fadeIn('slow'); 
						$('.mo1').fadeIn('slow'); 
						$('.chi1').hide(); 
						
						$('.fa2').hide();
						$('.mo2').hide(); 
						$('.chi2').fadeIn('slow');
						
						$('.fa3').hide();
						$('.mo3').hide(); 
						$('.chi3').hide();
						
						$('.sfatxt').hide();
						$('.smotxt').hide(); 
						$('.schitxt').hide();
					}  // 112
					if(clickCount1 === 1 && clickCount2 === 1 && clickCount3 === 3)
					{
						$('.fa1').fadeIn('slow'); 
						$('.mo1').fadeIn('slow'); 
						$('.chi1').hide(); 
						
						$('.fa2').hide();
						$('.mo2').hide(); 
						$('.chi2').hide();
						
						$('.fa3').hide();
						$('.mo3').hide(); 
						$('.chi3').fadeIn('slow');
						
						$('.sfatxt').hide();
						$('.smotxt').hide(); 
						$('.schitxt').hide();
					}  // 113
					if(clickCount1 === 1 && clickCount2 === 2 && clickCount3 === 1)
					{
						$('.fa1').fadeIn('slow'); 
						$('.mo1').hide(); 
						$('.chi1').fadeIn('slow'); 
						
						$('.fa2').hide();
						$('.mo2').fadeIn('slow'); 
						$('.chi2').hide();
						
						$('.fa3').hide();
						$('.mo3').hide(); 
						$('.chi3').hide();
						
						$('.sfatxt').hide();
						$('.smotxt').hide(); 
						$('.schitxt').hide();
					}  // 121
					if(clickCount1 === 1 && clickCount2 === 2 && clickCount3 === 2)
					{
						$('.fa1').fadeIn('slow'); 
						$('.mo1').hide(); 
						$('.chi1').hide(); 
						
						$('.fa2').hide();
						$('.mo2').fadeIn('slow'); 
						$('.chi2').fadeIn('slow');
						
						$('.fa3').hide();
						$('.mo3').hide(); 
						$('.chi3').hide();
						
						$('.sfatxt').hide();
						$('.smotxt').hide(); 
						$('.schitxt').hide();
					}  // 122
					if(clickCount1 === 1 && clickCount2 === 2 && clickCount3 === 3)
					{
						$('.fa1').fadeIn('slow'); 
						$('.mo1').hide(); 
						$('.chi1').hide(); 
						
						$('.fa2').hide();
						$('.mo2').fadeIn('slow'); 
						$('.chi2').hide();
						
						$('.fa3').hide();
						$('.mo3').hide(); 
						$('.chi3').fadeIn('slow');
						
						$('.sfatxt').hide();
						$('.smotxt').hide(); 
						$('.schitxt').hide();
					}  // 123
					if(clickCount1 === 1 && clickCount2 === 3 && clickCount3 === 1)
					{
						$('.fa1').fadeIn('slow'); 
						$('.mo1').hide(); 
						$('.chi1').fadeIn('slow'); 
						
						$('.fa2').hide();
						$('.mo2').hide(); 
						$('.chi2').hide();
						
						$('.fa3').hide();
						$('.mo3').fadeIn('slow'); 
						$('.chi3').hide();
						
						$('.sfatxt').hide();
						$('.smotxt').hide(); 
						$('.schitxt').hide();
					}  // 131
					if(clickCount1 === 1 && clickCount2 === 3 && clickCount3 === 2)
					{
						$('.fa1').fadeIn('slow'); 
						$('.mo1').hide(); 
						$('.chi1').hide(); 
						
						$('.fa2').hide();
						$('.mo2').hide(); 
						$('.chi2').fadeIn('slow');
						
						$('.fa3').hide();
						$('.mo3').fadeIn('slow'); 
						$('.chi3').hide();
						
						$('.sfatxt').hide();
						$('.smotxt').hide(); 
						$('.schitxt').hide();
					}  // 132
					if(clickCount1 === 1 && clickCount2 === 3 && clickCount3 === 3)
					{
						$('.fa1').fadeIn('slow'); 
						$('.mo1').hide(); 
						$('.chi1').hide(); 
						
						$('.fa2').hide();
						$('.mo2').hide(); 
						$('.chi2').hide();
						
						$('.fa3').hide();
						$('.mo3').fadeIn('slow'); 
						$('.chi3').fadeIn('slow');
						
						$('.sfatxt').hide();
						$('.smotxt').hide(); 
						$('.schitxt').hide();
					}  // 133
					
					//——————特殊事件211 222
					if((clickCount1 === 2 && clickCount2 === 1 && clickCount3 === 1) || (clickCount1 === 2 && clickCount2 === 2 && clickCount3 === 2))
					{
						$('.fa1').hide(); 
						$('.mo1').hide(); 
						$('.chi1').hide(); 
						
						$('.fa2').hide();
						$('.mo2').hide(); 
						$('.chi2').hide();
						
						$('.fa3').hide();
						$('.mo3').hide(); 
						$('.chi3').hide();
						
						$('#sfatxt1').fadeIn('slow');
						$('#smotxt1').fadeIn('slow'); 
						$('#schitxt1').fadeIn('slow');
						
						$('#sfatxt2').hide();
						$('#smotxt2').hide(); 
						$('#schitxt2').hide();
						
						$('#sfatxt3').hide();
						$('#smotxt3').hide(); 
						// $('#schitxt1').hide();
					}   //——————特殊事件211 222
					//——————特殊事件212 232
					if((clickCount1 === 2 && clickCount2 === 1 && clickCount3 === 2) || (clickCount1 === 2 && clickCount2 === 3 && clickCount3 === 2))
					{
						$('.fa1').hide(); 
						$('.mo1').hide(); 
						$('.chi1').hide(); 
						
						$('.fa2').hide();
						$('.mo2').hide(); 
						$('.chi2').hide();
						
						$('.fa3').hide();
						$('.mo3').hide(); 
						$('.chi3').hide();
						
						$('#sfatxt1').hide();
						$('#smotxt1').fadeIn('slow'); 
						$('#schitxt1').hide();
						
						$('#sfatxt2').fadeIn('slow');
						$('#smotxt2').hide(); 
						$('#schitxt2').fadeIn('slow');
						
						$('#sfatxt3').hide();
						$('#smotxt3').hide(); 
						// $('#schitxt1').hide();
					}   //——————特殊事件212 232
					if(clickCount1 === 2 && clickCount2 === 1 && clickCount3 === 3)
					{
						$('.fa1').hide(); 
						$('.mo1').fadeIn('slow'); 
						$('.chi1').hide(); 
						
						$('.fa2').fadeIn('slow');
						$('.mo2').hide(); 
						$('.chi2').hide();
						
						$('.fa3').hide();
						$('.mo3').hide(); 
						$('.chi3').fadeIn('slow');
						
						$('.sfatxt').hide();
						$('.smotxt').hide(); 
						$('.schitxt').hide();
					}  // 213
					if(clickCount1 === 2 && clickCount2 === 2 && clickCount3 === 1)
					{
						$('.fa1').hide(); 
						$('.mo1').hide(); 
						$('.chi1').fadeIn('slow'); 
						
						$('.fa2').fadeIn('slow');
						$('.mo2').fadeIn('slow'); 
						$('.chi2').hide();
						
						$('.fa3').hide();
						$('.mo3').hide(); 
						$('.chi3').hide();
						
						$('.sfatxt').hide();
						$('.smotxt').hide(); 
						$('.schitxt').hide();
					}  // 221
					//——————特殊事件222
					
					if(clickCount1 === 2 && clickCount2 === 2 && clickCount3 === 3)
					{
						$('.fa1').hide(); 
						$('.mo1').hide(); 
						$('.chi1').hide(); 
						
						$('.fa2').fadeIn('slow');
						$('.mo2').fadeIn('slow'); 
						$('.chi2').hide();
						
						$('.fa3').hide();
						$('.mo3').hide(); 
						$('.chi3').fadeIn('slow');
						
						$('.sfatxt').hide();
						$('.smotxt').hide(); 
						$('.schitxt').hide();
					}  // 223
					//——————特殊事件231
					if(clickCount1 === 2 && clickCount2 === 3 && clickCount3 === 1)
					{
						$('.fa1').hide(); 
						$('.mo1').hide(); 
						$('.chi1').hide(); 
						
						$('.fa2').hide();
						$('.mo2').hide(); 
						$('.chi2').hide();
						
						$('.fa3').hide();
						$('.mo3').hide(); 
						$('.chi3').hide();
						
						$('#sfatxt1').fadeIn('slow');
						$('#smotxt1').hide(); 
						$('#schitxt1').fadeIn('slow');
						
						$('#sfatxt2').hide();
						$('#smotxt2').fadeIn('slow'); 
						$('#schitxt2').hide();
						
						$('#sfatxt3').hide();
						$('#smotxt3').hide(); 
						// $('#schitxt1').hide();
					}   //——————特殊事件231
					//——————特殊事件232
					
					if(clickCount1 === 2 && clickCount2 === 3 && clickCount3 === 3)
					{
						$('.fa1').hide(); 
						$('.mo1').hide(); 
						$('.chi1').hide(); 
						
						$('.fa2').fadeIn('slow');
						$('.mo2').hide(); 
						$('.chi2').hide();
						
						$('.fa3').hide();
						$('.mo3').fadeIn('slow'); 
						$('.chi3').fadeIn('slow');
						
						$('.sfatxt').hide();
						$('.smotxt').hide(); 
						$('.schitxt').hide();
					}  // 233
					if(clickCount1 === 3 && clickCount2 === 1 && clickCount3 === 1)
					{
						$('.fa1').hide(); 
						$('.mo1').fadeIn('slow'); 
						$('.chi1').fadeIn('slow'); 
						
						$('.fa2').hide();
						$('.mo2').hide(); 
						$('.chi2').hide();
						
						$('.fa3').fadeIn('slow');
						$('.mo3').hide(); 
						$('.chi3').hide();
						
						$('.sfatxt').hide();
						$('.smotxt').hide(); 
						$('.schitxt').hide();
					}  // 311
					if(clickCount1 === 3 && clickCount2 === 1 && clickCount3 === 2)
					{
						$('.fa1').hide(); 
						$('.mo1').fadeIn('slow'); 
						$('.chi1').hide(); 
						
						$('.fa2').hide();
						$('.mo2').hide(); 
						$('.chi2').fadeIn('slow');
						
						$('.fa3').fadeIn('slow');
						$('.mo3').hide(); 
						$('.chi3').hide();
						
						$('.sfatxt').hide();
						$('.smotxt').hide(); 
						$('.schitxt').hide();
					}  // 312
					if(clickCount1 === 3 && clickCount2 === 1 && clickCount3 === 3)
					{
						$('.fa1').hide(); 
						$('.mo1').fadeIn('slow'); 
						$('.chi1').hide(); 
						
						$('.fa2').hide();
						$('.mo2').hide(); 
						$('.chi2').hide();
						
						$('.fa3').fadeIn('slow');
						$('.mo3').hide(); 
						$('.chi3').fadeIn('slow');
						
						$('.sfatxt').hide();
						$('.smotxt').hide(); 
						$('.schitxt').hide();
					}  // 313
					//——————特殊事件321 322 323 331 332 333
					if((clickCount1 === 3 && clickCount2 === 2 && clickCount3 === 1) || (clickCount1 === 3 && clickCount2 === 2 && clickCount3 === 2) || (clickCount1 === 3 && clickCount2 === 2 && clickCount3 === 3) 
						|| (clickCount1 === 3 && clickCount2 === 3 && clickCount3 === 1) || (clickCount1 === 3 && clickCount2 === 3 && clickCount3 === 2) || (clickCount1 === 3 && clickCount2 === 3 && clickCount3 === 3))
					{
						$('.fa1').hide(); 
						$('.mo1').hide(); 
						$('.chi1').hide(); 
						
						$('.fa2').hide();
						$('.mo2').hide(); 
						$('.chi2').hide();
						
						$('.fa3').hide();
						$('.mo3').hide(); 
						$('.chi3').hide();
						
						$('#sfatxt1').hide();
						$('#smotxt1').hide(); 
						$('#schitxt1').hide();
						
						$('#sfatxt2').hide();
						$('#smotxt2').hide(); 
						$('#schitxt2').hide();
						
						$('#sfatxt3').fadeIn('slow');
						$('#smotxt3').fadeIn('slow'); 
						// $('#schitxt1').hide();
					}   //——————特殊事件212 232
				};
				judge();
				$('#button1').click(function() {
					clickCount1++;
					judge();
					if(clickCount1 === 3)
					{
						$('#button1').off('click').css('pointer-events', 'none'); 
					}
				});
				$('#button2').click(function() {
					clickCount2++;
					judge();
					if(clickCount2 === 3)
					{
						$('#button2').off('click').css('pointer-events', 'none'); 
					}
				});
				$('#button3').click(function() {
					clickCount3++;
					judge();
					if(clickCount3 === 3)
					{
						$('#button3').off('click').css('pointer-events', 'none'); 
					}
				});
			});

$(document).ready(function() {    
    var fatxt = $('.fa1 .fatxt');  // 修改选择器以匹配HTML结构  
    var currentIndex = 0;    
    
    function animateChild() {    
        $(fatxt[currentIndex]).addClass('animated fadeInUpBig').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {    
            $(this).removeClass('animated fadeInUpBig');    
            currentIndex = (currentIndex + 1) % fatxt.length;  // 使用fatxt.length替换children.length  
            animateChild(); // 递归调用以循环播放动画    
        });    
    }    
    
    animateChild(); // 开始动画循环    
});