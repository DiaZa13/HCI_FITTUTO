import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import {BsFillEyeFill as I_visibility,
  BsPersonFill as I_person,
  BsFillEnvelopeFill as I_email} from 'react-icons/bs';

const schema = z.object({
  name: z.string().nonempty({message:'Ingrese su nombre completo'}),
  email: z.string().nonempty({ message: 'Ingresa su correo electrónico' }).email({ message: 'Ingresa un correo válido' }),
  username: z.string().nonempty({ message: 'Ingresa un usuario' }),
  password: z.string().nonempty({ message: 'Ingresa una contraseña' }).min(8, { message: 'Mínimo 8 caracteres' }),
});

function SignUpForm() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    mode:'onChange',
    resolver: zodResolver(schema),

  });
  const [data, setData] = useState({
    name: '',
    email: '',
    username: '',
    password: '',
  });

  const [filled, setFilled] = useState({
    name: false,
    email: false,
    username: false,
    password: false,
  });

  const handleInputChange = (e) => {
    console.log(e.target.value);
    console.log('wtf');
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });

    if (e.target.value !== '') {
      setFilled({
        ...filled,
        [e.target.name]: true,
      });
    } else {
      setFilled({
        ...filled,
        [e.target.name]: false,
      });
    }
  };

  const onSubmit = (data) => console.log(data);

  return (
      <form onSubmit={handleSubmit(onSubmit)} className="form-container mt-4">
        {/* Full name */}
        <div className="position-relative mt-2">
          <input
            className={'input ' + (filled.name? 'is-filled':'')}
            type="text"
            name="name"
            onInput={handleInputChange}
            {...register('name')}
          />
          <label className={'label'}>Nombre completo</label>
          <button className={`input-icon ${filled.name? 'is-filled':''}`}>
            <I_person/>
          </button>
          <small className="text-danger text-small d-block mb-2">
            {/* <Exclamation_icon/> */}
            {errors.name?.message}
          </small>
        </div>
        {/* Username */}
        <div className="position-relative mt-4_5">
          <input
            className={`input ${filled.username? 'is-filled' : ' '}`}
            type="text"
            name="username"
            onInput={handleInputChange}
            {...register('username')}
          />
          <label className={'label'}>Usuario</label>
          <button className="input-icon">
           <I_visibility/>
          </button>
          <small className="text-danger text-small d-block mb-2">
            {/* <Exclamation_icon/> */}
            {errors.usuario?.message}
          </small>
        </div>
        {/* Email */}
        <div className="position-relative mt-4_5">
          <input
            className={`input ${filled.email? 'is-filled' : ' '}`}
            type="text"
            name="email"
            onInput={handleInputChange}
            {...register('email')}
          />
          <label className={'label'}>Correo electrónico</label>
          <button className="input-icon">
            <I_email/>
          </button>
          <small className="text-danger text-small d-block mb-2">
            {/* <Exclamation_icon/> */}
            {errors.email?.message}
          </small>
        </div>
        {/* Password */}
        <div className="position-relative mt-4_5 mb-3">
          <input
            className={`input ${filled.password? 'is-filled' : ' '}`}
            type="password"
            name="password"
            onInput={handleInputChange}
            {...register('password')}
          />
          <label className={'label'}>Contraseña</label>
          <button className="input-icon">
            <I_visibility/>
          </button>
          <small className="text-danger text-small d-block mb-2">
            {/* <Exclamation_icon/> */}
            {errors.password?.message}
          </small>
        </div>
        {/* REGISTER BUTTON */}
        <button onSubmit={onSubmit} className="btn btn-secondary mt-4_5 w-100 font">CREAR CUENTA</button>
      </form>
  );
}

export default SignUpForm;
