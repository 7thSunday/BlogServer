// let btn = document.getElementById('ajax-test');
// btn.onclick = () => {
//     let data = {
//         name: "Aya",
//         age: 17,
//         gender: "female"
//     }
//     api.ajaxTest({params: data}).then(res=> {
//         console.log(res);
//     })
// }
(function(){
    // run maple background
    let src = ["/img/sample01.png","/img/sample02.png"];
    let scene = new Scene("myCanvas",src);
    scene.init();
    let canvas = document.getElementById("myCanvas");
    // let alpha = 0.6;
    // let bool = true;
    // setInterval( ()=> {
    //     if(alpha<0.8&&bool) {
    //         alpha += 0.01;
    //     }else if(alpha>0.4&&(!bool)){
    //         alpha -= 0.01;
    //     }
    //     if(alpha<=0.4) {
    //         bool = true;
    //     }else if(alpha>=0.8) {
    //         bool = false;
    //     }
    //     canvas.style.background = `rgba(0,0,0,${alpha})`;
    // },200);

    
}());