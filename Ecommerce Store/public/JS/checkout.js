document.addEventListener('DOMContentLoaded', function () {
    const quantity = localStorage.getItem('productQuantity');
    const price = parseFloat(document.getElementById('quan').textContent.replace('$', ''));
    const subtotal = price * quantity;
    const shipping = 50;
    const total = subtotal + shipping;
  

    document.getElementById('quan').textContent =  document.getElementById('quan').textContent + ` x ${quantity}`
    document.getElementById('sub').textContent = `$${subtotal}`;
    document.getElementById('tot').textContent = `$${total}`;
});

