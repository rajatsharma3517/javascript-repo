function debounce(func, delay) {
    let timerId;
    
    return function (...args) {
        clearTimeout(timerId);
        
        timerId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}

// The simulated heavy function
function performSearch(query) {
    console.log(`Searching database for: "${query}"...`);
}


const debouncedSearch = debounce(performSearch, 500);


debouncedSearch("R");
debouncedSearch("Re");
debouncedSearch("Rea");
debouncedSearch("React"); 
