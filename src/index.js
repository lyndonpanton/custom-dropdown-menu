import "./styles.css";

function toggleDropdown() {
    console.log("Beep");
}

function toggleDropdownOption(dropdownButton, e) {
    dropdownButton.textContent = e.target.textContent;
}

let dropdowns = document.getElementsByClassName("dropdown");

for (let i = 0; i < dropdowns.length; i++) {
    let dropdownButton = dropdowns[i].children[0].children[0];
    dropdownButton.addEventListener("click", toggleDropdown);

    let dropdownContentItems =
            dropdowns[i].children[1]
            .children;

    for (let j = 0; j < dropdownContentItems.length; j++) {
        dropdownContentItems[j].addEventListener("click", toggleDropdownOption.bind(this, dropdownButton));
    }
}

console.log("Webpack configured successfully");
