const numbers = [10, 20, 30];
for (const num of numbers) {
    console.log(num); 
}

const myObject = {
    js: 'JavaScript',
    cpp: 'C++',
    rb: 'Ruby'
};

for (const key in myObject) {
    console.log(`${key} stands for ${myObject[key]}`);
}

const coding = ['JavaScript', 'Python', 'Java'];
coding.forEach( (language) => {
    console.log(language);
});