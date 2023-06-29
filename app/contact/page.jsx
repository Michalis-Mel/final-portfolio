import ContactSection from "../components/Contact/ContactSection";
export const metadata = {
  title: "M² Portfolio | Contact",
};

const Contact = () => {
  return (
    <div className="contact_page">
      <div className="row">
        <ContactSection />
      </div>
    </div>
  );
};

export default Contact;
