import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';
import vidaplus from '../../assets/img/vidaplus.png';
import '../../sass/login/login.scss';

const schema = yup.object({
  email: yup
    .string()
    .email('Email inválido')
    .required('Email é obrigatório'),
  senha: yup
    .string()
    .min(6, 'Senha deve ter pelo menos 6 caracteres')
    .required('Senha é obrigatória'),
  confirmarSenha: yup
    .string()
    .oneOf([yup.ref('senha')], 'As senhas não coincidem')
    .required('Confirmação de senha é obrigatória'),
}).required();

function Cadastro() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onTouched',
  });

  const onSubmit = (data) => {
    console.log('Cadastro data:', data);
  };

  const navigate = useNavigate();

  return (
    <div className="ContainerLogin">
      <img src={vidaplus} alt="Vida Plus" />

      <form onSubmit={handleSubmit(onSubmit)} noValidate className="ContainerForm">
        <p>Crie sua conta:</p>

        <div className="ContainerInputs">
          <label>Email:</label>
          <InputText
            id="email"
            placeholder="Email"
            className={errors.email ? 'p-invalid w-full' : 'w-full'}
            inputClassName="w-full"
            {...register('email')}
          />
          {errors.email && <small className="p-error">{errors.email.message}</small>}
        </div>

        <div className="ContainerInputs">
          <label>Senha:</label>
          <Password
            id="senha"
            placeholder="Senha"
            toggleMask
            feedback={false}
            className={errors.senha ? 'p-invalid w-full' : 'w-full'}
            inputClassName="w-full"
            {...register('senha')}
          />
          {errors.senha && <small className="p-error">{errors.senha.message}</small>}
        </div>

        <div className="ContainerInputs">
          <Password
            id="confirmarSenha"
            placeholder="Confirmar Senha"
            toggleMask
            feedback={false}
            className={errors.confirmarSenha ? 'p-invalid w-full' : 'w-full'}
            inputClassName="w-full"
            {...register('confirmarSenha')}
          />
          {errors.confirmarSenha && <small className="p-error">{errors.confirmarSenha.message}</small>}
        </div>


          <Button icon="pi pi-user-plus" className='BtnSubmit' type="submit"> Cadastrar</Button>
        
          <Button icon="pi pi-arrow-left" onClick={() => navigate('/')}>Voltar</Button>
    
      </form>
    </div>
  );
}

export default Cadastro;
