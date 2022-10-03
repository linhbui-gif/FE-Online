// window.onload = () => {
//    navigationMobile.init();
// };
// let navigationMobile = {
//   init:function (){
//     this.toggleShow();
//   },
//   toggleShow:function (){
//       const buttonBar = document.querySelector('.Navigation-item .button-bars');
//       const listMenu  = document.querySelector('.Navigation-item .list-item-group');
//       buttonBar.addEventListener('click', () => {
//         listMenu.classList.toggle('active');
//       })
//   }
// }

// FAQ
const faq = () => {
  let faqs = document.querySelectorAll('.scfaq__question-item');
  faqs.forEach((faq) => {
    faq.addEventListener('click', () => {
      faq.classList.toggle('active');
    })
  })
}
faq();

// FAQ FOOTER
const faqFooter = () => {
  let faqs = document.querySelectorAll('.Footer .menu-footer .item2');
  faqs.forEach((faq) => {
    faq.addEventListener('click', () => {
      faq.classList.toggle('active');
    })
  })
}
faqFooter();

// ACTIVE BTN
const scchapTab = () => {
  let tabText = document.querySelectorAll('.scchap .scchap__rate .allmenu .Button .Button-control .Button-control-title');
  let tabList = document.querySelectorAll('.scchap__rate-table');

  tabText.forEach((item, index) => {
    item.addEventListener('click', () => {
      tabText.forEach((tab) => {
        tab.classList.remove('active');
      })
      tabList.forEach((tabs) => {
        tabs.classList.remove('active');
      })
      item.classList.add('active');
      tabList[index].classList.add('active');
    })
  })
}
scchapTab();

// MENU MOBILE
const menuMobile = () => {
  let navBar = document.querySelector('.Navigation');
  let btnMenu = document.querySelector('.btnmenu');
  // let selectMenu = document.querySelectorAll('.nav a');

  btnMenu.addEventListener('click', () => {
    navBar.classList.toggle('active');
    btnMenu.classList.toggle('active');

  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      btnMenu.classList.remove('active');
      navBar.classList.remove('active');
    }
  })
}
menuMobile();