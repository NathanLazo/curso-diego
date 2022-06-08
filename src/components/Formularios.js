import React, { useRef } from 'react';

const Formularios = () => {

  const formulario = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(formulario.current);
    const data = {
      nombre: formData.get('nombre'),
      descripcion: formData.get('descripcion'),
      email: formData.get('email'),
    }
    console.log(data);
  };
  return (
    <>
      <form onSubmit={handleSubmit} ref={formulario}>
        <input
          id="nombre"
          name="nombre"
          type="text"
          placeholder="Nombre"
        />
        <input
        id="descripcion"
        name="descripcion"
        type="text" 
        placeholder="Descripcion" 
        />
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Email"
        />
        <button className="mt-4 px-8 py-2 bg-orange-400 text-white rounded-xl" type="submit">
          Enviar
        </button>
      </form>
    </>
  );
};

export default Formularios;
