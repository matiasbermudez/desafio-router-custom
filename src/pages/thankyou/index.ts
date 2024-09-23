export function initThankYou(params:any) {

    const divEl = document.createElement('div');
    divEl.innerHTML = `
            <div class="thankyou__contenedor">
              <h1 class="thankyou__titulo"> Gracias</h1>
              <p><strong class="thankyou__strong">Toda la información que nos brindaste es muy importante</strong></p>
              <button type="button" class="thankyou__boton"> De nada </button>
            </div>
    `

    const botonFinalizar = divEl.querySelector('.thankyou__boton');

    botonFinalizar?.addEventListener('click', ()=>{
      params.goTo('/welcome')
    }
    )
    return divEl
}