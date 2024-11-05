export function formatTime(secondsLeft: number) {
	const minutes = Math.floor(secondsLeft / 60);
	const seconds = secondsLeft % 60;
	// const seconds = secondsLeft - minutes * 60
	// const hours = Math.floor(minutes / 60)
	// const minutesLeft = minutes - hours * 60
	// const days = Math.floor(hours / 24)
	// const hoursLeft = hours - days * 24

	return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}
