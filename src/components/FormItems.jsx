import React, { useState, useEffect } from "react";
import { Loader } from "./Loader";
const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};
const validateLength = (text, minLength) => {
  return text.length > minLength;
};

export const FormItem = () => {
  const [selectService, setSelectService] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [pais, setPais] = useState("");
  const [telf, setTelf] = useState("");
  const [proyecto, setProyect] = useState("");
  const [erros, setErrors] = useState("");
  const [loading, setLoading] = useState(false);
  const [mensaje, setMensaje] = useState("");
  const [erroDatas, setErrorDatas] = useState({
    nombre: "",
    email: "",
    telf: "",
    serv: "",
    proyecto: "",
    servicio: null, // Track service selection error
  });
  const handleChangeEmail = (e) => {
    const { value } = e.target;
    setEmail(value);
    if (!validateLength(value, 5)) {
      setErrorDatas((prevError) => ({
        ...prevError,
        email: "Ingresa tu correo electrónico.",
      }));
    } else if (!validateEmail(value)) {
      setErrorDatas((prevError) => ({
        ...prevError,
        email: "Ingresa un correo electrónico válido.",
      }));
    } else {
      setErrorDatas((prevError) => ({
        ...prevError,
        email: "",
      }));
    }
  };
  useEffect(() => {}, [selectService, pais]);
  // Function to handle service selection
  const selectServices = (item) => {
    setSelectService(item);
    setDropdownOpen(false); // Close dropdown after selection
    setErrorDatas((prevError) => ({
      ...prevError,
      servicio: item ? null : "El servicio es obligatorio.", // Validate if service is selected
    }));
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  const handleEnviarForm = async (e) => {
    e.preventDefault();
    setErrors("");
    if (!selectService) {
      setErrorDatas((prevError) => ({
        ...prevError,
        servicio: "El servicio es obligatorio.",
      }));
      return; // Detener el envío del formulario si no se selecciona un servicio
    }
    // try {
    //   const formData = new FormData();
    //   formData.append("action", "send_email");
    //   formData.append("nombre", nombre);
    //   formData.append("correo", email);
    //   formData.append("pais", pais);
    //   formData.append("telf", telf);
    //   formData.append("servicio", selectService.name);
    //   formData.append("mensaje", proyecto);
    //   setLoading(true);
    //   const response = await postFormulario(formData);
    //   const { success, message } = response.data;
    //   if (!success) {
    //     setLoading(false);
    //     return setErrors(message);
    //   }
    //   setLoading(false);
    //   setMensaje(message);
    // } catch (error) {
    //   setLoading(false);
    //   setErrors("Error inesperado, intenta más tarde");
    // }
  };

  return (
    <form id="form" className="needs-validation" onSubmit={handleEnviarForm}>
      <div className={`grid lg:gap-`}>
        <div className="mb-5 ">
          <input
            type="text"
            placeholder="Nombres"
            autoComplete="true"
            required
            id="nombre"
            value={nombre}
            onChange={(e) => {
              setNombre(e.target.value);
              if (!validateLength(e.target.value, 2)) {
                setErrorDatas((prevError) => ({
                  ...prevError,
                  nombre: "Porfavor introduce tu nombre",
                }));
              } else {
                setErrorDatas((prevError) => ({
                  ...prevError,
                  nombre: "",
                }));
              }
            }}
            className="w-full px-4 py-3 border placeholder:text-slate-400 rounded-md outline-none focus:border-green border-slate-300 focus:border-slate-600 ring-slate-100"
          />
          {erroDatas.nombre && (
            <div className="empty-feedback invalid-feedback text-red text-sm mt-1">
              {erroDatas.nombre}
            </div>
          )}
        </div>
        <div className="mb-5">
          <label htmlFor="email_address" className="sr-only">
            Correo electrónico
          </label>
          <input
            type="email"
            placeholder="Correo electrónico"
            name="email"
            required
            id="email"
            autoComplete="true"
            value={email}
            onChange={handleChangeEmail}
            className="w-full px-4 py-3 border placeholder:text-slate-400 rounded-md outline-none focus:border-green border-slate-300 focus:border-slate-600 ring-slate-100"
          />
          {erroDatas.email && (
            <div className="empty-feedback invalid-feedback text-red text-sm mt-1">
              {erroDatas.email}
            </div>
          )}
        </div>
        <div className="mb-5">
          <input
            type="number"
            placeholder="Teléfono"
            required
            autoComplete="true"
            onChange={(e) => {
              setTelf(e.target.value);
              if (!validateLength(e.target.value, 4)) {
                setErrorDatas((prevError) => ({
                  ...prevError,
                  telf: "Ingresa un teléfono válido",
                }));
              } else {
                setErrorDatas((prevError) => ({
                  ...prevError,
                  telf: "",
                }));
              }
            }}
            className={`w-full px-4 py-3 border placeholder:text-slate-400 rounded-md outline-none focus:border-green border-slate-300 focus:border-slate-600 ring-slate-100`}
            name="name"
          />
          {erroDatas.telf && (
            <div className="empty-feedback invalid-feedback text-red text-sm mt-1">
              {erroDatas.telf}
            </div>
          )}
        </div>
        <div className="mb-3">
          <textarea
            name="message"
            required
            autoComplete="true"
            onChange={(e) => {
              setProyect(e.target.value);
              if (!validateLength(e.target.value, 4)) {
                setErrorDatas((prevError) => ({
                  ...prevError,
                  proyecto: "Ingresa un mensaje válido",
                }));
              } else {
                setErrorDatas((prevError) => ({
                  ...prevError,
                  proyecto: "",
                }));
              }
            }}
            placeholder="Escribe tu mensaje, duda y/o consulta."
            className="w-full h-[200px] md:h-[120px] px-4 py-3 border placeholder:text-slate-400 rounded-md outline-none focus:border-green border-blue focus:border-slate-600 ring-slate-100"
          ></textarea>
          {erroDatas.proyecto && (
            <div className="empty-feedback invalid-feedback text-red text-sm mt-1">
              {erroDatas.proyecto}
            </div>
          )}
        </div>
      </div>
      <button className="hover:opacity-80 text-center transition focus-visible:ring-2 ring-offset-2 ring-gray-200 w-full px-6 py-3 bg-indigo-600 text-white border-green hover:bg-indigo-800 border-2 border-transparent bg-green rounded-md">
        Enviar Mensaje
      </button>
      {loading ? (
        <Loader />
      ) : (
        mensaje && (
          <p className=" text-center text-green h-[30px] mt-3">{mensaje}</p>
        )
      )}

      {erros && <p className="h-[30px] mt-3 text-center text-red">{erros}</p>}
    </form>
  );
};
