/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/accordion.js":
/*!*********************************!*\
  !*** ./js/modules/accordion.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Accordion {\n  constructor(list) {\n    this.accordionList = document.querySelectorAll(list);\n    this.activeClass = \"ativo\";\n  }\n\n  toggleAccordion(item) {\n    item.classList.toggle(this.activeClass);\n    item.nextElementSibling.classList.toggle(this.activeClass);\n  }\n\n  // Adiciona os eventos ao accordion\n  addAccordionEvent() {\n    this.accordionList.forEach((item) => {\n      item.addEventListener(\"click\", () => this.toggleAccordion(item));\n    });\n  }\n\n  // Iniciar função\n  init() {\n    if (this.accordionList.length) {\n      // Ativar primeiro item\n      this.toggleAccordion(this.accordionList[0]);\n      this.addAccordionEvent();\n    }\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Accordion);\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/accordion.js?");

/***/ }),

/***/ "./js/modules/anima-numeros.js":
/*!*************************************!*\
  !*** ./js/modules/anima-numeros.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst initAnimaNumeros = () => {\n  const animaNumeros = () => {\n    const numeros = document.querySelectorAll(\"[data-numero]\");\n\n    numeros.forEach((numero) => {\n      const total = +numero.innerText;\n\n      let start = 0;\n      const interval = Math.floor(total / 100);\n      const timer = setInterval(() => {\n        start += interval;\n        numero.innerText = start;\n        if (start >= total) {\n          clearInterval(timer);\n          numero.innerText = total;\n        }\n      }, 25 * Math.random());\n    });\n  };\n\n  // função de callback para o observador\n  // irá executar caso retorne true do observador\n  // irá receber um objeto array like \"evento\" que informa as mutações que ocorreram\n  let observer;\n\n  const handleMutation = (mutation) => {\n    if (mutation[0].target.classList.contains(\"ativo\")) {\n      observer.disconnect();\n      animaNumeros();\n    }\n  };\n  observer = new MutationObserver(handleMutation);\n\n  // um observador que vai ficar de olho em alguma alteração em algum elemento\n  const observerTarget = document.querySelector(\".numeros\");\n\n  // vamos passar o elemento à ser observado e o que à ser observado\n  observer.observe(observerTarget, { attributes: true });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initAnimaNumeros);\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/anima-numeros.js?");

/***/ }),

/***/ "./js/modules/dropdown-menu.js":
/*!*************************************!*\
  !*** ./js/modules/dropdown-menu.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _outsideclick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outsideclick.js */ \"./js/modules/outsideclick.js\");\n\n\nconst initDropdownMenu = () => {\n  const dropdownMenus = document.querySelectorAll(\"[data-dropdown]\");\n\n  function handleClick(event) {\n    event.preventDefault();\n    this.classList.add(\"ativo\");\n    (0,_outsideclick_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, [\"click\", \"touchstart\"], () => {\n      this.classList.remove(\"ativo\");\n    });\n  }\n\n  [\"click\", \"touchstart\"].forEach((userEvent) => {\n    dropdownMenus.forEach((menu) => {\n      menu.addEventListener(userEvent, handleClick);\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initDropdownMenu);\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/dropdown-menu.js?");

/***/ }),

/***/ "./js/modules/fetch-animais.js":
/*!*************************************!*\
  !*** ./js/modules/fetch-animais.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _anima_numeros_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./anima-numeros.js */ \"./js/modules/anima-numeros.js\");\n\n\nconst initFetchAnimais = () => {\n  const createAnimal = (animal) => {\n    const div = document.createElement(\"div\");\n    div.classList.add(\"numero-animal\");\n    div.innerHTML = `<h3>${animal.especie}</h3><span data-numero>${animal.valor}</span>`;\n    return div;\n  };\n\n  const fetchAnimais = async (url) => {\n    try {\n      const numerosGrid = document.querySelector(\".numeros-grid\");\n      const animaisResponse = await fetch(url);\n      const animaisJSON = await animaisResponse.json();\n\n      animaisJSON.forEach((element) => {\n        const divAnimal = createAnimal(element);\n        numerosGrid.appendChild(divAnimal);\n      });\n      (0,_anima_numeros_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    } catch (error) {\n      console.log(Error(error));\n    }\n  };\n\n  fetchAnimais(\"./animaisapi.json\");\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initFetchAnimais);\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/fetch-animais.js?");

/***/ }),

/***/ "./js/modules/fetch-bitcoin.js":
/*!*************************************!*\
  !*** ./js/modules/fetch-bitcoin.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst initBitcoin = () => {};\nconst btc = document.querySelector(\".btc\");\n\nfetch(\"https://blockchain.info/ticker\")\n  .then((response) => response.json())\n  .then((responseJSON) => {\n    btc.innerText = (1000 / responseJSON.BRL.buy).toFixed(4);\n  })\n  .catch((error) => {\n    console.log(Error(error));\n  });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initBitcoin);\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/fetch-bitcoin.js?");

/***/ }),

/***/ "./js/modules/funcionamento.js":
/*!*************************************!*\
  !*** ./js/modules/funcionamento.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst initFuncionamento = () => {\n  const funcionamento = document.querySelector(\"[data-semana]\");\n  const diasSemana = funcionamento.dataset.semana.split(\",\").map(Number);\n  const horaSemana = funcionamento.dataset.horario.split(\",\").map(Number);\n\n  const dataAgora = new Date();\n  const diaAgora = dataAgora.getDay();\n  const horaAgora = dataAgora.getHours();\n\n  const semanaAberto = diasSemana.indexOf(diaAgora) !== -1;\n  const horaAberto = horaAgora >= horaSemana[0] && horaAgora < horaSemana[1];\n\n  if (horaAberto && semanaAberto) {\n    funcionamento.classList.add(\"aberto\");\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initFuncionamento);\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/funcionamento.js?");

/***/ }),

/***/ "./js/modules/menu-mobile.js":
/*!***********************************!*\
  !*** ./js/modules/menu-mobile.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _outsideclick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outsideclick.js */ \"./js/modules/outsideclick.js\");\n\n\nconst initMenuMobile = () => {};\nconst menuMobile = document.querySelector('[data-menu=\"button\"]');\nconst menuList = document.querySelector('[data-menu=\"list\"]');\nconst events = [\"click\", \"touchstart\"];\n\nfunction handleClick() {\n  menuMobile.classList.add(\"ativo\");\n  menuList.classList.add(\"ativo\");\n\n  (0,_outsideclick_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(menuList, events, () => {\n    menuList.classList.remove(\"ativo\");\n    menuMobile.classList.remove(\"ativo\");\n  });\n}\n\nif (menuMobile) {\n  events.forEach((event) => {\n    menuMobile.addEventListener(event, handleClick);\n  });\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initMenuMobile);\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/menu-mobile.js?");

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst initModal = () => {\n  const openLogin = document.querySelector('[data-modal=\"abrir\"]');\n  const closeLogin = document.querySelector('[data-modal=\"fechar\"]');\n  const modal = document.querySelector('[data-modal=\"container\"]');\n\n  if (openLogin && closeLogin && modal) {\n    const toggleModal = (event) => {\n      event.preventDefault();\n      modal.classList.toggle(\"ativo\");\n    };\n\n    const clickOutSide = (event) => {\n      event.preventDefault();\n      if (event.target === modal) {\n        toggleModal(event);\n      }\n    };\n\n    modal.addEventListener(\"click\", clickOutSide);\n    closeLogin.addEventListener(\"click\", toggleModal);\n    openLogin.addEventListener(\"click\", toggleModal);\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initModal);\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/modal.js?");

/***/ }),

/***/ "./js/modules/outsideclick.js":
/*!************************************!*\
  !*** ./js/modules/outsideclick.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst outsideClick = (element, events, callback) => {\n  const html = document.documentElement;\n  const outside = \"data-outside\";\n\n  const handleOutsideClick = (event) => {\n    if (!element.contains(event.target)) {\n      element.removeAttribute(outside);\n      events.forEach((userEvent) => {\n        html.removeEventListener(userEvent, handleOutsideClick);\n      });\n      callback();\n    }\n  };\n\n  if (!element.hasAttribute(outside)) {\n    events.forEach((userEvent) => {\n      setTimeout(() => {\n        html.addEventListener(userEvent, handleOutsideClick);\n      }, 100);\n    });\n    element.setAttribute(outside, \"\");\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (outsideClick);\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/outsideclick.js?");

/***/ }),

/***/ "./js/modules/scroll-animation.js":
/*!****************************************!*\
  !*** ./js/modules/scroll-animation.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst initScrollAnimation = () => {\n  const sections = document.querySelectorAll(\"[data-anime='scroll']\");\n\n  if (sections.length) {\n    const windowMetade = window.innerHeight * 0.6;\n\n    const animaScroll = () => {\n      sections.forEach((section) => {\n        const sectionTop = section.getBoundingClientRect().top;\n        const isSecttionVisible = sectionTop - windowMetade < 0;\n\n        if (isSecttionVisible) {\n          section.classList.add(\"ativo\");\n        } else if (section.classList.contains(\"ativo\")) {\n          section.classList.remove(\"ativo\");\n        }\n      });\n    };\n    animaScroll();\n    window.addEventListener(\"scroll\", animaScroll);\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initScrollAnimation);\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/scroll-animation.js?");

/***/ }),

/***/ "./js/modules/scroll-smooth.js":
/*!*************************************!*\
  !*** ./js/modules/scroll-smooth.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass ScrollSmooth {\n  constructor(links, options) {\n    this.links = document.querySelectorAll(links);\n    if (options === undefined) {\n      this.options = { behavior: \"smooth\", block: \"start\" };\n    } else {\n      this.options = options;\n    }\n    this.scrollToSection = this.scrollToSection.bind(this);\n  }\n\n  scrollToSection(event) {\n    console.log(this);\n    event.preventDefault();\n    const href = event.currentTarget.getAttribute(\"href\");\n    const section = document.querySelector(href);\n    section.scrollIntoView(this.options);\n  }\n\n  addLinkEvent() {\n    this.links.forEach((link) => {\n      link.addEventListener(\"click\", this.scrollToSection);\n    });\n  }\n\n  init() {\n    if (this.links.length) {\n      this.addLinkEvent();\n    }\n    return this;\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ScrollSmooth);\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/scroll-smooth.js?");

/***/ }),

/***/ "./js/modules/tab-nav.js":
/*!*******************************!*\
  !*** ./js/modules/tab-nav.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst initTabNav = () => {\n  const tabmenu = document.querySelectorAll(\"[data-tab='menu'] li\");\n  const tabcontent = document.querySelectorAll(\"[data-tab='content'] section\");\n\n  if (tabmenu.length && tabcontent.length) {\n    tabcontent[0].classList.add(\"ativo\");\n\n    const menuAtivo = (index) => {\n      tabcontent.forEach((section) => {\n        section.classList.remove(\"ativo\");\n      });\n      tabcontent[index].classList.add(\"ativo\", tabcontent[index].dataset.anime);\n    };\n\n    tabmenu.forEach((item, index) => {\n      item.addEventListener(\"click\", () => {\n        menuAtivo(index);\n      });\n    });\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initTabNav);\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/tab-nav.js?");

/***/ }),

/***/ "./js/modules/tooltip.js":
/*!*******************************!*\
  !*** ./js/modules/tooltip.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst initTooltip = () => {\n  const tooltips = document.querySelectorAll(\"[data-tooltip]\");\n\n  // usou um objeto no lugar se uma função para ser a callback do eventListener, para poder acessar\n  // oobjeto tooltipBox de outra função\n  const onMouseMove = {\n    // metodo para executar como se fosse uma função de callback.\n    //  p.s o nome deve ser handleEvent\n    handleEvent(event) {\n      this.tooltipBox.style.top = `${event.pageY + 15}px`;\n      this.tooltipBox.style.left = `${event.pageX + 15}px`;\n    },\n  };\n\n  const onMouseLeave = {\n    handleEvent() {\n      this.tooltipBox.remove();\n      this.element.removeEventListener(\"mouseleave\", onMouseLeave);\n      this.element.removeEventListener(\"mousemove\", onMouseMove);\n    },\n  };\n\n  const onMouseOver = (event) => {\n    const criarTooltipBox = (element) => {\n      const tooltipBox = document.createElement(\"div\");\n      const text = element.getAttribute(\"aria-label\");\n      tooltipBox.classList.add(\"tooltip\");\n      tooltipBox.innerText = text;\n      document.body.appendChild(tooltipBox);\n      return tooltipBox;\n    };\n\n    const tooltipBox = criarTooltipBox(event.currentTarget);\n\n    // passou o objeto tooltipBox para outro objeto usado como callback de enevtListener\n    event.currentTarget.addEventListener(\"mousemove\", onMouseMove);\n    onMouseMove.tooltipBox = tooltipBox;\n\n    onMouseLeave.tooltipBox = tooltipBox;\n    onMouseLeave.element = event.currentTarget;\n    event.currentTarget.addEventListener(\"mouseleave\", onMouseLeave);\n  };\n\n  tooltips.forEach((item) => {\n    item.addEventListener(\"mouseover\", onMouseOver);\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initTooltip);\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/tooltip.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_scroll_smooth_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/scroll-smooth.js */ \"./js/modules/scroll-smooth.js\");\n/* harmony import */ var _modules_accordion_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/accordion.js */ \"./js/modules/accordion.js\");\n/* harmony import */ var _modules_tab_nav_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/tab-nav.js */ \"./js/modules/tab-nav.js\");\n/* harmony import */ var _modules_scroll_animation_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/scroll-animation.js */ \"./js/modules/scroll-animation.js\");\n/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/modal.js */ \"./js/modules/modal.js\");\n/* harmony import */ var _modules_tooltip_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/tooltip.js */ \"./js/modules/tooltip.js\");\n/* harmony import */ var _modules_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/dropdown-menu.js */ \"./js/modules/dropdown-menu.js\");\n/* harmony import */ var _modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/menu-mobile.js */ \"./js/modules/menu-mobile.js\");\n/* harmony import */ var _modules_funcionamento_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/funcionamento.js */ \"./js/modules/funcionamento.js\");\n/* harmony import */ var _modules_fetch_animais_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/fetch-animais.js */ \"./js/modules/fetch-animais.js\");\n/* harmony import */ var _modules_fetch_bitcoin_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/fetch-bitcoin.js */ \"./js/modules/fetch-bitcoin.js\");\n\n\n\n\n\n\n\n\n\n\n\n\nconst scrollSmooth = new _modules_scroll_smooth_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('[data-menu=\"suave\"] a[href^=\"#\"]');\nscrollSmooth.init();\n\nconst accordion = new _modules_accordion_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('[data-anime=\"accordion\"] dt');\naccordion.init();\n\n(0,_modules_tab_nav_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n(0,_modules_scroll_animation_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n(0,_modules_modal_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n(0,_modules_tooltip_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n(0,_modules_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n(0,_modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\n(0,_modules_funcionamento_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])();\n(0,_modules_fetch_animais_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"])();\n(0,_modules_fetch_bitcoin_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"])();\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/script.js");
/******/ 	
/******/ })()
;