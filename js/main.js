"use strict";


$('.main-slider-text').slick({
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    adaptiveHeight: true,
    prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-chevron-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="fa fa-chevron-right"></i></button>'

});

$('.main-slider-text').on('afterChange', function(event, slick, currentSlide) {
    let slidesCount = slick.slideCount;

    if (currentSlide === 0) {
        $('.slick-prev').css({
            'background-color': 'rgba(9, 215, 92, 0.3)',
            'backdrop-filter': 'blur(16.5px)',
            'transform': 'matrix(1, 0, 0, -1, 0, 0)',
        });
    } else {
        $('.slick-prev').css({
            'background-color': '#09D75C',
        });
    }

    if (currentSlide === slidesCount - 1) {
        $('.slick-next').css({
            'background-color': 'rgba(9, 215, 92, 0.3)',
            'backdrop-filter': 'blur(16.5px)',
            'transform': 'matrix(1, 0, 0, -1, 0, 0)',
        });
    } else {
        $('.slick-next').css({
            'background-color': '#09D75C',
        });
    }
});




const playButton = document.getElementById('playButton');
const video = document.getElementById('myVideo');

if (video){
    video.addEventListener('click', () => {
        if (!video.paused) {
            video.pause();
            playButton.style.display = 'block';
        }
    });
    playButton.addEventListener('click', () => {
        video.play();
        playButton.style.display = 'none';
    });
    video.addEventListener('ended', () => {
        playButton.style.display = 'block';
    });
}







$('.partner-section').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow: false,
    nextArrow: false,
    variableWidth: true,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                slidesToShow: 3,
            }
        }
    ]
});
//  Partner End //





// // Payment Section //
$('.plan-monthly').slick({
    dots: false,
    infinite: false,
    speed: 300,
    prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-chevron-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="fa fa-chevron-right"></i></button>',
    responsive: [
        {
            breakpoint: 9999,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                dots: false,
            }
        },
        {
            breakpoint: 1025,
            settings: {
                slidesToShow: 2,
                dots: false,
            }
        },
        {
            breakpoint: 998,
            settings: {
                slidesToShow: 2,
                dots: false,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                dots: false,
            }
        },
        {
            breakpoint: 630,
            settings: {
                slidesToShow: 2,
                dots: false,
            }
        },
        {
            breakpoint: 578,
            settings: {
                slidesToShow: 1,
                dots: true
            }
        },
        {
            breakpoint: 414,
            settings: {
                slidesToShow: 1,
                dots: true
            }
        }
    ]
});
$('.plan-monthly.slick-slider').on('afterChange', function(event, slick, currentSlide) {
    let slidesCount = slick.slideCount;

    if (currentSlide === 0) {
        $('.plan-monthly .slick-prev').css({
            'background-color': 'rgba(9, 215, 92, 0.3)',
            'backdrop-filter': 'blur(16.5px)',
            'transform': 'matrix(1, 0, 0, -1, 0, 0)',
        });
    } else {
        $('.plan-monthly .slick-prev').css({
            'background-color': '#09D75C',
        });
    }
    if (currentSlide === slidesCount - 1) {
        $('.plan-monthly .slick-next').css({
            'background-color': 'rgba(9, 215, 92, 0.3)',
            'backdrop-filter': 'blur(16.5px)',
            'transform': 'matrix(1, 0, 0, -1, 0, 0)',
        });
    } else {
        $('.plan-monthly .slick-next').css({
            'background-color': '#09D75C',
        });
    }
});

//  ------------------------------ //

$('.plan-yearly').slick({
    dots: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-chevron-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="fa fa-chevron-right"></i></button>',
    responsive: [
        {
            breakpoint: 1400,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                dots: false,
            }
        },
        {
            breakpoint: 1025,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                dots: false,
            }
        },
        {
            breakpoint: 998,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                dots: false,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                dots: false,
            }
        },
        {
            breakpoint: 630,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                dots: false,
            }
        },
        {
            breakpoint: 578,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
            }
        },
        {
            breakpoint: 414,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
            }
        }
    ]
});
$('.plan-yearly.slick-slider').on('afterChange', function(event, slick, currentSlide) {
    let slidesCount = slick.slideCount;

    if (currentSlide === 0) {
        $('.slick-prev').css({
            'background-color': 'rgba(9, 215, 92, 0.3)',
            'backdrop-filter': 'blur(16.5px)',
            'transform': 'matrix(1, 0, 0, -1, 0, 0)',
        });
    } else {
        $('.slick-prev').css({
            'background-color': '#09D75C',
        });
    }
    if (currentSlide === slidesCount - 1) {
        $('.slick-next').css({
            'background-color': 'rgba(9, 215, 92, 0.3)',
            'backdrop-filter': 'blur(16.5px)',
            'transform': 'matrix(1, 0, 0, -1, 0, 0)',
        });
    } else {
        $('.slick-next').css({
            'background-color': '#09D75C',
        });
    }
});

$( document ).ready( () =>{
    $('.plan-monthly').slick('resize')
} )

$('.tab-selector').click((e) => {
    e.preventDefault()
    $('.content').removeClass('active')
    $('.tab-selector').removeClass('active')
    $(e.target.dataset.target).parent().addClass('active')
    $(e.target.dataset.target).slick('resize')
    e.target.classList.add('active')
})


let reviewsCount = $('.reviews-box').length;
let slidesToShowCount = 3;

if (reviewsCount < slidesToShowCount) {
    slidesToShowCount = reviewsCount;
}
$('.reviews-section').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: slidesToShowCount,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-chevron-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="fa fa-chevron-right"></i></button>',
    responsive: [
        {
            breakpoint: 9999,
            settings: {
                slidesToShow: slidesToShowCount,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 1025,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 998,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 630,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 578,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 414,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ]
});
$('.reviews-section.slick-slider').on('afterChange', function(event, slick, currentSlide) {
    let slidesCount = slick.slideCount;

    if (currentSlide === 0) {
        $('.reviews-section .slick-prev').css({
            'background-color': 'rgba(9, 215, 92, 0.3)',
            'backdrop-filter': 'blur(16.5px)',
            'transform': 'matrix(1, 0, 0, -1, 0, 0)',
        });
    } else {
        $('.reviews-section .slick-prev').css({
            'background-color': '#09D75C',
        });
    }
    if (currentSlide === slidesCount - 1) {
        $('.reviews-section .slick-next').css({
            'background-color': 'rgba(9, 215, 92, 0.3)',
            'backdrop-filter': 'blur(16.5px)',
            'transform': 'matrix(1, 0, 0, -1, 0, 0)',
        });
    } else {
        $('.reviews-section .slick-next').css({
            'background-color': '#09D75C',
        });
    }
});


// Accardion Start //

const accItems = document.querySelectorAll('.faq-accordion-item');

accItems.forEach(function(accItem) {
    const accContent = accItem.querySelector('.faq-accordion-content');
    const faqIcon = accItem.querySelector('.faq-icon');

    if (accContent.scrollHeight > 0) {
        accContent.style.maxHeight = "0";
    }

    const accHeadings = accItem.querySelectorAll('.faq-accordion-heading-content');
    const accUnderItems = accItem.querySelectorAll('.faq-accordion-under-item-btn');

    accHeadings.forEach(function(accButton) {
        accButton.addEventListener('click', function() {
            const accContent = this.nextElementSibling;
            const accIcon = this.querySelector('i');
            accIcon.classList.toggle('fa-plus');
            accIcon.classList.toggle('fa-window-minimize');
            accContent.classList.toggle('active');
            if (accContent.classList.contains('active')) {
                accContent.style.maxHeight = accContent.scrollHeight + "px";
                accIcon.style.marginTop = '-15px';
                faqIcon.style.background = '#00FF57';
            } else {
                accContent.style.maxHeight = "0";
                accIcon.style.marginTop = '';
                faqIcon.style.background = '';
            }
        });
    });

    accUnderItems.forEach(function(accButton) {
        accButton.addEventListener('click', function() {
            const accContent = this.nextElementSibling;
            const accIcon = this.querySelector('i');
            accIcon.classList.toggle('fa-plus');
            accIcon.classList.toggle('fa-window-minimize');
            const accItem = this.closest('.faq-accordion-item');
            const accContentMain = accItem.querySelector('.faq-accordion-content');
            accContentMain.style.maxHeight = "1000px";
            accContent.classList.toggle('active');
            if (accContent.classList.contains('active')) {
                accContent.style.maxHeight = accContent.scrollHeight + "px";
                accIcon.style.marginTop = '-15px';
                faqIcon.style.background = '#00FF57';
            } else {
                accContent.style.maxHeight = "0";
                accIcon.style.marginTop = '';
                accContentMain.style.maxHeight = "";
                faqIcon.style.background = '';
            }
        });
    });
});
// Accardion End //



//  Registration Broker

const regBox1 = document.querySelector('.reg-box_1');
const regBox2 = document.querySelector('.reg-box_2');
const tabs = document.querySelectorAll('.reg_tab');

for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener('click', function(event) {
        event.preventDefault();
        const target = event.target.dataset.target;
        regBox1.classList.toggle('active', target === '.reg-box_1');
        regBox2.classList.toggle('active', target === '.reg-box_2');
        for (let j = 0; j < tabs.length; j++) {
            tabs[j].classList.toggle('active', tabs[j] === this);
        }
    });
}





// const optionMenu = document.querySelector(".select-menu"),
//     selectBtn = optionMenu.querySelector(".select-btn"),
//     options = optionMenu.querySelectorAll(".option"),
//     sBtn_text = optionMenu.querySelector(".sBtn-text");
//
// selectBtn.addEventListener("click", () =>
//     optionMenu.classList.toggle("active")
// );
//
// options.forEach((option) => {
//     option.addEventListener("click", () => {
//         let selectedOption = option.querySelector(".option-text").innerText;
//         sBtn_text.innerText = selectedOption;
//
//         optionMenu.classList.remove("active");
//     });
// });


// const optionMenus = document.querySelectorAll(".select-menu");
//
// optionMenus.forEach((optionMenu) => {
//     const selectBtn = optionMenu.querySelector(".select-btn");
//     const options = optionMenu.querySelectorAll(".option");
//     const sBtn_text = optionMenu.querySelector(".sBtn-text");
//
//     selectBtn.addEventListener("click", () =>
//         optionMenu.classList.toggle("active")
//     );
//
//     options.forEach((option) => {
//         option.addEventListener("click", () => {
//             let selectedOption = option.querySelector(".option-text").innerText;
//             sBtn_text.innerText = selectedOption;
//
//             optionMenu.classList.remove("active");
//         });
//     });
// });

const optionMenus = document.querySelectorAll(".select-menu");

for (let i = 0; i < optionMenus.length; i++) {
    const optionMenu = optionMenus[i];
    const selectBtn = optionMenu.querySelector(".select-btn");
    const options = optionMenu.querySelectorAll(".option");
    const sBtn_text = optionMenu.querySelector(".sBtn-text");

    selectBtn.addEventListener("click", function() {
        optionMenu.classList.toggle("active");
    });

    for (let j = 0; j < options.length; j++) {
        const option = options[j];
        option.addEventListener("click", function() {
            let selectedOption = option.querySelector(".option-text").innerText;
            sBtn_text.innerText = selectedOption;

            optionMenu.classList.remove("active");
        });
    }
}






//  Scroll To Top Start //
let btnScrollToTop = document.querySelector(".footer-arrow-top");

window.addEventListener("scroll", function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop >= 500) { // Проверяем, если scrollTop больше или равен 500
        btnScrollToTop.style.display = "block"; // Показываем кнопку
    } else {
        btnScrollToTop.style.display = "none"; // Скрываем кнопку
    }
});

btnScrollToTop.addEventListener("click", function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    let scrollStep = Math.round(scrollTop / 25);

    let scrollInterval = setInterval(function() {
        if (window.pageYOffset <= 0) {
            clearInterval(scrollInterval);
            return;
        }
        window.scrollBy(0, -scrollStep);
    }, 15);
})
//  Scroll To Top End //


//  Project About Start //
$('.slider-big-img').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-chevron-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="fa fa-chevron-right"></i></button>',
    fade: true,
    asNavFor: '.slider-img'
});
$('.slider-img').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false,
    asNavFor: '.slider-big-img',
    dots: true,
    prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-chevron-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="fa fa-chevron-right"></i></button>',
    focusOnSelect: true,
    variableWidth: true,
});
$('.slider-big-img.slick-slider').on('afterChange', function(event, slick, currentSlide) {
    let slidesCount = slick.slideCount;

    if (currentSlide === 0) {
        $('.slider-big-img .slick-prev').css({
            'background-color': 'rgba(9, 215, 92, 0.3)',
            'backdrop-filter': 'blur(16.5px)',
            'transform': 'matrix(1, 0, 0, -1, 0, 0)',
        });
    } else {
        $('.slider-big-img .slick-prev').css({
            'background-color': '#09D75C',
        });
    }
    if (currentSlide === slidesCount - 1) {
        $('.slider-big-img .slick-next').css({
            'background-color': 'rgba(9, 215, 92, 0.3)',
            'backdrop-filter': 'blur(16.5px)',
            'transform': 'matrix(1, 0, 0, -1, 0, 0)',
        });
    } else {
        $('.slider-big-img .slick-next').css({
            'background-color': '#09D75C',
        });
    }
});

$('.slider-img.slick-slider').on('afterChange', function(event, slick, currentSlide) {
    let slidesCount = slick.slideCount;

    if (currentSlide === 0) {
        $('.slider-img .slick-prev').css({
            'background-color': 'rgba(9, 215, 92, 0.3)',
            'backdrop-filter': 'blur(16.5px)',
            'transform': 'matrix(1, 0, 0, -1, 0, 0)',
        });
    } else {
        $('.slider-img .slick-prev').css({
            'background-color': '#09D75C',
        });
    }
    if (currentSlide === slidesCount - 1) {
        $('.slider-img .slick-next').css({
            'background-color': 'rgba(9, 215, 92, 0.3)',
            'backdrop-filter': 'blur(16.5px)',
            'transform': 'matrix(1, 0, 0, -1, 0, 0)',
        });
    } else {
        $('.slider-img .slick-next').css({
            'background-color': '#09D75C',
        });
    }
});

//  Project About End //


// PDF Project Start //
let tab1 = document.getElementById("tab1");
tab1 && (tab1.style.display = "flex");

let pdfTabs = document.getElementsByClassName("pdf-tab");
pdfTabs.length > 0 && (pdfTabs[0].className += " active");

function openTab(evt, tabName) {
    let tabcontent = document.getElementsByClassName("pdf-tab-content");
    let tablinks = document.getElementsByClassName("pdf-tab");

    for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    let selectedTab = document.getElementById(tabName);
    selectedTab && (selectedTab.style.display = "flex");
    evt.currentTarget.className += " active";
}

// PDF Project Start //

// document.getElementById("myElement").addEventListener('touchstart', handleTouchStart, { passive: true });
// element.addEventListener('touchstart', handleTouchStart, { passive: true });
