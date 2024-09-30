

function ContactSection() {

    return (
        <>

            <section className="contact_section layout_padding">
                <div className="container">

                    <div className="heading_container">
                        <h2>
                            Contact Us
                        </h2>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <form>
                                <div>
                                    <input type="text" placeholder="Name" />
                                </div>
                                <div>
                                    <input type="text" placeholder="Phone Number" />
                                </div>
                                <div>
                                    <input type="email" placeholder="Email" />
                                </div>
                                <div>
                                    <input type="text" className="message-box" placeholder="Message" />
                                </div>
                                <div className="d-flex ">
                                    <button>
                                        SEND
                                    </button>
                                </div>
                            </form>
                        </div>

                        <div className="col-md-6">
                            <div className="map_container">
                                <div className="map">
                                    <div id="googleMap">
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14486.32081217906!2d67.12986705!3d24.8098244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33b031ef5f86b%3A0x508d9e4d1ff2bf0f!2sMillennium%20Institute%20of%20Technology%20and%20Entrepreneurship%20-%20MiTE%20University!5e0!3m2!1sen!2s!4v1727701969734!5m2!1sen!2s" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default ContactSection;