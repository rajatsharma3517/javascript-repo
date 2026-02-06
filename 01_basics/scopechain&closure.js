function outest(){
    var c=10;
    function outer(b){
        function inner(){
            console.log(a,b,c)
        }
        let a=100;
        return inner;
    }
    return outer;
}

var close = (outest())("Hello World");
close();