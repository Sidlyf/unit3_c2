//SignUp Page
document.querySelector("#form").addEventListener("submit",displayData)
let signData = []

function displayData(){
    
    event.preventDefault();
    
    let data = {
        name:form.name.value,
        email:form.email.value,
        address:form.address.value,
        amount:form.amount.value
    }
    signData.push(data)
    
    //console.log(signData)
    localStorage.setItem("user",JSON.stringify(signData))

}