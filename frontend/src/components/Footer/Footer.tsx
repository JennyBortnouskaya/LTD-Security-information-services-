import './footer.css';
import SocialMedia from './SocialMedia';
import { publicAsset } from '../../utils/publicAsset';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="navigation">
        <div className="navigation__list">
          <h5>Услуги</h5>
          <div className="navigation__block">
            <a>Информационные услуги в области безопасности</a>
            <a>Услуги по обеспечению безопасности</a>
            <a>Услуги в области трудовых отношений</a>
            <a>Услуги в области бухгалтерского, налогового учета и отчетности</a>
            <a>Услуги в области маркетинга</a>
            <a>Услуги по внедрению системы менеджмента качества</a>
            <a>Название услуги</a>
          </div>
        </div>
        <div className="buttons">
          <SocialMedia />
          <a href="#" className="arrow" onClick={(e) => { e.preventDefault(); scrollToTop(); }}>
            <button className="up__button">
              <img src={publicAsset('images/Arrow 5.png')} alt="" />
              Наверх
            </button>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
