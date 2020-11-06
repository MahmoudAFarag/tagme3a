const selections = document.querySelectorAll(".week__material-sectionDropDown");

selections.forEach((selection) => {
  selection.addEventListener("change", ({ target: { value } }) => {
    if (value === "choose") return false;
    location = value;
  });
});
