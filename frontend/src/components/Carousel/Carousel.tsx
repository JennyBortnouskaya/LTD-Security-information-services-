import { useState } from 'react';
import './carousel.css';

const Carousel = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const goToSlide = (slideIndex: number) => {
    setActiveSlide(slideIndex);
  };

  return (
    <div className="carousel ism-slider">
      <div className="carousel__frame">
        <ol className={`carousel__slides ${activeSlide === 0 ? 'slide-0' : 'slide-1'}`}>
          <li className="carousel__slide slide__0">
            <div className="picture">
              <img src="/images/Rectangle 126.png" className="picture__rectangle" alt="" />
              <img src="/images/Vector.png" className="picture__vector" alt="" />
              <img src="/images/caurousel_backgroung.png" className="picture__background" alt="" />
              <button className="ism-caption-3 carousel__phone">
                <img src="/images/phone.png" alt="" />
                +375 (17) 215-61-15
              </button>
              <div className="menu">
                <button
                  className="ism-caption-3 carousel__menu"
                  type="button"
                  aria-label="Открыть меню"
                  aria-expanded={isMenuOpen}
                  onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
                >
                  <img src="/images/menu.png" alt="" />
                </button>
                {isMenuOpen && (
                  <ul className="sub-menus">
                        <li><a>Products</a></li>
                        <li><a>Products</a></li>
                        <li><a>Products</a></li>
                        <li><a>Products</a></li>
                  </ul>
                )}
              </div>
            </div>
            <div className="caption ism-caption-0 caption__0 caption__animation is-active">
              Информационные услуги в области безопасности
            </div>
            <div className="caption ism-caption-1 caption__1 caption__animation is-active">
              Проверка деловой репутации компании
            </div>
            <button className="ism-caption-2 carousel__details">Подробнее</button>
          </li>
          <li className="carousel__slide slide__1">
            <div className="picture">
              <img src="/images/Rectangle 126.png" className="picture__rectangle" alt="" />
              <img src="/images/Vector.png" className="picture__vector" alt="" />
              <img src="/images/caurousel_backgroung.png" className="picture__background" alt="" />
              <button className="ism-caption-3 carousel__phone">
                <img src="/images/phone.png" alt="" />
                +375 (17) 215-61-15
              </button>
              <div className="menu">
                <button
                  className="ism-caption-3 carousel__menu"
                  type="button"
                  aria-label="Открыть меню"
                  aria-expanded={isMenuOpen}
                  onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
                >
                  <img src="/images/menu.png" alt="" />
                </button>
                {isMenuOpen && (
                  <ul className="sub-menus">
                        <li><a>Products</a></li>
                        <li><a>Products</a></li>
                        <li><a>Products</a></li>
                        <li><a>Products</a></li>
                  </ul>
                )}
              </div>
            </div>
            <div className={`caption caption__0 caption__animation ${activeSlide === 1 ? 'is-active' : ''}`}>
              Информационные услуги в области безопасности
            </div>
            <div className={`caption ism-caption-1 caption__1 caption__animation ${activeSlide === 1 ? 'is-active' : ''}`}>
              Проверка деловой репутации компании
            </div>
            <button className="ism-caption-2 carousel__details">Подробнее</button>
          </li>
        </ol>
        <button className="carousel__button ism-button-prev" type="button" aria-label="Предыдущий слайд" onClick={() => goToSlide(0)} />
        <button className="carousel__button ism-button-next" type="button" aria-label="Следующий слайд" onClick={() => goToSlide(1)} />
      </div>
    </div>
  );
};

export default Carousel;
