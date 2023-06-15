export const explore = () => {
  const Element2 = document.getElementById("section-1");
  const Icon = document.getElementById("ExpandIcon");
  if (Element2.classList.contains("fixedVid2")) {
    Element2.classList.replace("fixedVid2", "fixed2");
    RemoveBorder();
    Icon.classList.remove("rotatate");
  } else {
    Element2.classList.replace("fixed2", "fixedVid2");
    Icon.classList.add("rotatate");
    AddBorderRadius();
  }
};

export const RemoveBorder = () => {
  let mainBox = document.getElementById("borderBox");
  mainBox.classList.remove("borderRadius");
};

export const AddBorderRadius = () => {
  let mainBox = document.getElementById("borderBox");
  mainBox.classList.add("borderRadius");
};

export const Loading = () => {
  let loaderBox = document.getElementById("loaderBox");
  let mainVid = document.getElementById("v0");
  // mainVid.onloaded  = function () {
  //   console.log("leade")
  // }
  console.log(mainVid.readyState);

  // if (mainVid.readyState === 4) {
  //   // it's loaded
  //   showLoader();
  // }
  const showLoader = () => {
    loaderBox.classList.replace("display", "hide");
  };

  const myTimeout = setTimeout(showLoader, 5000);
};
