//your JS code here. If required.
// const h1 = document.querySelector('h1')

// h1.innerText = `Width:${window.innerWidth} and Height:${window.innerHeight}`

const w= document.querySelector('.w')
const h = document.querySelector('.h')

window.addEventListener('resize',()=>{
	w.textContent = window.innerWidth;
	h.innerContent = window.innerHeight;
})