import React, { useRef } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import vidaplus from '../../assets/img/vidaplus.png';
import '../../sass/login/login.scss';
import FooterSystem from '../footer/index';

const schema = yup.object({
  email: yup
    .string()
    .email('Email inválido')
    .required('Email é obrigatório'),
  senha: yup
    .string()
    .min(6, 'Senha deve ter pelo menos 6 caracteres')
    .required('Senha é obrigatória'),
}).required();

function Login() {
  const toast = useRef(null);
  const navigate = useNavigate();

  const { register, handleSubmit, control, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    mode: 'onTouched',
  });

  const onSubmit = async (data) => {
    const auth = getAuth();
    try {
      await signInWithEmailAndPassword(auth, data.email, data.senha);

   
      toast.current.show({ severity: 'success', summary: 'Sucesso', detail: 'Login realizado!', life: 2000 });

    
      setTimeout(() => {
        navigate('/paciente');
      }, 2000);
      
    } catch (error) {
      toast.current.show({ severity: 'error', summary: 'Erro', detail: 'Email ou senha inválidos!', life: 100000 });
      console.error('Erro no login:', error);
    }
  };

  return (
    <div className="ContainerLogin">
      <Toast ref={toast} />
      <img src={vidaplus} alt="Vida Plus" />

      <form onSubmit={handleSubmit(onSubmit)} noValidate className="ContainerForm">
        <h2>Realize o seu login:</h2>

        <div className="ContainerInputs">
          <label>Email:</label>
          <InputText
            id="email"
            className={errors.email ? 'p-invalid w-full' : 'w-full'}
            {...register('email')}
          />
          {errors.email && <small className="p-error">{errors.email.message}</small>}
        </div>

        <Controller
          name="senha"
          control={control}
          render={({ field, fieldState }) => (
            <div className="ContainerInputs">
              <label>Senha:</label>
              <Password
                id={field.name}
                toggleMask
                feedback={false}
                className={fieldState.invalid ? 'p-invalid w-full' : 'w-full'}
                {...field} 
              />
              {fieldState.error && <small className="p-error">{fieldState.error.message}</small>}
            </div>
          )}
        />

        <a>Esqueceu sua senha?</a>

        <Button icon="pi pi-sign-in" raised type="submit" className='Btn'>
          Entrar
        </Button>

        <Button icon="pi pi-user-plus" raised outlined onClick={() => navigate('/cadastro')} className='Btn'>
          Criar conta do paciente
        </Button>
      </form>
      <FooterSystem />
    </div>
  );
}

export default Login;
