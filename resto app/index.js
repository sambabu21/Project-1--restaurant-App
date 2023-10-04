import { menuArray } from "/data.js"
const menuEl = document.getElementById("menu")
const orderTab = document.getElementById("order-tab")
const orderView = document.getElementById("order-items")
const totalEl = document.getElementById("total")
const orderCompleteBtn = document.getElementById("complete-order-btn")
const payModal = document.getElementById("pay-modal")
const customerName = document.getElementById("form-name")
const payBtn = document.getElementById("pay-button")
const orderPlaced = document.getElementById("order-placed")
const cardNumber = document.getElementById("form-num")
const cardCVV = document.getElementById("form-cvv")


const menuHtml=menuArray.map(function(item){
    return `<div class="menu-item" id="item-${item.id}">
                <h1 id="item-icon">${item.emoji}</h1>
                <div id="item-info">
                    <h3>${item.name}</h3>
                    <p>${item.ingredients.join(",")}</p>
                    <h4>$ ${item.price}</h4>
                </div>
                 <div>
                        <button id="item-button" data-select=${item.id}>+</button>
                    </div>
            </div>`
}).join("")

menuEl.innerHTML=menuHtml

let orderList=[]


document.addEventListener("click",function(e){
    
    const targetEl=e.target.dataset.select
    const removeEl = e.target.dataset.itemNumber
    
    
    if(targetEl){
        const orderItem=menuArray.filter(function(food){
            if(targetEl==food.id) {
                return food
            }
               
        })
        
        orderList.push(orderItem[0])
        renderOrder(orderList)
        }
    else if(removeEl){
          if(orderList.length!=0){
              orderList.splice(removeEl,1)
              renderOrder(orderList)}
               } 
            
      
      
})


function renderOrder(arr){
   if(orderTab.classList.contains("hidden")){
       orderTab.classList.remove("hidden")}
   let totalSum=0
   let orderHtml=``
   let count=0
   if(arr.length===0){
       orderTab.classList.add("hidden")
   }
   arr.forEach(function(order){
       orderHtml+=`<div class="listing">
                    <div class="item-remove">
                    <h7>${order.name}</h7>
                    <button class="remove-button" data-item-number=${count}>remove</button>
                    </div>
                    <h8>$${order.price}</h8>
                </div>`
       totalSum+=order.price 
       count++        
             
   })
   
   orderView.innerHTML=orderHtml
   total.innerHTML=`<h3>Total Price</h3>
                    <h4>$${totalSum}</h4>`
                    
              
}


orderCompleteBtn.addEventListener("click",function(e){
    e.preventDefault()
   if(payModal.classList.contains("hidden")){ 
       payModal.classList.remove("hidden")}
   
    
})


payBtn.addEventListener("click",function(e){
    // e.preventDefault()
    const name = customerName.value 
    orderPlaced.innerHTML = `<h6>Thanks, ${name}! Your order is on its way!</h6>`
    orderPlaced.classList.remove("hidden")
    orderTab.classList.add("hidden")
    payModal.classList.add("hidden")
    orderList=[]
    customerName.value=""
    cardNumber.value=""
    cardCVV.value=""
    
    
})



