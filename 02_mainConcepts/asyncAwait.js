const requestUrl = 'https://github.com/rajatsharma3517';

async function getUserData() {
    try {
        const response = await fetch(requestUrl);

        const data = await response.json();
        
        console.log("Followers:", data.followers);
    } catch (error) {
        console.log("Error fetching data:", error);
    }
}

getUserData();