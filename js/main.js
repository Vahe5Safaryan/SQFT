"use strict";
const filters = new Proxy({}, {
    get(target, field) {
        return target[field]
    },
    set(target, field, value) {
        target[field] = value
        $(`[data-column='${field}']`).each((i, td) => {
            console.log(td)
            if (!td.innerHTML.toLowerCase().includes(value.toLowerCase())) {
                td.closest('tr').classList.add('hidden');
            } else {
                td.closest('tr').classList.remove('hidden');
            }
        });

        if (field === 'price-min-price' || field === 'price-max-price') {
            const minPrice = parseInt($('#price-min-price').val());
            const maxPrice = parseInt($('#price-max-price').val());

            // Check if the range is set to 0 and 8,000,000
            if (minPrice === 0 || maxPrice === 8000000) {
                td.closest('tr').classList.remove('hidden');
            }
        }

        console.log(target)
        return target
    }
});

$('.main-slider-text').slick({
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    adaptiveHeight: true,
    prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-chevron-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="fa fa-chevron-right"></i></button>'

});
$('.main-slider-text.slick-slider').on('afterChange', function (event, slick, currentSlide) {
    let slidesCount = slick.slideCount;

    if (currentSlide === 0) {
        $('.main-slider-text .slick-prev').css({
            'background-color': 'rgba(9, 215, 92, 0.3)',
            'backdrop-filter': 'blur(16.5px)',
            'transform': 'matrix(1, 0, 0, -1, 0, 0)',
        });
    } else {
        $('.main-slider-text .slick-prev').css({
            'background-color': '#09D75C',
            'transform': 'matrix(1, 0, 0, 1, 0, 0)',
        });
    }
    if (currentSlide === slidesCount - 1) {
        $('.main-slider-text .slick-next').css({
            'background-color': 'rgba(9, 215, 92, 0.3)',
            'backdrop-filter': 'blur(16.5px)',
            'transform': 'matrix(1, 0, 0, -1, 0, 0)',
        });
    } else {
        $('.main-slider-text .slick-next').css({
            'background-color': '#09D75C',
            'transform': 'matrix(1, 0, 0, -1, 0, 0)',
        });
    }
});
$('.main-slider-text').on('afterChange', function (event, slick, currentSlide) {
    let slidesCount = slick.slideCount;

    if (currentSlide === slidesCount - slick.options.slidesToShow) {
        $('.slick-next').css({
            'background-color': 'rgba(9, 215, 92, 0.3)',
            'backdrop-filter': 'blur(16.5px)',
            'transform': 'matrix(1, 0, 0, 1, 0, 0)',
        });
    } else {
        $('.slick-next').css({
            'background-color': '#09D75C',
        });
    }
});

const playButton = document.getElementById('playButton');
const video = document.getElementById('myVideo');

if (video) {
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
    autoplay: true,
    infinite: true,
    autoplaySpeed: 1000,
    speed: 300,
    prevArrow: false,
    nextArrow: false,
    variableWidth: true,
    swipeToSlide: true,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: false,
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
$('.plan-monthly.slick-slider').on('afterChange', function (event, slick, currentSlide) {
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
            'transform': 'matrix(1, 0, 0, 1, 0, 0)',
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
            'transform': 'matrix(1, 0, 0, -1, 0, 0)',
        });
    }
});
$('.plan-monthly').on('afterChange', function (event, slick, currentSlide) {
    let slidesCount = slick.slideCount;

    if (currentSlide === slidesCount - slick.options.slidesToShow) {
        $('.slick-next').css({
            'background-color': 'rgba(9, 215, 92, 0.3)',
            'backdrop-filter': 'blur(16.5px)',
            'transform': 'matrix(1, 0, 0, 1, 0, 0)',
        });
    } else {
        $('.slick-next').css({
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
$('.plan-yearly.slick-slider').on('afterChange', function (event, slick, currentSlide) {
    let slidesCount = slick.slideCount;
    if (currentSlide === 0) {
        $('.plan-yearly .slick-prev').css({
            'background-color': 'rgba(9, 215, 92, 0.3)',
            'backdrop-filter': 'blur(16.5px)',
            'transform': 'matrix(1, 0, 0, -1, 0, 0)',
        });
    } else {
        $('.plan-yearly .slick-prev').css({
            'background-color': '#09D75C',
            'transform': 'matrix(1, 0, 0, 1, 0, 0)',
        });
    }
    if (currentSlide === slidesCount - 1) {
        $('.plan-yearly .slick-next').css({
            'background-color': 'rgba(9, 215, 92, 0.3)',
            'backdrop-filter': 'blur(16.5px)',
            'transform': 'matrix(1, 0, 0, -1, 0, 0)',
        });
    } else {
        $('.plan-yearly .slick-next').css({
            'background-color': '#09D75C',
            'transform': 'matrix(1, 0, 0, -1, 0, 0)',
        });
    }
});
$('.plan-yearly').on('afterChange', function (event, slick, currentSlide) {
    let slidesCount = slick.slideCount;

    if (currentSlide === slidesCount - slick.options.slidesToShow) {
        $('.slick-next').css({
            'background-color': 'rgba(9, 215, 92, 0.3)',
            'backdrop-filter': 'blur(16.5px)',
            'transform': 'matrix(1, 0, 0, 1, 0, 0)',
        });
    } else {
        $('.slick-next').css({
            'background-color': '#09D75C',
        });
    }
});



$(document).ready(() => {
    $('.plan-monthly').slick('resize')
})

$('.tab-selector').click((e) => {
    e.preventDefault()
    $(e.target.dataset.target).slick('resize')
    $('.content').removeClass('active')
    $('.tab-selector').removeClass('active')
    $(e.target.dataset.target).parent().addClass('active')
    e.target.classList.add('active')
})

$(document).ready(() => {
    $('.tab-selector').click((e) => {
        e.preventDefault();
        const target = $(e.target).data('target');
        $(target).slick('resize');
    });
});



// reviews-section Start //
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
$('.reviews-section.slick-slider').on('afterChange', function (event, slick, currentSlide) {
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
            'transform': 'matrix(1, 0, 0, 1, 0, 0)',
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
            'transform': 'matrix(1, 0, 0, -1, 0, 0)',
        });
    }
});
$('.reviews-section').on('afterChange', function (event, slick, currentSlide) {
    let slidesCount = slick.slideCount;

    if (currentSlide === slidesCount - slick.options.slidesToShow) {
        $('.slick-next').css({
            'background-color': 'rgba(9, 215, 92, 0.3)',
            'backdrop-filter': 'blur(16.5px)',
            'transform': 'matrix(1, 0, 0, 1, 0, 0)',
        });
    } else {
        $('.slick-next').css({
            'background-color': '#09D75C',
        });
    }
});
// reviews-section End //



// Accardion Start //
const accItems = document.querySelectorAll('.faq-accordion-item');

accItems.forEach(function (accItem) {
    const accContent = accItem.querySelector('.faq-accordion-content');
    const faqIcon = accItem.querySelector('.faq-icon');

    if (accContent.scrollHeight > 0) {
        accContent.style.maxHeight = "0";
    }

    const accHeadings = accItem.querySelectorAll('.faq-accordion-heading-content');
    const accUnderItems = accItem.querySelectorAll('.faq-accordion-under-item-btn');

    accHeadings.forEach(function (accButton) {
        accButton.addEventListener('click', function () {
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

    accUnderItems.forEach(function (accButton) {
        accButton.addEventListener('click', function () {
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
    tabs[i].addEventListener('click', function (event) {
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

    selectBtn.addEventListener("click", function () {
        optionMenu.classList.toggle("active");
    });

    for (let j = 0; j < options.length; j++) {
        const option = options[j];
        option.addEventListener("click", function () {
            let selectedOption = option.querySelector(".option-text").innerText;
            sBtn_text.innerText = selectedOption;
            filters[sBtn_text.dataset.name] = selectedOption
            optionMenu.classList.remove("active");
        });
    }
}
//  Close on click  window //
window.addEventListener("click", function (event) {
    const modal = document.querySelector(".select-menu.active");
    if (modal && !modal.contains(event.target)) {
        modal.classList.remove("active");
    }
});



let btnScrollToTop = document.querySelector(".footer-arrow-top");
window.addEventListener("scroll", function () {
    if (window.pageYOffset >= 500) {
        btnScrollToTop.style.display = "block";
    } else {
        btnScrollToTop.style.display = "none";
    }
});

btnScrollToTop.addEventListener("click", function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    let scrollStep = Math.round(scrollTop / 25);

    let scrollInterval = setInterval(function () {
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
$('.slider-big-img.slick-slider').on('afterChange', function (event, slick, currentSlide) {
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

$('.slider-img.slick-slider').on('afterChange', function (event, slick, currentSlide) {
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
    return function () {
        let context = this, args = arguments;
        let later = function () {
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
window.addEventListener('load', function () {
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

            btnLoginMenu[i].classList.toggle('btnLoginMenuActive');

            event.preventDefault();
        });
    }
}
if (overlay) {
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
            setTimeout(function () {
                if (window.innerWidth <= 414) {
                    underPageMenuBox.style.top = "-440px";
                    underPageMenuBtn.style.position = "fixed";
                    underPageMenuBtn.style.right = "15px";
                } else if (window.innerWidth <= 768) {
                    underPageMenuBox.style.left = "-295px";
                    underPageMenuBtn.style.position = "fixed";
                    underPageMenuBtn.style.right = "15px";
                } else {
                    underPageMenuBox.style.left = "-295px";
                    underPageMenuBtn.style.position = "fixed";
                    underPageMenuBtn.style.left = "15px";
                }
                headerLogo.style.opacity = "1";
            }, 0);
        } else {
            if (window.innerWidth <= 414) {
                underPageMenuBox.style.top = "0";
                underPageMenuBtn.style.position = "fixed";
                underPageMenuBtn.style.right = "15px";
            } else if (window.innerWidth <= 768) {
                underPageMenuBox.style.left = "0";
                underPageMenuBtn.style.position = "fixed";
                underPageMenuBtn.style.right = "15px";
            } else {
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

if (uploadDiv) {
    uploadDiv.addEventListener('click', function () {
        fileInput.click();
    });
}
if (fileInput) {
    fileInput.addEventListener('change', function () {
        const file = this.files[0];
        if (file) {
            const reader = new FileReader();
            reader.addEventListener('load', function () {
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
const closeBtn = document.querySelectorAll('.close-btn');
const body = document.querySelector('body')

if (replaceModalBtn) {
    for (let i = 0; i < replaceModalBtn.length; i++) {
        replaceModalBtn[i].addEventListener('click', function (event) {
            event.preventDefault();
            devProfileModal.classList.toggle('active-modal');
            const projectElement = document.getElementById("projectId");
            overlay.classList.toggle('d-block');
            body.style.overflow = "hidden"
            if (projectElement) {
                projectElement.value = this.getAttribute('data-project-id');
            }
        });
    }

    if (modalCloseBtn) {
        for (let i = 0; i < modalCloseBtn.length; i++) {
            modalCloseBtn[i].addEventListener('click', function () {
                overlay.classList.remove('d-block');
                document.querySelector('.modal-box.active-modal').classList.remove('active-modal');
                body.style.overflow = "auto"
            });
        }
    }
    if (closeBtn) {
        for (let i = 0; i < closeBtn.length; i++) {
            closeBtn[i].addEventListener('click', function () {
                overlay.classList.remove('d-block');
                document.querySelector('.modal-box.active-modal').classList.remove('active-modal');
                body.style.overflow = "auto"
            });
        }
    }
    if (overlay) {
        overlay.addEventListener('click', function () {
            overlay.classList.remove('d-block');
            if (document.querySelector('.modal-box.active-modal')) {
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

// Sales Agent Modal Start //
const salesAgentModal = document.querySelector('.sales-agent-modal');
const salesModalBtn = document.querySelectorAll('.sales-modal');
if (salesModalBtn) {
    for (let i = 0; i < salesModalBtn.length; i++) {
        salesModalBtn[i].addEventListener('click', function (event) {
            salesAgentModal.classList.toggle('active-modal');
            overlay.classList.toggle('d-block');
            body.style.overflow = "hidden"
            event.preventDefault();
        });
    }
}
// Sales Agent Modal End //


//  Broker Modal //
// const changePass = document.querySelectorAll('.change-pass');
// if (changePass) {
//     for (let i = 0; i < changePass.length; i++) {
//         changePass[i].addEventListener('click', function (event) {
//             devProfileModal.classList.toggle('active-modal');
//             overlay.classList.toggle('d-block');
//             body.style.overflow = "hidden"
//             event.preventDefault();
//         });
//     }
// }

const changePass = document.querySelectorAll('.change-pass');
const devProfileModalChange = document.querySelector('.dev-profile-modal-change');
if (changePass) {
    for (let i = 0; i < changePass.length; i++) {
        changePass[i].addEventListener('click', function (event) {
            devProfileModalChange.classList.toggle('active-modal');
            overlay.classList.toggle('d-block');
            body.style.overflow = "hidden"
            event.preventDefault();
        });
    }
}


// New Offer Modal Start //
const offerModal = document.querySelector('.offer-modal');
const projectModalBtn = document.querySelectorAll('.project-modal-btn');

if (projectModalBtn) {
    for (let i = 0; i < projectModalBtn.length; i++) {
        projectModalBtn[i].addEventListener('click', function (event) {
            bigModalBox.classList.toggle('active-modal');
            offerModal.classList.toggle('active-modal');
            overlay2.classList.toggle('d-block');
            overlay.classList.toggle('d-block');
            body.style.overflow = "hidden"
            event.preventDefault();
        });
    }

    if (offerModal) {
        overlay.addEventListener('click', function () {
            overlay.classList.remove('d-block');
            offerModal.classList.remove('active-modal');
        })
    }
}
// New Offer Modal End //


// Home News Modal Start //
const newsModalSection = document.querySelector('.news-modal-section');
const openNewsModalBtn = document.querySelectorAll('.open-news-modal');

if (openNewsModalBtn) {
    for (let i = 0; i < openNewsModalBtn.length; i++) {
        openNewsModalBtn[i].addEventListener('click', function (event) {

            newsModalSection.classList.toggle('active-modal');
            body.style.overflow = "hidden"
            overlay.classList.toggle('d-block');

            let title = this.getAttribute('data-news-title');
            let text = this.getAttribute('data-news-text');
            let img = this.getAttribute('data-news-image');

            document.getElementById('newsModalInnerHtml').innerHTML =
            '<div class="home-news-box-img" >' +
            '<img src="'+img+'" alt="">' +
            '</div>' +
            '<div class="home-news-box-text">' +
            '<h4>' + title + '</h4>' +
            '<p>' + text + '</p>' +
            '</div>';

            overlay.classList.toggle('d-block');
            body.style.overflow = "hidden"
            event.preventDefault();
        });
    }
}
// Home News Modal End //


//  Shared Access Start //
document.addEventListener('DOMContentLoaded', function () {
    let addAccesses = document.querySelectorAll('.add-access');
    let deletedAccessSection = null;

    function handleAddAccessClick() {
        let accessSection = document.querySelector('.access-section-temp');
        if (window.innerWidth <= 991 && document.querySelector('.access-section-small-temp')) {
            accessSection = document.querySelector('.access-section-small-temp');
        }

        if (accessSection) {
            let clonedSection;
            let gridContainer = document.querySelector(
                window.innerWidth <= 991 ? '.grid-container-small' : '.grid-container'
            );

            if (deletedAccessSection) {
                clonedSection = deletedAccessSection.cloneNode(true);
                deletedAccessSection = null;
            } else {
                clonedSection = accessSection.cloneNode(true);
            }

            let lastAccessNumber = clonedSection.querySelector('.access-number h3');
            if (lastAccessNumber) {
                lastAccessNumber.textContent = (gridContainer.querySelectorAll('.access-number h3').length).toString();
            }

            gridContainer.appendChild(clonedSection);

            let accessDeleteButtons = clonedSection.querySelectorAll('.access-delete');
            accessDeleteButtons.forEach(function (button) {
                button.addEventListener('click', function () {
                    let accessSection = button.closest('.access-section, .access-section-small');
                    if (accessSection) {
                        accessSection.remove();
                        deletedAccessSection = accessSection.cloneNode(true);
                    }
                });
            });
        }
    }

    addAccesses.forEach(addAccess => {
        addAccess.addEventListener('click', handleAddAccessClick);
        window.addEventListener('resize', function () {
            if (window.innerWidth <= 991) {
                addAccess.addEventListener('click', handleAddAccessClick);
            } else {
                addAccess.removeEventListener('click', handleAddAccessClick);
            }
        });
    })

    let accessDeleteButtons = document.querySelectorAll('.access-delete');
    accessDeleteButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            let accessSection = button.closest('.access-section, .access-section-small');
            if (accessSection) {
                accessSection.remove();
                deletedAccessSection = accessSection.cloneNode(true);
            }
        });
    });
});
//  Shared Access Start //


//  Chart Start /
let width, height, gradient;

function getGradient(ctx, chartArea) {
    const chartWidth = chartArea.right - chartArea.left;
    const chartHeight = chartArea.bottom - chartArea.top;
    if (!gradient || width !== chartWidth || height !== chartHeight) {
        width = chartWidth;
        height = chartHeight;
        gradient = ctx.createLinearGradient(chartArea.bottom, 0, 0, chartArea.top);
        gradient.addColorStop(0.5, '#0AD85D');
        gradient.addColorStop(1, '#05903c');
    }
    return gradient;
}

const ctx = document.getElementById('myChart');
if (ctx) {
    Chart.defaults.FontFamily = 'Montserrat';
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Azizi fawad', 'Binghatti\nova', 'Binghatti \ nova', 'Binghatti \ nova'],
            datasets: [{
                data: [750000, 600000, 200000, 100000],
                borderWidth: 1,
                fill: true,
                label: '',
                backgroundColor: function (context) {
                    const chart = context.chart;
                    const {ctx, chartArea} = chart;

                    if (!chartArea) {
                        return;
                    }
                    return getGradient(ctx, chartArea);
                },
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    display: false,
                },
                tooltip: {
                    enabled: false,
                },
            },
            animation: {
                duration: 2000,
            },
            scales: {
                x: {
                    ticks: {
                        color: '#1E1E1E',
                        font: {
                            size: 16,
                            family: 'Montserrat',
                        }
                    },
                },
                y: {
                    max: 800000,
                    ticks: {
                        callback: function (value, index, values) {
                            return '$' + value.toLocaleString('en-US', {
                                minimumFractionDigits: 0,
                                maximumFractionDigits: 2
                            });
                        },
                        stepSize: 200000,
                        color: '#8F8F8F',
                        font: {
                            size: 14,
                            family: 'Montserrat',
                        },
                    },
                },
            },
        },
    });
}
 // Chart 2 Start //
const ctr = document.getElementById('myChart2');
if (ctr) {
    Chart.defaults.FontFamily = 'Montserrat';
    new Chart(ctr, {
        type: 'bar',
        data: {
            labels: ['Azizi fawad', 'Binghatti ova', 'Binghatti nova'],
            datasets: [{
                data: [52, 28, 85],
                borderWidth: 1,
                fill: true,
                label: '',
                backgroundColor: [
                    "#1e1e1e",
                    "#1e1e1e",
                    "#1e1e1e",
                ],
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    display: false,
                },
                tooltip: {
                    enabled: false,
                },
            },
            animation: {
                duration: 2000,
            },
            scales: {
                x: {
                    max: 100,
                    ticks: {
                        color: '#1E1E1E',
                        font: {
                            size: 16,
                            family: 'Montserrat',
                        }
                    },
                },
                y: {
                    ticks: {
                        callback: function (value, index, values) {
                            return value.toFixed(2);
                        },
                        stepSize: 25,
                        color: '#8F8F8F',
                        font: {
                            size: 14,
                            family: 'Montserrat',
                        },
                    },
                },
            },
        },
    });
}
 // Chart 2 End //

//  -------------------------------------------------
// const ctr = document.getElementById('myChart2');
// if (ctr) {
//     Chart.defaults.FontFamily = 'Montserrat';
//     const chart = new Chart(ctr, {
//         type: 'bar',
//         data: {
//             labels: ['Azizi fawad', 'Binghatti ova', 'Binghatti nova'],
//             datasets: [{
//                 data: [],
//                 borderWidth: 1,
//                 fill: true,
//                 label: '',
//                 backgroundColor: [
//                     "#1e1e1e",
//                     "#1e1e1e",
//                     "#1e1e1e",
//                 ],
//             }]
//         },
//         options: {
//             responsive: true,
//             maintainAspectRatio: true,
//             plugins: {
//                 legend: {
//                     display: false,
//                 },
//                 tooltip: {
//                     enabled: false,
//                 },
//             },
//             animation: {
//                 duration: 2000,
//             },
//             scales: {
//                 x: {
//                     max: 100,
//                     ticks: {
//                         color: '#1E1E1E',
//                         font: {
//                             size: 16,
//                             family: 'Montserrat',
//                         }
//                     },
//                 },
//                 y: {
//                     ticks: {
//                         callback: function (value, index, values) {
//                             return value.toFixed(2);
//                         },
//                         stepSize: 1000,
//                         color: '#8F8F8F',
//                         font: {
//                             size: 14,
//                             family: 'Montserrat',
//                         },
//                         maxTicksLimit: 10,
//                     },
//                 },
//             },
//         },
//     });
//
//     // Получение полей ввода
//     const chart1Input = document.querySelector('input[name="chart1"]');
//     const chart2Input = document.querySelector('input[name="chart2"]');
//     const chart3Input = document.querySelector('input[name="chart3"]');
//
//     // Обработчик события для добавления значений в массив данных при изменении полей ввода
//     function addDataToChartOnChange() {
//         const input1 = parseFloat(chart1Input.value);
//         const input2 = parseFloat(chart2Input.value);
//         const input3 = parseFloat(chart3Input.value);
//
//         // Очистка массива данных
//         chart.data.datasets[0].data = [];
//
//         // Добавление значений в массив данных
//         chart.data.datasets[0].data.push(input1, input2, input3);
//
//         // Обновление графика
//         chart.update();
//     }
//
//     // Привязка обработчика события к полям ввода
//     chart1Input.addEventListener('input', addDataToChartOnChange);
//     chart2Input.addEventListener('input', addDataToChartOnChange);
//     chart3Input.addEventListener('input', addDataToChartOnChange);
// }
//  -------------------------------------------------


const chartData = [
    { id: 'myChart3', data: [750000, 600000, 200000, 100000] },
    { id: 'myChart4', data: [100000, 300000, 500000, 750000] },
    { id: 'myChart5', data: [750000, 200000, 600000, 100000] }
];
if (document.getElementById(chartData[0].id)) {
    Chart.defaults.FontFamily = 'Montserrat';

    chartData.forEach((chart) => {
        const ctx = document.getElementById(chart.id);
        if (ctx) {
            new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ['Azizi fawad', 'Binghatti\nova', 'Binghatti \ nova'],
                    datasets: [{
                        data: chart.data,
                        borderWidth: 1,
                        fill: true,
                        label: '',
                        backgroundColor: function(context) {
                            const chart = context.chart;
                            const {ctx, chartArea} = chart;

                            if (!chartArea) {
                                return;
                            }
                            return getGradient(ctx, chartArea);
                        },
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: true,
                    plugins: {
                        legend: {
                            display: false,
                        },
                        tooltip: {
                            enabled: false,
                        },
                    },
                    animation: {
                        duration: 2000,
                    },
                    scales: {
                        x: {
                            ticks: {
                                color: '#1E1E1E',
                                font: {
                                    size: 10,
                                    family: 'Montserrat',
                                }
                            },
                        },
                        y: {
                            max: 800000,
                            ticks: {
                                callback: function(value, index, values) {
                                    return '$' + value.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 2 });
                                },
                                stepSize: 200000,
                                color: '#8F8F8F',
                                font: {
                                    size: 8,
                                    family: 'Montserrat',
                                },
                            },
                        },
                    },
                },
            });
        }
    });
}
 // Chart Copy End //


//  ------
$('.news-section').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: false,
    prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-chevron-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="fa fa-chevron-right"></i></button>',
    responsive: [
        {
            breakpoint: 1400,
            settings: {
                slidesToShow: 4,
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
$('.news-section.slick-slider').on('afterChange', function (event, slick, currentSlide) {
    let slidesCount = slick.slideCount;

    if (currentSlide === 0) {
        $('.news-section .slick-prev').css({
            'background-color': 'rgba(9, 215, 92, 0.3)',
            'backdrop-filter': 'blur(16.5px)',
            'transform': 'matrix(1, 0, 0, -1, 0, 0)',
        });
    } else {
        $('.news-section .slick-prev').css({
            'background-color': '#09D75C',
            'transform': 'matrix(1, 0, 0, 1, 0, 0)',
        });
    }
    if (currentSlide === slidesCount - 1) {
        $('.news-section .slick-next').css({
            'background-color': 'rgba(9, 215, 92, 0.3)',
            'backdrop-filter': 'blur(16.5px)',
            'transform': 'matrix(1, 0, 0, -1, 0, 0)',
        });
    } else {
        $('.news-section .slick-next').css({
            'background-color': '#09D75C',
            'transform': 'matrix(1, 0, 0, -1, 0, 0)',
        });
    }
});
$('.news-section').on('afterChange', function (event, slick, currentSlide) {
    let slidesCount = slick.slideCount;

    if (currentSlide === slidesCount - slick.options.slidesToShow) {
        $('.slick-next').css({
            'background-color': 'rgba(9, 215, 92, 0.3)',
            'backdrop-filter': 'blur(16.5px)',
            'transform': 'matrix(1, 0, 0, 1, 0, 0)',
        });
    } else {
        $('.slick-next').css({
            'background-color': '#09D75C',
        });
    }
});



//  Height News text box Start //
window.addEventListener('load', function () {
    let newsBoxes = document.getElementsByClassName('news-box-text');
    let maxHeight = 0;
    for (let i = 0; i < newsBoxes.length; i++) {
        if (newsBoxes[i].offsetHeight > maxHeight) {
            maxHeight = newsBoxes[i].offsetHeight;
        }
    }
    for (let j = 0; j < newsBoxes.length; j++) {
        newsBoxes[j].style.height = maxHeight + 'px';
    }
});
//  Height News text box End //


const selectBtns = document.querySelectorAll('.select-btn');
const optionsLists = document.querySelectorAll('.options');
selectBtns.forEach((selectBtn, index) => {
    selectBtn.addEventListener('click', function () {
        selectBtn.classList.toggle('active');
        optionsLists[index].classList.toggle('active');
    });
});
optionsLists.forEach(options => {
    const languageOptions = options.querySelectorAll('.option');
    languageOptions.forEach(option => {
        option.addEventListener('click', function () {
            const selectedImage = this.querySelector('img');
            if (selectedImage !== null) {
                const selectedSrc = selectedImage.getAttribute('src');
                const selectedLanguage = this.querySelector('.option-text').textContent;

                const selectBtnImage = this.closest('.language-box').querySelector('.select-btn img');
                selectBtnImage.setAttribute('src', selectedSrc);
            }
        });
    });
});
//  ----------


//  --------
function validateRange(minPrice, maxPrice, minValueElement, maxValueElement) {
    if (minPrice > maxPrice) {
        let tempValue = maxPrice;
        maxPrice = minPrice;
        minPrice = tempValue;
    }
    minValueElement.innerHTML = minPrice;
    maxValueElement.innerHTML = maxPrice;
}

const priceMinValue = document.getElementById("price-min-value");
const priceMaxValue = document.getElementById("price-max-value");
const priceMinPrice = document.getElementById("price-min-price");
const priceMaxPrice = document.getElementById("price-max-price");
if (priceMinPrice) {

    priceMinPrice.addEventListener("input", () => {
        let minPrice = parseInt(priceMinPrice.value);
        let maxPrice = parseInt(priceMaxPrice.value);
        validateRange(minPrice, maxPrice, priceMinValue, priceMaxValue);
    });

    priceMaxPrice.addEventListener("input", () => {
        let minPrice = parseInt(priceMinPrice.value);
        let maxPrice = parseInt(priceMaxPrice.value);
        validateRange(minPrice, maxPrice, priceMinValue, priceMaxValue);
    });

    const areaMinValue = document.getElementById("area-min-value");
    const areaMaxValue = document.getElementById("area-max-value");
    const areaMinPrice = document.getElementById("area-min-price");
    const areaMaxPrice = document.getElementById("area-max-price");

    areaMinPrice.addEventListener("input", () => {
        let minPrice = parseInt(areaMinPrice.value);
        let maxPrice = parseInt(areaMaxPrice.value);
        validateRange(minPrice, maxPrice, areaMinValue, areaMaxValue);
    });

    areaMaxPrice.addEventListener("input", () => {
        let minPrice = parseInt(areaMinPrice.value);
        let maxPrice = parseInt(areaMaxPrice.value);
        validateRange(minPrice, maxPrice, areaMinValue, areaMaxValue);
    });

    validateRange(parseInt(priceMinPrice.value), parseInt(priceMaxPrice.value), priceMinValue, priceMaxValue);
    validateRange(parseInt(areaMinPrice.value), parseInt(areaMaxPrice.value), areaMinValue, areaMaxValue);
}
//  ----------


//  Home Filter Start //
const showBtn = document.querySelectorAll('.app-show-hide-btn');
const filterBoxHide = document.querySelectorAll('.filter-box-hide');
showBtn.forEach((button, index) => {
    button.addEventListener('click', (event) => {
        event.preventDefault();

        const filterBox = filterBoxHide[index];
        const isShown = filterBox.classList.contains('show');

        if (isShown) {
            filterBox.style.opacity = '0';
            setTimeout(() => {
                filterBox.style.display = 'none';
            }, 300);
        } else {
            filterBox.style.display = 'block';
            setTimeout(() => {
                filterBox.style.opacity = '1';
            }, 0);
        }
        button.querySelector('.btn').textContent = isShown ? 'More filters' : 'Less filters';
        filterBox.classList.toggle('show');
    });
});
//  Home Filter End //

//  Reg img Start //
const regImg = document.getElementById('regimg');
const imagePreview = document.getElementById('imagePreview');
if (regImg){
    regImg.addEventListener('change', (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onload = (e) => {
            imagePreview.src = e.target.result;
        };

        reader.readAsDataURL(file);
    });
}
//  Reg img End //


//  Sales Agent Cart Start //
let agentBoxes = document.querySelectorAll('.agent-section-box');
agentBoxes.forEach(function(agentBox) {
    let hiddenElements = agentBox.querySelectorAll('.hidden');

    agentBox.addEventListener('click', function() {
        hiddenElements.forEach(function(element) {
            element.classList.toggle('hidden');
            element.style.opacity = '1';
        });

        let hasHiddenElements = Array.from(hiddenElements).some(function(element) {
            return element.classList.contains('hidden');
        });

        agentBox.style.height = hasHiddenElements ? '' : '100%';
    });
});
//  Sales Agent Cart End //



//  Big Modal Start //
const bigModalBox = document.querySelector('.big-modal-box');
const overlay2 = document.querySelector('.overlay2');
const projectModalOpenBtn = document.querySelectorAll('.project-btn-modal-open');
const tableHomeOpenModal = document.querySelectorAll('.table-home');
const bigModalCloseBtn = document.querySelector('.big-modal-close-btn');

if (projectModalOpenBtn || tableHomeOpenModal) {
    for (let i = 0; i < projectModalOpenBtn.length; i++) {
        projectModalOpenBtn[i].addEventListener('click', function (event) {
            bigModalBox.classList.toggle('active-modal');
            $('.modal-slider').slick('reinit');
            overlay2.classList.toggle('d-block');
            body.style.overflow = "hidden"
            event.preventDefault();
        });
    }
    //  Green-Home //
    for (let i = 0; i < tableHomeOpenModal.length; i++) {
        tableHomeOpenModal[i].addEventListener('click', function (event) {
            bigModalBox.classList.toggle('active-modal');
            $('.modal-slider').slick('reinit');
            overlay2.classList.toggle('d-block');
            body.style.overflow = "hidden"
            event.preventDefault();
        });
    }
    //  Green-Home //

    if (bigModalCloseBtn) {
        bigModalCloseBtn.addEventListener('click', function () {
            overlay2.classList.toggle('d-block');
            document.querySelector('.modal-box.active-modal').classList.remove('active-modal');
            body.style.overflow = "auto"
        });
    }
    if (overlay2) {
        overlay2.addEventListener('click', function () {
            overlay2.classList.toggle('d-block');
            bigModalBox.classList.toggle('active-modal');
            body.style.overflow = "auto"
        });
    }
}
//  Big Modal End //

//  Big Modal Slier Start //
$('.modal-slider').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-chevron-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="fa fa-chevron-right"></i></button>',
    responsive: [
        {
            breakpoint: 1025,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 998,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 630,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 578,
            settings: {
                slidesToShow: 1,
            }
        },
        {
            breakpoint: 414,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});
$('.modal-slider.slick-slider').on('afterChange', function (event, slick, currentSlide) {
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

// Table Sloider Start //
class Pagination {
    constructor(dotsSelector) {
        this.dotsSelector = dotsSelector;
        this.maxLinks = 5;
        this.maxOffset = Math.ceil(this.maxLinks / 2);
        document.querySelector(this.dotsSelector).innerHTML = "";
    }

    generate(currentSlide, countSlides) {
        this.currentSlide = currentSlide + 1;
        this.countSlides = countSlides;
        this.offset_left = this.currentSlide > this.maxOffset;
        this.offset_right = this.currentSlide <= this.countSlides - this.maxOffset;

        if (this.countSlides > this.maxLinks) {
            if (this.currentSlide <= Math.floor(this.countSlides / 2)) {
                this.generateLeftPosition();
            } else if (this.currentSlide > Math.floor(this.countSlides / 2)) {
                this.generateRightPosition();
            }
        } else {
            this.generateDefault();
        }
    }
    generateDot(i, text, className = false, current = false) {
        let dot = document.createElement("li");

        if (className) {
            dot.classList.add(className);
        }
        if (i != "" && this.currentSlide == i) {
            dot.classList.add("active");
        }
        dot.id = i - 1;
        dot.innerText = text;
        document.querySelector(this.dotsSelector).appendChild(dot);
    }

    generateLeftPosition() {
        if (this.currentSlide != 1) {
            for (
                let i = this.currentSlide - 1;
                i < this.currentSlide - 1 + this.maxOffset;
                i++
            ) {
                this.generateDot(i, i, "dot");
            }
            this.generateDot("", "...");
            this.generateDot(this.countSlides, this.countSlides, "dot");
        } else {
            for (
                var i = this.currentSlide;
                i < this.currentSlide + this.maxOffset;
                i++
            ) {
                this.generateDot(i, i, "dot");
            }
            this.generateDot("", "...");
            this.generateDot(this.countSlides, this.countSlides, "dot");
        }
    }

    generateRightPosition() {
        if (this.currentSlide != this.countSlides) {
            this.generateDot(1, 1, "dot");
            this.generateDot("", "...");
            for (
                var i = this.currentSlide - 1;
                i < this.currentSlide - 1 + this.maxOffset;
                i++
            ) {
                this.generateDot(i, i, "dot");
            }
        } else {
            this.generateDot(1, 1, "dot");
            this.generateDot("", "...");
            for (
                var i = this.countSlides + 1 - this.maxOffset;
                i <= this.countSlides;
                i++
            ) {
                this.generateDot(i, i, "dot");
            }
        }
    }
    generateDefault() {
        for (let i = 1; i < this.countSlides + 1; i++) {
            this.generateDot(i, i, "dot");
        }
    }
}

$(document).ready(function () {
    if ($("#g2-slider")) {
        var g2Slider = $("#g2-slider");

        function addSliderListeners() {
            var dots = document.querySelectorAll(".dot");
            dots.forEach(function (el) {
                el.addEventListener("click", function () {
                    g2Slider.slick("slickGoTo", el.id);
                });
            });
        }
        g2Slider.on("init", function (event, slick) {
            let pag = new Pagination("#g2-slider-pagination-list");
            pag.generate(slick.currentSlide, slick.slideCount);
            addSliderListeners();
        });
        g2Slider.on(
            "beforeChange",
            function (event, slick, currentSlide, nextSlide) {
                let pag = new Pagination("#g2-slider-pagination-list");
                pag.generate(nextSlide, slick.slideCount);

                addSliderListeners();
            }
        );
        g2Slider.slick({
            infinite: false,
            adaptiveHeight: true,
            fade: true,
            speed: 500,
            cssEase: "linear",
            prevArrow: $(".g2-slider-pagination .prev"),
            nextArrow: $(".g2-slider-pagination .next")
        });
    }
});
// Table Sloider Start //


// SQFT | M2 //
let h5Element = document.querySelector('.filter-box-language-sqft h5');
let h4Element = document.querySelector('.filter-box-language-sqft h4');
if (h5Element){
    h5Element.addEventListener("click", function() {
        h5Element.style.color = "#00FF57";
        h5Element.style.setProperty('--after-color', '#00FF57');
        h4Element.style.color = "#1e1e1e";
    });
}
if (h4Element){
    h4Element.addEventListener("click", function() {
        h4Element.style.color = "#00FF57";
        h5Element.style.color = "#1e1e1e";
        h5Element.style.setProperty('--after-color', '#1e1e1e');
    });
}


//  Heart color //
let heartIcons = document.querySelectorAll(".fa-regular.fa-heart");
heartIcons.forEach(function(icon) {
    icon.addEventListener("click", function() {
        if (icon.classList.contains("fa-regular")) {
            icon.classList.remove("fa-regular");
            icon.classList.add("fa-solid");
            icon.style.color = "#D70909";
        } else if (icon.classList.contains("fa-solid")) {
            icon.classList.remove("fa-solid");
            icon.classList.add("fa-regular");
            icon.style.color = "#1e1e1e";
        }
    });
});



//  FILTER ---- //
//  Developer //
function updateDeveloper(selectedDeveloper) {
    const developerHeader = document.querySelectorAll(".developerHeader");
    developerHeader.forEach(function(developerHeader) {
        developerHeader.textContent = selectedDeveloper;
    });
}
// Project
function updateProject(selectedProject) {
    const projectHeaders = document.querySelectorAll(".projectHeader");
    projectHeaders.forEach(function(projectHeader) {
        projectHeader.textContent = selectedProject;
    });
}




// function useDebounce () {
//     let timeoutId = null
//
//     return function (callback, time) {
//         if (timeoutId) {
//             clearTimeout(timeoutId)
//         }
//
//         timeoutId = setTimeout(callback, time)
//     }
// }
//
// const ourDebounce = useDebounce()
// const filters = {}
// $('.field').on('input', (event) => {
//     const value = event.target.value
//     const name = event.target.name
//     filters[name] = value
//     const changeFunction = () => {
//         console.log(filters)
//         $(`[data-column='${name}']`).each((i, td) => {
//             if (!td.innerHTML.toLowerCase().includes(value.toLowerCase())) {
//                 $(td).parents('tr').addClass('hidden')
//             }else{
//                 $(td).parents('tr').removeClass('hidden')
//             }
//         })
//     }
//
//     ourDebounce(() => {
//         changeFunction()
//     }, 1000)
// })
//
//









function useDebounce() {
    let timeoutId = null;

    return function (callback, time) {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(callback, time);
    };
}

const ourDebounce = useDebounce();


document.querySelectorAll('.field').forEach((field) => {
    field.addEventListener('input', (event) => {
        const value = event.target.value;
        const name = event.target.name;

        ourDebounce(() => {
            filters[name] = value;
        }, 1000);
    });
});




let heartIcons2 = document.querySelectorAll(".fa-solid.fa-heart");
heartIcons2.forEach(function(icon) {
    icon.addEventListener("click", function() {
        if (icon.classList.contains("fa-solid")) {
            icon.classList.remove("fa-solid");
            icon.classList.add("fa-regular");
            icon.style.color = "#1e1e1e";
        } else if (icon.classList.contains("fa-regular")) {
            icon.classList.remove("fa-regular");
            icon.classList.add("fa-solid");
            icon.style.color = "#D70909";
        }
    });
});

