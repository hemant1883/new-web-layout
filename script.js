const searchBar=document.getElementById("search-div")

function visiblilityFunc(){
    searchBar.style.visibility = searchBar.style.visibility === "visible" ? "hidden" : "visible";
}



function alertFunct(){
    const name=document.getElementById("iname").value;
const email=document.getElementById("iemail").value;
if(email===""){
alert("email is required!")
}
else{
    alert("Your name is : "+ name + "\nYour email is : "+ email);
}
}
