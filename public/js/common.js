(function(){
    let isAnimate = false;
    let infoCard = document.querySelector(".my-info-card");
    let miniAvatar = document.querySelector(".mini-avatar");
    
    miniAvatar.onmouseenter = ()=>{
        if(isAnimate) return;
        isAnimate = true;
        miniAvatar.classList.add("mini-avatar-actived");
        setTimeout(()=>{
            infoCard.classList.add("my-info-card-actived");
        },500);
    }

    infoCard.onmouseleave = ()=>{
        infoCard.classList.remove("my-info-card-actived");
        setTimeout(()=>{
            miniAvatar.classList.remove("mini-avatar-actived");
        },300);
        setTimeout(()=>{
            isAnimate = false;
        },800);
    }
}())