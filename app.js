const gifs = [
    './img/water-400.gif',
    './img/awesome-400.gif',
    './img/teasing-400.gif',
    './img/wedding-400.gif',
    './img/dollars-400.gif',
];

const colors = [
    '#1821F0',
    '#35F0B0',
    '#F0E97E',
    '#5814F5',
];

const emojis = [
    '😂',
    '🙄',
    '🤩',
    '🍀',
    '😍',
];


const stars = document.querySelectorAll('.fas');
stars.forEach(function(star){
    star.addEventListener('mousemove', ()=>{                  
        star.classList.add('animate');
    });        
});

const button = document.querySelector('.button');
const gif = document.querySelector('.gif img');
const emojiP = document.querySelector('.emoji p');
const emoji = document.querySelector('.emoji');

button.addEventListener('click', ()=>{                  
    const randImg = gifs[Math.floor(Math.random()*gifs.length)];
    gif.src = randImg;
    emojiP.classList.add('animateEmoji'); 
                              
              
      if(randImg === "./img/water-400.gif"){
     emoji.classList.add('open');
    emojiP.textContent= emojis[0];
    // emojiP.classList.add('animateEmoji'); 
    
    }
    if(randImg === "./img/awesome-400.gif"){
        emoji.classList.add('open');
       emojiP.textContent= emojis[3];
    //    emojiP.classList.add('animateEmoji'); 
    }
    if(randImg === "./img/teasing-400.gif"){
        emoji.classList.add('open');
       emojiP.textContent= emojis[1];
    //    emojiP.classList.add('animateEmoji'); 
    }
    if(randImg === "./img/wedding-400.gif"){
        emoji.classList.add('open');
       emojiP.textContent= emojis[4];
    //    emojiP.classList.add('animateEmoji'); 
    }
    if(randImg === "./img/dollars-400.gif"){
        emoji.classList.add('open');
       emojiP.textContent= emojis[2];
       emojiP.classList.add('animateEmoji'); 
    }       
    //   emojiP.classList.add('animateEmoji');  
 });

    window.addEventListener('scroll', ()=>{
        const randColor = colors[Math.floor(Math.random()*colors.length)];
            document.body.style.backgroundColor = 
            window.scrollY > 0.5 ? randColor : 'var(--bg-color)';
        });


     document.addEventListener('click',()=>{
                const randColor = colors[Math.floor(Math.random()*colors.length)];
    document.body.style.backgroundColor =  randColor ;
     });
   
