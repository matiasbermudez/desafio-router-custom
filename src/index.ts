import './style.css'
import './pages/Welcome/welcome.css'
import './pages/step-1/step-1.css'
import './pages/thankyou/thankyou.css'
import { initRouter } from "./router";
import { initFooter } from './components/footer-custom';
import { initHeader } from './components/header-custom';
(function (){
  const root = document.querySelector('#root');
  initRouter(root)
  
  initHeader();
  initFooter();

})()
