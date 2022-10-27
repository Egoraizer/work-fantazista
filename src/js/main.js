import AOS from 'aos';
import Swiper, {Navigation, Pagination, Scrollbar, Autoplay} from 'swiper';
// import 'aos/dist/aos.css';

AOS.init({
  disable: 'mobile'
});

Swiper.use([Navigation, Pagination, Scrollbar, Autoplay]);

document.addEventListener('DOMContentLoaded', () => {
  const mainSlider = new Swiper('.index-slider', {
    slidesPerView: 1,
    spaceBetween: 100,
    centeredSlides: true,
    navigation: {
      nextEl: '.index-slider__button_next',
      prevEl: '.index-slider__button_prev',
      disabledClass: 'index-slider__button_disabled'
    }
  });
  
  const advantageSlider = new Swiper('.index-advantage__content', {
    slidesPerView: 2,
    spaceBetween: 50,
    allowTouchMove: true,
    pagination: {
      el: '.index-advantage__pagination',
      type: 'bullets',
      clickable: true,
      bulletActiveClass: 'index-advantage__bullet_active',
      bulletClass: 'index-advantage__bullet',
      renderBullet: (index, className) => {
        return `
          <span class="${className}">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M6.52824 1.89176C7.47832 1.06473 8.66688 0.896062 9.87649 1.31272L17.1104 4.33159C18.1894 4.97977 18.7184 6.0598 18.6966 7.33566L17.8151 15.1665C17.5327 16.3921 16.6708 17.2301 15.4467 17.603L8.30415 19.3344C7.05257 19.4452 5.98663 18.8835 5.25794 17.836L1.40113 11.9098C0.491938 10.5075 0.337865 9.27871 1.42246 7.83644L6.52824 1.89176Z" stroke="white"/>
            </svg>
          </span>
        `
      }
    },
    breakpoints: {
      769: {
        slidesPerView: 3,
        allowTouchMove: false
      }
    },
    navigation: {
      nextEl: '.index-advantage__button_next',
      prevEl: '.index-advantage__button_prev',
      disabledClass: 'index-advantage__button_disabled'
    }
  })
  
  
  const gallerySlider = new Swiper('.index-gallery__slider', {
    slidesPerView: 2,
    spaceBetween: 15,
    autoplay: {
      delay: 7500
    },
    navigation: {
      nextEl: '.index-gallery__button_next',
      prevEl: '.index-gallery__button_prev',
      disabledClass: 'index-gallery__button_disabled'
    },
    loop: true,
    breakpoints: {
      1025: {
        slidesPerView: 4,
      },
      481: {
        slidesPerView: 3,
      }
    }
  })
  
  const modal = document.querySelector('#modal');
    if (modal) {
      const images = document.querySelectorAll('img[data-modal-open]');
      const modalContentImg = modal.querySelector('.modal__content img');
      const modalClose = modal.querySelectorAll('[data-close-modal]');

      // close
      if (modalClose.length) {
        modalClose.forEach((closeButton) => {
          closeButton.addEventListener('click', closeModal)
        })
      }

      // open
      if (images.length && modalContentImg) {
        images.forEach((img) => {
          img.addEventListener('click', (e) => {
            openModal(img);

            const imgSrc = img.src;
            modalContentImg.src = imgSrc;
            console.log(img, imgSrc)
          })
        })
      }

      function openModal() {
        if (modal) {
          modal.classList.add('active');
          document.body.classList.add('--no-scroll');
        }
      }

      function closeModal() {
        if (modal && modal.classList.contains('active')) {
          modal.classList.remove('active')
          document.body.classList.remove('--no-scroll');
        }
      }
    }
})
