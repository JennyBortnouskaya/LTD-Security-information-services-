import './contactInformation.css';
import Contacts from './Contacts';
import FeedbackForm from './FeedbackForm';
import { publicAsset } from '../../utils/publicAsset';

const ContactInformation = () => {
  return (
    <div className="contact_information">
      <Contacts />
      <FeedbackForm />
      <img src={publicAsset('images/Vector(1).png')} alt="" />
    </div>
  );
};

export default ContactInformation;
