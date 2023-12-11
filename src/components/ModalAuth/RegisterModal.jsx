import Modal from 'react-modal';
import css from './RegisterModal.module.css'
import { MdClose } from 'react-icons/md';
import { Field, Form, Formik } from 'formik';
import { LuEyeOff } from 'react-icons/lu';
import { IoEye } from 'react-icons/io5';
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

const RegisterModal = ({ regModal, closeModalReg }) => {
  const [passwordOpen, setPasswordOpen] = useState('text');



  return (
    <Modal
      ariaHideApp={false}
      isOpen={regModal}
      // onAfterOpen={afterOpenModal}
      onRequestClose={closeModalReg}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <div className={css.container}>
        <h1 className={css.modalTitle}>Registration</h1>
        <p className={css.modalText}>
          Thank you for your interest in our platform! In order to register, we
          need some information. Please provide us with the following
          information
        </p>
        <MdClose
          className={css.cross}
          onClick={() => closeModalReg()}
          size={16}
        />
        <Formik
          initialValues={{
            userName: '',
            email: '',
            password: '',
          }}
        >
          {({ values, errors, touched }) => (
            <Form className={css.formBox}>
              <Field
                className={css.inputStyle}
                type="text"
                name="userName"
                value={values.userName}
                placeholder="Name"
              />
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
                Sign Up
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </Modal>
  );
};

export default RegisterModal;
