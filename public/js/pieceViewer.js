const animations = [
    "noAnimation",
    "breathing"
]

const pieceBodies = [...document.getElementsByClassName('pieceBody')]
.map(elem => [...elem.childNodes]
    .filter(obj => obj.innerText)
);

const changeAnimation = (pieceBody, animation) => {
    for (const row of pieceBody) {
        row.classList.replace([...row.classList][1], animation);
    }
}

//load animations in the animation selectors
const animationsSelectors = [...document.getElementsByClassName('animationSelector')];
animationsSelectors.forEach((selector, index) => {
    for (const animation of animations) {
        const opt = document.createElement('option');
        opt.value = animation;
        opt.innerHTML = animation;
        selector.appendChild(opt);
    }
    selector.addEventListener('change', function() {
        changeAnimation(pieceBodies[index], this.value)
    });
})




