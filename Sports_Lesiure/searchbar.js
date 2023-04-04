
const search = () => {
const searchbox=document.getElementById("search-item").ariaValueMax.toUpperCase();
const storeitems=document.getElementById("products2")
const product=document.querySelectorAll(".product1")
const pname=storeitems.getElementsByTagName("h3")

for(var i = 0; i < pname.length; i++){
    let match=product[i].getElementsByTagName('h3')[0];

    if(match){
        let textvalue = match.textContent || match.innerHTML

        if(textvalue.toUpperCase().indexOf(searchbox) < -1){
            product[i].style.display="";
        }else{
            product[i].style.display="none";
        }
    }
}
}