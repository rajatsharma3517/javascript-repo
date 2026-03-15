const requestUrl = 'https://github.com/rajatsharma3517';

fetch(requestUrl)
    .then((response) => {
        return response.json(); 
    })
    .then((data) => {
        console.log(data.followers); 
        console.log(data.avatar_url);
    })
    .catch((error) => {
        console.log("Something went wrong: ", error);
    });