// http://portfolio-test-539.us-west-2.elasticbeanstalk.com/
const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let photosArray = [];
const count = 10;
const apiKey = 'QgGesxNsvQPEw8RczhlJ81qh-9pb7ArZ9WFwVpSLbSw';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;


function displayPhotos() {
	photosArray.map((photo) => {
		// <a></a>
		let anchor = document.createElement('a')
		anchor.setAttribute('href', photo.links.html)
		anchor.setAttribute('target', '_blank')

		// <img/>
		let img = document.createElement('img')
		img.setAttribute('src', photos.urls.regular);
		img.setAttribute('alt', photos.alt_description);
		img.setAttribute('title', photos.alt_description);
		console.log(photo)
	})
}


async function getPhotos(){
	try {
		const res = await fetch(apiUrl);
		const photosArray = await res.json();
		console.log(photosArray);
		displayPhotos();

	}catch(error) {
		console.log(error)
	}
}

getPhotos()