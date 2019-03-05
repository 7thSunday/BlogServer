(function(){
    let isAnimate = false;
    let isEnter = false;
    let infoCard = document.querySelector(".my-info-card");
    let miniAvatar = document.querySelector(".mini-avatar");

    function hideCard() {
        infoCard.classList.remove("my-info-card-actived");
        setTimeout(()=>{
            miniAvatar.classList.remove("mini-avatar-actived");
        },300);
        setTimeout(()=>{
            isAnimate = false;
        },800);
    }
    
    miniAvatar.onmouseenter = ()=>{
        if(isAnimate) return;
        isAnimate = true;
        miniAvatar.classList.add("mini-avatar-actived");
        setTimeout(()=>{
            infoCard.classList.add("my-info-card-actived");
        },500);
        setTimeout(()=>{
            if(!isEnter) hideCard();
        },3500)
    }

    infoCard.onmouseenter = ()=>{
        isEnter = true;
    }

    infoCard.onmouseleave = ()=>{
        hideCard();
    }
}())