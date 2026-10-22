import './services.css';

const Services = () => {
  return (
    <div className="services">
      <h2 className="font-bold text-[48px] leading-[62px] text-[#212529] my-0 mb-[50px] ml-[70px]">
        Наши услуги
      </h2>
      <div className="services__blocks flex flex-wrap justify-center w-full my-0 mb-[100px]">
        <ServiceCard
          title="Информационные услуги в области безопасности"
          image="/images/Rectangle 140.png"
          className="services__isecurity"
        />
        <ServiceCard
          title="Услуги по обеспечению безопасности"
          image="/images/Rectangle 141.png"
          vectorImage="/images/Vector_white.png"
          className="services__isecurity services__security"
          hasContent
        />
        <ServiceCard
          title="Услуги в области трудовых отношений"
          image="/images/Rectangle 142.png"
          vectorImage="/images/Vector_white.png"
          className="services__isecurity services__relationship"
          hasContent
          reversed
        />
        <ServiceCard
          title="Услуги в области бухгалтерского, налогового учета и отчетности"
          image="/images/Rectangle 143.png"
          className="services__isecurity services__bureaucracy"
        />
        <ServiceCard
          title="Услуги в области маркетинга"
          image="/images/Rectangle 144.png"
          className="services__isecurity services__marketing"
          reversed
        />
        <ServiceCard
          title="Услуги по внедрению системы менеджмента качества"
          image="/images/Rectangle 145.png"
          className="services__isecurity services__quality"
        />
        <ServiceCard
          title="Название услугии"
          image="/images/Rectangle 146.png"
          vectorImage="/images/Vector_white.png"
          className="services__isecurity services__all"
          hasContent
        />
      </div>
    </div>
  );
};

interface ServiceCardProps {
  title: string;
  image: string;
  vectorImage?: string;
  className?: string;
  hasContent?: boolean;
  reversed?: boolean;
}

const ServiceCard = ({ title, image, vectorImage, className, hasContent, reversed }: ServiceCardProps) => {
  return (
    <div className={className}>
      {hasContent && !reversed && (
        <div className="content">
          <p>{title}</p>
          {vectorImage && <img src={vectorImage} alt="" />}
        </div>
      )}
      <img src={image} alt="" />
      {!hasContent && !reversed && <p>{title}</p>}
      {reversed && !hasContent && <p>{title}</p>}
      {reversed && hasContent && (
        <div className="content">
          <p>{title}</p>
          {vectorImage && <img src={vectorImage} alt="" />}
        </div>
      )}
    </div>
  );
};

export default Services;
