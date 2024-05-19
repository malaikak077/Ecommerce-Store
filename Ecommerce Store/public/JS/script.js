document.getElementById('one').addEventListener('click',function(){
    window.location.href = 'FaceMakeup.html';
  })

  document.getElementById('two').addEventListener('click',function(){
    window.location.href = 'EyeMakeup.html';
  })

  document.getElementById('three').addEventListener('click',function(){
    window.location.href = 'LipMakeup.html';
  })

  document.getElementById('four').addEventListener('click',function(){
    window.location.href = 'Accesories.html';
  })
  // document.getElementById('cartButton').addEventListener('click',function(){
  //   window.location.href = 'cart';
  // })


  
 


  document.addEventListener('DOMContentLoaded', () => {
    const cartButton = document.getElementById('cartButton');
    const cart = document.getElementById('cart');
    const overlay = document.getElementById('overlay');
    const closeButton = cart.querySelector('.close');

    // Show cart when cart button is clicked
    cartButton.addEventListener('click', () => {
        cart.style.right = '0';
        overlay.style.display = 'block';
    });

    // Hide cart when close button is clicked
    closeButton.addEventListener('click', () => {
        cart.style.right = '-450px';   // Move cart back off-screen
        overlay.style.display = 'none';
    });

    // Optional: Hide cart if user clicks outside of it
    overlay.addEventListener('click', () => {
       
            cart.style.right = '-450px'; 
            overlay.style.display = 'none';
        
    });
});

   
   

    
   
