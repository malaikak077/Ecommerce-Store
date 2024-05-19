document.addEventListener('DOMContentLoaded', function() {
  

    let cartItems = [];
   
    
    const addToCartButton = document.getElementById('AddCart');
    const quantity = document.getElementById("quantity");
    const add = document.getElementById("add");
    const sub = document.getElementById("sub");
     let value = 1;

    add.addEventListener("click",()=>{
       value ++;
       quantity.innerHTML = value;
        
    })

    sub.addEventListener("click",()=>{
        if(value>1){
            value --;
            quantity.innerHTML = value;

        }
    })



   
    addToCartButton.addEventListener('click', function() {
      
        const productTitle = document.getElementById('title').innerText;
        const productPrice = parseInt(document.getElementById('price').innerText.replace('$', '')); 
        const productImage = document.getElementById('sourceImg').getAttribute('src');
       
        
    
       
        const product = {
            title: productTitle,
            price: productPrice,
            imageUrl: productImage,
           
        };


       
        addToCart(product);
        updateSubtotal();
       
    });
    
  
    function addToCart(product) {
        cartItems.push(product);
        console.log(cartItems);
        $.ajax({
            method: "POST",
            data: { cartItems: cartItems },
            url: "/set-cookie",
            success: function(response) {
              console.log("Cookie set successfully:", response);
            },
            error: function(error) {
              console.error("Error setting cookie:", error);
            }
          });
        
        const cartElement = document.createElement('div');
        cartElement.classList.add('cart-item');
        cartElement.innerHTML = `
            <div class= "d-flex align-items-center mb-3  ">
            <img src="${product.imageUrl}" alt="${product.title}" width="100">
            <div class = "ms-4 width" >
            <div class = "fs-5" >${product.title}</div>
            <div class = "fs-6" >$${product.price}</div>
            </div>
            <button id='delete' class="btn btn-danger ms-4 me-3 delete-btn">
            <i class="fa fa-trash"></i>
            </button>
            </div>

        
        `;

        const deleteButton = cartElement.querySelector('.delete-btn');
        deleteButton.addEventListener('click', function() {
            removeCartItem(product);
            cartElement.remove(); 
        });


        const cartContainer = document.querySelector('.cart-content');
        cartContainer.appendChild(cartElement);

     
    }

    function removeCartItem(product) {
        const index = cartItems.findIndex(item => item === product);
        if (index !== -1) {
            cartItems.splice(index, 1); 
            updateSubtotal(); 
        }
    }




    function updateSubtotal() {
        let subtotal = 0;

        for (const item of cartItems) {
          subtotal += item.price;
        }
   
        

        const subtotalElement = document.getElementById('subtotal');
        subtotalElement.innerHTML = `$${subtotal}`;
    }

 
    
  

 
}); 


