const cars = [
    {type:"Volvo", year:2016},
    {type:"Saab", year:2001},
    {type:"BMW", year:2010}
  ];


 
let x=cars.sort((a,b)=>{
    return a.year - b.year

})
console.log(x)