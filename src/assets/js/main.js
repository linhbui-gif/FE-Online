(function( $ ) {
    $.fn.initDropdown = function (option) {

        var config = $.extend({
            default_value:'Pick color', // Свое значение.
            default_element: 1, //0 если не надо //Выбрать элемент под номером в качестве значения по умолчанию
        },option);

        var dd = this.find('.dropdown');
        var items = this.find('li');
        var input = this.find('input');
        var items_list = this.find('.dropdown-itemsWrapper');

        if(dd){
            dd.html(config.default_value);
            input.attr('value','null');
            items_list.removeClass('d-none').addClass('inactive');
            if(config.default_element != 0){
                dd.html(items[config.default_element-1].innerHTML);
                input.attr('value','1');
            }

            $.each(this,function (i,v) {
                var selected = $(this).find('.selected');
                selected.parents('.dropdownWrapper').find('.dropdown').html(selected.html());
                selected.parents('.dropdownWrapper').find('input').attr('value',selected.attr('data-option'));
            });

            dd.on('click',function () {
                var container = $(this).parents('.dropdownWrapper');
                var items_list = container.find('.dropdown-itemsWrapper');

                items_list.toggleClass('inactive');
                $(this).toggleClass('active');

            });

            items.on('mousedown',function () {
                var container = $(this).parents('.dropdownWrapper');
                var input = container.find('input');
                var dropdown = container.find('.dropdown');
                var items_list = container.find('.dropdown-itemsWrapper');

                $(this).attr('class','selected');
                items_list.toggleClass('inactive');
                dropdown.toggleClass('active').html($(this).html());
                input.attr('value',$(this).attr('data-option'));
            });

            $(document).on('mousedown',function (e) { // событие клика по веб-документу

                var dropdowns = $('.dropdown.active');
                var items_list = dropdowns.parents('.dropdownWrapper').find('.dropdown-itemsWrapper');

                if(!dropdowns.is(e.target)&&!items_list.is(e.target)) {
                    dropdowns.removeClass('active');
                    items_list.addClass('inactive');
                }
            });
        }
    }
})(jQuery);
let dropdownWrapper = $('.dropdownWrapper');
if(dropdownWrapper.length > 0){
    $('.dropdownWrapper').initDropdown();
}

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
window.addEventListener("load", function () {
    const tabs = document.querySelectorAll(".tab-item");
    const tabsContent = document.querySelectorAll(".tab-content");
  
    function handleChangeTab(e) {
      const tabId = e.target.dataset.tab;
      tabs.forEach((el) => el.classList.remove("active"));
      e.target.classList.add("active");
      tabsContent.forEach((el) => {
        el.classList.remove("active");
        if (el.getAttribute("data-tab") === tabId) {
          el.classList.add("active");
        }
      });
    }
  
    tabs.forEach((el) => el.addEventListener("click", handleChangeTab));
  });

window.addEventListener("load",function () {
  const accordionHeaders = document.querySelectorAll(".accordion-header");
  [...accordionHeaders].forEach((item) =>
    item.addEventListener("click", handleClickAccordion)
  );
  const activeStr = "is-active";
  function handleClickAccordion(e) {
    const content = e.target.nextElementSibling;
    console.log(content.scrollHeight);
    content.style.height = `${content.scrollHeight}px`;
    content.classList.toggle(activeStr);
    if (!content.classList.contains("is-active")) {
      content.style.height = "0px";
    }
    const icon = e.target.querySelector(".icon");
    icon.classList.toggle(".plus");
    icon.classList.toggle(".minus");
  }
});
 
  
