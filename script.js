const fox = document.getElementById('fox');

fox.addEventListener('clcik', getRandomfox())


function getRandomfox() {
    fetch('https://randomfox.ca/floof/')
        .then((data) => data.json())
        .then((result) => {
            fox.innerHTML = `<img src="${result.image}">`
        })
}