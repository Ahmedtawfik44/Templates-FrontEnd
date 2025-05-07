// toogle in Head
let list=document.querySelector('.toogle .list');
let open=document.querySelector('.toogle .open');
let close=document.querySelector('.toogle .close');

open.addEventListener('click',function(){
    list.classList.add('show_list')
    close.classList.remove('hide_icon');
    this.classList.add('hide_icon');
});

close.addEventListener('click',function(){
    list.classList.remove('show_list')
    open.classList.remove('hide_icon');
    this.classList.add('hide_icon');
});

// img swap
let img_click=document.querySelectorAll('.about .left .img img');
let img_focus=document.querySelector('.about .left .focus img');

img_click.forEach(e=>{
  e.onclick=()=>{
    img_focus.src=e.src;
  }
});

// Icon Top

let btn_top=document.querySelector('.top');

window.onscroll=()=>{
 if(scrollY>=750)
    btn_top.classList.add('visible');
 else
    btn_top.classList.remove('visible');
};

btn_top.onclick=()=>{
scroll({
  left:0,
  top:0,
  behavior:"smooth",
});
};
