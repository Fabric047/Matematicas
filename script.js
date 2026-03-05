function filter(){
    let input = document.getElementById("input_filter");
    let filter = input.value.toUpperCase();
    let ul = document.getElementById("list");
    let li = ul.getElementsByTagName("li");
    let a;

    for(i=0; i<li.length; i++){
        a = li[i].getElementsByTagName("a")[0];
        if(a.innerHTML.toUpperCase().indexOf(filter) > -1){
            li[i].style.display = "";
        }else{
            li[i].style.display = "none";
        }
    }
}


/*TRIGONOMÉTRIA*/
function onclick_convert_AngS(){
    console.log("button press");
    var AngS = document.getElementById("AngS").value;
    console.log(AngS);
    document.getElementById("AngS_C").innerHTML=(parseInt(AngS)*10/9);
    document.getElementById("AngS_R").innerHTML=((parseInt(AngS)/180)*3.14);
}

/*FÍSICA*/
function onclick_convert_TempC(){
    console.log("button press");
    var TempC = document.getElementById("TempC").value;
    console.log(TempC);
    document.getElementById("TempC_F").innerHTML=((parseInt(TempC)*9/5)+32);
    document.getElementById("TempC_K").innerHTML=(parseInt(TempC)+273);
}