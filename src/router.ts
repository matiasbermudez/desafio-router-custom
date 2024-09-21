import { initPageA } from "./pages/page-a";
import { initPageB } from "./pages/page-b";

const routes = [{
    path: /\/a/,
    component: initPageA
},
{
    path: /\/b/,
    component: initPageB
},
];

export function initRouter(container: Element) {    
    console.log(container)
    function goTo(path: any) {
        history.pushState({}, "", path);
        handlerRoute(path)
    }
    
    function handlerRoute(route: any) {
        console.log("handlerRoute : ", route)
      
        for (const r of routes){
            if(r.path.test(route)){
                const el = r.component({goTo : goTo});
                
                if(container.firstChild){
                    container.firstChild.remove();
                }

                container.append(el)
            }
        }
    }
    handlerRoute(location.pathname)
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

