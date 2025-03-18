fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
.then(res => res.json())
.then(data => {
    console.log(data)
    document.querySelector('img').src = data.url

})

.catch(err => {
    console.log(`error ${err}`)
})