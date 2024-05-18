// const scroll = new LocomotiveScroll({
//     el: document.querySelector('[data-scroll-container]'),
//     smooth: true,
//     lerp:0.2
// });

// bubbly({
//     canvas: document.querySelector("#background"), // default is created and attached automatically
//     compose: "lighter", // default is "lighter"
//     animate: true, // default is true
//     bubbles: Math.random() * 100, // default is Math.floor((canvas.width + canvas.height) * 0.02);
//     shadowColor: "#0ff", // default is #fff
//     shadowBlur: 1, // default is 4
//     fillFunc: () => `hsla(${Math.random() * 360}, 100%, 50%, ${Math.random() * 0.25})`, // default is () => `hsla(0, 0%, 100%, ${r() * 0.1})`)
//     angleFunc: () => Math.random() * Math.PI * 2, // default is this
//     velocityFunc: () => 0.1 + Math.random() * 0.5, // default is this
//     radiusFunc: () => 4 + Math.random() * 25 // default is 4 + Math.random() * width / 25
// });



function sidebar(){
    const sidebar=document.querySelector('.sidebar');
    const icon=document.querySelector('.ri-menu-3-line');
    sidebar.style.display="block";
    icon.style.display="none";
}
function closeBar(){
    const sbar=document.querySelector('.sidebar');
    const icon=document.querySelector('.ri-menu-3-line');
    sbar.style.display="none";
    icon.style.display="block";
}





