export function initCompA(){
class PageAElement extends HTMLElement{
        constructor(){
            super();
            this.render()
        }
        render(){

            const shadow = this.attachShadow({mode : "open"});
            const divEl = document.createElement('div');

            divEl.innerHTML = `
                <h2>Page A</h2>
            `
            shadow.appendChild(divEl)
        }
    }

    customElements.define('page-a-element', PageAElement)
}