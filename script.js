const section = document.querySelector('#about');
const section1 = document.querySelector('#education');
const section2 = document.querySelector('#Project');
const section3 = document.querySelector('#skills');
const section4 = document.querySelector('#cert');
const div = document.querySelector('div');
const button = document.querySelector('button');
const colors = ['#6f71a8', '#1c1c1c', '#1b3928', '#43250b'];

section.style.backgroundColor = '#1c1c1c';
section1.style.backgroundColor = '#1c1c1c';
section2.style.backgroundColor = '#1c1c1c';
section3.style.backgroundColor = '#1c1c1c';
section4.style.backgroundColor = '#1c1c1c';
div.style.backgroundColor = '#1c1c1c';


button.addEventListener('click', function () {
    const colorIndex = parseInt(Math.random() * colors.length);
   
    section.style.backgroundColor = colors[colorIndex];
    section1.style.backgroundColor = colors[colorIndex];
    section2.style.backgroundColor = colors[colorIndex];
    section3.style.backgroundColor = colors[colorIndex];
    section4.style.backgroundColor = colors[colorIndex];
    div.style.backgroundColor = colors[colorIndex];

});