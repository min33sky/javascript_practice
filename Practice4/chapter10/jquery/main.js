window.onload = function () {
	var $banner = $('#banner'); // 배너 본체
	var $img = $banner.find('img');		// 풍선 스프라이트 이미지 객체
	var $toggle = $('#toggle'); // 배너 열고 닫는 토글 버튼 객체
	var $sound_btn = $('#sound_btn'); // 사운드 끄고 켜는 버튼 객체

	var $banner_height = $banner.css('height'); // 배너의 높이 값 변수
	var cast = []; // 풍선 스프라이트 객체를 정의할 배열

	// 풍선 객체 생성 함수
	function set_balloon(num) {
		// 풍선의 속성 값을 랜덤으로 생성
		var x = Math.floor(Math.random() * (500 - 10) + 10); // 10에서 500 사이의 값
		var y = Math.floor(Math.random() * (400 - 12) + 120);
		var size = Math.floor(Math.random() * (200 - 100) + 100);
		var angle = Math.floor(Math.random() * (360 - 0) + 0);
		var speed = Math.random() * (2 - 0) + 0;

		// 풍선 객체
		cast[num] = {
			x: x,
			y: -y,
			size: size,
			angle: angle,
			speed: speed
		}

	}

	//  풍선 객체 초기화 함수
	function ball_init() {
		$img.each(function(i) {
			// 풍선 객체들의 속성 초기화
			set_balloon(i);
			$img.eq(i).css('left', '-9999px')
							  .css('top', '-9999px');
		});
	}

	// 풍선 애니메이션 함수
	function animate_balloon() {
		$img.each(function(i) {
			// 풍선 속성 변경
			$img.eq(i).css('left', cast[i].x + 'px')
								.css('top', cast[i].y + 'px')
								.css('transform', 'rotate(' + cast[i].angle + 'deg)'); // 회전

			// 풍선이 화면 안에 있으면
			if(cast[i].y < parseInt($banner_height)){
				cast[i].y += 1 + cast[i].speed;
				cast[i].angle += cast[i].speed;
			} else {	// 풍선이 화면 밑으로 나가면
				set_balloon(i);
			}
		});		
	}

	function bgm_init() {
		var bgm = new Audio();
		bgm.src = 'images/bgm.mp3';
		bgm.loop = true;
		$('body').append(bgm);	// 문서에 오디오 객체 추가
	}

	/* ------------------------------------ */
	// 메인

	ball_init();
	setInterval(function () {
		animate_balloon();
	}, 1000/30 ); 	// 1/30초 -> 30프레임
	bgm_init();

	/* ------------------------------------ */
	// 사운드 버튼 이벤트
	$sound_btn.click(function(event) {
		var attr = $(this).attr('class'); // 사운드 버튼의 class 속성
		var bgm = $('audio'); // audio 객체

		if(attr == 'active'){
			// 사운드 off
			$(this).removeAttr('class');
			$(this).attr('src', 'images/sound_off.png'); // 버튼 이미지 교체
			bgm[0].pause();
		} else {
			// 사운드 on
			$(this).attr('class', 'active');
			$(this).attr('src', 'images/sound_on.png');
			bgm[0].play();
		}
		event.stopPropagation(); // 이벤트 버블링 방지
	});
	

	// 배너 열기/닫기 토글 버튼
	$toggle.click(function(event) {
		var attr = $banner.attr('class');

		if(attr == 'active'){
			// 배너 닫기
			$banner.removeAttr('class');
			$(this).html('배너 열기');
			return false;
		} else {
			// 배너 열기
			$banner.attr('class', 'active');
			$(this).html('배너 닫기');
			return false;
		}
	});

	// 배너 링크 처리
	$banner.click(function(event) {
		window.open('https://csslick.github.io/', '_blank');
	});
}