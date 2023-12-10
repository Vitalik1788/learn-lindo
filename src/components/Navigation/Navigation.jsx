import { Link } from 'react-router-dom';
import { CiLogin } from 'react-icons/ci';
import logo from '../../images/logo-ukr.png';
import css from './Navigation.module.css';
import LogInModal from 'components/ModalAuth/LogInModal';
import { useState } from 'react';

const Navigation = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  return (
    <div className={css.container}>
      <div className={css.logoBox}>
        <img src={logo} alt="logo_ukranian_flag" />
        <p className={css.logo}>LearnLingo</p>
      </div>
      <div className={css.navBox}>
        <Link
          to="/"
          className={css.linkStyle}
          aria-label="link to home page"
        >
          Home
        </Link>
        <Link
          to="/teachers"
          className={css.linkStyle}
          aria-label="link to teachers page"
        >
          Teachers
        </Link>
      </div>
      <div className={css.authBox}>
        <button onClick={() => openModal()} className={css.logInBtn} aria-label="Log in button">
          {' '}
          <CiLogin size={20} style={{ color: '#F4C550', marginRight: '8px' }} />
          Log in
        </button>
        <button className={css.registerBtn} aria-label="Registration button">
          Registration
        </button>
      </div>
      <LogInModal modalIsOpen={modalIsOpen} closeModal={closeModal} />
    </div>
  );
};

export default Navigation;
