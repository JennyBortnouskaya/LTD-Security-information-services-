import { useState } from 'react';
import './advantages.css';
import { publicAsset } from '../../utils/publicAsset';

const Advantages = () => {
  return (
    <div className="advantages">
      <h2 className="text-[48px] leading-[62px] text-[#212529] text-center">Преимущества аутсорсинга</h2>
      <div className="advantages__blocks flex flex-wrap justify-center text-[28px] leading-[36px] my-0 mb-[100px]">
        <AdvantageCard
          icon={publicAsset('images/dimond.png')}
          text="Вы получаете <strong> услуги высокого качества</strong> в короткий срок"
          hiddenContent="Скрытый контент"
          className="advantages__quality"
          id="hidden__quality"
        />
        <AdvantageCard
          icon={publicAsset('images/money.png')}
          text="<strong>Оптимизирует финансовые затраты</strong> предприятия"
          hiddenContent="Скрытый контент"
          className="advantages__quality advantages__optimisation"
          id="hidden__optimisation"
        />
        <AdvantageCard
          icon={publicAsset('images/doc.png')}
          text="<strong>Избавляет от обязательств</strong> по трудовому законодательству"
          hiddenContent="Скрытый контент"
          className="advantages__quality advantages__responsibilities"
          id="hidden__responsibilities"
        />
        <AdvantageCard
          icon={publicAsset('images/target.png')}
          text="<strong>Дает возможность сосредоточиться</strong> на основных бизнес-процессах"
          hiddenContent="Скрытый контент"
          className="advantages__quality advantages__concentration"
          id="hidden__concentration"
        />
      </div>
    </div>
  );
};

interface AdvantageCardProps {
  icon: string;
  text: string;
  hiddenContent: string;
  className?: string;
  id: string;
}

const AdvantageCard = ({ icon, text, hiddenContent, className, id }: AdvantageCardProps) => {
  const [isHidden, setIsHidden] = useState(true);

  return (
    <div className={className}>
      <img src={icon} alt="" className="h-[80px]" />
      <p className="w-[521px]" dangerouslySetInnerHTML={{ __html: text }} />
      <button
        className="button__details"
        onClick={() => setIsHidden(!isHidden)}
      ></button>
      <p className={`js-form ${isHidden ? 'hidden' : ''}`} id={id}>
        {hiddenContent}
      </p>
    </div>
  );
};

export default Advantages;
