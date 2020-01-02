const galleryContents = document.querySelectorAll(".works-gallery>div");
const galleryContainer = document.querySelector(".works-gallery");

galleryContents.forEach(item => {
	item.addEventListener("mouseover", () => (item.className = "writeup"));
});

// galleryContents.forEach(item => {
// 	item.addEventListener(
// 		"mouseout",
// 		() => (item.className = "remove-writeup")
// 	);
// });
