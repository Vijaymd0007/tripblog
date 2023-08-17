import "./ContactFormStyles.css"

function ContactForm(){
    return(
        <div className="form-container">
            <h1>Drop a message</h1>
            <form  action="https://formspree.io/f/mqkvpoep"
  method="POST">
                <input 
                placeholder="Name"
                name="Name"
                type="text"/>
                <input placeholder="Email"
                name="Email"
                type="text"/>
                <input placeholder="Subject"
                name="Subject"
                type="text"/>
                <textarea name="Message"
                type="text"placeholder="Message" rows="4" ></textarea>
                <button type="submit">Send Message</button>
            </form>
        </div>
    )
}

export default ContactForm