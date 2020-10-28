fetch('https://api.spacexdata.com/v3/capsules')
.then( response => {
    return response.json();
})
.then(data => {
    console.log(data)
})
.catch(error => {
    console.log(error)
})
fetch('https://api.spacexdata.com/v3/history/1')
.then( response => {
    return response.json();
})
.then(data => {
    console.log(data)
})
.catch(error => {
    console.log(error)
})
fetch('https://api.spacexdata.com/v3/launchpads/vafb_slc_4e')
.then( response => {
    return response.json();
})
.then(data => {
    console.log(data)
})
.catch(error => {
    console.log(error)
})