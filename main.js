document.addEventListener('DOMContentLoaded', function () {
    const image = document.querySelector('.footer__img__wrapper img');
    const moveAmount = 15;

    document.addEventListener('mousemove', (event) => {
        const { clientX, clientY } = event;
        const xPos = (clientX / window.innerWidth) * moveAmount - moveAmount / 2;
        const yPos = (clientY / window.innerHeight) * moveAmount - moveAmount / 2;

        image.style.transform = `translate(${xPos}px, ${yPos}px)`;
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const menuItems = document.querySelectorAll('.sidenav a');
    const sections = document.querySelectorAll('section');

    function activateMenuItem() {
        let index = sections.length;

        while(--index && window.scrollY + 50 < sections[index].offsetTop) {}

        menuItems.forEach((item) => item.classList.remove('active'));
        menuItems[index].classList.add('active');
    }

    activateMenuItem();
    window.addEventListener('scroll', activateMenuItem);
});


function burgerMenu(selector) {
    let menu = $(selector);
    let button = menu.find('.burger-menu_button', '.burger-menu_lines');
    let links = menu.find('.burger-menu_link');
    let overlay = menu.find('.burger-menu_overlay');
    
    button.on('click', (e) => {
      e.preventDefault();
      toggleMenu();
    });
    
    links.on('click', () => toggleMenu());
    overlay.on('click', () => toggleMenu());
    
    function toggleMenu(){
      menu.toggleClass('burger-menu_active');
      document.body.classList.toggle('no-scroll');
      
      if (menu.hasClass('burger-menu_active')) {
        $('body').css('overlow', 'hidden');
      } else {
        $('body').css('overlow', 'visible');
      }
    }
  }
  
  burgerMenu('.burger-menu');

const modals = {
    callMenu: document.getElementById('callMenu'),
    searchMenu: document.getElementById('searchMenu'),
    managementMenu: document.getElementById('managementMenu')
};

document.addEventListener('DOMContentLoaded', () => {
    const videos = {
        z12: "OdWEA9hRWJM",
        z11: "NE6VAenG35I",
        z10: "3HLD12up7yk",
        z9: "jk9niuhq_T4",
        z8: "LgUnKB2nY-4",
        z7: "nd9-UGPLlJY",
        z6: "z47yzKE2h_8",
        z5: "refEk3zW6PA",
        z4: "LvYf6E8llEs",
        z3: "PA6VesnzAQw",
        z2: "_tjTFW3AByk",
        z1: "sUSijK3ItXs"
    };
    const loadingText = document.getElementById('zovLoading');

    window.openVideoModal = function (id) {
        const videoId = videos[id];
        if (videoId) {
            loadingText.style.display = 'block';
            document.getElementById('videoIframe').src = `https://www.youtube.com/embed/${videoId}?controls=0`;
            document.getElementById('videoModal').showModal();
        }
    };

    videoIframe.onload = function() {
            loadingText.style.display = 'none';
        };

    window.closeVideoModal = function () {
        document.getElementById('videoModal').close();
        document.getElementById('videoIframe').src = "";
    };
});

document.getElementById('videoModal').addEventListener('click', (event) => {
        if (event.target === event.currentTarget) {
            closeVideoModal();
        }
    });

Object.values(modals).forEach(modal => {
    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal(modal.id);
        }
    });
});

function closeModal(modalId) {
    modals[modalId].close();
    document.body.classList.remove('no-scroll');
}

function openModal(modalId) {
    modals[modalId].showModal();
    document.body.classList.add('no-scroll');
}

window.addEventListener('load', function() {
    const block = document.querySelector('.main__wrapper');
    block.classList.add('active');
});

function showVisibleBlocks() {
    const blocks = document.querySelectorAll('.section');
    const footer = document.querySelector('footer');

    blocks.forEach(block => {
        const blockPosition = block.getBoundingClientRect().top;
        const footerPosition = footer.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.15;

        if (blockPosition < screenPosition) {
            block.classList.add('visible');
        }
    });

    const footerPosition = footer.getBoundingClientRect().top;
    const screenPosition = window.innerHeight;

    if (footerPosition < screenPosition) {
        footer.classList.add('visible');
    }
}

function animateVisibleBlocksOnLoad() {
    const blocks = document.querySelectorAll('.section');
    
    blocks.forEach((block, index) => {
        const blockPosition = block.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.15;

        if (blockPosition < screenPosition) {
            setTimeout(() => {
                block.classList.add('visible')
            }, index * 300);
        }
    });
}

window.addEventListener('scroll', showVisibleBlocks);

showVisibleBlocks();
animateVisibleBlocksOnLoad();

const favicon = document.getElementById('favicon');
const title = document.getElementById('title')
const icons = [
    'img/1.png',
    'img/2.png',
    'img/3.png'
];

let currentIconIndex = 0;

setInterval(() => {
    currentIconIndex = (currentIconIndex + 1) % icons.length;
    favicon.href = icons[currentIconIndex];
    
},  500);

const titles = ["Предложка", "Предложка Z", "Предложка ZO", "Предложка ZOV"];
        let index = 0;

        function changeTitle() {
            document.title = titles[index];
            index = (index + 1) % titles.length;
        }

        setInterval(changeTitle, 1000);

        function scrollToSection(sectionId) {
            const target = document.getElementById(sectionId);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
        


        function scrollToSection(sectionId) {
            const target = document.getElementById(sectionId);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            } else {
                console.error(`"${sectionId}" not found.`);
            }
        }
        
        const sections = ['supplies', 'defibrillator', 'handcuffs', 'interactionMenu', 'dsa', 'money', 'ranks', 'spies', 'health', 'scientists'];