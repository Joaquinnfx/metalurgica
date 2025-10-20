//Header oculto
let lastScroll = 0;

const navBar = document.querySelector('.navbar');
window.addEventListener("scroll", () => {
    const currentScroll = window.scrollY;

    if (currentScroll > lastScroll) {
      navBar.classList.add("head-oculto");

    } else {
      navBar.classList.remove("head-oculto");
    }

    lastScroll = currentScroll;
  });

  //Cambio de titulo de la pestaña al minimizarla

  const originalTitle = document.title;
  let interval;
  
  document.addEventListener('visibilitychange', ()=>{
  
      if(document.hidden){
          let alternar= false;
          interval = setInterval(()=>{
              document.title = alternar ? 'Volvé, te extrañamos...' : originalTitle;
              alternar = !alternar;
          }, 1500);
          
      }else{
          clearInterval(interval);
          document.title = originalTitle;
      }
  });

//Modal para imagenes de galeria de proyectos

// Crear el modal una sola vez
const modalImg = document.createElement('div');
modalImg.classList.add('modal-img');
modalImg.innerHTML = `
  <div class="modal-content">
    <span class="cerrar">&times;</span>
    <img src="" alt="Imagen del proyecto" class="modal-img-content">
  </div>
`;
document.body.appendChild(modalImg);

const modalImgContent = modalImg.querySelector('.modal-img-content');
const closeModal = modalImg.querySelector('.cerrar');

// Evento para cerrar el modal
closeModal.addEventListener('click', () => {
  modalImg.style.display = 'none';
  document.body.style.overflow = ''; // ✅ Restaura el scroll
});

// Cerrar si se hace click fuera de la imagen
modalImg.addEventListener('click', (e) => {
  if (e.target === modalImg) {
    modalImg.style.display = 'none';
    document.body.style.overflow = ''; // ✅ Restaura el scroll
  }
});

// Evento para abrir modal al hacer click en una imagen de la galería
document.addEventListener('click', (e) => {
    
  if (e.target.classList.contains('grid-img')) {
    modalImgContent.src = e.target.src;
    modalImg.style.display = 'flex';
    navBar.classList.add('head-oculto');
    document.body.style.overflow = 'hidden'; // 🚫 Bloquea el scroll
  }
});


