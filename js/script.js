new Swiper('.card-wrapper', {
    loop: true,
    spaceBetween: 30,

    // Pagination bullets
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // Responsive breakpoints
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        }
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const heading = document.querySelector('.mainHead');
    const text = "Who are you looking to find?";
    let i = 0;
    
    function typeWriter() {
        if (i < text.length) {
            heading.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100); // Typing speed (milliseconds)
        } else {
            // Animation complete - keep blinking cursor
        }
    }
    
    typeWriter();
});

