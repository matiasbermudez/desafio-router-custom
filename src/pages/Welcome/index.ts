export function initWelcome( params:any ) {


    const divEl = document.createElement('div');
    divEl.innerHTML = `
       <div class="welcome__contenedor">
      <h1 class="welcome__titulo">Te damos la bienvenida a esta pagina</h1>
      <article class="welcome__articulo">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus eum autem modi nemo nihil earum voluptatum,
         nesciunt unde error ad quia in vel, harum molestias animi reprehenderit fugit. Ab, recusandae.
      </article>

      <form action="#" class="welcome__form">
        <p><strong  class="welcome__form-strong">Para continuar ingrese su nombre</strong></p>
        <label for="" id="nombre" class="welcome__form-label">
          Nombre
          <input type="text" name="nombre" id="nombre"  class="welcome__form-input">
        </label>
        <button type="submit" class="welcome__form-submit">Comenzar</button>
      </form>
    </div>
    `
    const boton = divEl.querySelector('.welcome__form-submit')
    
    boton?.addEventListener('click', () =>{
      params.goTo('/step-1')
    })
    

    return divEl
    
}