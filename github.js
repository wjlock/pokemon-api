const container = document.querySelector('.container');



fetch('https://api.github.com/users/wjlock')
.then(response => {
    console.log(response)
    return response.json();
})
.then(githubData => {
    // console.log(githubData);
    const willObj = {
        bio: githubData.bio,
        username: githubData.login,
        name: githubData.name
    }
    console.log(willObj);
    const newElement = document.createElement('p');
    newElement.textContent = willObj.name
    container.appendChild(newElement);
})
.catch(error => {
    console.log(error)
});
