const INCREASE_NUMBER_ANIMATION_SPEED = 50;
let animationInited = false;


function increaseNumberAnimationStep(i, element, endNumber) {
    if (i <= endNumber) {
        if (i === endNumber) {
            element.innerHTML = i + '+';
        } else {
            element.innerHTML = i;
        }
        i += 100;
        setTimeout(function() {
            increaseNumberAnimationStep(i, element, endNumber);
        }, INCREASE_NUMBER_ANIMATION_SPEED);
    }
}

function initIncreaseNumberAnimation() {
    const numberAnimatedElement = document.querySelector('.features__clients-count');
    increaseNumberAnimationStep(0, numberAnimatedElement, 5000);
}

document.querySelector('#budget').addEventListener('change', function handleSelectChange(event) {
    if (event.target.value === 'other') {
      const formContainer = document.createElement('div');
      formContainer.classList.add('form__group');
      formContainer.classList.add('form__other-input');
   
      const input = document.createElement('input');
      input.placeholder = "Введите ваш вариант";
      input.type = "text";
   
      formContainer.appendChild(input);
      document.querySelector('#form form').insertBefore(formContainer, document.querySelector('.form__submit')); 
    }

    const otherInput = document.querySelector('.form__other-input');
   
    if (event.target.value !== 'other' && Boolean(otherInput)) {
      
      document.querySelector('#form form').removeChild(otherInput);
    }
});

function updateScroll() {
    if (window.scrollY > 0) {
        document.querySelector('header').classList.add('header__scrolled');
    } else {
        document.querySelector('header').classList.remove('header__scrolled');
    }
    let windowBottomPosition = window.scrollY + window.innerHeight;
    let countElementPosition = document.querySelector('.features__clients-count').offsetTop;
    if (windowBottomPosition >= countElementPosition && !animationInited) {
        initIncreaseNumberAnimation();
        animationInited = true;
    }
}

window.addEventListener('scroll', updateScroll);

function addSmoothScroll(link) {
    link.addEventListener('click', onLinkClick);
}

function onLinkClick(event) {
    event.preventDefault();
    document.querySelector(event.target.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
}

document.querySelectorAll('a[href^="#"]').forEach((link) => addSmoothScroll(link));
addSmoothScroll(document.querySelector('.more-button'));
