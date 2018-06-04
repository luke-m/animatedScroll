function animatedScroll(elementY: number, duration: number) {
	const startingY = window.pageYOffset;
	const diff = elementY - startingY;
	let start: number;

	window.requestAnimationFrame(function step(timestamp: number) {
		if (!start) start = timestamp;
		const time = timestamp - start;
		const percent = Math.min(time / duration, 1);
		window.scrollTo(0, startingY + diff * percent);
		if (time < duration) {
			window.requestAnimationFrame(step);
		}
	})

	console.log('animated scroll initialized');
}