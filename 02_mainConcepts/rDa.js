function removeDuplicates(arr) {
    
    return [...new Set(arr)];
}

const numbers = [1, 2, 2, 3, 4, 4, 5, 1];
const uniqueNumbers = removeDuplicates(numbers);

