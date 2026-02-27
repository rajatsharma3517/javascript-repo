const form = document.querySelector('form');

form.addEventListener('submit', function(e){
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if(height < 0 || isNaN(height)){
        results.innerHTML = `Enter a valid height as it is ${height}`;
    }
    else if(weight < 0 || isNaN(weight)){
        results.innerHTML = `Enter a valid weight as it is ${weight}`;
    }
    else{
        const bmi = (weight / ((height*height)/10000)).toFixed(2);
        results.innerHTML = `<span>${bmi}</span>`;
    }
});