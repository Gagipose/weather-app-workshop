export function searchCity() {
    const input = document.getElementById("searchInput");
    const button = document.getElementById("searchBtn");

    function formatSearchCity(name) {
        if (!name) return "";
        
        const trimmed = name.trim();

        return (
            trimmed.charAt(0).toUpperCase() + trimmed.substring(1).toLowerCase()
        );
    }

    const city = formatSearchCity(input.value);
    
    if (!CITIES[city]) {
            document.getElementById("container").textContent = `Staden finns inte...`;
            return;
        }
}