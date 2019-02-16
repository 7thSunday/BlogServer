let btn = document.getElementById('ajax-test');
btn.onclick = () => {
    let data = {
        name: "Aya",
        age: 17,
        gender: "female"
    }
    api.ajaxTest({params: data}).then(res=> {
        console.log(res);
    })
}