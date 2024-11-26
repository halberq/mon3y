function displayResponse(event) {
  // Prevent the form from refreshing the page
  event.preventDefault();

  // Grab the response message element
  const responseMessage = document.getElementById('response-message');

  // Update the message text
  responseMessage.textContent = "kys I ain't giving you shit 😂";
}
