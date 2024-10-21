fetch('data/data.json')
  .then(response => response.json())
  .then(data => {
    const productosDiv = document.getElementById("productos");
    let productosHTML = '<div class="row">';

    data.productos.forEach(producto => {
      if (producto.disponibilidad) {
        productosHTML += `
          <div class="col-md-4 mb-4">
            <div class="card">
              <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
              <div class="card-body">
                <h5 class="card-title">${producto.nombre}</h5>
                <p class="card-text">Precio: $${producto.precio.toFixed(2)}</p>
              </div>
            </div>
          </div>
        `;
      }
    });

    productosHTML += '</div>';
    productosDiv.innerHTML = productosHTML;
  })
  .catch(error => console.error('Error al cargar los productos:', error));

document.getElementById('productoForm').addEventListener('submit', function (e) {
  e.preventDefault();


  const nombre = document.getElementById('nombre').value;
  const precio = parseFloat(document.getElementById('precio').value);
  const imagen = document.getElementById('imagen').value;

  const nuevoProducto = {
    nombre: nombre,
    precio: precio,
    imagen: imagen,
    disponibilidad: true 
  };


  agregarProducto(nuevoProducto);


  e.target.reset();
});

function agregarProducto(producto) {
  const productosDiv = document.getElementById("productos");
  const productoHTML = `
    <div class="col-md-4 mb-4">
      <div class="card">
        <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
        <div class="card-body">
          <h5 class="card-title">${producto.nombre}</h5>
          <p class="card-text">Precio: $${producto.precio.toFixed(2)}</p>
        </div>
      </div>
    </div>
  `;

  productosDiv.querySelector('.row').innerHTML += productoHTML;
}
