console.log("main.js");

let productCard = [];
productCard.push({
	title: 'Sfeer: Blue',
    copy: 'The Air Quality Egg is a sensor system designed to allow anyone to monitor  CO2. It also monitors temperature and humidity.',
    price: '$280.00',
    img: '/images/products/bluesfeer.png',
});

productCard.push({
	title: 'Sfeer: Green',
    copy: 'The Air Quality Egg is a sensor system designed to allow anyone to monitor  CO2. It also monitors temperature and humidity.',
    price: '$280.00',
    img: '/images/products/greensfeer.png',
});

productCard.push({
	title: 'Sfeer: Orange',
    copy: 'The Air Quality Egg is a sensor system designed to allow anyone to monitor  CO2. It also monitors temperature and humidity.',
    price: '$280.00',
    img: '/images/products/redsfeer.png',
});

productCard.push({
	title: 'Cloud Sfeer',
copy: 'We offer Cloud storage for the Sfeer, you save your data on our cloud service to help track and monitor air quality changes.',
price: '$450.00',
img: '/images/products/cloud.png'
});

productCard.push({
	title: 'Sfeer Installation',
copy: 'We offer Sfeer insalltion services, to help save you from the headache of installing Sfeer yourself.',
price: '$200.00',
img: '/images/products/installation.png'
});

productCard.push({
	title: 'How to Use Sfeer Classes',
copy: 'We offer classes to teach you how to use the Sfeer. You can take the class as often as you like for a one time fee.',
price: '$50.00',
img: '/images/products/class.png'
});

productCard.push({
	title: "Mobile App & Data Analytics",
    copy: "Monitor the air quality in your home, your neighborhood, or your company's interior. Configure data analytics and become part of the empowered SFEER Network ",
    price: "FREE",
    img: "/images/products/i_phone.png"
});

productCard.push({
    title: "API for Developers",
    copy: "Are you a developer, a product engineer, or a similar talent? We would love to work with you to improve our air quality",
    price: "FREE",
    img: "/images/products/open_source.png"
});

productCard.push({
    title: "Monitoring Service",
    copy: "We can provide mollit officia nisi veniam deserunt minim sint aliqua nulla.",
    price: "FREE",
    img: "/images/products/monitoring_service.png"
});


//console.log("productCard", productCard);

// //for each object in here...I want to list each item of each line/array
productCard.forEach(function(item){
	document.getElementById("products").innerHTML += `<div class="card">
			<h2>${item.title}</h2>
			<img src="${item.img}">
			<p>${item.copy}</p>
			<p class="price">Investment: ${item.price}</p>
			<button><a href="#">Purchase Now</a></button>
			<button><a href="#">Add to Cart</a></button>
		</div>`;
	
});


	// <img src="${item.img}">