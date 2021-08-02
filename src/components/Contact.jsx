import React, { useEffect } from 'react'

function Contact({revealer}) {
    useEffect(()=>{
        revealer.reveal('.contact__input', {interval: 200})
    },[])
    return (
        <section className="contact section" id="contact">
            <h2 className="section-title">
                Contact
            </h2>
            <div className="contact__container bd-grid">
                <form action="" className="contact__form">
                    <input type="text" placeholder="Name" className="contact__input" />
                    <input type="mail" placeholder="Email" className="contact__input" />
                    <textarea name="" placeholder="Mình để cho vui mắt chứ chưa deploy đc backend, ko send đc đâu ^^" id="" cols="0" rows="10" className="contact__input" ></textarea>
                    <input type="button" value="Send" className="contact__button button"/>
                </form>
            </div>
        </section>
    )
}

export default Contact
