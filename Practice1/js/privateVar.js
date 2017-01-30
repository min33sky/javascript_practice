// title -> 외부에서 접근이 불가능하다
// get_title, set_title 같은 내부함수에서만 접근이 가능
function factory_movie(title) {
	return{
		get_title : function(){
			return title;
		},
		set_title : function(_title){
			if(typeof _title === 'string'){
				title = _title;
			} else{
				alert('문자열을 입력하세요');
			}
		}
	}
}