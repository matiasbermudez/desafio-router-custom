export function initFooter() {
    class FooterEl extends HTMLElement {
        constructor() {
            super();
            this.render();
        }
        render() {
            const shadow = this.attachShadow({ mode: "open" });
            const style = document.createElement('style');
            style.innerText = `
                .footer{
                    background-color: #FFA0EA;
                    height: 233px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    color: black;
                }
                .footer__strong{
                    font-size: 30px;
                }      
            `
            shadow.appendChild(style)
            const footerEl = document.createElement('footer');
            footerEl.classList.add('footer');
            const strongEl = document.createElement('strong');
            strongEl.classList.add('footer__strong');
            strongEl.innerText = 'Footer'

            footerEl.appendChild(strongEl);

            shadow.appendChild(footerEl)
        }
    }
    customElements.define('footer-custom', FooterEl)
}