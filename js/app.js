const contenedor = document.querySelector('.contenedor');
const addProducto = document.querySelector('.productosComprados');
const boton = document.querySelectorAll('.card_button');
const carrito = document.querySelector('.cart');

boton.forEach(btn => {
      btn.addEventListener('click', agregarCarrito)
        
     
})
function agregarCarrito(e){
const boton = e.target;
const item = boton.closest('.card');
const precio = item.querySelector('.card_price').textContent;
const titulo = item.querySelector('.card_title').textContent;

agregarItemCarrito(precio,titulo);

}

function agregarItemCarrito(precio,titulo){
      const itemCarritos = document.querySelector('.cart');
      
      const objetosItem = document.createElement('div');
     
      objetosItem.className = 'itemCart';
      carrito.innerHTML += `<div class="itemCart"<h2 class="item_title">${titulo}</h2>
      <h2 class="item_price">${precio}</h2>
      <input class="cantidad" type="number" value="1" min="1" max="10">
      <button class="eliminar">X</button></div>`
      


   
     


      
      
    
      
                         
updateTotalCarrito();
addCarrito();

}





function updateTotalCarrito(){
   let total = 0;
   const precioTotal = document.querySelector('.precioCompra').textContent;
  const itemsCart = document.querySelectorAll('.itemCart');

  


}

function addCarrito(){
      const eliminar = document.querySelectorAll('.eliminar');
      eliminar.forEach(btn => {
            btn.addEventListener('click', ()=>{
                  const item = btn.closest('.itemCart');
                  item.remove();
                  updateTotalCarrito();
            })
      })
      


}









     


  
     
      
