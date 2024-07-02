// document.addEventListener("DOMContentLoaded", function () {
//   const typingTextElement = document.getElementById("typing-text");
//   const text = typingTextElement.innerHTML; // Extract the existing text
//   typingTextElement.innerHTML = ""; // Clear the content
//   typingTextElement.style.visibility = "visible"; // Make the element visible

//   let index = 0;

//   function typeText() {
//     if (index < text.length) {
//       typingTextElement.innerHTML += text.charAt(index);
//       index++;
//       setTimeout(typeText, 50); // Adjust the speed by changing the timeout value
//     }
//   }

//   typeText();
// });

document.addEventListener("DOMContentLoaded", function () {
  const typingTextElement = document.getElementById("typing-text");
  const text = typingTextElement.innerHTML.trim(); // Extract the existing text and trim any leading/trailing whitespace
  typingTextElement.innerHTML = ""; // Clear the content
  typingTextElement.style.visibility = "visible"; // Make the element visible

  let index = 0;
  const delay = 50; // Milliseconds delay between each character

  function typeText() {
    if (index < text.length) {
      typingTextElement.innerHTML += text.charAt(index);
      index++;
      setTimeout(typeText, delay);
    }
  }

  // Start typing after a delay of 2 seconds (2000 milliseconds)
  setTimeout(typeText, 3000);
});
