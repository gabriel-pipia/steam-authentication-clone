let body = document.body;
let page_content_overlay = document.querySelector("[page-content-overlay]");
let button_open_navigation = document.querySelector("[button-open-navigation]");
let aside_navigation = document.querySelector("[aside-navigation]");
let button_toggle_dropdown = document.querySelectorAll("[button-toggle-dropdown]");
let submenu_item_wrapper = document.querySelectorAll("[submenu-item-wrapper]");
let button_sign_in = document.querySelectorAll("[button-sign-in]");
let button_sign_up = document.querySelectorAll("[button-sign-up]");

button_open_navigation.addEventListener("click", openNavigationMenu)

page_content_overlay.addEventListener("click", closeNavigationMenu);

button_toggle_dropdown.forEach(button => {button.addEventListener('click', ()=>{toggleDropdown(button)})});
button_sign_in.forEach(button => {button.addEventListener('click', ()=>{authMode('sign-in')})});
button_sign_up.forEach(button => {button.addEventListener('click', ()=>{authMode('sign-up')})});

function authMode(name) {
  body.setAttribute('auth-mode', name);
  body.scrollTo(0,0);
}

function toggleDropdown(button) {
  let name = button.getAttribute('dropdown-name');
  let menu_active_name = document.querySelector('[menu-active-target]').getAttribute('menu-active-target');
  
  if (name == menu_active_name) {
    document.querySelector('[menu-active-target]').setAttribute('menu-active-target', '');
  }else{
    document.querySelector('[menu-active-target]').setAttribute('menu-active-target', name);
  }
}

function openNavigationMenu(){
  aside_navigation.setAttribute("active", "true");
  page_content_overlay.classList.add("active");
  body.style.overflow = "hidden";
}

function closeNavigationMenu(){
  aside_navigation.setAttribute("active", "false");
  page_content_overlay.classList.remove("active");
  body.style.overflow = "auto";
  document.querySelector('[menu-active-target]').setAttribute('menu-active-target', '');
}