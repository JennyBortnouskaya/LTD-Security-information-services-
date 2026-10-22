import './contactInformation.css';

const FeedbackForm = () => {
  return (
    <div className="feedback">
      <h4>Хотите получить консультацию?</h4>
      <div className="form__group field">
        <input
          type="input"
          className="form__field"
          placeholder="Имя"
          name="name"
          id="name"
          required
        />
        <label htmlFor="name" className="form__label">Имя</label>
      </div>
      <div className="form__group field">
        <input
          type="input"
          className="form__field"
          placeholder="Телефон"
          name="phone"
          id="phone"
          required
        />
        <label htmlFor="phone" className="form__label">Телефон</label>
      </div>
      <p className="text-[#9fa3ad]">Ваше сообщение (необязательно)</p>
      <label htmlFor="textarea" className="textarea__label">
        <textarea
          name="Ваше сообщение (необязательно)"
          className="textarea"
          id="textarea"
          rows={10}
          cols={30}
        ></textarea>
      </label>
      <a className="button__call">Перезвоните мне</a>
    </div>
  );
};

export default FeedbackForm;
