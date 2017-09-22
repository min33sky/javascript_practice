window.onload = function () {
	var banner = document.getElementById('banner'); // 배너 본체
	var img = banner.getElementsByTagName('img');		// 풍선 스프라이트 이미지 객체
	var toggle = document.getElementById('toggle'); // 배너 열고 닫는 토글 버튼 객체
	var sound_btn = document.getElementById('sound_btn'); // 사운드 끄고 켜는 버튼 객체

	var banner_height = getComputedStyle(banner).height; // 배너의 높이 값 변수
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
		for (var i = 0; i < img.length; i++) {
			set_balloon(i);
			img[i].style.left = '-9999px';		// 풍선의 x 좌표
			img[i].style.top = '-9999px';			// 풍선의 y 좌표
		}
		set_balloon(i);
	}

	// 풍선 애니메이션 함수
	function animate_balloon() {
		for (var i = 0; i < img.length; i++) {
			// 풍선 속성 변경
			img[i].style.left = cast[i].x + 'px'; // x 좌표
			img[i].style.top = cast[i].y + 'px'; // y 좌표
			img[i].style.transform = 'rotate(' + cast[i].angle + 'deg)'; // 회전

			// 풍선이 화면 안에 있으면
			if(cast[i].y < parseInt(banner_height)){
				cast[i].y += 1 + cast[i].speed;
				cast[i].angle += cast[i].speed;
			}else{	// 풍선이 화면 밖으로 나가면
				set_balloon(i);
			} // end for
		}	// end move_balloon()
	}

	function bgm_init() {
		var bgm = new Audio();
		bgm.src = 'images/bgm.mp3';
		bgm.loop = true;
		document.body.appendChild(bgm); // body 안에 audio 객체 추가
	}

	/* ------------------------------------ */
	// 메인

	ball_init();
	setInterval(function () {
		animate_balloon();
	}, 1000/30 ); 	// 1/30초 -> 30프레임
	bgm_init();

	/* ------------------------------------ */
	// 사운드 버튼 이벤트 핸들러
	sound_btn.onclick = function (event) {
		var attr = sound_btn.getAttribute('class'); // 사운드 버튼의 class 속성
		var bgm = document.getElementsByTagName('audio');	// 오디오 객체

		if(attr == 'active'){
			// 사운드 off
			sound_btn.removeAttribute('class'); // 클래스 제거
			sound_btn.setAttribute('src', 'images/sound_off.png'); // 버튼 이미지 교체
			bgm[0].pause();	// bgm 정지
		} else {
			// 사운드 on
			sound_btn.setAttribute('class', 'active');
			sound_btn.setAttribute('src', 'images/sound_on.png');
			bgm[0].play(); //bgm 재생
		}
		
		event.stopPropagation(); // 이벤트 버블링 차단
	}

	// 배너 열기/닫기 토글 버튼
	toggle.onclick = function () {
		var attr = banner.getAttribute('class'); // 배너 객체 class 속성

		if(attr == 'active'){
			// 배너 닫기
			banner.removeAttribute('class');
			toggle.innerHTML = '배너 열기'; // 버튼 text 변경
			return false;								 // a 태그의 기본 이벤트를 방지
		} else {
			// 배너 열기
			banner.setAttribute('class', 'active');
			toggle.innerHTML = '배너 닫기';
			return false;
		}
	}

	// 배너 링크 처리
	banner.onclick = function () {
		window.open('http://csslick.github.io/', '_blank'); // 새 창 열기
	}

}