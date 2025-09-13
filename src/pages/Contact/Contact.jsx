import NewsletterSubscribe from "../../Components/NewsletterSubscribe ";
import ContactFrom from "./ContactFrom";
import GoogleMap from "./GoogleMap";

const Contact = () => {
  return (
    <div>
      <ContactFrom></ContactFrom>
        <GoogleMap></GoogleMap>
      <NewsletterSubscribe></NewsletterSubscribe>
    </div>
  );
};

export default Contact;
