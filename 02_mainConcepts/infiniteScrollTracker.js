function setupInfiniteScroll(targetElementId, loadMoreDataFunc) {
    const options = {
        root: null, 
        rootMargin: '100px', 
        threshold: 0.1 
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            
            if (entry.isIntersecting) {
                console.log("Loading more data...");
                loadMoreDataFunc();
            }
        });
    }, options);

    const target = document.getElementById(targetElementId);
    if (target) {
        observer.observe(target);
    }
    
    return observer;
}

