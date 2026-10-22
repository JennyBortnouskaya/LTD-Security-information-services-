import './contactInformation.css';
import Contacts from './Contacts';
import FeedbackForm from './FeedbackForm';

const ContactInformation = () => {
  return (
    <div className="contact_information">
      <Contacts />
      <FeedbackForm />
      <img src="/images/Vector(1).png" alt="" />
    </div>
  );
};

export default ContactInformation;
