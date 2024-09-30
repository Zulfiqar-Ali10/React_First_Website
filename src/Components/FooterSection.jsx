import { FaFacebook, FaInstagram, FaPhoneAlt } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLocationDot, FaMessage } from "react-icons/fa6";
import { TfiYoutube } from "react-icons/tfi";

function FooterSection() {

  return (
    <>
      <section className="info_section ">
        <div className="container">
          <h4>
            Get In Touch
          </h4>
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <div className="info_items">
                <div className="row">
                  <div className="col-md-4">
                    <a href="">
                      <div className="item ">
                        <div className="img-box ">
                          <FaLocationDot />
                        </div>
                        <p>
                          Lorem Ipsum is simply dummy text
                        </p>
                      </div>
                    </a>
                  </div>
                  <div className="col-md-4">
                    <a href="">
                      <div className="item ">
                        <div className="img-box ">
                        <FaPhoneAlt />
                        </div>
                        <p>
                          +02 1234567890
                        </p>
                      </div>
                    </a>
                  </div>
                  <div className="col-md-4">
                    <a href="">
                      <div className="item ">
                        <div className="img-box">
                        <FaMessage />
                        </div>
                        <p>
                          demo@gmail.com
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="social-box">
          <h4>
            Follow Us
          </h4>
          <div className="box">
            <a href=""><FaFacebook /></a>
            <a href=""><FaTwitter /></a>
            <a href=""><FaInstagram /></a>
            <a href=""><TfiYoutube /></a>
            
            {/* <a href="">
              <i className="fa fa-facebook" aria-hidden="true"></i>
            </a>
            <a href="">
              <i className="fa fa-twitter" aria-hidden="true"></i>
            </a>
            <a href="">
              <i className="fa fa-youtube" aria-hidden="true"></i>
            </a>
            <a href="">
              <i className="fa fa-instagram" aria-hidden="true"></i>
            </a> */}
          </div>
        </div>
      </section>
      <footer className="footer_section">
        <div className="container">
          <p>
            &copy; <span id="displayDateYear"></span> All Rights Reserved By
            <a href="https://html.design/">Free Html Templates</a>
          </p>
        </div>
      </footer>

    </>
  )
}

export default FooterSection;