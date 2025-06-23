import "./styles.css";

function toggleDropdown(content) {
    if (content.classList.contains("dropdown-content-hidden")) {
        content.classList.remove("dropdown-content-hidden");
    } else {
        content.classList.add("dropdown-content-hidden");
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
    let dropdownButton = dropdownDisplay.children[0];
    
    dropdownDisplay.addEventListener("click", toggleDropdown.bind(this, dropdownContent));
    
    for (let j = 0; j < dropdownContentItems.length; j++) {
        dropdownContentItems[j].addEventListener("click", toggleDropdownOption.bind(this, dropdownButton));
    }

}

console.log("Webpack configured successfully");
