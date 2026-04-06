function myPromiseAll(promises) {
    return new Promise((resolve, reject) => {
        let results = [];
        let completedCount = 0;

        if (promises.length === 0) return resolve(results);

        promises.forEach((promise, index) => {
            Promise.resolve(promise)
                .then(value => {
                    results[index] = value; 
                    completedCount++;
                    
                    
                    if (completedCount === promises.length) {
                        resolve(results);
                    }
                })
                .catch(error => {
                    reject(error);
                });
        });
    });
}


const p1 = Promise.resolve(10);
const p2 = new Promise((resolve) => setTimeout(() => resolve(20), 1000));
const p3 = Promise.resolve(30);

