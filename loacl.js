function saveData(){
    let product_name=document.getElementById("product_name")
    let product_quantity=document.getElementById("product_quantity");
    let product_name1=product_name.value;
    let product_quantity1=product_quantity.value
    product_name.value='';
    product_quantity.value='';
    console.log(product_name1,product_quantity1)
    showData(product_name1,product_quantity1)
    saveDataLocalStorage(product_name1,product_quantity1)
}
const showData=(x,y)=>{
    let ul=document.getElementById("ul")
    let li=document.createElement("li")
    li.innerHTML=`
    ${x}=${y}
    `
    ul.appendChild(li)

}
const getSoreCart=()=>{
    let card={}
    let find_data=localStorage.getItem("card")
    if(find_data){
      card=JSON.parse(find_data);
    }
    return card

}
const saveDataLocalStorage=(product_name,product_quantity)=>{
    const Data=getSoreCart()
    Data[product_name]=product_quantity
    const convert=JSON.stringify(Data)
    console.log(convert)
    localStorage.setItem("card",convert)

}