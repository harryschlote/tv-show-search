const form = document.querySelector('#searchForm');
const imageContainer = document.querySelector('#container');

form.addEventListener('submit', async function(e) {
    e.preventDefault();
    const searchTerm = form.elements.query.value;
    const config = {params: {q: searchTerm}}
    const response = await axios.get(`https://api.tvmaze.com/search/shows`, config);
    makeImages(response.data);
    form.elements.query.value = '';
})


const makeImages = (shows) => {
    imageContainer.innerHTML = '';
    for(let result of shows) {
        if(result.show.image) {

            const showDiv = document.createElement('div');
            showDiv.classList.add('show-container');

            const img = document.createElement('IMG');
            const p = document.createElement('p');

            img.src = result.show.image.medium;
            p.innerText = result.show.name;

            showDiv.appendChild(img);
            showDiv.appendChild(p);

            imageContainer.appendChild(showDiv);

        }
    }

}