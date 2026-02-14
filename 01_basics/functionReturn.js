function a() {
    return function() {
        console.log("Returned function");
    }
}

var x = a();
x();