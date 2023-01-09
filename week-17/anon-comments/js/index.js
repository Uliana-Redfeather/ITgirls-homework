function checkSpam(str){
    str = str.replace(/VIAGRA/ig, "***");
    str = str.replace(/XXX/ig, "***");
    document.getElementById("output").value = document.getElementById("output").value + str + "\n";
    document.getElementById("input").value = "";

}