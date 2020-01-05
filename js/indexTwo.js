const navList = document.querySelector(".hamburger>ul");
const checkBox = document.querySelector(".hamburger>input");
const navImage = document.querySelector("#nav-images");
const navImageContainer = document.querySelector(".hamburger>div");

const preload = [];

preload[0] = "../assets/d-organics-perlm-kernel-oil.jpg";
preload[1] = "../assets/onuk-ink-office-contact-location.jpg";
preload[2] = "../assets/mbre-event-for-the-roothub.jpg";
preload[3] = "../assets/glory-bobby-bassey.jpg";
preload[4] = "../assets/kaprint-lady.jpg";
preload[5] = "../assets/ibom-plaza-illustration.jpg";

const imageElement = str => `<img src=${str} >`;
const navItems = document.querySelectorAll(".hamburger > ul > li > a");
navItems.forEach(item => {
	item.addEventListener("mouseover", e => {
		if (item.matches('a[data-input="home"]')) {
			navImageContainer.innerHTML = imageElement(preload[0]);
			setTimeout(
				() =>
					navImageContainer.lastElementChild.setAttribute(
						"class",
						"zoom-out"
					),
				10
			);
			item.classList.add("nav-color");
		}
		if (item.matches('a[data-input="about"]')) {
			navImageContainer.innerHTML = imageElement(preload[1]);
			setTimeout(
				() =>
					navImageContainer.lastElementChild.setAttribute(
						"class",
						"zoom-out"
					),
				10
			);
			item.classList.add("nav-color");
		}
		if (item.matches('a[data-input="services"]')) {
			navImageContainer.innerHTML = imageElement(preload[2]);
			setTimeout(
				() =>
					navImageContainer.lastElementChild.setAttribute(
						"class",
						"zoom-out"
					),
				10
			);
			item.classList.add("nav-color");
		}
		if (item.matches('a[data-input="studio"]')) {
			navImageContainer.innerHTML = imageElement(preload[3]);
			setTimeout(
				() =>
					navImageContainer.lastElementChild.setAttribute(
						"class",
						"zoom-out"
					),
				10
			);
			item.classList.add("nav-color");
		}
		if (item.matches('a[data-input="kaprint"]')) {
			navImageContainer.innerHTML = imageElement(preload[4]);
			setTimeout(
				() =>
					navImageContainer.lastElementChild.setAttribute(
						"class",
						"zoom-out"
					),
				10
			);
			item.classList.add("nav-color");
		}
		if (item.matches('a[data-input="contact"]')) {
			navImageContainer.innerHTML = imageElement(preload[5]);
			setTimeout(
				() =>
					navImageContainer.lastElementChild.setAttribute(
						"class",
						"zoom-out"
					),
				10
			);
			item.classList.add("nav-color");
		}
	});
});
navItems.forEach(item => {
  item.addEventListener("mouseout", e => {
		if (item.matches('a[data-input="home"]')) {
			item.classList.remove("nav-color");
		}
		if (item.matches('a[data-input="about"]')) {
			item.classList.remove("nav-color");
		}
		if (item.matches('a[data-input="services"]')) {
			item.classList.remove("nav-color");
		}
		if (item.matches('a[data-input="studio"]')) {
			item.classList.remove("nav-color");
		}
		if (item.matches('a[data-input="kaprint"]')) {
			item.classList.remove("nav-color");
		}
		if (item.matches('a[data-input="contact"]')) {
			item.classList.remove("nav-color");
		}
  });
})

checkBox.addEventListener("click", event => {
	if (checkBox.checked) {
		navList.classList.remove("unchecked");
	} else {
		navList.classList.add("unchecked");
	}
});

const checkNavigation = entries => {
	const aboutpage = document.querySelector(".about-nav-menu");
	const ourWorkspage = document.querySelector(".our-work-page");
	entries.forEach(entry => {
		if (
			entry.isIntersecting &&
			navList.offsetLeft <= 7 &&
			checkBox.checked
		) {
			navImageContainer.style.display = "block";

			navImageContainer.innerHTML = imageElement(preload[0]);
			setTimeout(
				() =>
					navImageContainer.lastElementChild.setAttribute(
						"class",
						"zoom-out"
					),
				10
			);
			document
				.querySelector(".hamburger>ul>li:first-of-type a")
				.classList.add("nav-color");

			if (aboutpage) {
				navImageContainer.innerHTML = imageElement(preload[1]);
				setTimeout(
					() =>
						navImageContainer.lastElementChild.setAttribute(
							"class",
							"zoom-out"
						),
					10
				);
				document
					.querySelector(".hamburger>ul>li:nth-of-type(2) a")
					.classList.add("nav-color");
			}
			if (ourWorkspage) {
				navImageContainer.innerHTML = imageElement(preload[3]);
				setTimeout(
					() =>
						navImageContainer.lastElementChild.setAttribute(
							"class",
							"zoom-out"
						),
					10
				);
				document
					.querySelector(".hamburger>ul>li:nth-of-type(4) a")
					.classList.add("nav-color");
			}
		}
		if (
			entry.isIntersecting &&
			navList.offsetLeft <= 7 &&
			!checkBox.checked
		) {
			navImageContainer.style.display = "none";
		}
	});
};

const navObserve = new IntersectionObserver(checkNavigation, {threshold: 1.0});
navObserve.observe(navList);
