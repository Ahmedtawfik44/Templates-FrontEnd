data_project = [
  {
    date: "15/6/2022",
    name: "Academy Portal",
    p: "Academy Portal Project Design And Programming",
    img1: "../images/team-01.png",
    img2: "../images/team-02.png",
    img3: "../images/team-03.png",
    skill1: "Programming",
    skill2: "Design",
    skill3: "Hosting",
    skill4: "Marketing",
    color: "bg-green",
    price: "$1800",
    w:"70%",
  },
  {
    date: "15/6/2022",
    name: "Chatting Application",
    p: "Chatting Application Project Design",
    img1: "../images/team-01.png",
    img2: "../images/team-02.png",
    img3: "../images/team-03.png",
    skill1: "Design",
    color: "bg-blue",
    price: "$950",
    w:"40%",
  },
  {
    date: "15/6/2022",
    name: "Ahmed Dashboard",
    p: "Ahmed Dashboard Project Design And Programming And Hosting",
    img1: "../images/team-01.png",
    img2: "../images/team-02.png",
    img3: "../images/team-03.png",
    img4: "../images/team-04.png",
    skill1: "Programming",
    skill2: "Design",
    skill3: "Hosting",
    skill4: "Marketing",
    color: "bg-green",
    price: "$1700",
    w:"10%",
  },
  {
    date: "15/6/2022",
    name: "Ahmed Portal",
    p: "Ahmed Portal Project Design And Programming",
    img1: "../images/team-01.png",
    img2: "../images/team-02.png",
    img3: "../images/team-03.png",
    skill1: "Programming",
    skill2: "Design",
    color: "bg-green",
    price: "$2500",
    w:"50%",
  },
  {
    date: "15/6/2022",
    name: "Mohamed Application",
    p: "Mohamed Application Project Design",
    img1: "../images/team-01.png",
    img2: "../images/team-02.png",
    img3: "../images/team-03.png",
    skill2: "Design",
    color: "bg-red",
    price: "$950",
    w:"100%",
  },
  {
    date: "15/6/2022",
    name: "Mohamed Dashboard",
    p: "Mohamed Dashboard Project Design And Programming And Hosting",
    img1: "../images/team-01.png",
    img2: "../images/team-02.png",
    img3: "../images/team-03.png",
    img4: "../images/team-04.png",
    skill1: "Programming",
    skill2: "Design",
    skill3: "Hosting",
    skill4: "Marketing",
    color: "bg-green",
    price: "$1700",
    w:"70%",
  },
  {
    date: "15/6/2022",
    name: "Mohamed Portal",
    p: "Mohamed Portal Project Design And Programming",
    img1: "../images/team-01.png",
    img2: "../images/team-02.png",
    img3: "../images/team-03.png",
    skill1: "Programming",
    skill2: "Design",
    color: "bg-green",
    price: "$2500",
    w:"30%",
  },
  {
    date: "15/6/2022",
    name: "Ahmed Application",
    p: "Ahmed Application Project Design",
    img1: "../images/team-01.png",
    img2: "../images/team-02.png",
    img3: "../images/team-03.png",
    img4: "../images/team-04.png",
    img5: "../images/team-05.png",
    skill2: "Design",
    color: "bg-red",
    price: "$950",
    w:"90%",
  },
];

const container_project = document.getElementById("project-container");
const project = document.querySelector(".project");

data_project.forEach((e) => {
  const clone = project.cloneNode(true);
  const img = clone.querySelectorAll("img");
  const span = clone.querySelectorAll(".spans span");
  clone.querySelector("#first").textContent = e.date;
  clone.querySelector("h4").textContent = e.name;
  clone.querySelector("#p").textContent = e.p;
  for (let i = 1; i <= 5; i++) {
    if (!e[`img${i}`]) 
        img[i - 1].remove();
  }
  for (let i = 1; i <= 4; i++) {
    if (!e[`skill${i}`]) 
        span[i - 1].remove();
  }
  clone.querySelector("#c-change").className = e.color;
  clone.querySelector("#c-change").style.cssText=`width:${e.w}`;
  clone.querySelector("#last").textContent = e.price;
  container_project.appendChild(clone);
});

/// حل اخر اني انا اعمل الصور سورس في اراي
/// data=[{imgs:["src1","src2"]}];
///                     وهكذا في ال سكيلز
///                زمتنساش تضيف ال classes
// const imgContainer = clone.querySelector('.images');
// imgContainer.innerHTML = '';
// project.images.forEach((src) => {
//   const img = document.createElement('img');
//   img.src = src;
//   imgContainer.appendChild(img);
// });

// const spansContainer = clone.querySelector('.spans');
// spansContainer.innerHTML = '';
// project.skills.forEach((skill) => {
//   const span = document.createElement('span');
//   span.textContent = skill;
//   spansContainer.appendChild(span);
// });

