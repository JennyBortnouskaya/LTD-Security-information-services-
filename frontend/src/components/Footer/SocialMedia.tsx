import './footer.css';
import { publicAsset } from '../../utils/publicAsset';

const SocialMedia = () => {
  return (
    <div className="social__media">
      <a className="icon facebook">
        <img src={publicAsset('images/Group 1076.png')} alt="" />
      </a>
      <a className="icon vk">
        <img src={publicAsset('images/Group 1077.png')} alt="" />
      </a>
      <a className="icon twitter">
        <img src={publicAsset('images/Group 1078.png')} alt="" />
      </a>
      <a className="icon instagram">
        <img src={publicAsset('images/Group 1079.png')} alt="" />
      </a>
      <a className="icon youtube">
        <img src={publicAsset('images/Group 1080.png')} alt="" />
      </a>
    </div>
  );
};

export default SocialMedia;
