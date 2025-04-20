
data_course=[
    {
        img1:"../images/team-02.png",
        img2:"../images/course-02.jpg",
        h4:"Data Structure And Algorithms",
        p:"Master The Art Of Data Strcuture And Famous Algorithms Like Sorting, Dividing And Conquering",
        n1:1150,
        n2:210,
    },
    {
        img1:"../images/team-03.png",
        img2:"../images/course-03.jpg",
        h4:"Responsive Web Design",
        p:"Mastering Responsive Web Design And Media Queries And Know Everything About Breakpoints",
        n1:650,
        n2:90,
    },
    {
        img1:"../images/team-04.png",
        img2:"../images/course-04.jpg",
        h4:"Mastering Python",
        p:"Mastering Python To Prepare For Data Science And AI And Automating Things in Your Life",
        n1:950,
        n2:250,
    },
    {
        img1:"../images/team-05.png",
        img2:"../images/course-05.jpg",
        h4:"PHP Examples",
        p:"PHP Tutorials And Examples And Practice On Web Application And Connecting With Databases",
        n1:850,
        n2:150,
    },
    {
        img1:"../images/team-02.png",
        img2:"../images/course-02.jpg",
        h4:"Data Structure And Algorithms",
        p:"Master The Art Of Data Strcuture And Famous Algorithms Like Sorting, Dividing And Conquering",
        n1:1150,
        n2:210,
    },
    {
        img1:"../images/team-03.png",
        img2:"../images/course-03.jpg",
        h4:"Responsive Web Design",
        p:"Mastering Responsive Web Design And Media Queries And Know Everything About Breakpoints",
        n1:650,
        n2:90,
    },
    {
        img1:"../images/team-04.png",
        img2:"../images/course-04.jpg",
        h4:"Mastering Python",
        p:"Mastering Python To Prepare For Data Science And AI And Automating Things in Your Life",
        n1:950,
        n2:250,
    },
    {
        img1:"../images/team-05.png",
        img2:"../images/course-05.jpg",
        h4:"PHP Examples",
        p:"PHP Tutorials And Examples And Practice On Web Application And Connecting With Databases",
        n1:850,
        n2:150,
    },
    {
        img1:"../images/team-01.png",
        img2:"../images/course-01.jpg",
        h4:"Mastering Web Design",
        p:"Master The Art Of Web Designing And Mocking, Prototyping And Creating Web Design Architecture",
        n1:950,
        n2:165,
    },
]

const container_course=document.querySelector('.courses');
const course=document.querySelector('.course');


data_course.forEach(e=>{
    const clone_course=course.cloneNode(true);
    clone_course.querySelector('.cover').src=e.img1;
    clone_course.querySelector('.img-2').src=e.img2;
    clone_course.querySelector('h4').textContent=e.h4;
    clone_course.querySelector('.desc').textContent=e.p;
    clone_course.querySelector('#n1').textContent=e.n1;
    clone_course.querySelector('#n2').textContent=e.n2;
    container_course.appendChild(clone_course);
});