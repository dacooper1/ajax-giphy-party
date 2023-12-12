console.log("Let's get this party started!");

const form = document.querySelector('form')
const input = document.querySelector('#input')
const remove = document.querySelector('#remove')
const gallery = document.querySelector('#gif-gallery')

form.addEventListener('click', function(e){
    e.preventDefault();
    if (e.target.id === 'search'){
        getGif(input.value);
        input.value = '';

    } else if (e.target.id === 'remove') {
        gallery.innerHTML = '';
        input.value = '';
    }
    

})


async function getGif(input){
    let data = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${input}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`)
    let randomGif = (Math.floor(Math.random()*49))
    let url = (data.data.data[randomGif].images.downsized_medium.url)
    createImage(url);
    console.log(data.data.data[randomGif].images)
};


function createImage(url){
    let newIMG = document.createElement('IMG')
    newIMG.setAttribute('src', url)
    newIMG.setAttribute('class', 'gif')
    gallery.append(newIMG)
}

