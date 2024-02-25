// Main reference
const main = document.querySelector("main");

// Button references
const fooButton = document.querySelector("#Foo");
const barButton = document.querySelector("#Bar");
const fooBarButton = document.querySelector("#FooBar");

// Button click events
// Foo button
fooButton.addEventListener("click", function() {
    const h3Tag = document.createElement("h3");
    h3Tag.textContent = "Foo";
    main.appendChild(h3Tag);
})
// Bar button
barButton.addEventListener("click", function() {
    const h3Tag = document.createElement("h3");
    h3Tag.textContent = "Bar";
    main.appendChild(h3Tag);
})
// FooBar button
fooBarButton.addEventListener("click", function() {
    const h2Tag = document.createElement("h2");
    h2Tag.textContent = "FooBar";
    main.appendChild(h2Tag);
})