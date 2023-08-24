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