import "./styles.css";

function toggleDropdown(content, icon) {
    if (content.classList.contains("dropdown-content-hidden")) {
        content.classList.remove("dropdown-content-hidden");

        icon.classList.remove("dropdown-display-icon-down");
        icon.classList.add("dropdown-display-icon-up");
    } else {
        content.classList.add("dropdown-content-hidden");

        icon.classList.remove("dropdown-display-icon-up");
        icon.classList.add("dropdown-display-icon-down");
    }
}

function toggleDropdownOption(dropdownButton, e) {
    dropdownButton.textContent = e.target.textContent;
}

let dropdowns = document.getElementsByClassName("dropdown");

for (let i = 0; i < dropdowns.length; i++) {
    let dropdownContent = dropdowns[i].children[1];
    let dropdownContentItems = dropdownContent.children;
    let dropdownDisplay = dropdowns[i].children[0];
    let dropdownDisplayButton = dropdownDisplay.children[0];
    
    let dropdownDisplayIcon = dropdownDisplay.children[1];
    dropdownDisplay.addEventListener("click", toggleDropdown.bind(this, dropdownContent, dropdownDisplayIcon));

    for (let j = 0; j < dropdownContentItems.length; j++) {
        dropdownContentItems[j].addEventListener("click", toggleDropdownOption.bind(this, dropdownDisplayButton));
    }

}

console.log("Webpack configured successfully");
