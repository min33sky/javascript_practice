/*
	전역변수를 사용하지 않기 위해 함수를 이용하였다.
	-> 모듈화
*/
(function(){
		var MYAPP = {}
		MYAPP.calculator = {
			'left' : null,
			'right' : null
		}
		MYAPP.coordinate = {
			'left' : null,
			'right' : null
		}
		MYAPP.calculator.left = 10;
		MYAPP.calculator.right = 20;

		function sum(){
			return MYAPP.calculator.left + MYAPP.calculator.right;
		}
		document.write(sum());
}())