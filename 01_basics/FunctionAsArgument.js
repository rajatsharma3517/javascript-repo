function x() {
    console.log("Function A");
}

function b(param) {
    console.log(param);
    param();
}

b(x);