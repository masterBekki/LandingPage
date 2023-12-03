import './register.css'
const Register = () => {
  return (
    <section className="join container">
      <form>
        <input type="text" placeholder="Ism" />
        <input type="text" placeholder="Familiya" />
        <input type="number" placeholder="Nomeringizni kiriting" />
        <select>
          <option>Kursni tanlang</option>
          <option>English grammar</option>
          <option>SAT</option>
          <option>IELTS</option>
        </select>
        <input type="date" placeholder="Ozingizga qulay vaqtni tanlang" />
        <textarea cols="30" rows="10" placeholder="Izoh"></textarea>
        <button type="button">Jo‘natish</button>
      </form>
    </section>
  );
}

export default Register