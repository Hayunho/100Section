//console.dir(document);

//document.body.children[1].children[0].href = "https://google.com";

// alert();
// window.alert();
//console.log();

let anchorElement = document.getElementById("external-link");
anchorElement.href = "https://google.com";

anchorElement = document.querySelector("p a"); // CSS Selector -> p a { color: red;}
anchorElement.href = "https://naver.com";
// Match All
// document.querySelectorAll();

// ADD AN ELEMENT
// 1. Create the new element

let newAnchorElement = document.createElement("a"); // Create anchor element
newAnchorElement.href = "https://google.com";
newAnchorElement.textContent = "This leads to google!";

// 2. Get access to the parent element that should hold the new element

let firstParagraph = document.querySelector("p");

// 3. Insert the new element into the parent element content

firstParagraph.append(newAnchorElement);

// REMOVE ELEMENT
// 1. Select the element that should be removed

let firstH1Element = document.querySelector("h1");

// 2. Remove it!

// firstH1Element.remove();
firstH1Element.parentElement.removeChild(firstH1Element); // for older browser
