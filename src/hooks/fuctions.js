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

export const Loading = () =>{
  let  loaderBox = document.getElementById("loaderBox")
  let  mainVid = document.getElementById("v0");
  // mainVid.onloaded  = function () {
  //   console.log("leade")
  // }
  const showLoader = () =>{
    loaderBox.classList.replace("display", "hide")
  }

  const myTimeout = setTimeout(showLoader, 3000);


}
