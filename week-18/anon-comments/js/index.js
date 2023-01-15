function checkSpam(str){
    str = str.replace(/VIAGRA/ig, "***");
    str = str.replace(/XXX/ig, "***");
    document.getElementById("output").value = document.getElementById("output").value + str + "\n";
    document.getElementById("input").value = "";

}
let name = document.getElementById('nickname').value;
        localStorage.setItem('nickname', nickname);
        let avatar = document.getElementById('avatar').value;
        localStorage.setItem('avatar', avatar)