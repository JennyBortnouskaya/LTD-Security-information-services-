import './aboutUs.css';

const AboutUs = () => {
  return (
    <div className="infomation mx-[100px]">
      <div className="about_us flex justify-around">
        <div className="about_us__image"></div>
        <div className="about_us__text w-[805px] h-[700px]">
          <h1 className="info__title text-[48px] leading-[62px] text-[#212529]">О нас</h1>
          <p className="info__subtitle text-[18px] leading-[28px] text-[#434040]">
            <strong>ООО «Сервис» создано в 2019 году</strong> для повышения операционной
            эффективности клиентов за счет приема на аутсорсинг обеспечивающих и вспомогательных
            бизнес-процессов (их отдельных этапов), что позволяет клиентам сфокусироваться на основных
            видах деятельности и с помощью структурной реорганизации оптимизировать расходы.
          </p>
          <p className="info__subtitle text-[18px] leading-[28px] text-[#434040]">
            Участниками организации являются дочернее предприятие ОАО «Банк» - УСП «ЭБ Страхование»
            совместно с ООО «БДО Ашуренс» членом — международного объединения независимых аудиторских и
            консалтинговых компаний BDO International Limited.
          </p>
          <p className="info__subtitle text-[18px] leading-[28px] text-[#434040]">
            <strong>160</strong> сотрудников компании
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
