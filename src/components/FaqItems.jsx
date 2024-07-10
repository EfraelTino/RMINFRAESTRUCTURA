import React, { useState } from "react";
const preguntas = [
  {
    id: 1,
    pregunta: "¿Cúal es su proceso de trabajo?",
    respuesta: "Nuestro método de trabajo se centra.....",
  },
  {
    id: 2,
    pregunta: "¿Porqué debería de confiar en ustedes?",
    respuesta: "Porque somos los mejores",
  },
];

export const FaqItems = () => {
  const [view, setView] = useState(false);
  const handleView = (id) => {
    setView(view === id ? null : id);
  };
  return (
    <div className="grid">
      {preguntas.map((item) => (
        <div className="grid my-4" key={item.id}>
          <button
            onClick={() => handleView(item.id)}
            className="bg-green font-black text-start text-lg rounded text-white leading-none py-4 px-6 flex items-center justify-between gap-2 hover:bg-opacity-90  shadow-xl"
          >
            <span>{item.pregunta}</span>{" "}
            {view === item.id ? <span><svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1.5em"
                          height="1.5em"
                          viewBox="0 0 24 24"
                          className="transform rotate-180 transition-all"
                        >
                          <path
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            style={{ minWidth: "80px" }}
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="m7 10l5 5l5-5"
                          ></path>
                        </svg></span> : <span><svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1.5em"
                          height="1.5em"
                          viewBox="0 0 24 24"
                          className="transition-all"
                        >
                          <path
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            style={{ minWidth: "80px" }}
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="m7 10l5 5l5-5"
                          ></path>
                        </svg></span>}
          </button>

          {view === item.id && (
            <div className="mx-3">
              <p className="bg-calypso rounded-b-md bg-opacity-20 p-2 leading-[1.5em] font-semibold text-[18px]">
                {item.respuesta}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
