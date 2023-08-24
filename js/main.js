document.querySelector(".submit-button").addEventListener("click", (el)=>{
    el.currentTarget.innerHTML = `<div class="loading"></div>`;
    el.currentTarget.classList.add("load");
    setTimeout(()=>{
        document.querySelector(".fieldset").classList.add("close");
        document.querySelector(".message").classList.add("accept");
        document.querySelector(".submit-button").classList.remove("load");        
        document.querySelector(".submit-button").innerHTML = `Submit`;
    }, 1500)
})
document.querySelectorAll(".market-grid__item").forEach((el)=>{
    el.addEventListener("click", ()=>{
        document.getElementById("modal-product").classList.add("active");
        document.querySelector("#modal-product .modal-img").innerHTML = el.querySelector(".product-img").outerHTML;
        document.querySelector("#modal-product .modal-name").innerHTML = el.querySelector(".product-name").innerHTML;
        document.body.classList.add("noscroll");
    })
});

document.querySelectorAll(".image-grid__item").forEach((el)=>{
    el.addEventListener("click", ()=>{
        document.getElementById("modal-scroll").classList.add("active");
        swiper2.slideTo(el.dataset.image-1, 1)
        document.body.classList.add("noscroll");
    })
});

document.querySelectorAll(".close-desktop").forEach((el)=>{
    el.addEventListener("click", ()=>{
        document.querySelector(".modal-wrapper.active").classList.remove("active");
        document.body.classList.remove("noscroll");
    })
});

document.querySelectorAll(".close-mobile").forEach((el)=>{
    el.addEventListener("click", ()=>{
        document.querySelector(".modal-wrapper.active").classList.remove("active");
        document.body.classList.remove("noscroll");
    })
});

document.querySelector(".back-desktop").addEventListener("click", ()=>{
    document.getElementById("modal-product").classList.remove("active");
    document.body.classList.remove("noscroll");
})