const loader = () =>{
    return new Promise((resolbe,rejected)=>{
        const number=Math.random()
        if(number <0.5){
            resolbe (number)
        }else{
            rejected(number)
        }

    })
}
// loader()
// .then(data=>console.log("resolbed data",data))
// .catch(data=>console.log("rejected Value",data))