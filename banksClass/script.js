class Bank{
    constructor(balance){
        this.balance=balance
    }
    deposite(deposite){
        this.balance+=deposite
    }
    withdraw(withdraw){
        if(this.balance-withdraw<0){
            alert("Sorry You Can Not Withdraw!")
            return
        }
        this.balance-=withdraw
    }
}
const MyAccount=new Bank(0)

const balanceInput=document.getElementById('amount')
const depositeButton=document.getElementById('deposit')
const withdrawButton=document.getElementById('withdraw')
const balanceStatus=document.getElementById('balance')
depositeButton.onclick=()=>{
    MyAccount.deposite(parseInt(balanceInput.value))
    balanceInput.value=''
    balanceStatus.innerText=`Balance: ${MyAccount.balance}`

    
}
withdrawButton.onclick=()=>{
    
    MyAccount.withdraw(parseInt(balanceInput.value))
    balanceInput.value=''
    balanceStatus.innerText=`Balance: ${MyAccount.balance}`
    
}