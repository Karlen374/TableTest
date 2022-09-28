import { useState } from 'react';
import { useAppDispatch } from 'src/hooks/hooks';
import { closeSignUpModal, openSignInModal, signUp } from 'src/store/slices/authorizationSlice';
import styles from './signUpForm.module.scss';

const SignUpForm = () => {
  const [name, setName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const dispatch = useAppDispatch();
  const userSignUp = () => {
    dispatch(signUp({ userName: name, password }));
    dispatch(closeSignUpModal());
    setName('');
    setPassword('');
  };
  return (
    <div className={styles.signUp}>
      <h2>Регистрация</h2>
      <input
        type="text"
        placeholder="Имя"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="password"
        placeholder="Пароль"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div>
        <button onClick={userSignUp} className={styles.signUp_button} type="button">
          Регистрация
        </button>
        <button type="button" onClick={() => dispatch(openSignInModal())}>
          Уже есть аккаунт ?
        </button>
      </div>
    </div>
  );
};
export default SignUpForm;
