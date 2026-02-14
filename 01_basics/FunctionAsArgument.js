function a() {
    console.log("Function A");
}

function b(param) {
    console.log(param);
    param();
}

b(a);