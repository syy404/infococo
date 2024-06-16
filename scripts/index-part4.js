const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}

$(document).ready(function() {
	function adjustDivSizeAndPosition() {  
		var size = {  
			width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,  
			height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight  
		}; 
		// $('#div0').css({
		// 	// 'height': size.height * 7.5 / 10 + 'px',   
		// 	// 'width': size.width * 9/ 10 + 'px',  
		// 	'left': size.width * 1 / 20 + 'px',
		// 	'top': size.height * 0.3/ 20 + 'px'
		// });
		// $('.container').css({ 
		// 	// 'width': size.width * 400/ 2880 + 'px',
		// 	// 'left': size.width * 1300 / 2880 + 'px',
		// 	'top': size.height * 50/ 1800 + 'px'
		// });
	}
	// 初始调整  
	adjustDivSizeAndPosition();  
		// 监听窗口大小调整事件  
	$(window).resize(function() {  
		adjustDivSizeAndPosition();  
	});  
});