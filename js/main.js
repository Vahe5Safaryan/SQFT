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
                slidesToShow: 1,
                dots: false,
            }
        },
        {
            breakpoint: 630,
            settings: {
                slidesToShow: 1,
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
//  -------- //
$('.plan-yearly').slick({
    dots: false,
    infinite: false,
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
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
            }
        },
        {
            breakpoint: 630,
            settings: {
                slidesToShow: 1,
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
                centerPadding: '0px'
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


let btnScrollToTop = document.querySelector(".footer-arrow-top");

window.addEventListener("scroll", function() {
    if (window.pageYOffset >= 500) {
        btnScrollToTop.style.display = "block";
    } else {
        btnScrollToTop.style.display = "none";
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

function debounce(func, wait = 5, immediate = true) {
    let timeout;
    return function() {
        let context = this, args = arguments;
        let later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        let callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}
function checkSlide() {
    let elements = document.querySelectorAll('.animate-div');
    elements.forEach(element => {
        let slideInAt = (window.scrollY + window.innerHeight) - element.offsetHeight / 2;
        let elementBottom = element.offsetTop + element.offsetHeight;
        let isHalfShown = slideInAt > element.offsetTop;
        let isNotScrolledPast = window.scrollY < elementBottom;
        if (isHalfShown && isNotScrolledPast) {
            element.classList.add('active');
        } else {
            element.classList.remove('active');
        }
    });
}
window.addEventListener('scroll', debounce(checkSlide));




//  Height Box //
window.addEventListener('load', function() {
    let divs = document.querySelectorAll('.recent-section .recent-box');
    let maxHeight = 0;
    for (let i = 0; i < divs.length; i++) {
        if (divs[i].offsetHeight > maxHeight) {
            maxHeight = divs[i].offsetHeight;
        }
    }
    for (let i = 0; i < divs.length; i++) {
        divs[i].style.height = maxHeight + 'px';
    }
});



// Popup Menu Start //
const loginBoxes = document.querySelectorAll('.popup-login');
const btnLogin = document.querySelectorAll('.login');
const btnLoginMenu = document.querySelectorAll('.login-box-menu');
const overlay = document.querySelector('.overlay');
if (btnLogin) {
    for (let i = 0; i < btnLogin.length; i++) {
        btnLogin[i].addEventListener('click', function (event) {
            for (let j = 0; j < loginBoxes.length; j++) {
                loginBoxes[j].classList.toggle('active-popup');
                overlay.classList.toggle('d-block');
            }
            event.preventDefault();
        });
    }
}

if (btnLoginMenu) {
    for (let i = 0; i < btnLoginMenu.length; i++) {
        btnLoginMenu[i].addEventListener('click', function (event) {
            for (let j = 0; j < loginBoxes.length; j++) {
                loginBoxes[j].classList.toggle('active-popup');
            }
            overlay.classList.toggle('d-block');

            let icon = btnLoginMenu[i].querySelector('i');
            if (icon) {
                icon.classList.toggle('fa-bars');
                icon.classList.toggle('fa-xmark');
            }
            event.preventDefault();
        });
    }
}
if(overlay){
    overlay.addEventListener('click', function () {
        for (let j = 0; j < loginBoxes.length; j++) {
            loginBoxes[j].classList.toggle('active-popup');
            let icon = btnLoginMenu[j].querySelector('i');
            if (icon) {
                icon.classList.toggle('fa-bars');
                icon.classList.toggle('fa-xmark');
            }
        }
        overlay.classList.toggle('d-block');
    });
}
// Popup Menu End //



// Under Page Menu Start //
const underPageMenuBox = document.querySelector('.under-page-menu-box');
const underPageMenuBtn = document.querySelector('.under-page-menu-btn');
const headerLogo = document.querySelector('.logo');

if (underPageMenuBtn) {
    let isOpen = false;

    underPageMenuBtn.addEventListener('click', function (event) {
        if (isOpen) {
            setTimeout(function() {
                if (window.innerWidth <= 414) {
                    underPageMenuBox.style.top = "-440px";
                    underPageMenuBtn.style.position = "absolute";
                    underPageMenuBtn.style.right = "15px";
                }
                else if (window.innerWidth <= 768){
                    underPageMenuBox.style.left = "-295px";
                    underPageMenuBtn.style.position = "absolute";
                    underPageMenuBtn.style.right = "15px";
                }
                else {
                    underPageMenuBox.style.left = "-295px";
                    underPageMenuBtn.style.position = "absolute";
                    underPageMenuBtn.style.left = "15px";
                }
                headerLogo.style.opacity = "1";
            }, 0);
        }
        else {
            if (window.innerWidth <= 414) {
                underPageMenuBox.style.top = "0";
                underPageMenuBtn.style.position = "fixed";
                underPageMenuBtn.style.right = "15px";
            }
            else if (window.innerWidth <= 768){
                underPageMenuBox.style.left = "0";
                underPageMenuBtn.style.position = "fixed";
                underPageMenuBtn.style.right = "15px";
            }
            else {
                underPageMenuBox.style.left = "0";
                underPageMenuBtn.style.position = "fixed";
                underPageMenuBtn.style.left = "303px";
            }
            headerLogo.style.opacity = "0";
        }

        isOpen = !isOpen;
        event.preventDefault();
        const icon = underPageMenuBtn.querySelector('i');
        if (icon) {
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-xmark');
        }
    });
}
// Under Page Menu End //


// Add img //
const fileInput = document.getElementById('file-input');
const uploadDiv = document.getElementById('file-upload');
const previewImg = document.getElementById('preview');

if (uploadDiv){
    uploadDiv.addEventListener('click', function() {
        fileInput.click();
    });
}
if (fileInput){
    fileInput.addEventListener('change', function() {
        const file = this.files[0];
        if (file) {
            const reader = new FileReader();
            reader.addEventListener('load', function() {
                previewImg.setAttribute('src', this.result);
                previewImg.style.display = 'block';
            });
            reader.readAsDataURL(file);
        }
    });
}
// Add img //





// Dev profile Delete Modal Start //
const devProfileModal = document.querySelector('.dev-profile-modal');
const replaceModalBtn = document.querySelectorAll('.replace-modal');
const modalCloseBtn = document.querySelectorAll('.modal-close-btn');
const body = document.querySelector('body')

if (replaceModalBtn) {
    for (let i = 0; i < replaceModalBtn.length; i++) {
        replaceModalBtn[i].addEventListener('click', function (event) {
                devProfileModal.classList.toggle('active-modal');
                overlay.classList.toggle('d-block');
                body.style.overflow = "hidden"
                event.preventDefault();
        });
    }

    if (modalCloseBtn) {
        for (let i = 0; i < modalCloseBtn.length; i++){
            modalCloseBtn[i].addEventListener('click', function (){
                overlay.classList.remove('d-block');
                document.querySelector('.modal-box.active-modal').classList.remove('active-modal');
                body.style.overflow = "auto"
            });
        }
    }
    if(overlay){
        overlay.addEventListener('click', function () {
            overlay.classList.remove('d-block');
            if (document.querySelector('.modal-box.active-modal')){
                document.querySelector('.modal-box.active-modal').classList.remove('active-modal');
            }
            body.style.overflow = "auto"
        });
    }
}

const devProfileReplaceModal = document.querySelector('.dev-profile-replace-modal');
const salesMoreReportBtn = document.querySelectorAll('.sales-more-report');
if (salesMoreReportBtn) {
    for (let i = 0; i < salesMoreReportBtn.length; i++) {
        salesMoreReportBtn[i].addEventListener('click', function (event) {
            devProfileReplaceModal.classList.toggle('active-modal');
            overlay.classList.toggle('d-block');
            body.style.overflow = "hidden"
            event.preventDefault();
        });
    }
}


// Dev profile Delete Modal End //
