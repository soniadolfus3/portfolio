import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { useNavigate } from "react-router-dom";
import SectionHeading from "./SectionHeading";

export default function Contact() {
  const navigate = useNavigate();
  const [isMobileContact, setIsMobileContact] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const emailHref = isMobileContact
    ? "mailto:soniadolfus.26@gmail.com"
    : "https://mail.google.com/mail/?view=cm&fs=1&to=soniadolfus.26@gmail.com";

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      "(max-width: 820px), (pointer: coarse)",
    );
    const updateDeviceMode = () => setIsMobileContact(mediaQuery.matches);

    updateDeviceMode();

    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", updateDeviceMode);
      return () => mediaQuery.removeEventListener("change", updateDeviceMode);
    }

    mediaQuery.addListener(updateDeviceMode);
    return () => mediaQuery.removeListener(updateDeviceMode);
  }, []);

  const showFeedback = (message: string) => {
    setFeedbackMessage(message);
    window.setTimeout(() => setFeedbackMessage(""), 2200);
  };

  const fallbackCopy = (value: string) => {
    const textarea = document.createElement("textarea");
    textarea.value = value;
    textarea.setAttribute("readonly", "true");
    textarea.style.position = "absolute";
    textarea.style.left = "-9999px";
    document.body.appendChild(textarea);
    textarea.select();
    const didCopy = document.execCommand("copy");
    document.body.removeChild(textarea);
    return didCopy;
  };

  const copyPhoneNumber = async () => {
    const phoneValue = "437-223-6141";

    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(phoneValue);
      } else if (!fallbackCopy(phoneValue)) {
        throw new Error("Copy failed");
      }

      showFeedback("Phone number copied");
    } catch {
      if (fallbackCopy(phoneValue)) {
        showFeedback("Phone number copied");
        return;
      }

      showFeedback("Unable to copy number");
    }
  };

  const handlePhoneAction = async () => {
    if (isMobileContact) {
      window.location.href = "tel:+14372236141";
      return;
    }

    await copyPhoneNumber();
  };

  return (
    <section id="contact" className="section-block">
      <div className="section-inner">
        <div className="contact-layout">
          <div>
            <SectionHeading
              eyebrow="Contact"
              title={
                <>
                  Let&apos;s build something <span>clear, polished, and ready to launch.</span>
                </>
              }
              description="Open to frontend roles, contract work, and select freelance projects across e-commerce, dashboards, and customer-facing products."
            />

            <div className="contact-copy">
              <p>
                I work best with teams that care about strong UI, responsive
                implementation, and frontend systems that feel production-ready
                from the start.
              </p>
              <p>
                Based in Ajax, Ontario, and available for remote, hybrid, and
                freelance collaboration.
              </p>
            </div>
          </div>

          <motion.aside
            className="contact-panel surface-card"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
          >
            <p className="panel-label">Direct contact</p>
            <h3>Sonia Dolfus</h3>
            <p>Frontend Developer</p>

            <div className="contact-highlights">
              <div className="contact-highlight">
                <MapPin size={16} />
                <span>Ajax, Ontario, Canada</span>
              </div>
              <div className="contact-highlight">
                <Mail size={16} />
                <span>Best first contact: email</span>
              </div>
            </div>

            <div className="contact-actions">
              <a
                className="button-primary"
                href={emailHref}
                target={isMobileContact ? undefined : "_blank"}
                rel={isMobileContact ? undefined : "noreferrer"}
              >
                <Mail size={18} />
                soniadolfus.26@gmail.com
              </a>
              <button
                type="button"
                className="button-secondary"
                onClick={() => void handlePhoneAction()}
              >
                <Phone size={18} />
                437-223-6141
              </button>
              <a
                className="button-secondary"
                href="https://wa.me/14372236141?text=Hi%20Sonia%2C%20I%20saw%20your%20portfolio."
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle size={18} />
                WhatsApp
              </a>
            </div>

            {feedbackMessage ? (
              <p className="contact-feedback" aria-live="polite">
                {feedbackMessage}
              </p>
            ) : null}

            <button
              type="button"
              className="panel-link"
              onClick={() => navigate("/projects")}
            >
              Review selected projects
              <ArrowRight size={16} />
            </button>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
