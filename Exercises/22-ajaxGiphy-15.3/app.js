const form = document.querySelector('#search-form');
const input = document.querySelector('#search');
const remove_btn = document.querySelector('#remove-btn');
const gif_album = document.querySelector('#gif-album');

async function getGifUrl(str) {
    const randIdx = Math.round(Math.random() * 20);
    let response = await axios.get("https://api.giphy.com/v1/gifs/search", { params: { api_key: "FOotTvpl7JCK1ZHbp4oSPpmGNM1S6VPg", q: str, limit: 20 } });
    console.log(response);
    return (response.data.data[randIdx].images.fixed_width.url);
}

async function appendGif(str) {
    const newGif = await getGifUrl(str);
    const newImg = document.createElement('img');
    newImg.setAttribute('src', newGif);

    gif_album.append(newImg);
}

function deleteGifs() {
    gif_album.innerHTML = "";
}

form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(input.value);
    appendGif(input.value);
})

remove_btn.addEventListener('click', deleteGifs);
