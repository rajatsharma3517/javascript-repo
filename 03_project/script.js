const body = document.getElementById('page-body');

const boxes = document.querySelectorAll('.container');

boxes.forEach(function(box) {
    box.addEventListener('click', function(event) {
        body.style.backgroundColor = event.target.id;
    });
});