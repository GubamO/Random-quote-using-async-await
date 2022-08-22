const container = document.querySelector("main")

async function getJSON(){
    let myRequest = await fetch("https://thatsthespir.it/api")
    let myText = await myRequest.text()
    let myObject = JSON.parse(myText)
    console.log(myObject)

    const quote = document.querySelector(".quoting")
    quote.innerHTML = myObject.quote
    const name = document.querySelector(".author")
    name.innerHTML = myObject.author

    const img = document.querySelector(".image")
    img.setAttribute("src", myObject.photo)
    img.setAttribute("alt", "Photo de " + myObject.name)
    console.log(myObject.photo)
}    
Footer
© 2022 GitHub, Inc.
Footer navigation
Terms
