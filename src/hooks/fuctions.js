export const explore = () => {
  const Element2 = document.getElementById("section-1");
  Element2.classList.replace("fixedVid2", "fixed2");
  RemoveBorder();
};

export const RemoveBorder = () => {
  let mainBox = document.getElementById("borderBox");
  mainBox.classList.remove("borderRadius");
};

export const AddBorderRadius = () => {
  let mainBox = document.getElementById("borderBox");
  mainBox.classList.add("borderRadius");
};
