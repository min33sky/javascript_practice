$(document).ready(function() {
		// 문제 객체 (생성자 함수)
	function Question(text, choice, answer) {
		this.text = text;							// 문제
		this.choice = choice;					// 보기
		this.answer = answer;					// 답
	}

	// 퀴즈 정보 객체
	function Quiz(questions) {
		this.score = 0;								// 점수
		this.questions = questions;		// 문제들
		this.questionIndex = 0;				// 문제 번호 
	}

	// 정답 확인 메서드
	Quiz.prototype.correctAnswer = function (answer) {
		return answer == this.questions[this.questionIndex].answer;
	}

	// -----------------------------------------------------------------
	// 문제 데이터 생성
	var questions = [
		new Question('다음 중 최초의 상용 웹 브라우저는?', ['모자이크', '인터넷 익스플러오', '구글 크롬', '넷스케이프 네비게이터'], '넷스케이프 네비게이터'),
		new Question('웹 문서에서 스타일을 작성하는 언어는?', ['HTML', 'jQuery', 'CSS', 'XML'], 'CSS'),
		new Question('명령어 기반의 인터페이스를 의미하는 용어는?', ['GUI', 'CLI', 'HUD', 'SI'], 'CLI'),
		new Question('CSS 속성 중 글자의 굵기를 변경하는 속성은?', ['font-size', 'font-style', 'font-weight', 'font-variant'], 'font-weight')
	];

	// 퀴즈 객체 생성
	var quiz = new Quiz(questions);

	// --------------------------------------------------------------------
	// 문제 출력 함수
	function update_quiz() {
		var $question = $('#question');
		var idx = quiz.questionIndex + 1;

		$question.html('문제' + idx + ') ' + quiz.questions[quiz.questionIndex].text);

		for(var i = 0; i < quiz.questions.length; i++){
			var $btn = $('.btn').eq(i);
			$btn.html(quiz.questions[quiz.questionIndex].choice[i]);
		}

		// 진행 상황 출력
		progress();
	}

	// 문제 진행 정보 표시
	function progress() {
		var $progress = $('#progress');
		$progress.html('문제 ' + (quiz.questionIndex+1) + ' / ' + quiz.questions.length);
	}

	// ------------------------------------------------------------------------

	// 입력 및 정답 확인 함수
	$('.btn').click(function(event) {
		var $answer = $(this).text();	// 해당 보기의 내용을 가져온다.

		if(quiz.correctAnswer($answer)){
			quiz.score++;
		}else{
			alert('틀렸습니다!');
		}

		if(quiz.questionIndex < quiz.questions.length - 1){
			quiz.questionIndex++;
			update_quiz();
		}else{
			result();
		}
	});

	// ---------------------------------------------------
	// 결과 표시
	function result() {
		var $quiz = $('#quiz');

		// 백분율 점수 계산
		var per = parseInt((quiz.score * 100) / quiz.questions.length);

		// 표시할 텍스트 정보와 변수
		var txt = '<h1>결과</h1>' + '<h2 id="score"> 당신의 점수: ' + quiz.score + '/' +
							quiz.questions.length + '<br><br>' + per + '점</h2>';


		// 점수별 결과 텍스트 출력
		if(per < 60){
			txt += '<h2 style="color:red">더 분발하세요!</h2>';
			$quiz.html(txt);
		}else if(per >= 60 && per < 80){
			txt += '<h2 style="color:red">무난한 점수입니다.</h2>';
				$quiz.html(txt);
		}else if(per >= 80){
			txt += '<h2 style="color:red">훌륭합니다!</h2>';
				$quiz.html(txt);
		}
	}

	// --------------------------------------------------- 
	update_quiz();

});
