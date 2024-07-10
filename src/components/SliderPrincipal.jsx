import React from "react";

const itemsSlider = [
  {
    head: "TU SOCIO EN INGENIERIA",
    title: "Construyendo sueños, creando futuros",
    text: "Transformando visiones en realidad, nuestra empresa constructora se dedica a crear espacios excepcionales que inspiran y perduran",
    bg: "https://cdn.prod.website-files.com/6641d40cccccc956df1e957b/6641e5a6284223ef434c3176_pexels-carlo-martin-alcordo-1279322-2449785.webp",
  },
  // {
  //     head: 'SOCIO IDEAL EN CONSTRUCCIÓN',
  //     title: 'Creando hogares, familias felices',
  //     text: 'Transformando visiones en realidad, nuestra empresa constructora se dedica.',
  //     bg: 'https://cdn.prod.website-files.com/6641d40cccccc956df1e957b/6641e5a6284223ef434c3176_pexels-carlo-martin-alcordo-1279322-2449785.webp'
  // }
];

export const SliderPrincipal = () => {
  return (
    <div>
      {itemsSlider.map((item, index) => (
        <div
          key={index}
          className="slider-item bg-cover bg-no-repeat bg-center py-20 text-center flex justify-center"
          style={{ backgroundImage: `url(${item.bg})` }}
        >
          <div className="md:max-w-[480px] py-3 lg:max-w-6xl w-full px-[40px] md:px-0">
            <h2 className="text-valencia tracking-[2px] text-[14px] font-semibold mt-4">
              {item.head}
            </h2>
            <h1 className="my-6 text-[44px] text-white font-black leading-none">
              {item.title}
            </h1>
            <p className="text-white text-xl">{item.text}</p>
            <button className="bg-valencia hover:bg-sea text-white hover:text-black font-bold text-[1.3rem] rounded-md px-6 py-2 transition-all mt-12 shadow-xl">
              COTIZAR PROYECTO
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
