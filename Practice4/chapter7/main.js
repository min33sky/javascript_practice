// 인디케이터 초기화
var indicator = document.querySelectorAll('.indicator button');
var lightbox = document.querySelector('#lightbox');
var block = document.querySelector('#block');	// 라이트 박스 배경

var content = document.getElementById('content');

// 라이트 박스 표시
function lightbox_open(num) {
	lightbox.setAttribute('class', 'active');
	block.setAttribute('class', 'active');
	change_img(num);
	indicator[num-1].focus();	// 포커스 활성화
}

// 라이트 박스 닫기
function lightbox_close() {
	lightbox.removeAttribute('class');
	block.removeAttribute('class');
}

// 이미지 전환 표시 함수
function change_img(val) {
	var imgs = document.querySelectorAll('figure > img');

	// 기존 클래스 속성을 제거
	for (var i = 0; i < imgs.length; i++) {
		imgs[i].removeAttribute('class');
	}

	// 표시하고자 하는 이미지의 클래스 속성 설정
	imgs[val-1].setAttribute('class', 'active');

	// 이미지 설명 
	if(val == 1){
		content.innerHTML = '든든이';
	}else if(val == 2){
		content.innerHTML = '틀딱린';
	}else if(val == 3){
		content.innerHTML = '튼튼이';
	}else if(val == 4){
		content.innerHTML = '슬각';
	}
}