import React, { useRef } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from '../../services/firebase';
import vidaplus from '../../assets/img/vidaplus.png';
import '../../sass/cadastro/cadastro.scss';


const schema = yup.object({
  nome: yup.string().required('Nome é obrigatório'),
  cpf: yup
    .string()
    .matches(/^\d{11}$|^\d{3}\.\d{3}\.\d{3}-\d{2}$/, 'CPF deve ter 11 dígitos numéricos')
    .required('CPF é obrigatório'),
  dataNascimento: yup.date().required('Data de nascimento é obrigatória'),
  telefone: yup
    .string()
    .matches(/^\d{10,11}$/, 'Telefone deve ter 10 ou 11 dígitos numéricos')
    .required('Telefone é obrigatório'),
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
  const { register, handleSubmit, control, reset, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    mode: 'onTouched',
  });

  const navigate = useNavigate();
  const toast = useRef(null);

  const onSubmit = async (data) => {
    try {

      const userCredential = await createUserWithEmailAndPassword(auth, data.email, data.senha);
      const user = userCredential.user;


      try {
        await setDoc(doc(db, "usuarios", user.uid), {
          nome: data.nome,
          cpf: data.cpf,
          dataNascimento: new Date(data.dataNascimento),
          telefone: data.telefone,
          email: data.email,
          criadoEm: new Date(),
        });
      } catch (firestoreError) {
        console.error("Erro ao salvar no Firestore:", firestoreError);
        if (toast.current) {
          toast.current.show({
            severity: 'error',
            summary: 'Erro no Firestore',
            detail: firestoreError.message,
            life: 4000
          });
        }
        return;
      }


      if (toast.current) {
        toast.current.show({
          severity: 'success',
          summary: 'Cadastro realizado',
          detail: 'Usuário cadastrado com sucesso!',
          life: 3000
        });
      }


      reset();


      setTimeout(() => navigate("/"), 3100);

    } catch (authError) {
      console.error("Erro ao criar usuário:", authError);
      if (toast.current) {
        toast.current.show({
          severity: 'error',
          summary: 'Erro no Auth',
          detail: authError.message,
          life: 4000
        });
      }
    }
  };


  return (
    <div className="ContainerCadastro">
      <Toast ref={toast} position="top-right" />

      <img src={vidaplus} alt="Vida Plus" />

      <form onSubmit={handleSubmit(onSubmit)} noValidate className="ContainerFormCadastro">
        <h2>Crie sua conta:</h2>

        <div className='ContainerInfo'>

        
          <div className="grid-line three-cols">
            <div className="ContainerInputs">
              <label>Nome:</label>
              <InputText placeholder="Nome completo" className={errors.nome ? 'p-invalid w-full' : 'w-full'} {...register('nome')} />
              {errors.nome && <small className="p-error">{errors.nome.message}</small>}
            </div>

            <div className="ContainerInputs">
              <label>CPF:</label>
              <InputText placeholder="CPF (apenas números)" className={errors.cpf ? 'p-invalid w-full' : 'w-full'} {...register('cpf')} />
              {errors.cpf && <small className="p-error">{errors.cpf.message}</small>}
            </div>

            <div className="ContainerInputs">
              <label>Data de Nascimento:</label>
              <InputText type="date" className={errors.dataNascimento ? 'p-invalid w-full' : 'w-full'} {...register('dataNascimento')} />
              {errors.dataNascimento && <small className="p-error">{errors.dataNascimento.message}</small>}
            </div>
          </div>

        
          <div className="grid-line two-cols">
            <div className="ContainerInputs">
              <label>Telefone:</label>
              <InputText placeholder="Telefone (DDD + número)" className={errors.telefone ? 'p-invalid w-full' : 'w-full'} {...register('telefone')} />
              {errors.telefone && <small className="p-error">{errors.telefone.message}</small>}
            </div>

            <div className="ContainerInputs">
              <label>Email:</label>
              <InputText placeholder="Email" className={errors.email ? 'p-invalid w-full' : 'w-full'} {...register('email')} />
              {errors.email && <small className="p-error">{errors.email.message}</small>}
            </div>
          </div>

          <div className="grid-line two-cols">
            <div className="ContainerInputs">
              <label>Senha:</label>
              <Controller
                name="senha"
                control={control}
                render={({ field }) => (
                  <Password placeholder="Senha" toggleMask feedback={false} className={errors.senha ? 'p-invalid w-full' : 'w-full'} {...field} />
                )}
              />
              {errors.senha && <small className="p-error">{errors.senha.message}</small>}
            </div>

            <div className="ContainerInputs">
              <label>Confirmar Senha:</label>
              <Controller
                name="confirmarSenha"
                control={control}
                render={({ field }) => (
                  <Password placeholder="Confirmar Senha" toggleMask feedback={false} className={errors.confirmarSenha ? 'p-invalid w-full' : 'w-full'} {...field} />
                )}
              />
              {errors.confirmarSenha && <small className="p-error">{errors.confirmarSenha.message}</small>}
            </div>
          </div>

        </div>

        <div className='containerBtns'>
          <Button icon="pi pi-user-plus" className='Btn' type="submit">Cadastrar</Button>
          <Button icon="pi pi-arrow-left" raised outlined onClick={() => navigate('/')} className='Btn'>Voltar</Button>
        </div>


      </form>
    </div>
  );
}

export default Cadastro;
