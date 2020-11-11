// http://portfolio-test-539.us-west-2.elasticbeanstalk.com/
const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');


const count = 10;
const apiKey = 'QgGesxNsvQPEw8RczhlJ81qh-9pb7ArZ9WFwVpSLbSw';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;


let ready = false;
let imagesLoaded = 0;
let totalImages = 0;
let photosArray = [];


function imageLoaded() {
	imagesLoaded ++;
	if (imagesLoaded === totalImages) {
		ready = true;
		loader.hidden = true;
	}
}

function setAttributes(elem, attrib) {
	for (const key in attrib) {
		elem.setAttribute(key, attrib[key])
	}
}

function displayPhotos() {
	imagesLoaded = 0;
	totalImages = photosArray.length;
	photosArray.map((photo) => {
		// <a></a>
		const anchor = document.createElement('a')
		// anchor.setAttribute('href', photo.links.html)
		// anchor.setAttribute('target', '_blank')
		setAttributes(anchor, {
			href: photo.links.html,
			target: '_blank'
		})

		// <img/>
		const img = document.createElement('img')
		// img.setAttribute('src', photo.urls.regular);
		// img.setAttribute('alt', photo.alt_description);
		// img.setAttribute('title', photo.alt_description);
		setAttributes(img, {
			src: photo.urls.regular,
			alt: photo.alt_description,
			title: photo.alt_description
		})


		img.addEventListener('load', imageLoaded)


		anchor.appendChild(img)
		imageContainer.appendChild(anchor)
		// console.log(photo)
	})
}


async function getPhotos(){
	try {
		const res = await fetch(apiUrl);
		photosArray = await res.json();
		// console.log(photosArray);
		displayPhotos();

	}catch(error) {
		console.log(error)
	}
}

// Infinite Scroll
window.addEventListener('scroll', () => {
	if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 && ready) {
		ready = false;
		getPhotos()
		console.log('more Loaded')
	}
	
})

getPhotos()