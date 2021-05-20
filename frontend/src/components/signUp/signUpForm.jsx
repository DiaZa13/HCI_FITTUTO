import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import {MdRemoveRedEye as I_visibility} from 'react-icons/md';

const schema = z.object({
  name: z.string().nonempty({message:'Ingrese su nombre completo'}),
  email: z.string().nonempty({ message: 'Ingresa un usuario' }).email({ message: 'Ingresa un correo válido' }),
  username: z.string().nonempty({ message: 'Ingresa un usuario' }),
  password: z.string().nonempty({ message: 'Ingresa una contraseña' }).min(8, { message: 'Mínimo 8 caracteres' }),
});

function SignUpForm() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    mode:'onChange',
    resolver: zodResolver(schema),

  });
  const [registerData, setRegisterdata] = useState({
    name: '',
    email: '',
    username: '',
    password: '',
  });

  const [registerFilled, setRegisterfilled] = useState({
    email: false,
    username: false,
    password: false,
  });

  const handleInputChange = (e) => {
    console.log(e.target.value);
    console.log('wtf');
    setRegisterdata({
      ...registerData,
      [e.target.name]: e.target.value,
    });

    if (e.target.value !== '') {
      setRegisterfilled({
        ...registerFilled,
        [e.target.name]: true,
      });
    } else {
      setRegisterfilled({
        ...registerFilled,
        [e.target.name]: false,
      });
    }
  };

  const onSubmit = (data) => console.log(data);

  return (
      <form onSubmit={handleSubmit(onSubmit)} className="mx-auto">
        {/* Full name */}
        <div className="position-relative mt-2">
          <input
            className="input"
            type="text"
            name="name"
            placeholder="Nombre completo"
            onInput={handleInputChange}
            {...register('name')}
          />
          <button className="input-icon">
            <I_visibility/>
          </button>
          <small className="text-danger text-small d-block mb-2">
            {/* <Exclamation_icon/> */}
            {errors.email?.message}
          </small>
        </div>
        {/* Email */}
        <div className="position-relative mt-4">
          <input
            className="input"
            type="text"
            name="email"
            placeholder="Correo electrónico"
            onInput={handleInputChange}
            {...register('email')}
          />
          <button className="input-icon">
           <I_visibility/>
          </button>
          <small className="text-danger text-small d-block mb-2">
            {/* <Exclamation_icon/> */}
            {errors.email?.message}
          </small>
        </div>
        {/* Username */}
        <div className="position-relative mt-4">
          <input
            className={`input ${registerFilled.username ? 'is-filled' : ' '}`}
            type="text"
            name="username"
            placeholder="Usuario"
            onInput={handleInputChange}
            {...register('username')}
          />
          <small className="text-danger text-small d-block mb-2">
            {/* <Exclamation_icon/> */}
            {errors.username?.message}
          </small>
        </div>
        {/* Password */}
        <div className="position-relative mt-4">
          <input
            className={`input ${registerFilled.username ? 'is-filled' : ' '}`}
            type="text"
            name="password"
            placeholder="Contraseña"
            onInput={handleInputChange}
            {...register('password')}
          />
          <small className="text-danger text-small d-block mb-2">
            {/* <Exclamation_icon/> */}
            {errors.password?.message}
          </small>
        </div>
        {/* REGISTER BUTTON */}
        <button onSubmit={onSubmit} className="btn btn-meeting btn-fill my-3 w-100">REGISTRARTE</button>
      </form>
  );
}

export default SignUpForm;
