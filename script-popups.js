function submitFeedback() {
  const form = document.getElementById("feedbackForm");

  // 🔹 This line triggers native HTML validation
  if (!form.reportValidity()) {
    return; // stop submission if validation fails
  }

  const formData = new FormData(form);

  fetch("saveMobilesFeedback.asp", {
    method: "POST",
    body: new URLSearchParams(formData) // use URL-encoded to match ASP form reading
  })
  .then(response => response.text())
  .then(result => {
    showStatusPopup("Success!", result, false);
    closeForm();  // hide feedback form popup
  })
  .catch(error => {
    console.error(error);
    showStatusPopup("Error!", "Failed to submit request!", true);
  });
}



function submitFeedbackForExtentions() {
  const form = document.getElementById("feedbackForm");

  // 🔹 This line triggers native HTML validation
  if (!form.reportValidity()) {
    return; // stop submission if validation fails
  }

  const formData = new FormData(form);

  fetch("saveExtentionsFeedback.asp", {
    method: "POST",
    body: new URLSearchParams(formData) // use URL-encoded to match ASP form reading
  })
  .then(response => response.text())
  .then(result => {
    showStatusPopup("Success!", result, false);
    closeForm();  // hide feedback form popup
  })
  .catch(error => {
    console.error(error);
    showStatusPopup("Error!", "Failed to submit request!", true);
  });
}



/* 🔹 Tooltip Popup Functions */
function showStatusPopup(title, message, isError) {
  const popup = document.getElementById("statusPopup");
  document.getElementById("popupTitle").textContent = title;
  document.getElementById("popupMsg").textContent = message;
  popup.classList.toggle("error", isError);
  popup.style.display = "block";
  
  // Auto-close after 3 seconds
  setTimeout(closeStatusPopup, 3000);
}

function closeStatusPopup() {
  document.getElementById("statusPopup").style.display = "none";
}



function closeForm() {
  document.getElementById("overlay").style.display = "none";
  document.getElementById("feedbackPopup").style.display = "none";

  // 🔹 Reset form fields
  const form = document.getElementById("feedbackForm");
  if (form) {
    form.reset();
  }
}


function openForm() {
document.getElementById("feedbackPopup").style.display = "block";
document.getElementById("overlay").style.display = "block";
}