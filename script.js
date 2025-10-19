const button = document.querySelector('#btn');
const img = document.querySelector('#image');

button.addEventListener('click', async () => {
    const dogData = await fetchDogImage();
    img.src = dogData.message;
});

async function fetchDogImage() {
    const url = 'https://dog.ceo/api/breeds/image/random';
    const response = await fetch(url);
    return  await response.json();
    
}



