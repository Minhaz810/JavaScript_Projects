const billTotal=document.getElementById("billTotalInput")
const tip=document.getElementById("tipInput")
const total=document.getElementById("perPersonTotal")
const People=document.getElementById("numberOfPeople")
let NumberOfPeople=Number(People.innerText)




const calculateBill=()=>{
  const tipPercent=(tip.value/100)
  const tipAmount=(tipPercent*billTotal.value)
  const totalBill=Number(billTotal.value)+tipAmount
  const finalBill=(totalBill/NumberOfPeople)
  
  total.innerText=`$${finalBill.toFixed(2)}`


  

}

const increasePeople=()=>{
  NumberOfPeople+=1
  People.innerText=NumberOfPeople
  calculateBill()


}

const decreasePeople=()=>{
  if(NumberOfPeople<1){
    return
  }else{
  NumberOfPeople-=1
  People.innerText=NumberOfPeople
  calculateBill()}
  

}