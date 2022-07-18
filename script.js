async function getQuote() {
    let data = await fetch('https://api.quotable.io/random')
    let res = await data.json()
    console.log(res)

let author=res.author
let quote=res.content

var quoteContainer=document.getElementById("quoteContainer")

quoteContainer.innerHTML=`<img src="https://www.greentechmedia.com/assets/content/cache/made/assets/content/cache/remote/https_assets.greentechmedia.com/content/images/articles/Quote-of-the-day_360_260_80.jpg" class="card-img-top" height="300px" alt="...">
<div class="card-body">
    <h5 class="card-title">Quote of The Day</h5>
    <p class="card-text">${quote}</p>
    <p class="card-text"><small class="text-muted">Author: ${author}</small></p>
</div>`

}
