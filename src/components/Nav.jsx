import { useState } from "react";

const menus = [
  {
    id: 1,
    name: "Inicio",
  },
  {
    id: 2,
    name: "Nosotros",
  },
  {
    id: 3,
    name: "Servicios",
    subservices: [
      {
        id: 1,
        nameservice: "Ingeniería",
      },
      {
        id: 2,
        nameservice: "Remodelación y ampliación de instalaciones",
      },
      {
        id: 3,
        nameservice: "Mantenimiento de Instalaciones",
      },
    ],
  },
  {
    id: 4,
    name: "Contactos",
  },
];

export const Nav = () => {
  const [nav, setNav] = useState(false);
  const [showSubservices, setShowSubservices] = useState(false);

  const toggleNav = () => {
    setNav(!nav);
  };

  const toggleSubservices = () => {
    setShowSubservices(!showSubservices);
  };

  return (
    <div className="sticky top-0 bg-white flex justify-center shadow-sm">
      <div className="grid grid-cols-1 md:max-w-[480px] py-3 lg:max-w-6xl w-full px-[40px] md:px-0 lg:px-0 text-white">
        <div className="grid grid-cols-2 items-center">
          <img src="images/rm.jpg" alt="Logo" className="w-[80px]" />
          {/* Menú de escritorio */}
          <ul className="hidden md:flex justify-end space-x-4">
            {menus.map((item) => (
              <li
                key={item.id}
                className="text-green font-semibold text-[1rem] border-b-2 border-white relative service-principal hover:text-black transition-all hover:border-b-2 hover:border-sea"
              >
                <a className="flex items-center">
                  <div className="flex items-center">
                    <span>{item.name}</span>
                    {item.subservices ? (
                      <span className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1em"
                          height="1em"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            style={{ minWidth: "40PX" }}
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="m7 10l5 5l5-5"
                          ></path>
                        </svg>
                        `
                      </span>
                    ) : (
                      ""
                    )}
                  </div>
                  {item.subservices && (
                    <ul className="absolute top-full left-0 bg-white shadow-md  sub-service min-w-[300px]">
                      {item.subservices.map((subservice) => (
                        <li
                          key={subservice.id}
                          className="p-2 hover:bg-sea hover:bg-opacity-30 text-green hover:text-black"
                        >
                          <a href="" className="flex items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="1em"
                              height="1em"
                              viewBox="0 0 24 24"
                              className=""
                              style={{ minWidth: "40PX" }}
                            >
                              <path
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d="m10 17l5-5l-5-5"
                              ></path>
                            </svg>
                            <span>{subservice.nameservice}</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </a>
              </li>
            ))}
          </ul>
          {/* Botón de menú móvil */}
          <button
            className="menu_burger grid justify-end md:hidden"
            onClick={toggleNav}
          >
            {/* Icono de hamburguesa con animación */}
            <span
              className={`block bg-green h-0.5 mb-1 ml-auto transition-all duration-300 ${
                nav ? "w-8" : "w-4"
              }`}
            ></span>
            <span className="block bg-green h-0.5 w-8 mb-1 ml-auto"></span>
            <span
              className={`block bg-green h-0.5 mb-1 ml-auto transition-all duration-300 ${
                nav ? "w-8" : "w-4"
              }`}
            ></span>
            <span className="block bg-green h-0.5 w-8 ml-auto"></span>
          </button>
        </div>

        {/* Contenido del menú móvil */}
        <div
          className={`md:hidden fixed top-0 bg-green left-0 w-[80%] h-full transition-transform duration-500 ease-in-out transform ${
            nav ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="ml-4 mt-6 mr-2 w-full grid grid-cols-3 justify-between">
            {/* Logo */}
            <img
              src="images/rmblanco.png"
              alt="Logo"
              className={`h-full col-span-2 transition-opacity duration-500 w-[100px] ${
                nav ? "opacity-100" : "opacity-0"
              }`}
            />
            {/* Botón de cierre */}
            <button
              onClick={toggleNav}
              className={`relative col-span-1 transition-opacity duration-500 ${
                nav ? "opacity-100" : "opacity-0"
              }`}
            >
              {/* Icono de cierre con animación */}
              <span className="block absolute bg-green-500 h-0.5 w-8 transform rotate-45 bg-white"></span>
              <span className="block absolute bg-green-500 h-0.5 w-8 transform -rotate-45 bg-white"></span>
            </button>
          </div>

          {/* Lista de elementos del menú móvil */}
          <ul
            className={`col-span-2 mt-6 ml-4 space-y-2 transition-opacity duration-500 ${
              nav ? "opacity-100" : "opacity-0"
            }`}
          >
            {menus.map((item) => (
              <li
                key={item.id}
                className="text-white font-semibold text-[1rem]"
              >
                {item.subservices ? (
                  <div>
                    <button
                      onClick={toggleSubservices}
                      className="flex items-center"
                    >
                      {item.name}
                      <span className="ml-2">
                        {showSubservices ? (
                          <svg
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
                        </svg>
                        ) : (
                          <svg
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
                          </svg>
                        )}
                      </span>
                    </button>
                    {showSubservices && (
                      <ul className="ml-4 mt-2 space-y-1">
                        {item.subservices.map((subservice) => (
                          <li
                            key={subservice.id}
                            className="text-white text-sm"
                          >
                            <a href="" className="flex items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="1.5em"
                              height="1.5em"
                              viewBox="0 0 24 24"
                              className=""
                              style={{ minWidth: "40px" }}
                            >
                              <path
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d="m10 17l5-5l-5-5"
                              ></path>
                            </svg>
                            <span>{subservice.nameservice}</span>
                          </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  item.name
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
