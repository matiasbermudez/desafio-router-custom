import { initWelcome } from "./pages/Welcome";
import { initStep1 } from "./pages/step-1";
import { initThankYou } from "./pages/thankyou";

const routes = [{
    path: /\/welcome/,
    component: initWelcome
},
{
    path: /\/step-1/,
    component: initStep1
},
{
    path: /\/thankyou/,
    component: initThankYou
},
];

export function initRouter(container: Element) {

    function goTo(path: any) {
        history.pushState({}, "", path);
        handlerRoute(path)
    }

    function handlerRoute(route: any) {
        console.log("handlerRoute : ", route)

        for (const r of routes) {
            if (r.path.test(route)) {
                const el = r.component({ goTo: goTo });

                if (container.firstChild) {
                    container.firstChild.remove();
                }

                container.append(el)
            }
        }
    }

    //REDIRECT PARA QUE CUANDO INICIA "VACIA" TE MANDE A WELCOME
    if (location.pathname == "/") {
        goTo('/welcome')
    } else {
        handlerRoute(location.pathname)
    }
}


// (function () {
//     const boton1 = document.querySelector('.boton1')
//     const boton2 = document.querySelector('.boton2')
//     const boton3 = document.querySelector('.boton3')

//     boton1.addEventListener('click', () => {
//         goTo("/site1")
//     })
//     boton2.addEventListener('click', () => {
//         goTo("/site2")
//     })
//     boton3.addEventListener('click', () => {
//         goTo("/site3/algo")
//     })

// (function (){
//      window.addEventListener('load', () => {
//         handlerRoute(location.pathname)
//     })
// })();

