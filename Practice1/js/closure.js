var arr = []
/*
		Closure 미적용
*/
for(var i = 0; i < 5; i++){
    arr[i] = function(){
        return i;	// for문의 i는 외부함수의 지역변수가 아니다.
    }
}

for(var index in arr) {
    console.log(arr[index]());
}

/* 
		Closure 적용
*/
for(var i = 0; i < 5; i++){
    arr[i] = function(idx){
    	return function(){
        return idx;	// i는 외부함수의 지역변수이다.
    	} 
    }(i);
}

for(var index in arr) {
    console.log(arr[index]());
}