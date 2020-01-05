const homeBody = document.querySelector(".home-page");
const mousePointer = document.querySelector(".pointer");

const intersectionCallback = entries => {
	const spanElements = document.querySelectorAll(
		".header-images>figure:first-child>div>h2>span"
	);

	const littleSpanElements = document.querySelectorAll(
		".header-images>figure:first-child>div>p>span"
	);

	const secondFigureInnerDiv = document.querySelector(
		".header-images>figure:nth-of-type(2)>div:nth-of-type(2)"
	);

	const thirdFigureInnerDiv = document.querySelector(
		".header-images>figure:nth-of-type(3)>div:first-of-type"
	);

	const thirdFigurelastDiv = document.querySelector(
		".header-images>figure:nth-of-type(3)>div:first-of-type>div:first-of-type"
	);

	const lastFigureSpanElements = document.querySelectorAll(
		".header-images>figure:nth-of-type(3)>div:first-of-type>h2>span"
	);

	const lastFigureDivSpanElements = document.querySelectorAll(
		".header-images>figure:nth-of-type(3)>div:first-of-type>div:first-of-type>span"
	);

	const lastFigureAnchorElements = document.querySelector(
		".header-images>figure:nth-of-type(3)>div:first-of-type>a"
	);
	const firstFigureAnchorElement = document.querySelector(
		".header-images>figure:first-of-type>div>a"
	);
	const secondFigureAnchorElement = document.querySelector(
		".header-images>figure:nth-of-type(2)>div:nth-of-type(2)>h3>a"
	);

	entries.forEach(entry => {
		if (entry.isIntersecting) {
			const firstFigureElement = document.querySelector(".first-fig");
			const secondFigureElement = document.querySelector(
				".header-images>figure:nth-of-type(2)"
			);
			const thirdFigureElement = document.querySelector(
				".header-images>figure:last-of-type"
			);
			if (entry.target === firstFigureElement) {
				spanElements.forEach(element => {
					element.classList.add("checking");
				});
				littleSpanElements.forEach(span => {
					span.style.width = `${span.scrollWidth}px`;
				});
				firstFigureAnchorElement.style.opacity = "1";
				firstFigureAnchorElement.style.marginTop = "30px";
			} else {
				spanElements.forEach(element => {
					element.classList.remove("checking");
				});
				littleSpanElements.forEach(span => {
					span.style.width = "0px";
				});
				firstFigureAnchorElement.style.opacity = "0";
				firstFigureAnchorElement.style.marginTop = "70px";
			}

			if (secondFigureElement === entry.target) {
				secondFigureInnerDiv.classList.add("handlebgColors");
				secondFigureAnchorElement.style.opacity = "1";
				secondFigureAnchorElement.style.marginTop = "30px";
			} else {
				secondFigureInnerDiv.classList.remove("handlebgColors");
				secondFigureAnchorElement.style.opacity = "0";
				secondFigureAnchorElement.style.marginTop = "70px";
			}

			if (thirdFigureElement === entry.target) {
				mousePointer.style.backgroundColor = "#000000";
				lastFigureSpanElements.forEach(element => {
					element.style.width = `${element.scrollWidth}px`;
					element.style.paddingRight = "55px";
					thirdFigureInnerDiv.classList.add("addWidth");
				});

				lastFigureDivSpanElements.forEach(element => {
					element.style.width = `${element.scrollWidth}px`;
					element.style.paddingRight = "15px";
					thirdFigurelastDiv.classList.add("addInnerPadding");
				});
				lastFigureAnchorElements.style.opacity = "1";
				lastFigureAnchorElements.style.marginTop = "30px";
			} else {
				mousePointer.style.backgroundColor = "#ef0d33";
				lastFigureSpanElements.forEach(element => {
					element.style.paddingRight = "0px";
					element.style.width = "0px";
					thirdFigureInnerDiv.classList.remove("addWidth");
				});

				lastFigureDivSpanElements.forEach(element => {
					element.style.width = "0px";
					element.style.paddingRight = "0px";
					thirdFigurelastDiv.classList.remove("addInnerPadding");
				});

				lastFigureAnchorElements.style.opacity = "0";
				lastFigureAnchorElements.style.marginTop = "70px";
			}
		} else {
		}
	});
};

const options = {
	threshold: 0.6
};
const observer = new IntersectionObserver(intersectionCallback, options);

const figureElements = document.querySelectorAll("figure");

figureElements.forEach(figure => {
	observer.observe(figure);
});

document.addEventListener("mousemove", e => {
	mousePointer.style.left = `${e.clientX}px`;
	mousePointer.style.top = `${e.clientY}px`;
	if (
		e.target.matches(".hamburger > input") ||
		e.target.matches(".scroll-button-container span")
	) {
		mousePointer.classList.add("large");
	} else {
		mousePointer.classList.remove("large");
	}
});
