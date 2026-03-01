//inline
<img src="owl.jpg" id="owl" onclick="alert('owl clicked')" />

// element properties
document.getElementById('owl').onclick = function() {
    alert("Owl clicked");
}


document.getElementById('owl').addEventListener('click', function(e) {
    alert("Owl clicked");
}, false);