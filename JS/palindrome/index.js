// Here's a simple JavaScript program to check if a string is a palindrome:
function isPalindrome(str) {
  // Remove spaces and convert to lowercase
  const cleaned = str.split(' ').join('');//.replace(/\s+/g, "").toLowerCase();
  console.log(cleaned)
  // Check if the cleaned string is the same forwards and backwards
  return cleaned === cleaned.split("").reverse().join("");
}

// Example usage
const inputStr = "A man a plan a canal Panama";
const response = isPalindrome(inputStr);
if (response) {
  console.log(`"${inputStr}" is a palindrome.`);
} else {
  console.log(`"${inputStr}" is not a palindrome.`);
}
