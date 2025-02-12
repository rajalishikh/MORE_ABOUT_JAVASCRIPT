const bringData=()=>{
    const productName=document.getElementById("product_name")
    const product_Quantity=document.getElementById("product_quantity")
    let product_name_value=productName.value;
    let product_Quantity_value=product_Quantity.value;
    productName.value=''
    product_Quantity.value=''
    console.log(product_name_value,product_Quantity_value)
    display(product_name_value,product_Quantity_value)
    saveDataLocalStorage(product_name_value,product_Quantity_value)
}

function display(product_name,product_Quantity){
    const container=document.getElementById("ul")
    const create_li=document.createElement("li")
    create_li.innerHTML=`
    ${product_name}=${product_Quantity}

    `
    container.appendChild(create_li)
}

function getDataFromStorage(){
    let cart={}
    const find_cart=localStorage.getItem("cart")
    if(find_cart){
        cart=JSON.parse(find_cart)
    }
    return cart

}
function saveDataLocalStorage(product_name,product_quantity){
    let find_the_data=getDataFromStorage()
    find_the_data[product_name]=product_quantity
    console.log(find_the_data)
    let convert=JSON.stringify(find_the_data)
    localStorage.setItem("cart",convert)

}

function displaySaveData(){
    let find_the_data=getDataFromStorage()
    for(let product_name in find_the_data){
        let product_quantity=find_the_data[product_name]
        console.log(product_name,product_quantity)
        display(product_name,product_quantity)
    }

}
displaySaveData()
