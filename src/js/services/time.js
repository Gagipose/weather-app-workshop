export function getDayName(date) {
    const dayNames = ["Söndag", "Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag"]

    return dayNames[date.getDay()]
}

export function getMonthName(date) {
    const monthNames = ["Januari", "Februri", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"]

    return monthNames[date.getMonth()]
}

export function getTime(date) {
    let hours = date.getHours().toString().padStart(2, "0")
    let minutes = date.getMinutes().toString().padStart(2, "0")

    return `${hours}:${minutes}`
}