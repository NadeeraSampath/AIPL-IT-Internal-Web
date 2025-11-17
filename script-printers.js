function copyIP(button) {
  const ip = button.closest('tr').querySelector('.ip').textContent.trim();
  navigator.clipboard.writeText(ip).then(() => {
    showCopiedTooltip(button);
  });
}

function copyPath(path, button) {
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



/*
function showCopiedTooltip2(button) {
  const tooltip = document.createElement('span');
  tooltip.innerText = '✔ Copied!';
  tooltip.className = 'tooltip2';
  button.parentElement.appendChild(tooltip);

  setTimeout(() => {
    tooltip.remove();
  }, 1000); // Remove tooltip after 1 second
}
*/