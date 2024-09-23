export function initStep1(params: any) {


    const divEl = document.createElement('div');
    divEl.innerHTML = `
       <div class="step__contenedor">
    <h1 class="step__titulo">Necesitamos algunos datos mas</h1>

    <form action="" class="step__form">
      <div class="step__form__contenedor">
        <label for="">Email</label>
        <input type="text">
      </div>
      <div class="step__form__contenedor">
        <label for="">Comida Favorita</label>
        <input type="text">
      </div>
      <div class="step__form__contenedor">
        <label for="" id="select">Algunas de estas tres opciones</label>
        <select name="select" id="select">
          <option value="Piedra"> Piedra </option>
          <option value="Papel"> Papel </option>
          <option value="Tijera"> Tijera </option>
        </select>
      </div>
      <button type="submit" class="step__form__submit"> Continuar </button>
    </form>
    <button type="button" class="step__volver"> Volver </button>
  </div>
    `
    const botonSubmit = divEl.querySelector('.step__form__submit');
    botonSubmit?.addEventListener('click', () => {
        params.goTo("/thankyou")
    })
    const botonVolver = divEl.querySelector('.step__volver');
    botonVolver?.addEventListener('click', ()=>{
      params.goTo('/welcome')
    })
    return divEl

}