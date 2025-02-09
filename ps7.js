async function getCountryName(code) {
    const myFile=await fetch(`https://jsonmock.hackerrank.com/api/countries?page=1`)
    const convert_myFile=await myFile.json()
    convert_myFile.data.forEach((item)=>{
        console.log(item)
        
        if(item.alpha2Code === code){
           console.log(item.name)
        }
    })

}
getCountryName("A")