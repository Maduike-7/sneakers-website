const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");
 toggle.style.background = 'rgb(255, 140, 0)'
/* Toggle mobile menu */
function toggleMenu() {
    if (menu.classList.contains("active")) {
        menu.classList.remove("active");
         
        // adds the menu (hamburger) icon
        toggle.querySelector("a").innerHTML = "<i class=’fas fa-bars’></i>";
    } else {
        menu.classList.add("active");
         
        // adds the close (x) icon
        toggle.querySelector("a").innerHTML = "<i class=’fas fa-times’></i>";
    }
}
 
/* Event Listener */
toggle.addEventListener("click", toggleMenu, false);

const items = document.querySelectorAll(".item");
 
/* Activate Submenu */
function toggleItem() {
  if (this.classList.contains("submenu-active")) {
    this.classList.remove("submenu-active");
  } else if (menu.querySelector(".submenu-active")) {
    menu.querySelector(".submenu-active").classList.remove("submenu-active");
    this.classList.add("submenu-active");
  } else {
    this.classList.add("submenu-active");
  }
}
 
/* Event Listeners */
for (let item of items) {
    if (item.querySelector(".submenu")) {
      item.addEventListener("click", toggleItem, false);
      item.addEventListener("keypress", toggleItem, false);
    }   
}


/* Close Submenu From Anywhere */
function closeSubmenu(e) {
    if (menu.querySelector(".submenu-active")) {
      let isClickInside = menu
        .querySelector(".submenu-active")
        .contains(e.target);
   
      if (!isClickInside && menu.querySelector(".submenu-active")) {
        menu.querySelector(".submenu-active").classList.remove("submenu-active");
      }
    }
  }
   
  /* Event listener */
  document.addEventListener("click", closeSubmenu, false);

  const logo = document.querySelector('.logo');
  logo.style.color = 'red';

  const btn1 = document.querySelector('.btn1')
  btn1.addEventListener("click", btn1, false);


  const msg = document.querySelector('.btn1', showbtn1);


  function showMsg(e) {
    e.preventDefault();

    if(nameInput.value === '' || emailInput.value === '') {
      msg.classList.add('error');
      msg.innerHTML = 'Sorry this feature is unavailable';

      setTimeout(() => msg.remove(), 3000);
    }else {
      const li = document.createElement('button');
      li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));


      userList.appendChild(li);


      nameInput.value = '';
      emailInput.value = '';
    }
  }

