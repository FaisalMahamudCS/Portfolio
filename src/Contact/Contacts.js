import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import emailjs from "@emailjs/browser";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillTelephonePlusFill } from "react-icons/bs";
import { FaRegAddressCard } from "react-icons/fa";
import "./Contacts.css";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Contacts = () => {
  const form = useRef();
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const contactInfoRef = useRef(null);
  const formRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const contactInfo = contactInfoRef.current;
    const form = formRef.current;

    // Title animation
    gsap.fromTo(
      title,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: title,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Contact info and form animation
    gsap.fromTo(
      [contactInfo, form],
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    emailjs
      .sendForm(
        "service_5vqr959",
        "template_y9lzrae",
        form.current,
        "-WBBPB6Jo4hich6Q8"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSubmitMessage("Message sent successfully!");
          setIsSubmitting(false);
          form.current.reset();
          setTimeout(() => setSubmitMessage(""), 5000);
        },
        (error) => {
          console.log(error.text);
          setSubmitMessage("Failed to send message. Please try again.");
          setIsSubmitting(false);
          setTimeout(() => setSubmitMessage(""), 5000);
        }
      );
  };

  const contactInfo = [
    {
      icon: AiOutlineMail,
      label: "Email",
      value: "faisal.mahamud.cs@gmail.com",
      link: "mailto:faisal.mahamud.cs@gmail.com"
    },
    {
      icon: BsFillTelephonePlusFill,
      label: "Phone",
      value: "+8801927549653",
      link: "tel:+8801927549653"
    },
    {
      icon: FaRegAddressCard,
      label: "Address",
      value: "Pragati Sarani, Vatara, Dhaka, Bangladesh",
      link: null
    }
  ];

  return (
    <div ref={sectionRef} id="contact" className="contact-section">
      <div className="contact-background">
        <div className="contact-gradient"></div>
      </div>

      <div className="container">
        <h3 ref={titleRef} className="contact-title">
          Get In Touch
        </h3>

        <div className="contact-content">
          <div ref={contactInfoRef} className="contact-info">
            <h4 className="contact-info-title">Contact Information</h4>
            <p className="contact-info-description">
              Feel free to reach out to me for any opportunities or collaborations.
            </p>
            <div className="contact-info-list">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <div key={index} className="contact-info-item">
                    <div className="contact-icon-wrapper">
                      <IconComponent className="contact-icon" />
                    </div>
                    <div className="contact-details">
                      <span className="contact-label">{info.label}</span>
                      {info.link ? (
                        <a href={info.link} className="contact-value">
                          {info.value}
                        </a>
                      ) : (
                        <span className="contact-value">{info.value}</span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div ref={formRef} className="contact-form-container">
            <h4 className="contact-form-title">Send Message</h4>
            <form ref={form} onSubmit={sendEmail} className="contact-form">
              <div className="form-group">
                <label htmlFor="user_name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  id="user_name"
                  name="user_name"
                  className="form-input"
                  placeholder="Your Name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="user_mail" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  id="user_mail"
                  name="user_mail"
                  className="form-input"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="form-textarea"
                  rows="5"
                  placeholder="Your message..."
                  required
                ></textarea>
              </div>

              {submitMessage && (
                <div className={`submit-message ${submitMessage.includes("successfully") ? "success" : "error"}`}>
                  {submitMessage}
                </div>
              )}

              <button
                type="submit"
                className="submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
