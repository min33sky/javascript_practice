var o = {}
var p = {}
function func(){
    switch(this){
        case o:
            document.write('o<br />');
            break;
        case p:
            document.write('p<br />');
            break;
        case window:
            document.write('window<br />');
            break;          
    }
}
func();         // this -> window
func.apply(o);  // apply(매개변수 - 함수 호출 context) :this -> o
func.apply(p);  // this -> p