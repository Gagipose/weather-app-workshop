export function getDayName(date) {
    const dayNames = ["Söndag", "Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag"]

    return dayNames[date.getDay()]
}

export function getMonthName(date) {
    const monthNames = ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"]

    return monthNames[date.getMonth()]
}