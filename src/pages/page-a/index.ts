export function initPageA( params:any ) {


    const divEl = document.createElement('div');
    divEl.innerHTML = `
     <h2>Page A</h2>
    `
    divEl.addEventListener('click',()=>{ 
        params.goTo("/b")
        console.log('Funciona el click?')
    })
    return divEl
    
}