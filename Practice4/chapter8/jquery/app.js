window.onload = function () {
		(function () {
			var $prev = $('#prev');
			var $next = $('#next');
			var year = new Date().getFullYear();
			var month = new Date().getMonth() + 1;


			// calendar 함수 실행
			calendar(year, month);

			// 이전 달, 다음 달 버튼 이벤트 핸들러
			$prev.click(function () {
				calendar(year, --month);
			});

			$next.click(function () {
				calendar(year, ++month);
			})
	})();


	// calendar 함수
	function calendar(new_year, new_month) {
		// 특정 연월을 시작일로부터 조회(year, month, date)
		var d = new Date(new_year, new_month-1, 1);
		// 월별 일수 구하기
				d_length = 32 - new Date(new_year, new_month-1, 32).getDate();
				year = d.getFullYear();
				month = d.getMonth();
				date = d.getDate();
				day = d.getDay();

		// caption 영역 날짜 표시 객체
		var $caption_year = $('.year');
		var $caption_month = $('.month');
		var $start_day = $('tr td');

		// 테이블 초기화
		$start_day.each(function (i) {	// 반복문 사용
			$(this).html('&nbsp;');
		});

		// 한 달 치 날짜를 테이블에 시작 요일부터 순서대로 표시
		for (var i = day; i < day + d_length; i++) {
			$start_day[i].innerHTML = date;
			date++;
		}

		// caption 날짜 표시
		$caption_year.html(year);
		$caption_month.html(month+1);
	}	// end calendar()

}