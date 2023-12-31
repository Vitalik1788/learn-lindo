import Modal from 'react-modal';
import css from './LogInModal.module.css';
import { MdClose } from 'react-icons/md';
import { LuEyeOff } from 'react-icons/lu';
import { IoEye } from 'react-icons/io5';
import { Field, Form, Formik } from 'formik';
import { useState } from 'react';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '0',
    borderRadius: '30px',
  },
};

const LogInModal = ({ modalIsOpen, closeModal }) => {
  const [passwordOpen, setPasswordOpen] = useState("text");

  return (
    <Modal
      ariaHideApp={false}
      isOpen={modalIsOpen}
      // onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <div className={css.container}>
        <h1 className={css.modalTitle}>Log In</h1>
        <p className={css.modalText}>
          Welcome back! Please enter your credentials to access your account and
          continue your search for an teacher.
        </p>
        <MdClose className={css.cross} onClick={() => closeModal()} size={16} />
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
        >
          {({ values, errors, touched }) => (
            <Form className={css.formBox}>
              <Field
                className={css.inputStyle}
                type="email"
                name="email"
                value={values.email}
                placeholder="Email"
              />
              <Field
                className={css.inputStyle}
                type={passwordOpen}
                name="password"
                value={values.password}
                placeholder="Password"
              />
              {passwordOpen === 'text' ? (
                <LuEyeOff
                  onClick={() => setPasswordOpen('password')}
                  className={css.eyeStyle}
                  size={20}
                />
              ) : (
                <IoEye
                  onClick={() => setPasswordOpen('text')}
                  className={css.eyeStyle}
                  size={20}
                />
              )}

              <button className={css.formBtn} type="submit">
                Log In
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </Modal>
  );
};

export default LogInModal;
