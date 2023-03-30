(()=>{"use strict";const t=(t,e,o)=>{const i=document.documentElement,s="data-outside",n=a=>{t.contains(a.target)||(t.removeAttribute(s),e.forEach((t=>{i.removeEventListener(t,n)})),o())};t.hasAttribute(s)||(e.forEach((t=>{setTimeout((()=>{i.addEventListener(t,n)}),100)})),t.setAttribute(s,""))},e=document.querySelector('[data-menu="button"]'),o=document.querySelector('[data-menu="list"]'),i=["click","touchstart"];function s(){e.classList.add("ativo"),o.classList.add("ativo"),t(o,i,(()=>{o.classList.remove("ativo"),e.classList.remove("ativo")}))}e&&i.forEach((t=>{e.addEventListener(t,s)}));const n=document.querySelector(".btc");fetch("https://blockchain.info/ticker").then((t=>t.json())).then((t=>{n.innerText=(1e3/t.BRL.buy).toFixed(4)})).catch((t=>{console.log(Error(t))}));new class{constructor(t,e){this.links=document.querySelectorAll(t),this.options=void 0===e?{behavior:"smooth",block:"start"}:e,this.scrollToSection=this.scrollToSection.bind(this)}scrollToSection(t){console.log(this),t.preventDefault();const e=t.currentTarget.getAttribute("href");document.querySelector(e).scrollIntoView(this.options)}addLinkEvent(){this.links.forEach((t=>{t.addEventListener("click",this.scrollToSection)}))}init(){return this.links.length&&this.addLinkEvent(),this}}('[data-menu="suave"] a[href^="#"]').init(),new class{constructor(t){this.accordionList=document.querySelectorAll(t),this.activeClass="ativo"}toggleAccordion(t){t.classList.toggle(this.activeClass),t.nextElementSibling.classList.toggle(this.activeClass)}addAccordionEvent(){this.accordionList.forEach((t=>{t.addEventListener("click",(()=>this.toggleAccordion(t)))}))}init(){return this.accordionList.length&&(this.toggleAccordion(this.accordionList[0]),this.addAccordionEvent()),this}}('[data-anime="accordion"] dt').init(),new class{constructor(t,e){this.tabmenu=document.querySelectorAll(t),this.tabcontent=document.querySelectorAll(e),this.active="ativo"}menuAtivo(t){this.tabcontent.forEach((t=>{t.classList.remove(this.active)})),this.tabcontent[t].classList.add(this.active,this.tabcontent[t].dataset.anime)}addTabEvent(){this.tabmenu.forEach(((t,e)=>{t.addEventListener("click",(()=>{this.menuAtivo(e)}))}))}init(){return this.tabmenu.length&&this.tabcontent.length&&(this.menuAtivo(0),this.addTabEvent()),this}}("[data-tab='menu'] li","[data-tab='content'] section").init(),new class{constructor(t,e,o){this.openLogin=document.querySelector(t),this.closeLogin=document.querySelector(e),this.modal=document.querySelector(o),this.toggleModal=this.toggleModal.bind(this),this.clickOutSide=this.clickOutSide.bind(this)}toggleModal(t){t.preventDefault(),this.modal.classList.toggle("ativo")}clickOutSide(t){t.preventDefault(),t.target===this.modal&&this.toggleModal(t)}addButtonEvent(){this.modal.addEventListener("click",this.clickOutSide),this.closeLogin.addEventListener("click",this.toggleModal),this.openLogin.addEventListener("click",this.toggleModal)}init(){return this.openLogin&&this.closeLogin&&this.modal&&this.addButtonEvent(),this}}('[data-modal="abrir"]','[data-modal="fechar"]','[data-modal="container"]').init(),new class{constructor(t){this.tooltips=document.querySelectorAll(t),this.onMouseLeave=this.onMouseLeave.bind(this),this.onMouseMove=this.onMouseMove.bind(this),this.onMouseOver=this.onMouseOver.bind(this)}onMouseMove(t){this.tooltipBox.style.top=`${t.pageY+15}px`,t.pageX+220>window.innerWidth?this.tooltipBox.style.left=t.pageX-170+"px":this.tooltipBox.style.left=`${t.pageX+15}px`}onMouseLeave(t){this.tooltipBox.remove(),t.currentTarget.removeEventListener("mouseleave",this.onMouseLeave),t.currentTarget.removeEventListener("mousemove",this.onMouseMove)}criarTooltipBox=t=>{const e=document.createElement("div"),o=t.getAttribute("aria-label");e.classList.add("tooltip"),e.innerText=o,document.body.appendChild(e),this.tooltipBox=e};onMouseOver(t){this.criarTooltipBox(t.currentTarget),t.currentTarget.addEventListener("mousemove",this.onMouseMove),t.currentTarget.addEventListener("mouseleave",this.onMouseLeave)}addTooltipEvent(){this.tooltips.forEach((t=>{t.addEventListener("mouseover",this.onMouseOver)}))}init(){return this.tooltips.length&&this.addTooltipEvent(),this}}("[data-tooltip]").init(),(()=>{const t=document.querySelectorAll("[data-anime='scroll']");if(t.length){const e=.6*window.innerHeight,o=()=>{t.forEach((t=>{t.getBoundingClientRect().top-e<0?t.classList.add("ativo"):t.classList.contains("ativo")&&t.classList.remove("ativo")}))};o(),window.addEventListener("scroll",o)}})(),(()=>{const e=document.querySelectorAll("[data-dropdown]");function o(e){e.preventDefault(),this.classList.add("ativo"),t(this,["click","touchstart"],(()=>{this.classList.remove("ativo")}))}["click","touchstart"].forEach((t=>{e.forEach((e=>{e.addEventListener(t,o)}))}))})(),(()=>{const t=document.querySelector("[data-semana]"),e=t.dataset.semana.split(",").map(Number),o=t.dataset.horario.split(",").map(Number),i=new Date,s=i.getDay(),n=i.getHours(),a=-1!==e.indexOf(s);n>=o[0]&&n<o[1]&&a&&t.classList.add("aberto")})(),(async t=>{try{const t=document.querySelector(".numeros-grid"),e=await fetch("./animaisapi.json");(await e.json()).forEach((e=>{const o=(t=>{const e=document.createElement("div");return e.classList.add("numero-animal"),e.innerHTML=`<h3>${t.especie}</h3><span data-numero>${t.valor}</span>`,e})(e);t.appendChild(o)})),(()=>{let t;t=new MutationObserver((e=>{e[0].target.classList.contains("ativo")&&(t.disconnect(),document.querySelectorAll("[data-numero]").forEach((t=>{const e=+t.innerText;let o=0;const i=Math.floor(e/100),s=setInterval((()=>{o+=i,t.innerText=o,o>=e&&(clearInterval(s),t.innerText=e)}),25*Math.random())})))}));const e=document.querySelector(".numeros");t.observe(e,{attributes:!0})})()}catch(t){console.log(Error(t))}})()})();