emailjs.init("10wBwNJOilJwZz1j7")

const sendBtn = document.querySelector('.form__send-btn')
const result = document.querySelector('.form__sent-text')

const sendEmail = () => {

    let from = document.getElementById("from").value
    let subject = document.getElementById("subject").value
    let message = document.getElementById("message").value

    if (!from || !subject || !message) {
        alert('You have to type correct form')
        throw new Error('Email sending Failed')
    }
    if (!from.includes("@")) {
        alert('You have to type correct email')
        return
    }

    emailjs.send(
        "service_5pvu04c",
        "template_diqvzhx",
        {
            email: from,
            subject: subject,
            message: message
        }
    )
        .then(function () {
            result.innerHTML = "Email sent successfully!";
            result.style.opacity = 1;
        }, function (error) {
            result.innerHTML = "Email sending failed!";
            result.style.opacity = 1;
        })

    setTimeout(() => {
        window.location.reload(1)
    }, 6000)
}


sendBtn.addEventListener('click', sendEmail)

