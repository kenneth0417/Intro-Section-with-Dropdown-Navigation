const lists = document.querySelectorAll(".header__left__items");
const featuresPop = document.querySelector(".features__popup");
const companyPop = document.querySelector(".company__popup");

const bar = document.querySelector(".header__bars");
const sidebar = document.querySelector(".sidebar");

const close = document.querySelector(".sidebar__close");

const sidebarFeatures = document.querySelectorAll(".sidebar__items");
const featuresPopup = document.querySelector(".sidebar__features__popup");
const companyPopup = document.querySelector(".sidebar__company__popup");

let isOpen = false;

lists.forEach((list) => {
  list.addEventListener("click", (e) => {
    isOpen = !isOpen;

    childEl = list.getElementsByTagName("img");

    if (childEl.length > 1) {
      if (isOpen) {
        childEl[1].classList.remove("header__left__icons--hide");
        childEl[0].className = "header__left__icons--hide";

        if (list.classList.contains("features")) {
          featuresPop.classList.remove("features__popup--hide");
        } else if (list.classList.contains("company")) {
          companyPop.classList.remove("company__popup--hide");
        }
      } else {
        childEl[1].classList.add("header__left__icons--hide");
        childEl[0].className = "header__left__icons";

        if (list.classList.contains("features")) {
          featuresPop.classList.add("features__popup--hide");
        } else if (list.classList.contains("company")) {
          companyPop.classList.add("company__popup--hide");
        }
      }
    }
  });
});

bar.addEventListener("click", () => {
  sidebar.classList.add("sidebar--active");
});

let sideBarOpen = false;

close.addEventListener("click", () => {
  sidebar.classList.remove("sidebar--active");
});

let featureBool = false;
let companyBool = true;

sidebarFeatures.forEach((item) => {
  item.addEventListener("click", (e) => {
    if (e.target.classList.contains("sidebar__features")) {
      featureBool = !featureBool;

      if (featureBool) {
        featuresPopup.style.display = "inline-block";
        item.children[0].className = "sidebar__icons--hide";
        item.children[1].className = "sidebar__icons";
      } else {
        featuresPopup.style.display = "none";
        item.children[0].className = "sidebar__icons";
        item.children[1].className = "sidebar__icons--hide";
      }
    } else if (e.target.classList.contains("sidebar__company")) {
      companyBool = !companyBool;

      if (companyBool) {
        companyPopup.style.display = "inline-block";
        item.children[0].className = "sidebar__icons--hide";
        item.children[1].className = "sidebar__icons";
      } else {
        companyPopup.style.display = "none";
        item.children[0].className = "sidebar__icons";
        item.children[1].className = "sidebar__icons--hide";
      }
    }
  });
});
