const carousels = document.querySelectorAll(".slide-har")

carousels.forEach(carousel => {
    const carouselInner = carousel.querySelectorAll(".slide-har div");
    console.log(carouselInner[0].children)
    const carouselContent = Array.from(carouselInner[0].children);
    
    carouselContent.forEach(item =>{

        const duplicatedItem = item.cloneNode(true);
        carouselInner[0].appendChild(duplicatedItem);

        carouselInner[0].style.animation = "move 12s linear infinite";
    })

});


$(document).ready(function() {
    $('.nav__item').on('click', function(event) {
        let targetId = $(this).attr('href');
        let targetElement = $(targetId);

        $('html, body').animate({
            scrollTop: targetElement.offset().top - 50 
        }, 1000); 
    });
});






function english(){
    for (let i = 0; i<34; i++){
        let Text = document.getElementById(`Text${i+1}`)
        Text.innerText=eng[i]
    }
};

function poland(){
    for (let i = 0; i<34; i++){
        let Text = document.getElementById(`Text${i+1}`)
        Text.innerText=pol[i]
    }
};


let eng = [
    `HOME`,
    `ABOUT ME`,
    `WHAT I DO`,
    `CONTACT`,
    `MY WORK`,
    `Hello, I’m`,
    `Wiktoria Kolisnychenko`,
    `Front-end developer`,
    `About me`,
    `ABOUT ME`,
    `Hi There! I'm Wiktoria Kolisnychenko`,
    `Front-end developer`,
    `I am a front-end developer creating interactive and intuitive interfaces. My work engages and inspires users, motivating them to interact with the product and achieve their goals. I strive to create effective and aesthetically pleasing digital experiences that create a positive impact on users.`,
    `Birthday :   January 22, 2009`,
    `Phone :   +48 783787732`,
    `Email :   kolisnychenko427@gmail.com`,
    `From :   Ukraine, Krivoy Rog`,
    `Language :   Polish, Ukrainian, Russian`,
    `Freelance :   Available`,
    `Freelance :   Available`,
    `Dowloand CV`,
    `WHAT I DO`,
    `WHAT I DO`,
    `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non vel, sint nisi possimus sunt veritatis totam velit.`,
    `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non vel, sint nisi possimus sunt veritatis totam velit.`,
    `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non vel, sint nisi possimus sunt veritatis totam velit.`,
    `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non vel, sint nisi possimus sunt veritatis totam velit.`,
    `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non vel, sint nisi possimus sunt veritatis totam velit.`,
    `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non vel, sint nisi possimus sunt veritatis totam velit.`,
    `CONTACT`,
    `CONTACT`,
    `Contact Info`,
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ligula nulla tincidunt id faucibus sed suscipit feugiat.`,
    `Send`
]

let pol = [
    `DOM`,
    `O MNIE`,
    `CO ROBIĘ`,
    `KONTAKT`,
    `MOJA PRACA`,
    `Cześć jestem`,
    `Wiktoria Kolisnychenko`,
    `Front-end developer`,
    `O MNIE`,
    `O MNIE`,
    `Cześć! Jestem Wiktoria Kolisnychenko`,
    `Front-end developer`,
    `Jestem programistą front-end tworzącym interaktywne i intuicyjne interfejsy. Moja praca angażuje i inspiruje użytkowników, motywując ich do interakcji z produktem i osiągania swoich celów. Staram się tworzyć skuteczne i estetyczne doświadczenia cyfrowe, które wywierają pozytywny wpływ na użytkowników.`,
    `Urodziny :   Styczeń 22, 2009`,
    `Telephone :   +48 783787732`,
    `Email :   kolisnychenko427@gmail.com`,
    `Jestem z :   Ukraine, Krivoy Rog`,
    `Język :   Polish, Ukrainian, Russian`,
    `Freelance :   Available`,
    `Freelance :   Available`,
    `Pobierz CV`,
    `CO ROBIĘ`,
    `CO ROBIĘ`,
    `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non vel, sint nisi possimus sunt veritatis totam velit.`,
    `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non vel, sint nisi possimus sunt veritatis totam velit.`,
    `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non vel, sint nisi possimus sunt veritatis totam velit.`,
    `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non vel, sint nisi possimus sunt veritatis totam velit.`,
    `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non vel, sint nisi possimus sunt veritatis totam velit.`,
    `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non vel, sint nisi possimus sunt veritatis totam velit.`,
    `KONTAKT`,
    `KONTAKT`,
    `Informacje kontaktowe`,
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ligula nulla tincidunt id faucibus sed suscipit feugiat.`,
    `Wysłać`
]




window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        this.contact_number.value = Math.random() * 100000 | 0;
        emailjs.sendForm('service_tfxek8o', 'template_bbzuilj', this)
            .then(function() {
                console.log('SUCCESS!');
            }, function(error) {
                console.log('FAILED...', error);
            });
    });
}
