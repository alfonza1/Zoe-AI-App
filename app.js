// Define arrays of text for each H1 element
const firstH1TextRandomized = [
"Tired of searching for the perfect bar or food spot ?",
"Are you tired of searching for the best bars and restaurants?",
"Finding the perfect spot for food and drinks can be a challenge.",
"Looking for the ultimate bar or restaurant experience?",
"Say goodbye to the stress of finding the perfect spot for food and drinks!",
"Looking for the hottest and most popular bars and restaurants in town?"
];
const secondH1TextRandomized = ["Meet Zoè, your very own personal concierge powered by AI!", 
" Meet Zoè your personal AI lifestyle concierge!", 
"Meet Zoè, your AI-powered lifestyle specialist!",
"Relax and let Zoè do the work for you!",
" Meet Zoè, your own AI lifestyle assistant!",
"Zoè will help you find exactly what you're looking for!",
"Meet Zoè, your personal AI lifestyle expert!"
];

// Function to select a random element from an array
function selectRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Update the H1 elements with random text on page load
window.onload = function() {
  document.getElementById("firsth1").innerHTML = selectRandom(firstH1TextRandomized);
  document.getElementById("secondh1").innerHTML = selectRandom(secondH1TextRandomized);
}

// function to changes loads the next page when button is clicked
      document.addEventListener('DOMContentLoaded', function() {
      document.getElementById('firstbutt').addEventListener('click', function() {
       window.location.href = 'findlocation.html';
        });

 
//  toggles light mode
      document.getElementById('lightModeButton').addEventListener('click', () => {
           document.body.classList.toggle('light-mode');
                 });
                 });     
