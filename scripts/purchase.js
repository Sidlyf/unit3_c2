let purchase = JSON.parse(localStorage.getItem("purchase")) || [];
function append(data){
    var purchase = document.getElementById("purchased_vouchers")
    data.forEach(function(el){
        let div = document.createElement("div");

        let img = document.createElement("img");
        img.setAttribute("src",el.image);
        


        let name = document.createElement("p")
        name.innerText = el.name;

        let price = document.createElement("h2");
        price.innerText = el.price;

     
        


        div.append(img,name,price,btn);
        purchase.append(div)
        
    })
    
}
append(data)