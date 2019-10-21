import traineeInfo from "./traineesInfo.js";

document.onreadystatechange = function() {
  if (document.readyState == "complete") {
    const containers = document.querySelectorAll(".trainee-container");

    var browserWidth = Math.max(
      document.documentElement.clientWidth,
      window.innerWidth || 0
    );
    console.log(browserWidth);
    containers.forEach((container, index) => {
      if (index > 3) index -= 4;
      const { image, name, testimony } = traineeInfo[index];
      const imageNode = container.querySelector(".photo");
      const testimonyNode = container.querySelector(".testimony");
      const nameNode = container.querySelector(".name");

      imageNode.src = image;
      testimonyNode.innerHTML = testimony;
      nameNode.innerHTML = name;
    });
  }
};
