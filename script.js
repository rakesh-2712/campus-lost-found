function searchItems() {
    const input = document.getElementById("searchInput");
    const filter = input.value.toLowerCase();
    const items = document.querySelectorAll(".item-card");

    items.forEach(function(item) {
        const text = item.textContent.toLowerCase();

        if (text.includes(filter)) {
            item.style.display = "flex";
        } else {
            item.style.display = "none";
        }
    });
}

function submitReport(event) {
    event.preventDefault();

    const itemName = document.getElementById("itemName").value;
    const itemType = document.getElementById("itemType").value;
    const location = document.getElementById("location").value;

    const message = document.getElementById("message");

    message.textContent =
        "✓ " + itemType + " item reported successfully: " +
        itemName + " at " + location + ".";

    document.querySelector("form").reset();
}