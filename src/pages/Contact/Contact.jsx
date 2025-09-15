import { Helmet } from "react-helmet-async";
import NewsletterSubscribe from "../../Components/NewsletterSubscribe ";
import ContactFrom from "./ContactFrom";
import GoogleMap from "./GoogleMap";

const Contact = () => {
  return (
    <div>
      <Helmet>
        <title>EcoBazar Shopping | Contact </title>
      </Helmet>
      <ContactFrom></ContactFrom>
        <GoogleMap></GoogleMap>
      <NewsletterSubscribe></NewsletterSubscribe>
    </div>
  );
};

export default Contact;
