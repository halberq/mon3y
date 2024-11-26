function displayResponse(event) {
  // Prevent the form from refreshing the page
  event.preventDefault();

  // Grab the response message element
  const responseMessage = document.getElementById('response-message');

  // Update the message text
  responseMessage.textContent = "Thank you for your information, we will contact you soon enough";
}
