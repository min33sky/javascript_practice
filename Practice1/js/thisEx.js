var funcThis = null; 
 
function Func(){
    funcThis = this;
}

// 함수 호출 : this -> window 객체
var o1 = Func();
if(funcThis === window){
    document.write('window <br />');
}
 
// 생성자 호출 : this -> 생성된 객체 자신
var o2 = new Func();
if(funcThis === o2){
    document.write('o2 <br />');
}