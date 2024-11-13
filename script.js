const noButton = document.getElementById('no');

// Function to move the "No" button randomly within the page, keeping it visible
function moveNoButton() {
  // Get the dimensions of the window
  const windowHeight = window.innerHeight;
  const windowWidth = window.innerWidth;

  // Get the dimensions of the "No" button
  const buttonHeight = noButton.offsetHeight;
  const buttonWidth = noButton.offsetWidth;

  // Calculate random position ensuring the button stays fully within the window
  const randomTop = Math.floor(Math.random() * (windowHeight - buttonHeight));
  const randomLeft = Math.floor(Math.random() * (windowWidth - buttonWidth));

  // Apply the random position to the button
  noButton.style.position = 'absolute';
  noButton.style.top = `${randomTop}px`;
  noButton.style.left = `${randomLeft}px`;
}

// Function to show a playful message when the "No" button is clicked
function showDareMessage() {
  alert("I dare you to say no! 😜");
}

// Move the "No" button only when hovering
noButton.addEventListener('mouseenter', function() {
  moveNoButton(); // Moves the button when hovered
});

// Show the dare message when the "No" button is clicked
noButton.addEventListener('click', function(e) {
  e.preventDefault(); // Prevent "No" button from being clicked
  showDareMessage(); // Show the dare message
});

document.getElementById('yes').addEventListener('click', function() {
  alert("Yay! Let's go for the outing!");
});





  