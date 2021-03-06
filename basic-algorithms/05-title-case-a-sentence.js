/*
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".
*/

function titleCase(str) {
  let words = str.split(' ');
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].substr(1).toLowerCase();
  }
  return words.join(' ');
}

titleCase("I'm a little tea pot");
titleCase("sHoRt AnD sToUt");
titleCase("HERE IS MY HANDLE HERE IS MY SPOUT");
