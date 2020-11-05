const selection1 = document.querySelector(".week__material-sectionDropDown");
selection1.addEventListener("change", ({ target: { value } }) => {
  if (value === "choose") return false;
  location = value;
});
