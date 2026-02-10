function x(){
    for(var i=1; i<=5; i++){
        setTimeout(function (){
            console.log(i);
        }, i*1000);
    }
    console.log("hey this is me");
}
x();
