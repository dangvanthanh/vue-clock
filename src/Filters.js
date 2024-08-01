export const SECOND = 1000
export const HOUR = 12

export function getHourTime(h) {
	return h >= 12 ? 'PM' : 'AM'
}

export function getZeroPad(n) {
	return (Number.parseInt(n, 10) >= 10 ? '' : '0') + n
}
