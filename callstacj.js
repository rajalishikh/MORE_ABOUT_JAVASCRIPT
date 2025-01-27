function show_condition(){
    const find_input=document.getElementById('input_field')
    const find_input_t=find_input.value;
    const handel_error=document.getElementById('error_tag')


    try{
        const age=parseInt(find_input_t)
        if(isNaN(age)){
            throw "Enter your age"
           
        }else if(age<18){
            throw "Baccha kaccha asho na akhane "
        }else if(age > 60){
            throw "Murogbi don't come"
        }
        handel_error.innerHTML='';
        
    }
    catch(error){
        console.log("write correct age",error)
        handel_error.innerText=error
    }
    finally{
        console.log('All code are run success fully')
    }
}
