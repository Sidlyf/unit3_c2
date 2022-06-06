//https://masai-vouchers-api.herokuapp.com/api/vouchers

async function getData(){
    
    let url = "https://masai-vouchers-api.herokuapp.com/api/vouchers";

    let res = await fetch(url);

    let data = await res.json();
    console.log(data)
    //localStorage.setItem("purchase",JSON.stringify(data.vouchers.data))
    append(data[0].vouchers)


}
getData();

function append(data){
    var vouchers = document.getElementById("voucher_list")
    data.forEach(function(el){
        let div = document.createElement("div");

        let img = document.createElement("img");
        img.setAttribute("src",el.image);
       
        


        let name = document.createElement("p")
        name.innerText = el.name;

        let price = document.createElement("h2");
        price.innerText = el.price;

        let btn = document.createElement("button");
        btn.innerText = "Buy Voucher"
        btn.addEventListener("click",function(){
            buyVoucher(el)
        })
        


        div.append(img,name,price,btn);
        vouchers.append(div)
        
    })
    
} 
let purchase = JSON.parse(localStorage.getItem("purchase")) || [];


function buyVoucher(el){
    let purchase = JSON.parse(localStorage.getItem("purchase")) || [];
    let amount=0;
    if(amount===el.price){
        alert("Hurray! purchase successful")
    }
    else{
       alert("Sorry! insufficient balance")
    }
}
