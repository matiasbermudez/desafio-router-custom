export function initPageB (params : any){

    
    const divEl = document.createElement('div');
    divEl.innerHTML = `
     <h2>Page B</h2>
     <button class="boton-a">Boton A </button>
    `
  
    divEl.addEventListener('click',()=>{ 
        params.goTo("/a")
        console.log('Funciona el click?')
    })
    return divEl

}