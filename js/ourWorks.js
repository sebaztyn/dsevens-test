const galleryContents = document.querySelectorAll('.works-gallery>div')

galleryContents.forEach(item => {
  item.addEventListener('mouseover', e => {
    if (
      (!item.classList.contains('writeup') &&
				e.target.matches('.works-gallery > div > a > img')) ||
			e.target.matches('.works-gallery > div > a') ||
			e.target.matches(
			  '.works-gallery > div > a > div > span:first-of-type'
			) ||
			e.target.matches(
			  '.works-gallery > div > a > div > span:last-of-type'
			) ||
			e.target.matches('.works-gallery > div > a > div') ||
			item
    ) {
      item.className = 'writeup'
    }
  })
})
galleryContents.forEach(item => {
  item.addEventListener('mouseout', () => {
    item.className = 'remove-writeup'
  })
})
