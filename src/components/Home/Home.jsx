import css from './Home.module.css';
import bgi from '../../images/hero-img.jpg';


const Home = () => {

  return (
    <div style={{paddingBottom: "32px"}}>
      <section className={css.container}>
        <div className={css.textBox}>
          <h1 className={css.heroText}>
            Unlock your potential with the best{' '}
            <i className={css.heroSpan}>language</i> tutors
          </h1>
          <p className={css.text}>
            Embark on an Exciting Language Journey with Expert Language Tutors:
            Elevate your language proficiency to new heights by connecting with
            highly qualified and experienced tutors.
          </p>
          <button className={css.heroBtn}>Get started</button>
        </div>
        <div className={css.imgBox}>
          <img src={bgi} alt="girl studies" className={css.imgBox} />
        </div>
      </section>
      <section>
        <ul className={css.heroList}>
          <li className={css.heroItem}>
            <p className={css.listTitle}>32,000 +</p>
            <p className={css.listText}>Experienced tutors</p>
          </li>
          <li className={css.heroItem}>
            <p className={css.listTitle}>300,000 +</p>
            <p className={css.listText}>5-star tutor reviews</p>
          </li>
          <li className={css.heroItem}>
            <p className={css.listTitle}>120 +</p>
            <p className={css.listText}>Subjects taught</p>
          </li>
          <li className={css.heroItem}>
            <p className={css.listTitle}>200 +</p>
            <p className={css.listText}>Tutor nationalities</p>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Home;
