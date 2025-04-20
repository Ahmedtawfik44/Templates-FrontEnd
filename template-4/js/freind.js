data_freind = [
  {
    img: "../images/friend-02.jpg",
    h4: "Omar Fathy",
    p: " Cloud Developer",
    freind:30,
    project:11,
    article:12,
    date:"Joined 02/8/2021",
  },
  {
    img: "../images/friend-03.jpg",
    h4: "Omar Ahmed",
    p: " Mobile Developer",
    freind:80,
    project:20,
    article:18,
    date:"Joined 02/06/2020",
  },
  {
    img: "../images/friend-04.jpg",
    h4: "Shady Nabil",
    p: " Back-End Developer",
    freind:70,
    project:30,
    article:18,
    date:"Joined 28/06/2020",
  },
  {
    img: "../images/friend-05.jpg",
    h4: "Mohamed Ibrahim",
    p: " Algorithm Developer",
    freind:80,
    project:30,
    article:18,
    date:"Joined 28/06/2020",
  },
  {
    img: "../images/friend-02.jpg",
    h4: "Amr Hendawy",
    p: " Back-End  Developer",
    freind:70,
    project:30,
    article:18,
    date:"Joined 28/09/2020",
  },
  {
    img: "../images/friend-01.jpg",
    h4: "Ahmed Tawfik",
    p: " Front-end  Developer",
    freind:70,
    project:30,
    article:18,
    date:"Joined 28/02/2024",
  },
  {
    img: "../images/friend-04.jpg",
    h4: "Osama Elzero",
    p: " Full-Stack Developer",
    freind:90,
    project:30,
    article:18,
    date:"Joined 28/02/2024",
  },
  {
    img: "../images/friend-02.jpg",
    h4: "Ahmed AbuZaid",
    p: " Content Creator",
    freind:90,
    project:30,
    article:18,
    date:"Joined 28/02/2024",
  },
  {
    img: "../images/friend-03.jpg",
    h4: "Mohamed Ryaid",
    p: " Full-Stack Developer",
    freind:90,
    project:30,
    article:18,
    date:"Joined 28/02/2024",
  },
];

let freind_container=document.querySelector('#freind-cont');
let freind=document.querySelector('.freind');

data_freind.forEach((e,i) => {
    let clone=freind.cloneNode(true);
    clone.querySelector('img').src=e.img;
    clone.querySelector('h4').textContent=e.h4;
    clone.querySelector('p').textContent=e.p;
    clone.querySelector('#freind').textContent=e.freind;
    clone.querySelector('#project').textContent=e.project;
    clone.querySelector('#article').textContent=e.article;
    clone.querySelector('#date').textContent=e.date;
    if(i!==6 && i!==7)
        clone.querySelector('.vip').textContent="";
    freind_container.appendChild(clone);
});