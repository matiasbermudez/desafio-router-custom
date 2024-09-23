export function initHeader(){
    class HeaderEl extends HTMLElement{
        constructor(){
            super();
            this.render();
        }
        render(){
            const shadow = this.attachShadow({mode : "open"});
            const style = document.createElement('style');
            style.innerText = `
                .header{
                    background-color: #FF8282;
                    height: 60px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    color: black;
                }
                .header__strong{
                    font-size: 30px;
                }      
            `
            shadow.appendChild(style);

            const headerEl = document.createElement('header');
            headerEl.classList.add('header');

            const strongEl = document.createElement('strong');
            strongEl.classList.add('header__strong');
            strongEl.innerText = "Header";

            headerEl.appendChild(strongEl);

            shadow.appendChild(headerEl)
        }
    }
    customElements.define('header-custom', HeaderEl)
}