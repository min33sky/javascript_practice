/*
	window.onload = function(){} 함수는 웹브라우저의
	모든 구성요소에 대한 로드가 끝났을 때 브라우저에 의해서 호출되는 함수다.
*/
window.onload = function(){
    var hw = document.getElementById('hw');
    hw.addEventListener('click', function(){
        alert('Hello world');
    })
}