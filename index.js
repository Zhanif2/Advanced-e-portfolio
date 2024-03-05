//template_3y4odfd
//service_b202oir
//publicKey: "EHDaYKGnJG1wc9pg6
let isModalOpen = false;
let contrastToggle = false;

function toggleContrast(){
contrastToggle = !contrastToggle;
if (contrastToggle){
document.body.classList += "dark-theme"
}
else{
    document.body.classList.remove("dark-theme")
}
}

function contact(){
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');
    loading.classList += " modal__overlay--visible";
    emailjs
    .sendForm(
        'service_b202oir', 
        'template_3y4odfd',
        event.target,
        'EHDaYKGnJG1wc9pg6'
    ).then(() => {
        loading.classList.remove("modal__overlay--visible");
        success.classList += " modal__overlay--visible";
    }).catch(() => {
        loading.classList.remove("modal__overlay--visible");
        alert(
            "The email service is temporarily unavailable. Please contact me directly on email@email.com"
        );
    })
}


function toggleModal(){
    if (isModalOpen){
        isModalOpen = false;
        return document.body.classList.remove ("modal--open")
    }
    isModalOpen = true;

    document.body.classList += " modal--open"
}