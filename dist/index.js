"use strict";
function animatedScroll(elementY, duration) {
    const startingY = window.pageYOffset;
    const diff = elementY - startingY;
    let start;
    window.requestAnimationFrame(function step(timestamp) {
        if (!start)
            start = timestamp;
        const time = timestamp - start;
        const percent = Math.min(time / duration, 1);
        window.scrollTo(0, startingY + diff * percent);
        if (time < duration) {
            window.requestAnimationFrame(step);
        }
    });
    console.log('animated scroll initialized');
}
//# sourceMappingURL=index.js.map