window.onload = function () {
	var wrapper = document.querySelector('.wrapper');			// 전체 페이지를 감싸는 틀
	var page = document.querySelectorAll('.page');				// 각 페이지 요소
	var indicator = document.getElementById('indicator');	// 인디케이터를 담는 틀
	var indicator_li = document.querySelectorAll('li'); 	// 인디케이터 목록
	var hammer = new Hammer(wrapper);											// 터치 객체 생성

	var yDeg = 0;												// 페이지 회전 각도 변수
	var indicator_num = 1;							// 현재 표시되는 페이의 번호
	var indicator_length = page.length;	// 인디케이터의 개수 (페이지의 개수와 같다)
	var w = page[0].offsetWidth;				// 현재 페이지의 폭
	var page_angle = 0;									// 각 페이지 4면체의 배치를 위한 각조를 정의하는 변수

	// 터치 swipe left
	hammer.on('swipeleft', function (e) {
		// 인디케이터(페이지) 이동 범위 내이면
		if(indicator_num < indicator_length){
			page_vector = 1;
		}else{
			page_vector = 0;
		}

		indicator_num += page_vector;
		change_page(indicator_num);
	});

	// 터치 swipe right
	hammer.on('swiperight', function (e) {
		if(indicator_num > 1){
			page_vector = -1;
		}else{
			page_vector = 0;
		}

		indicator_num += page_vector;
		change_page(indicator_num);
	});

	// 창 크기 변경 시 페이지 초기화
	window.onresize = function () {
		init_page();
	}

	function init_page() {
		w = page[0].offsetWidth;					// page의 현재 폭 값

		// 3D page 4면체 위치 정의
		for (var i = 0; i < page.length; i++) {
			page[i].style.transform = 'rotateY(' + page_angle + 'deg) translateZ(' 
																		+ (w/2) + 'px)';	
			page_angle += 90;
		}

		// page wrapper 정면으로 초기화
		wrapper.style.transform = 'translateZ(' + (-w/2) + 'px) rotateY(' + yDeg + 'deg)';
	}

	// 인디케이터 초기화
	function init_indicator() {
		// 인디케이터 표시
		for (var i = 0; i < indicator_length; i++) {
			indicator.innerHTML += '<li>' + (i+1) + '</li>';
		}

		indicator_li = indicator.querySelectorAll('li');
		change_page(indicator_num);
	}

	// 페이지 전환
	function change_page(inum) {
		indicator_li[inum-1].setAttribute('class', 'active');
		yDeg = -90 * (inum - 1);
		wrapper.style.transform = 'translateZ(' + (-w/2) + 'px) rotateY('
															+ yDeg + 'deg)';

		// 인디케이터 표시
		for (var i = 0; i < indicator_li.length; i++) {
			indicator_li[i].removeAttribute('class');
		}
		indicator_li[inum-1].setAttribute('class', 'active');
	}

	/* ------------------------------------------------ */
	init_page();
	init_indicator();

	/* ---------- 이벤트 리스너 ---------------------- */
	for (var i = 0; i < indicator_li.length; i++) {
		indicator_li[i].addEventListener('click', function(e) {
			indicator_num = parseInt(this.innerText);
			change_page(indicator_num);
		});
	}
}
