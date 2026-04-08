function deepClone(obj) {
    // Agar null hai ya object nahi hai (mtlb primitive type hai), toh wahi return kar do
    if (obj === null || typeof obj !== "object") {
        return obj;
    }

    // Agar array hai
    if (Array.isArray(obj)) {
        return obj.map(item => deepClone(item));
    }

    // Agar object hai
    const clonedObj = {};
    for (let key in obj) {
        // Sirf object ki apni properties ko clone karo (prototype chain ki nahi)
        if (obj.hasOwnProperty(key)) {
            clonedObj[key] = deepClone(obj[key]);
        }
    }
    return clonedObj;
}

// Example usage
const original = { a: 1, b: { c: 2 }, d: [3, 4] };
const copy = deepClone(original);

copy.b.c = 99; // Copy mein change kiya
// console.log(original.b.c); // Output: 2 (Original safe hai)