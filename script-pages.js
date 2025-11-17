function copyData(path, button) {
  navigator.clipboard.writeText(path).then(() => {
    showCopiedTooltip(button);
  });
}

function showCopiedTooltip(button) {
  const tooltip = document.createElement('span');
  tooltip.innerText = '✔ Copied!';
  tooltip.className = 'tooltip';
  button.parentElement.appendChild(tooltip);

  setTimeout(() => {
    tooltip.remove();
  }, 1000); // Remove tooltip after 1 second
}





  // Trigger search on Enter key press
  document.getElementById("searchInput").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      event.preventDefault(); // prevent form submission if inside a form
      searchName(); // call your search function
    }
  });


function searchName() {
    // Get search input
    const input = document.getElementById("searchInput").value.trim().toLowerCase();

    // Remove previous highlights
    document.querySelectorAll(".highlight").forEach(el => {
        el.classList.remove("highlight");
    });

    if (!input) return;

    // Find all table cells
    const cells = document.querySelectorAll("div table td");
    let firstMatch = null;

    // Loop through cells and find matches
    cells.forEach(cell => {
        if (cell.textContent.toLowerCase().includes(input)) {
            cell.classList.add("highlight");
            if (!firstMatch) {
                firstMatch = cell;
            }
        }
    });

    // Scroll to first match
    if (firstMatch) {
        firstMatch.scrollIntoView({ behavior: "smooth", block: "center" });
    } else {
        alert("No match found.");
    }
}

