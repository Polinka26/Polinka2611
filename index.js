// Helper function to calculate the area of a triangle
function calculateTriangleArea(base, height) {
    return 0.5 * base * height;
  }
  
  // Helper function to check if a string is a palindrome
  function isPalindrome(str) {
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
  }
  
  // Helper function to generate a random integer between min and max (inclusive)
  function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // Helper function to capitalize the first letter of a string
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  // Using the helper functions
  console.log(calculateTriangleArea(5, 3)); // Output: 7.5
  console.log(isPalindrome("level")); // Output: true
  console.log(getRandomInteger(1, 10)); // Output: Random integer between 1 and 10
  console.log(capitalizeFirstLetter("hello")); // Output: Hello