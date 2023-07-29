"use strict";

const amtAdd = document.querySelector(".amount-plus");
const amtSub = document.querySelector(".amount-minus");
const amtVal = document.querySelector(".amount-value");
const amtSubmit = document.querySelector(".amount__submit");
const cartAmt = document.querySelector(".cart-amount");

// const mImg = document.querySelector('.m-img1');
// const mImg2 = document.querySelector('.m-img2');
// const mImg3 = document.querySelector('.m-img3');
// const mImg4 = document.querySelector('.m-img4');

const mImg = document.querySelectorAll(".m-img");
const renderedImg = document.querySelector(".render-img");

// Implemwnting the plus sign
amtAdd.addEventListener("click", (e) => {
  e.preventDefault();
  amtVal.textContent >= 0 ? amtVal.textContent++ : 0;
});

// Implemwnting the minus sign
amtSub.addEventListener("click", (e) => {
  e.preventDefault();
  amtVal.textContent > 0 ? amtVal.textContent-- : 0;
});

// Implementing the add to cart functionality
let cartAmtHolder = [];
amtSubmit.addEventListener("click", () => {
  cartAmt.style.display = "block";
  //   cartAmt.textContent = amtVal.textContent;
  cartAmtHolder.push(amtVal.textContent);
  amtVal.textContent = 0;
  const amtTotal = cartAmtHolder.reduce((acc, amt) => acc + parseFloat(amt), 0);
  cartAmt.textContent = amtTotal;
});

// Implementing the img-thumbnails functionality.
mImg.forEach((cur, i, arr) => {
  cur.addEventListener("click", (e) => {
    if (i === 0) {
      renderedImg.setAttribute("src", "/image-product-1.12c5dacc.jpg");
    } else if (i === 1) {
      renderedImg.setAttribute("src", "/image-product-2.a6df5b34.jpg");
    } else if (i === 2) {
      renderedImg.setAttribute("src", "/image-product-3.143cec63.jpg");
    } else if (i === 3) {
      renderedImg.setAttribute("src", "/image-product-4.8eede8d0.jpg");
    }

    i = 1 ? cur.classList.remove('.active-img') : cur.classList.add('.active-img');
    // cur.classList.toggle('.active-img');
  });
});

// console.log(mImg);
