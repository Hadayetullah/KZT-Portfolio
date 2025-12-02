// const mobMenuIcon = document.querySelector('mob-icon');
const serviceModalContentRightBottomAnimationText =
  "Or, Talk with one of our Expert Heads over a 45 minutes “One-to-one” strategy session for Fully free for you only.";
const mainPathName = ["", "about", "services", "portfolio", "contact"];

let serviceModal = document.getElementById("serviceModal");
const servicesMenuItem = document.getElementById("service");

let arrowWhite = document.querySelector(".service__down__arrow__white");
let arrowBlack = document.querySelector(".service__down__arrow__black");

let satisfiedClientPhothos = document.querySelectorAll(
  ".hero__left__bottom__satisfied__client__left a"
);

let pathName = window.location.pathname.split("/");
let okBtn = null;
let crossBtn = null;
let contactModal = null;

/*--->>>>>>>>>>>>>>>>>>>>>>>>>>> DOM CONTENT LOADED START <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<--*/
let navSpecialButton = document.querySelector(".nav__special__button__parent");
document.addEventListener("DOMContentLoaded", function () {
  // HEADER START
  navSpecialButton.classList.add("activated");
  // HEADER END
});
/*--->>>>>>>>>>>>>>>>>>>>>>>>>>> DOM CONTENT LOADED END <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<--*/

/* ----------------------------------- HEADER START --------------------------- */

// console.log()
// navSpecialButton.children[0].addEventListener("mouseover", function() {
//   navSpecialButton.classList.add("deactivated")
// })
// navSpecialButton.children[0].addEventListener("mouseleave", function() {
//   navSpecialButton.classList.remove("deactivated")
// })

let header = document.getElementsByTagName("header")[0];
let customNav = document.querySelector(".custom__nav");
let link = header.querySelectorAll("header a");
let logoBlack = document.querySelector(".logo-black");
let logoWhite = document.querySelector(".logo-white");

let mobIcon = document.querySelector(".mob-icon");

// function showNavDetail() {
//     console.log("Menu")
// }
// mobMenuIcon.addEventListener("click", function() {
//     showNavDetail();
// })

// NAVIGATION STROKE
let navLinks = document.querySelectorAll(".custom__nav li a");
navLinks.forEach(function (item) {
  // console.log(item.offsetWidth, item.parentElement.offsetWidth)
  item.parentElement.style.setProperty(
    "--nav-stroke",
    `${item.offsetWidth + 7}px`
  );
  item.parentElement.classList.remove("active-element");
  if (item.pathname.split("/")[1] === pathName[1]) {
    // item.classList.add("active-element");
    item.parentElement.classList.add("active-element");
    item.parentElement.style.setProperty(
      "--nav-stroke",
      `${item.offsetWidth + 7}px`
    );
  }
});

function handleMobHeader() {
  Object.keys(customNav.children).forEach((item) => {
    customNav.children[item].style.height = "auto";
  });

  link.forEach((a) => {
    a.style.color = "#fff";
  });

  if (mobIcon.classList.contains("act")) {
    logoBlack.style.display = "block";
    logoWhite.style.display = "none";
  } else {
    logoBlack.style.display = "none";
    logoWhite.style.display = "block";
  }
  // logoBlack.style.display = "block";
  // logoWhite.style.display = "none";

  // arrowWhite.style.display = "none";
  // arrowBlack.style.display = "block";
}

mobIcon.addEventListener("click", function (event) {
  // console.log(event)
  handleMobHeader();
});

function handleHeaderBackground() {
  let pathName = window.location.pathname;
  let currentPathName = pathName.split("/")[1];
  if (!mainPathName.includes(currentPathName)) {
    // logoWhite.style.display = "none";
    // logoBlack.style.display = "block";

    link.forEach((a) => {
      a.style.color = "#333";
    });
    header.style.background = "#fff";
  }
}
/* ----------------------------------- HEADER END --------------------------- */

/* ------------------------------------------------------------------ HOME PAGE START ---------------------------------------------------------------- */
let textContents = null;
let satisfiedClientOverlapping = -30;
// console.log(window.location.pathname.split("/")[1]);
if (pathName[1] === "") {
  // TYPING TEXT ANIMATION
  window.addEventListener("load", function () {
    // let header = document.getElementsByTagName("header")[0];
    // console.log(header.scrollHeight)
    textContents = document.querySelectorAll(".text__animation__content");
    // console.log()
    if (textContents.length !== 0) {
      animateText(0);
    }
  });

  function handleClientPhotoEffectHover(index) {
    // console.log(index, photo)
    satisfiedClientPhothos.forEach((item, i) => {
      if (i <= index) {
        return;
      } else {
        item.style.transform = `translateX(${
          satisfiedClientOverlapping * i - satisfiedClientOverlapping
        }px)`;
        // console.log(item)
      }
    });
  }
  function handleClientPhotoDiseffectHover() {
    satisfiedClientPhothos.forEach((photo, index) => {
      if (index === 0) return;
      else {
        photo.style.transform = `translateX(${
          satisfiedClientOverlapping * index
        }px)`;
      }
    });
  }
  // console.log(satisfiedClientPhothos);
  satisfiedClientPhothos.forEach((photo, index) => {
    photo.addEventListener("mouseover", () =>
      handleClientPhotoEffectHover(index)
    );
    photo.addEventListener("mouseleave", () =>
      handleClientPhotoDiseffectHover()
    );
    if (index === 0) return;
    else {
      photo.style.transform = `translateX(${
        satisfiedClientOverlapping * index
      }px)`;
    }
    // console.log(photo)
  });

  // TYPING TEXT ANIMATION
  function animateText(index) {
    // Set the opacity for the current text

    // Set the width to the fixed value
    // textContents[index].style.opacity = 1;
    textContents[index].classList.add("text__animation__content__active");
    textContents[index].style.width = `${
      textContents[index].scrollWidth + 10
    }px`;
    // textContents[index].style.width = '100%';

    // Reset opacity and width for the current text after a delay
    setTimeout(() => {
      textContents[index].style.width = "0";

      // textContents[index].style.opacity = 0;

      // Move to the next text, or loop back to the beginning
      const nextIndex = (index + 1) % textContents.length;

      // Repeat the animation for the next text after a delay
      setTimeout(() => {
        textContents[index].classList.remove(
          "text__animation__content__active"
        );
        animateText(nextIndex);
      }, 1000); // Adjust the timing as needed
    }, 3000);
  }

  // Start the animation with the first text
  // animateText(0);
}
/* ------------------------------------------------------------------ HOME PAGE END ---------------------------------------------------------------- */

/* ----------------------------------- CONTACT US START --------------------------- */

if (pathName[1] === "contact") {
  let contactForm;
  contactModal = document.getElementById("contact-modal");
  contactForm = document.getElementById("contact-form");

  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    // console.log(this.action);
    let csrf_token;
    contactModal.style.display = "flex";
    csrf_token = contactForm.getAttribute("data-csrf-token-contact");

    //   event.preventDefault();

    let formData = new FormData(this);

    fetch(this.action, {
      method: "POST",
      body: formData,
      headers: {
        "X-CSRFToken": csrf_token,
      },
    })
      .then((response) => response.json()) // You can adjust this based on your view's response
      .then((data) => {
        // Handle the response data as needed
        //   contactModal.lastElementChild.children[1].innerHTML = data.msg;
        //   console.log(contactModal.lastElementChild.children[1].innerHTML)
        //   console.log(data);

        if (data.status === 201) {
          contactModal.firstElementChild.style.display = "none";
          contactModal.lastElementChild.style.display = "flex";

          contactModal.lastElementChild.children[1].style.color = "#3b3b3b";
          contactModal.lastElementChild.children[1].innerHTML = data.msg;

          crossBtn = contactModal.lastElementChild.children[0];
          okBtn = contactModal.lastElementChild.children[2];
          okBtn.addEventListener("click", hideMsg);
          crossBtn.addEventListener("click", hideMsg);

          contactForm.reset();
        } else if (data.status === 400) {
          contactModal.firstElementChild.style.display = "none";
          contactModal.lastElementChild.style.display = "flex";

          contactModal.lastElementChild.children[1].innerHTML = data.msg;
          contactModal.lastElementChild.children[1].style.color = "#EB1C24";

          crossBtn = contactModal.lastElementChild.children[0];
          okBtn = contactModal.lastElementChild.children[2];
          okBtn.addEventListener("click", hideMsg);
          crossBtn.addEventListener("click", hideMsg);
        }
      })
      .catch((error) => {
        contactModal.firstElementChild.style.display = "none";
        contactModal.lastElementChild.style.display = "flex";
        // Handle errors
        //   contactModal.lastElementChild.children[1].innerHTML = data.msg;
        console.log("Error:", error);
      });
  });
}

/* ----------------------------------- CONTACT US END ----------------------------- */

/* TEST ANIMATION UNDER DEVELOPMENT */
let serviceModalContentRightBottomAnimation = document.querySelector(
  ".service__modal__content__right__bottom__animation"
);
const anchorElement = document.createElement("a");
for (const char of serviceModalContentRightBottomAnimationText) {
  const spanElement = document.createElement("span");
}

// console.log(serviceModalContentRightBottomAnimation);
/* TEST ANIMATION UNDER DEVELOPMENT */

// let sliderElem;

// Get the SVG element by its id
// var svgElement = document.getElementById("Layer_1");
// var svgElement = document.getElementById("k");

// Get the current width, height, x, and y
// var currentWidth = parseFloat(svgElement.getAttribute("width"));
// var currentHeight = parseFloat(svgElement.getAttribute("height"));
// var currentX = parseFloat(svgElement.getAttribute("x")) || 0; // Default to 0 if x is not present
// var currentY = parseFloat(svgElement.getAttribute("y")) || 0; // Default to 0 if y is not present

// // Reduce the width and height by 20%
// var newWidth = currentWidth * 0.8;
// var newHeight = currentHeight * 0.8;

// // Calculate the middle point of the original SVG
// var middleX = currentX + currentWidth / 2;
// var middleY = currentY + currentHeight / 2;

// // Calculate the new x and y coordinates to keep the middle point the same
// var newX = middleX - newWidth / 2;
// var newY = middleY - newHeight / 2;

// // Update the attributes with the new values
// svgElement.setAttribute("width", newWidth);
// svgElement.setAttribute("height", newHeight);
// svgElement.setAttribute("x", newX);
// svgElement.setAttribute("y", newY);

// svgElement.addEventListener('mouseover', function() {
//     // Reduce the width and height by 20%
//     newWidth = currentWidth + (currentWidth * 0.2);
//     newHeight = currentHeight + (currentHeight * 0.2);

//     // Calculate the middle point of the original SVG
//     var middleX = currentX + currentWidth / 2;
//     var middleY = currentY + currentHeight / 2;

//     // Calculate the new x and y coordinates to keep the middle point the same
//     var newX = middleX - newWidth / 2;
//     var newY = middleY - newHeight / 2;

//     // Update the attributes with the new values
//     svgElement.setAttribute("width", newWidth);
//     svgElement.setAttribute("height", newHeight);
//     svgElement.setAttribute("x", newX);
//     svgElement.setAttribute("y", newY);
// })

/* -------------------------------------- GET A FREE QUOTE START ------------------------------------------- */
if (pathName[1] === "get-a-free-quote") {
  let qsContent = document.querySelectorAll("#qs__content");
  qsContent.forEach((item) => {
    item.parentElement.style.height = `${item.offsetHeight + 10}px`;
    item.style.setProperty(
      "--qs-before-top",
      `${parseFloat(item.offsetHeight) / 2}px`
    );
    item.style.setProperty(
      "--qs-after-top",
      `${parseFloat(item.offsetHeight) / 2 - 7}px`
    );

    item.addEventListener("click", function (event) {
      handleQsContent(item, event);
    });
  });

  function handleQsContent(item, e) {
    let mainElement = e.srcElement.parentElement.children;
    let child1 = mainElement[0].offsetHeight;
    let child2 = mainElement[1].offsetHeight;
    let totalWidth = child1 + child2 + 30;

    if (item.parentElement.classList.contains("qs__content__active")) {
      qsContent.forEach((i) => {
        i.parentElement.style.height = `${i.offsetHeight + 10}px`;
        i.parentElement.classList.remove("qs__content__active");
      });
    } else {
      qsContent.forEach((i) => {
        i.parentElement.style.height = `${i.offsetHeight + 10}px`;
        i.parentElement.classList.remove("qs__content__active");
      });

      item.parentElement.style.height = `${totalWidth}px`;
      item.parentElement.classList.add("qs__content__active");
    }
  }

  let contactForm = document.getElementById("contact-form-quote");
  contactModal = document.getElementById("contact-modal");

  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    let csrf_token;
    contactModal.style.display = "flex";
    csrf_token = contactForm.getAttribute("data-csrf-token-quote");

    let formData = new FormData(this);

    fetch(this.action, {
      method: "POST",
      body: formData,
      headers: {
        "X-CSRFToken": csrf_token,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response data as needed
        //   contactModal.lastElementChild.children[1].innerHTML = data.msg;
        //   console.log(contactModal.lastElementChild.children[1].innerHTML)
        //   console.log(data);

        if (data.status === 201) {
          contactModal.firstElementChild.style.display = "none";
          contactModal.lastElementChild.style.display = "flex";

          contactModal.lastElementChild.children[1].style.color = "#3b3b3b";
          contactModal.lastElementChild.children[1].innerHTML = data.msg;

          crossBtn = contactModal.lastElementChild.children[0];
          okBtn = contactModal.lastElementChild.children[2];
          okBtn.addEventListener("click", hideMsg);
          crossBtn.addEventListener("click", hideMsg);

          contactForm.reset();
        } else if (data.status === 400) {
          contactModal.firstElementChild.style.display = "none";
          contactModal.lastElementChild.style.display = "flex";

          contactModal.lastElementChild.children[1].innerHTML = data.msg;
          contactModal.lastElementChild.children[1].style.color = "#EB1C24";

          crossBtn = contactModal.lastElementChild.children[0];
          okBtn = contactModal.lastElementChild.children[2];
          okBtn.addEventListener("click", hideMsg);
          crossBtn.addEventListener("click", hideMsg);
        }
      })
      .catch((error) => {
        contactModal.firstElementChild.style.display = "none";
        contactModal.lastElementChild.style.display = "flex";
        // Handle errors
        //   contactModal.lastElementChild.children[1].innerHTML = data.msg;
        console.log("Error:", error);
      });
  });
}

function hideMsg() {
  if (contactModal != null) {
    contactModal.style.display = "none";
    contactModal.firstElementChild.style.display = "initial";
    contactModal.lastElementChild.style.display = "none";
  }
}
/* ------------------------------------------------------------------ GET A FREE QUOTE END ---------------------------------------------------------------- */

/* ------------------------------------------------------------------ MODAL START ---------------------------------------------------------------- */
function showServiceModal() {
  serviceModal.classList.remove("service__modal__hidden");

  if (window.scrollY >= 70 && header.classList.contains("move")) {
    if (!serviceModal.classList.contains("service__modal__hidden")) {
      serviceModal.style.top = "58px";
    } else {
      serviceModal.removeAttribute("style");
      serviceModal.classList.add("service__modal__hidden");
    }
  } else {
    if (!serviceModal.classList.contains("service__modal__hidden")) {
      serviceModal.style.top = "119px";
    } else {
      serviceModal.removeAttribute("style");
      serviceModal.classList.add("service__modal__hidden");
    }
  }
}

// function showResponsiveServiceModal () {
//   if(!servicesMenuItem.children[0].classList.contains("active")) {
//       servicesMenuItem.children[0].classList.add("active");
//   }
// }

function hideServiceModal() {
  serviceModal.removeAttribute("style");
  serviceModal.classList.add("service__modal__hidden");

  if (window.scrollY >= 70 && header.classList.contains("move")) {
    if (!serviceModal.classList.contains("service__modal__hidden")) {
      serviceModal.style.top = "58px";

      serviceModal.removeAttribute("style");
      serviceModal.classList.add("service__modal__hidden");
    }
  }
}

servicesMenuItem.addEventListener("mouseover", function () {
  // ACTIVE MODAL MENU START
  let defaultActiveElement = document.getElementById("defaultActiveElement");
  seoServices(defaultActiveElement);
  // ACTIVE MODAL MENU END

  if (document.body.clientWidth >= 992) {
    servicesMenuItem.children[0].classList.toggle("active");
    showServiceModal();
  }
});

servicesMenuItem.addEventListener("mouseleave", function (event) {
  servicesMenuItem.children[0].classList.toggle("active");

  if (document.body.clientWidth >= 992) {
    if (event.clientY < servicesMenuItem.getBoundingClientRect().bottom) {
      hideServiceModal();
    }
  }
});

// servicesMenuItem.addEventListener("click", function (event) {

// })

serviceModal.addEventListener("mouseenter", function () {
  // Show modal when the cursor enters the modal
  if (document.body.clientWidth >= 992) {
    showServiceModal();
  }
});

serviceModal.addEventListener("mouseleave", function (event) {
  // console.log("Mouse Leave")
  // Hide modal when the cursor leaves the modal
  if (document.body.clientWidth >= 992) {
    hideServiceModal();
  }
});

// function trackCursorPosition(event) {
//     // Extract the cursor position from the event
//     const x = event.clientX;
//     const y = event.clientY;

//     // Display the cursor position
//     console.clear();
//     console.log(`Cursor Position - X: ${x}, Y: ${y}`);
//     // if(event){
//     //     const service = document.getElementById('service');
//     // }
//     console.log(event.target)
//   }

//   // Add a mousemove event listener to the document
//   document.addEventListener('mousemove', trackCursorPosition);

// Navbar active
// document.addEventListener("DOMContentLoaded", function () {
//     // NAVIGATION
//     let pathName = window.location.pathname;
//     handleHeaderBackground();
//     let navLinks = document.querySelectorAll(".custom__nav li a");
//     navLinks.forEach(function (link) {
//         link.parentElement.classList.remove("active-element");
//         if (link.pathname === pathName) {
//             // link.classList.add("active-element");
//             link.parentElement.classList.add("active-element");
//         }
//     });

// // SLIDER
// let isNext = true;
// sliderElem = document.getElementById('myslider');

// handleSliderIndex(-1);

// const slider = simpleslider.getSlider({
//     container: sliderElem,
//     onChange: handleSliderIndex
// });

// const manager = new Hammer.Manager(sliderElem);
// const Swipe = new Hammer.Swipe({direction: Hammer.DIRECTION_HORIZONTAL});
// manager.add(Swipe);

// manager.on('swipeleft', function() {
//     if (isNext) {
//     slider.reverse();
//     isNext = false;
//     }
//     slider.next();
// });

// manager.on('swiperight', function(e) {
//     if (!isNext) {
//     slider.reverse();
//     isNext = true;
//     }
//     slider.next();
// });
// });

// Header Scroll
window.addEventListener("scroll", function () {
  if (document.body.clientWidth <= 991) {
    // handleMobHeader();
    return;
  } else {
    // console.log("customNav: ", customNav)
    // serviceModal = document.getElementById("serviceModal");

    if (window.scrollY >= 70 && header.classList.contains("move")) {
      // if(mobIcon.classList.contains("act")) {
      //     logoBlack.style.display = "block";
      //     logoWhite.style.display = "none";
      // } else {
      //     logoBlack.style.display = "none";
      //     logoWhite.style.display = "block";
      // }

      Object.keys(customNav.children).forEach((item) => {
        customNav.children[item].style.height = "45px";
      });
    } else {
      Object.keys(customNav.children).forEach((item) => {
        customNav.children[item].style.height = "85px";
      });

      // customNav.children.forEach((child) => {
      //     console.log("Child: ", child)
      //     child.style.height = "65px";
      // })

      // if (!serviceModal.classList.contains("service__modal__hidden")) {
      //   serviceModal.style.top = "119px";

      //   // logoBlack.style.display = "block";
      //   // arrowBlack.style.display = "block";

      //   // logoWhite.style.display = "none";
      //   // arrowWhite.style.display = "none";
      //   link.forEach((a) => {
      //     a.style.color = "#333";
      //   });
      //   header.style.background = "#fff";
      // } else {
      //   serviceModal.removeAttribute("style");
      //   serviceModal.classList.add("service__modal__hidden");

      //   // logoBlack.style.display = "block";
      //   // arrowBlack.style.display = "block";

      //   // logoWhite.style.display = "none";
      //   // arrowWhite.style.display = "none";

      //   // logoBlack.style.display = "block";
      //   // arrowBlack.style.display = "block";

      //   // logoWhite.style.display = "none";
      //   // arrowWhite.style.display = "none";

      //   link.forEach((a) => {
      //     a.style.color = "#333";
      //   });
      //   header.style.background = "#fff";

      //   handleHeaderBackground();
      // }
      // logoBlack.style.display = "block";
      // arrowBlack.style.display = "block";

      // logoWhite.style.display = "none";
      // arrowWhite.style.display = "none";

      // link.forEach((a => {
      //     a.style.color = "#333";
      // }))
      // header.style.background = "#ffff";
    }
  }
});

// Inside modal
function marketingServices(e) {
  let buttonParrent = e.parentElement;
  let modalList = buttonParrent.parentElement;
  let textWidth = e.children[0].clientWidth;
  // let textColor = e.children[0].

  stroke(modalList);
  e.previousElementSibling.style.width = `${textWidth + 21}px`;
  e.children[0].classList.add("service__modal__content__left__text__active");
  buttonParrent.classList.add("service__modal__title__active");

  let affiliate = document.querySelector(".marketing");
  let itemList = affiliate.parentElement.children;
  Object.keys(itemList).forEach((item) => {
    itemList[item].classList.remove("service__modal__active");
  });

  affiliate.classList.add("service__modal__active");
}

function seoServices(e) {
  let buttonParrent = e.parentElement;
  let modalList = buttonParrent.parentElement;
  let textWidth = e.children[0].clientWidth;
  // console.log(e.children[0])

  // console.log(e)

  stroke(modalList);
  e.previousElementSibling.style.width = `${textWidth + 21}px`;
  e.children[0].classList.add("service__modal__content__left__text__active");
  buttonParrent.classList.add("service__modal__title__active");

  let seo = document.querySelector(".seo");
  let itemList = seo.parentElement.children;
  Object.keys(itemList).forEach((item) => {
    itemList[item].classList.remove("service__modal__active");
  });

  seo.classList.add("service__modal__active");
}

function contentServices(e) {
  let buttonParrent = e.parentElement;
  let modalList = buttonParrent.parentElement;
  let textWidth = e.children[0].clientWidth;

  // console.log(e)

  stroke(modalList);
  e.previousElementSibling.style.width = `${textWidth + 21}px`;
  e.children[0].classList.add("service__modal__content__left__text__active");
  buttonParrent.classList.add("service__modal__title__active");

  let content = document.querySelector(".content");
  let itemList = content.parentElement.children;
  Object.keys(itemList).forEach((item) => {
    itemList[item].classList.remove("service__modal__active");
  });

  content.classList.add("service__modal__active");
}

function itServices(e) {
  let buttonParrent = e.parentElement;
  let modalList = buttonParrent.parentElement;
  let textWidth = e.children[0].clientWidth;

  // console.log(e)

  stroke(modalList);
  e.previousElementSibling.style.width = `${textWidth + 21}px`;
  e.children[0].classList.add("service__modal__content__left__text__active");
  buttonParrent.classList.add("service__modal__title__active");

  let it = document.querySelector(".it");
  let itemList = it.parentElement.children;
  Object.keys(itemList).forEach((item) => {
    itemList[item].classList.remove("service__modal__active");
  });

  it.classList.add("service__modal__active");
}

// Display Hover Modal Stroke
function modalContentDisplayStroke(e) {
  // console.log(e.previousElementSibling)
  let textWidth = e.children[0].clientWidth;
  if (
    !e.children[0].classList.contains(
      "service__modal__content__left__text__active"
    )
  ) {
    e.previousElementSibling.style.width = `${textWidth + 21}px`;
  }
}

// Remove Hover Modal Stroke
function modalContentRemoveStroke(e) {
  if (
    !e.children[0].classList.contains(
      "service__modal__content__left__text__active"
    )
  ) {
    e.previousElementSibling.removeAttribute("style");
  }
}

// Modal Stroke
function stroke(modalList) {
  let itemList = modalList.children;
  Object.keys(itemList).forEach((item) => {
    itemList[item].children[0].removeAttribute("style");
    itemList[item].classList.remove("service__modal__title__active");
    itemList[item].children[1].children[0].classList.remove(
      "service__modal__content__left__text__active"
    );
    // itemList[item].classList.remove("service__modal__active");
    // console.log();
  });
}

/* ----------------------------------------------------- MODAL END ------------------------------------------------- */

/* ---------------------------------------------------------------- OBSERVER START ------------------------------------------------- */
// Affiliate Campaign Management Section1
// let affiliate__campaign__management = document.querySelector('.affiliate__campaign__management');
// let acmSection = affiliate__campaign__management.children[0];
// let acmSectionOptions = {
//     threshold: 0.5,
// }
// const acmSection_1Observer = new IntersectionObserver((entry, observer) => {
//     // console.log(entry)
//     if(entry[0].isIntersecting){
//         let eleTarget = entry[0].target
//         let leftSection = eleTarget.children[0]
//         let rightSection = eleTarget.children[1]

//         leftSection.classList.add('section1__left__active')
//         rightSection.classList.add('section1__right__active')
//         rightSection.children[0].classList.add('section1__right__h1__active')
//         // console.log(rightSection.children)
//     }
// }, acmSectionOptions)

// acmSection_1Observer.observe(acmSection);

// console.log(acmSection);

/* ---------------------------------------------------------------- OBSERVER END ------------------------------------------------- */

// ----------------- SIMPLE SLIDER ---------------------  //
// function handleSliderIndex(e) {
//   let currentSlideRoute;
//   let sliders = sliderElem.children;
//   if (sliders.length <= e + 1) {
//     currentSlideRoute = sliders[0].children[0].pathname;
//   } else {
//     currentSlideRoute = sliders[e + 1].children[0].pathname;
//   }

//   sliderElem.parentElement.children[1].children[0].setAttribute(
//     "href",
//     `${currentSlideRoute}`
//   );
// }

// console.log(sliderElem)

// console.log(slider)
// var manager = new Hammer.Manager(sliderElem);
// var Swipe = new Hammer.Swipe({direction: Hammer.DIRECTION_HORIZONTAL});

// manager.add(Swipe);

// manager.on('swipeleft', function() {
//     if (isNext) {
//     slider.reverse();
//     isNext = false;
//     }
//     slider.next();
// });

// manager.on('swiperight', function(e) {
//     if (!isNext) {
//     slider.reverse();
//     isNext = true;
//     }
//     slider.next();
// });

/* ------------------------------------- FOOTER START ------------------------------- */

contactModal = document.getElementById("contact-modal");
let newsletterForm = document.getElementById("newsletter-form");

newsletterForm.addEventListener("submit", function (event) {
  event.preventDefault();
  // console.log(this.action);
  let csrf_token;
  contactModal.style.display = "flex";
  csrf_token = newsletterForm.getAttribute("data-csrf-token-newsletter");

  //   event.preventDefault();

  let formData = new FormData(this);

  fetch(window.location.origin + "/", {
    method: "POST",
    body: formData,
    headers: {
      "X-CSRFToken": csrf_token,
    },
  })
    .then((response) => response.json()) // You can adjust this based on your view's response
    .then((data) => {
      if (data.status === 201) {
        // console.log(contactModal)
        contactModal.firstElementChild.style.display = "none";
        contactModal.lastElementChild.style.display = "flex";

        contactModal.lastElementChild.children[1].style.color = "#3b3b3b";
        contactModal.lastElementChild.children[1].innerHTML = data.msg;

        crossBtn = contactModal.lastElementChild.children[0];
        okBtn = contactModal.lastElementChild.children[2];
        okBtn.addEventListener("click", hideMsg);
        crossBtn.addEventListener("click", hideMsg);

        newsletterForm.reset();
      } else if (data.status === 400) {
        contactModal.firstElementChild.style.display = "none";
        contactModal.lastElementChild.style.display = "flex";

        contactModal.lastElementChild.children[1].innerHTML = data.msg;
        contactModal.lastElementChild.children[1].style.color = "#EB1C24";

        crossBtn = contactModal.lastElementChild.children[0];
        okBtn = contactModal.lastElementChild.children[2];
        okBtn.addEventListener("click", hideMsg);
        crossBtn.addEventListener("click", hideMsg);
      }
    })
    .catch((error) => {
      contactModal.firstElementChild.style.display = "none";
      contactModal.lastElementChild.style.display = "flex";
      // Handle errors
      //   contactModal.lastElementChild.children[1].innerHTML = data.msg;
      console.log("Error:", error);
    });
});
/* ------------------------------------- FOOTER END ------------------------------- */

/* --->>>>>>>>>>>>>>>>>>>>>>>>>>>> WEB DEVELOPMENT PAGE START >>>>>>>>>>>>>>>>>>>>>>>>>>>--- */

if (pathName[2] === "web-development") {
  window.addEventListener("load", function () {
    typeWriter();
  });

  let webDevelopmtTypingTexts = ["First text", "Second text", "Third text"];
  const webDevelopmtTypingSpeed = 20;
  const DwebDevelopmtTypingDelayBeforeReverse = 2000;

  let webDevelopmtTypingTextIndex = 0;
  let webDevelopmtTypingForward = true;

  function typeWriter() {
    const currentText = webDevelopmtTypingTexts[webDevelopmtTypingTextIndex]; // Get the current text from the array
    let webDevelopmtTypingIndex = webDevelopmtTypingForward
      ? 0
      : currentText.length - 1; // Current index of the text being typed
    const increment = webDevelopmtTypingForward ? 1 : -1; // Increment or decrement index based on direction

    function typeNextCharacter() {
      if (
        webDevelopmtTypingIndex >= 0 &&
        webDevelopmtTypingIndex < currentText.length
      ) {
        document.getElementById("web-hero-animation").innerHTML =
          currentText.substring(0, webDevelopmtTypingIndex + 1);
        webDevelopmtTypingIndex += increment;
      } else {
        webDevelopmtTypingForward = !webDevelopmtTypingForward; // Toggle direction
        if (!webDevelopmtTypingForward) {
          setTimeout(typeWriter, DwebDevelopmtTypingDelayBeforeReverse); // Start typing the next text after the delay
        } else {
          webDevelopmtTypingTextIndex =
            (webDevelopmtTypingTextIndex + 1) % webDevelopmtTypingTexts.length; // Move to the next text in the array
          setTimeout(typeWriter, 0); // Start typing the next text immediately
        }
        return; // Exit early to prevent extra call to setTimeout
      }

      // Continue typing
      setTimeout(typeNextCharacter, webDevelopmtTypingSpeed);
    }

    // Start typing animation
    typeNextCharacter();
  }

  //   let webDevelopmentRelatedServices = document.getElementById('web-development-related__services');
  //   webDevelopmentRelatedServices.firstElementChild.style.transform = "translate3d(0, 0, 0)";
  //   // let distanceFromTop = webDevelopmentRelatedServices.getBoundingClientRect().top;
  //   let distanceFromTopToEnd = webDevelopmentRelatedServices.getBoundingClientRect().bottom;

  //   let relatedImageMoved = 0;
  //   let replacementValue = 0;
  //   let scrollDifferenceValue = 0;
  //   // console.log(distanceFromTop)

  //   // let lastScrollPosition = window.scrollY;

  // function updateTransform() {
  //   let distanceFromTop = webDevelopmentRelatedServices.getBoundingClientRect();
  //   console.log(distanceFromTop)
  //   console.log("Current Position: ", window.scrollY)
  //   // let currentScrollPosition = window.scrollY;

  //   // if(currentScrollPosition > distanceFromTop && currentScrollPosition < distanceFromTopToEnd){
  //   //   // scrollDifferenceValue = currentScrollPosition -
  //   //   // currentScrollPosition/webDevelopmentRelatedServices.scrollHeight

  //   // } else if (currentScrollPosition > distanceFromTop && currentScrollPosition > distanceFromTopToEnd) {}
  //   // // console.log(distanceFromTopToEnd)

  //   // // console.log(webDevelopmentRelatedServices.offsetTop)
  //   // // let distanceFromTop = webDevelopmentRelatedServices.getBoundingClientRect().top;

  //   //   // let scrollDirection = currentScrollPosition > lastScrollPosition ? 'down' : 'up';

  //   //   // console.log(currentScrollPosition)

  //   //   // if (scrollDirection === 'down') {
  //   //   //     webDevelopmentRelatedServices.style.transform = "translate3d(0, -50px, 0)";
  //   //   // } else {
  //   //   //     webDevelopmentRelatedServices.style.transform = "translate3d(0, 0, 0)";
  //   //   // }

  //   //   // lastScrollPosition = currentScrollPosition;
  // }

  // window.addEventListener('scroll', updateTransform);

  let webDevelopmentRelatedServices = document.getElementById(
    "web-development-related__services"
  );

  let relatedSeviceHeight = webDevelopmentRelatedServices.clientHeight;
  let stretchedValue = 0;

  webDevelopmentRelatedServices.firstElementChild.style.transform =
    "translate3d(0, 0, 0)";

  let lastScrollPosition = window.scrollY;
  // console.log("Last Scrolled Position: ", lastScrollPosition);

  // Function to get the visible portion of the element
  function getVisiblePortionHeight(element) {
    const rect = element.getBoundingClientRect();
    // console.log(rect)
    const viewportHeight =
      window.innerHeight || document.documentElement.clientHeight;
    const visibleTop = Math.max(rect.top, 0);
    const visibleBottom = Math.min(rect.bottom, viewportHeight);

    const visibleHeight = visibleBottom - visibleTop;

    let currentScrollPosition = window.scrollY;

    let scrollDirection =
      currentScrollPosition > lastScrollPosition ? "down" : "up";

    lastScrollPosition = currentScrollPosition;

    if (visibleHeight > 0 && scrollDirection === "down") {
      stretchedValue += Math.ceil(visibleHeight / relatedSeviceHeight);

      webDevelopmentRelatedServices.firstElementChild.style.transform = `translate3d(0, ${-stretchedValue}px, 0)`;
      relatedSeviceHeight += visibleHeight;
      // console.log(stretchedValue)
    } else if (visibleHeight > 0 && scrollDirection === "up") {
      stretchedValue -= Math.ceil(visibleHeight / relatedSeviceHeight);
      webDevelopmentRelatedServices.firstElementChild.style.transform = `translate3d(0, ${-stretchedValue}px, 0)`;
      relatedSeviceHeight -= visibleHeight;
      // console.log(stretchedValue)
    } else {
      stretchedValue = 0;
    }

    // return visibleHeight;
  }

  // Event listener to check when the element comes into view
  window.addEventListener("scroll", function () {
    getVisiblePortionHeight(webDevelopmentRelatedServices);
    // const visibleHeight = getVisiblePortionHeight(
    //   webDevelopmentRelatedServices
    // );

    // console.log("Visible height of the element:", visibleHeight);
  });

  // You need to transpile this code
  // import Splide from "@splidejs/splide";
  // import { Grid } from "@splidejs/splide-extension-grid";

  document.addEventListener("DOMContentLoaded", function () {
    // let a = document.querySelector(".splide");
    // console.log(a);
    // You need to transpile this code
    // import Splide from "@splidejs/splide";
    // import { Grid } from "@splidejs/splide-extension-grid";

    const splide = new Splide(".splide", {
      type: "loop",
      height: "14rem",
      perPage: 2,
      perMove: 1,
      // grid: {
      //   // You can define rows/cols instead of dimensions.
      //   dimensions: [
      //     [1, 1],
      //     [2, 2],
      //     [2, 1],
      //     [1, 2],
      //     [2, 2],
      //     [3, 2],
      //   ],
      //   gap: {
      //     row: "6px",
      //     col: "6px",
      //   },
      // },
      // breakpoints: {
      //   640: {
      //     height: "8rem",
      //     perPage: 1,
      //     grid: {
      //       dimensions: [
      //         [2, 2],
      //         [1, 1],
      //         [2, 1],
      //         [1, 2],
      //         [2, 2],
      //       ],
      //     },
      //   },
      // },
    });

    splide.mount();
  });

  // const splide = new Splide(".splide", {
  //   type: "loop",
  //   height: "14rem",
  //   perPage: 2,
  //   perMove: 1,
  //   grid: {
  //     // You can define rows/cols instead of dimensions.
  //     dimensions: [
  //       [1, 1],
  //       [2, 2],
  //       [2, 1],
  //       [1, 2],
  //       [2, 2],
  //       [3, 2],
  //     ],
  //     gap: {
  //       row: "6px",
  //       col: "6px",
  //     },
  //   },
  //   breakpoints: {
  //     640: {
  //       height: "8rem",
  //       perPage: 1,
  //       grid: {
  //         dimensions: [
  //           [2, 2],
  //           [1, 1],
  //           [2, 1],
  //           [1, 2],
  //           [2, 2],
  //         ],
  //       },
  //     },
  //   },
  // });

  // splide.mount({ Grid });

  // // SLIDER
  // let isNext = true;
  // sliderElem = document.getElementById('myslider');

  // // handleSliderIndex(-1);

  // const slider = simpleslider.getSlider({
  //     container: sliderElem,
  //     delay: 3,
  //     // onChange: handleSliderIndex
  // });

  // const manager = new Hammer.Manager(sliderElem);
  // const Swipe = new Hammer.Swipe({direction: Hammer.DIRECTION_HORIZONTAL});
  // manager.add(Swipe);

  // manager.on('swipeleft', function() {
  //     if (isNext) {
  //     slider.reverse();
  //     isNext = false;
  //     }
  //     slider.next();
  // });

  // manager.on('swiperight', function(e) {
  //     if (!isNext) {
  //     slider.reverse();
  //     isNext = true;
  //     }
  //     slider.next();
  // });

  // function handleSliderIndex(e) {
  //   let currentSlideRoute;
  //   let sliders = sliderElem.children;
  //   if (sliders.length <= e + 1) {
  //     currentSlideRoute = sliders[0].children[0].pathname;
  //   } else {
  //     currentSlideRoute = sliders[e + 1].children[0].pathname;
  //   }

  //   // sliderElem.parentElement.children[1].children[0].setAttribute(
  //   //   "href",
  //   //   `${currentSlideRoute}`
  //   // );
  // }
}

/* --->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> WEB DEVELOPMENT PAGE END >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>--- */
