const heroPrev = document.getElementById('hero-section-prev');
const heroNext = document.getElementById('hero-section-next');

const heroContainer = document.getElementById('hero-panel-container');

var heroIndex = 0;

function heroReset() {
    for (var i = 0; i < heroContainer.children.length; i++) {
        heroContainer.children[i].style.zIndex = 0;
        heroContainer.children[i].style.opacity = 0;
    }
}

heroPrev.addEventListener('click', function() {
    heroReset();
    heroIndex = heroIndex > 0 ? heroIndex - 1 : heroContainer.children.length - 1;
    heroContainer.children[heroIndex].style.zIndex = 1;
    heroContainer.children[heroIndex].style.opacity = 1;
})

heroNext.addEventListener('click', function() {
    heroReset();
    heroIndex = heroIndex < heroContainer.children.length - 1 ? heroIndex + 1 : 0;
    heroContainer.children[heroIndex].style.zIndex = 1;
    heroContainer.children[heroIndex].style.opacity = 1;
})