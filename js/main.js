
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




//  Partner Start //
// $('.partner-section').slick({
//     dots: false,
//     infinite: true,
//     speed: 300,
//     slidesToShow:4,
//     centerMode: true,
//     variableWidth: true,
//     prevArrow: false,
//     nextArrow: false,
// });

$('.partner-section').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    // autoplay: true,
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
                centerPadding: '40px',
                slidesToShow: 1
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


$('.tab-selector').click((e) => {
    e.preventDefault()
    $('.content').removeClass('active')
    $('.tab-selector').removeClass('active')
    $(e.target.dataset.target).parent().addClass('active')
    $(e.target.dataset.target).slick('resize')
    e.target.classList.add('active')
})





$('.reviews-section').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-chevron-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="fa fa-chevron-right"></i></button>',
    responsive: [
        {
            breakpoint: 9999,
            settings: {
                slidesToShow: 3,
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


