const HEADER = document.querySelector('.header');
const ASIDE = document.querySelectorAll('.f_link li');
const SECTION = document.querySelectorAll('.section');

const COVER_BTN = document.querySelector('.menu_btn');
const COVER = document.querySelector('.cover');
const COVER_A = document.querySelectorAll('.cover>ul a');

const PAGE_NAME = document.querySelector('.pagination span');
const LIST_NAME = ['', 'RE-Design', 'Web clone', 'Training', 'Profile']
const LIST_COLOR = ['#000', '#000', '#000', '#000', '#000'];

// slide
const SLIDE = document.querySelector('.p02_slide');
const SLIDE_ITM = document.querySelectorAll('.p02_slide .slide');

const SLIDE_02 = document.querySelector('.p03_slide');
const SLIDE_ITM_02 = document.querySelectorAll('.p03_slide .slide');


new fullpage('#main', {
    anchors: ['p01', 'p02', 'p03', 'p04', 'footer'],
    css3: false,
    scrollOverflow: false,
    responsiveWidth: 768,
    responsiveSlides: false,

    licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
    controlArrows: false,
    loopHorizontal: false,



    afterLoad: function (origin, destination, direction, trigger) {
        console.log(destination.index, ASIDE[destination.index]);

        if (destination.index == 0) {
            document.querySelector('.pagination').style.background = 'transparent';
        } else {
            document.querySelector('.pagination').style.background = '#ffd900';
        }

        if (destination.index > 0) {
            HEADER.classList.add('on');
        } else {
            HEADER.classList.remove('on')
        }

        ASIDE.forEach(it => it.classList.remove('on'));
        ASIDE[destination.index].classList.add('on');

        SECTION.forEach(it => it.classList.remove('on'));
        SECTION[destination.index].classList.add('on');

        PAGE_NAME.innerHTML = LIST_NAME[destination.index];
        PAGE_NAME.style.color = LIST_COLOR[destination.index];

        // slide
        if (destination.index == 1) {
            SLIDE_ITM[0].classList.add('on');
        } else {
            SLIDE_ITM[0].classList.remove('on');
        }

        if (destination.index == 2) {
            SLIDE_ITM_02[0].classList.add('on');
        } else {
            SLIDE_ITM_02[0].classList.remove('on');
        }


    },

    afterSlideLoad: function (section, origin, destination, direction, trigger) {
        SLIDE_ITM.forEach(it => it.classList.remove('on'));
        SLIDE_ITM[destination.index].classList.add('on');
    },
});

COVER_BTN.addEventListener('click', function (e) {
    e.currentTarget.classList.toggle('on');
    COVER.classList.toggle('on');
});

COVER_A.forEach((lnk, idx) => {
    lnk.addEventListener('click', () => {
        COVER.classList.remove('on');
        COVER_BTN.classList.remove('on');
        console.log(idx);
    })
});

COVER.addEventListener('wheel', e => {
    e.stopPropagation();
});

// slide wheel event
SLIDE.addEventListener('wheel', (e) => {
    console.log(e, e.deltaY); // e.deltaY 100, -100
    if (window.innerWidth > 768) {
        if (e.deltaY > 0) {
            fullpage_api.moveSlideRight();
        } else {
            fullpage_api.moveSlideLeft();
        }
    }
});

SLIDE_02.addEventListener('wheel', (e) => {
    if (window.innerWidth > 768) {
        if (e.deltaY > 0) {
            fullpage_api.moveSlideRight();
        } else {
            fullpage_api.moveSlideLeft();
        }
    }

});



const txt = gsap.utils.toArray('.page01 h2 .point');

txt.forEach((it, idx, arry) => {
    const a = it.innerText;
    const t = [...a].map(it => `<span>${it}</span>`).join('');

    it.innerHTML = t;
    const chars = it.querySelectorAll('span');

    gsap.from(chars, {
        autoAlpha: 0,
        duration: 2,
        stagger: {
            amount: 3,
            repeat: -1,
        },
    });
});



