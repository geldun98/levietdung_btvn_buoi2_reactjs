import React, { useState, useRef, useEffect } from 'react';
import FormGroup from './FormGroup';

export const Form = ({ dataUser }) => {
  const [checkpassword, setCheckPassword] = useState();
  const fullname = useRef();
  const email = useRef();
  const password = useRef();
  const againpassword = useRef();

  function handleInput() {
    setCheckPassword(password.current.value);
  }

  useEffect(() => {
    fullname.current.focus();
    return () => {};
  }, []);

  function handleSubmit() {
    if (!fullname.current.value) {
      fullname.current.parentElement.classList.add('invalid');
    }
    if (!password.current.value) {
      password.current.parentElement.classList.add('invalid');
    }
    if (!email.current.value) {
      email.current.parentElement.classList.add('invalid');
    }
    if (!againpassword.current.value) {
      againpassword.current.parentElement.classList.add('invalid');
    }
    if (!validateEmail(email.current.value)) {
      email.current.parentElement.classList.add('invalid');
    }
    if (againpassword.current.value !== password.current.value) {
      againpassword.current.parentElement.classList.add('invalid');
    }
    if (
      !againpassword.current.parentElement.classList.contains('invalid') &&
      !fullname.current.parentElement.classList.contains('invalid') &&
      !password.current.parentElement.classList.contains('invalid') &&
      !email.current.parentElement.classList.contains('invalid')
    ) {
      dataUser({
        fullname: fullname.current.value,
        email: email.current.value,
        password: password.current.value,
      });
    }
  }

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  return (
    <div className="FormRegister">
      <FormGroup
        ref={fullname}
        type="text"
        id="fullname"
        label="Tên đầy đủ"
        placeholder="VD:Lê Việt Dũng"
        message="Vui lòng nhập lại tên"
        handleInput={handleInput}
      ></FormGroup>
      <FormGroup
        ref={email}
        type="email"
        id="email"
        label="Email"
        placeholder="email@domain.com"
        message="Vui lòng nhập lại email"
        handleInput={handleInput}
      ></FormGroup>
      <FormGroup
        ref={password}
        type="password"
        id="password"
        label="Mật khẩu"
        message="Mật khẩu phải dài hơn 3 ký tự"
        handleInput={handleInput}
      ></FormGroup>
      <FormGroup
        ref={againpassword}
        type="password"
        id="againpassword"
        label="Nhập lại mật khẩu"
        message="Mật khẩu không trùng khớp"
        handleInput={handleInput}
        checkpassword={checkpassword}
      ></FormGroup>

      <button className="submit" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};
