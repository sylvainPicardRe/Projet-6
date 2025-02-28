function contactForm(photographer) {
    document.querySelector('.contact-button').addEventListener('click', () => {
        const ContactForm = new ContactFormModal(photographer)
        ContactForm.render()
    })
}