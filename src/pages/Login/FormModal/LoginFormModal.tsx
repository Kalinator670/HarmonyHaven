import React from 'react';
import { IoMdClose } from 'react-icons/io';
import { Backdrop, Box, Fade, Modal, TextField, Button } from '@mui/material';
import styles from './LoginFormModal.module.css';
import { IRegisterModalProps } from '@/interfaces/Popup/IRegisterModalProps';
import { primaryBtn } from '../Login';

const contentModal = { position: 'absolute', top: '45%', left: '50%', transform: 'translate(-50%, -50%)', bgcolor: 'background.paper', padding: '40px', borderRadius: '15px', maxWidth: '100%', width: '600px' };
const formInput = {
  width: '100%', marginBottom: '20px',
  '& .MuiOutlinedInput-root': {
    '&.Mui-focused fieldset': { borderColor: 'var(--pink)', color: 'var(--pink)' },
  }, '& .MuiInputLabel-root.Mui-focused': { color: 'var(--gray)' },
};

export const LoginFormModal: React.FC<IRegisterModalProps> = ({ open, setOpen }) => {

  return (
    <Modal
      aria-labelledby='transition-modal-title'
      aria-describedby='transition-modal-description'
      open={open}
      onClose={() => setOpen(!open)}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={open}>
        <Box sx={contentModal}>
          <div className={styles.heading}>
            <h2 className='h2'>Авторизация</h2>
            <div className={styles.close} onClick={() => setOpen(!open)}>
              <IoMdClose className='h2' />
            </div>
          </div>

          <form className={styles.form}>
            <TextField
              sx={formInput}
              id='outlined-basic'
              label='Имя'
              variant='outlined'
            />

            <TextField
              sx={formInput}
              id='outlined-basic'
              label='E-mail'
              variant='outlined'
            />

            <TextField
              sx={formInput}
              id='outlined-basic'
              label='Пароль'
              variant='outlined'
            />

            <Button
              sx={primaryBtn}
              style={{ backgroundColor: 'var(--pink)' }}
              variant='contained'
            >
              Войти
            </Button>
          </form>
        </Box>
      </Fade>
    </Modal>
  );
};
