import React from 'react';
import LogoIcon from '../../assets/Auth/logo.svg';
import GoogleIcon from '../../assets/Auth/google.svg';
import styles from './Login.module.css';
import cn from 'classnames';
import { Button, Divider } from '@mui/material';
import { LoginFormModal } from './FormModal/LoginFormModal';
import { Link } from 'react-router-dom';

export const primaryBtn = { marginTop: '32px', width: '100%', padding: '16px 32px', boxShadow: 'none', textTransform: 'none', borderRadius: '15px', fontSize: '16px', fontWeight: '700' };
const ghostBtn = { width: '100%', padding: '16px 32px', color: 'var(--pink)', border: '1px var(--light-gray) solid', boxShadow: 'none', textTransform: 'none', borderRadius: '15px', fontSize: '16px', fontWeight: '700' };

export const Login: React.FC = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <section className={styles.wrapper}>
      <img src={LogoIcon} alt='' />
      <div className={styles.text}>
        <p className={cn(styles.subtitle, 'subtitle')}>Авторизируйтесь, чтобы продолжить</p>
        <Button
          sx={primaryBtn}
          style={{ backgroundColor: 'var(--pink)' }}
          onClick={() => setOpen(!open)}
          variant='contained'
        >
          Продолжить с e-mail
        </Button>

        <div className={styles.btnGoogle}>
          <img className={styles.googleIcon} src={GoogleIcon} alt='' />
          <Button
            sx={ghostBtn}
            style={{ backgroundColor: 'var(--white)' }}
            variant='contained'
          >
            Продолжить с Google
          </Button>
        </div>

        <Divider style={{ marginTop: '32px', fontWeight: 700 }} className='text'>Нет аккаунта?</Divider>
        <Link className={cn(styles.link, 'text')} to='/register'>Зарегистрироваться</Link>
      </div>

      <LoginFormModal open={open} setOpen={setOpen} />
    </section>
  );
};