// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

// For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

// Remember to use Read-Search-Ask if you get stuck. Write your own code.


function titleCase(str) {

    let words = str.toLowerCase().split(" ");
    for (var i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
    return words.join(" ");
}

titleCase("I'm a little tea pot");