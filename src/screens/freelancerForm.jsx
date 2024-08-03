import React, { useState } from "react";
import Footer2 from "../components/Footer/footer2";
import { IoIosCamera } from "react-icons/io";

const FreelancerForm = () => {
  const [role, setRole] = useState("cliente");
  const [categoria, setCategoria] = useState("");
  const [subCategoria, setSubCategoria] = useState("");

  const categorias = [
    "Desenvolvimento Web",
    "Design Gráfico",
    "Marketing Digital",
    "Redação",
    // Add more categories as needed
  ];

  const subCategorias = {
    "Desenvolvimento Web": ["Frontend", "Backend", "Fullstack"],
    "Design Gráfico": ["Logo Design", "Branding", "Web Design"],
    "Marketing Digital": ["SEO", "Publicidade", "Content Marketing"],
    Redação: ["Artigos", "Copywriting", "Revisão"],
    // Add more sub-categories for other categories
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow flex justify-center items-center bg-gray-100">
        <div className="p-8 w-96">
          <h1 className="text-2xl mb-6 text-center">
            Complete seu perfil no <span className="font-bold">TugaFreela</span>
          </h1>
          <form>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Título Profissional"
                className="w-full bg-[#E3E3E3] p-2 border border-[#B8B8B8] rounded-md"
              />
            </div>

            <div className="flex space-x-2">
              <div className="mb-4 w-full">
                <select
                  value={categoria}
                  onChange={(e) => {
                    setCategoria(e.target.value);
                    setSubCategoria(""); // Reset sub-category when category changes
                  }}
                  className="w-full bg-[#E3E3E3] p-2 border border-[#B8B8B8] rounded-md"
                >
                  <option value="" disabled>
                    Categoria
                  </option>
                  {categorias.map((cat, index) => (
                    <option key={index} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-4 w-full">
                <select
                  value={subCategoria}
                  onChange={(e) => setSubCategoria(e.target.value)}
                  className="w-full bg-[#E3E3E3] p-2 border border-[#B8B8B8] rounded-md"
                  disabled={!categoria} // Disable if no category is selected
                >
                  <option value="" disabled>
                    Sub-categoria
                  </option>
                  {(subCategorias[categoria] || []).map((subCat, index) => (
                    <option key={index} value={subCat}>
                      {subCat}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mb-4">
              <textarea
                placeholder="Descrição"
                maxLength={500}
                rows={5}
                className="w-full bg-[#E3E3E3] p-2 border border-[#B8B8B8] rounded-md"
              />
            </div>

            {/* File Input with Styled Label */}
            <div className="mb-4 cursor-pointer w-full flex items-center">
              <input
                type="file"
                id="fileInput"
                className="hidden" // Hide the actual file input
                accept="image/*"
              />
              <div>
                <label htmlFor="fileInput">
                  <IoIosCamera className="text-6xl cursor-pointer border-2 border-[#D6B8FF] p-1 rounded-full border-re mr-2" />
                </label>
              </div>
              <div className="w-3/4">
                <label
                  htmlFor="fileInput"
                  className="cursor-pointer bg-[#1ABF00] text-white p-2 rounded-sm border border-gray-400 block text-center"
                >
                  Adicionar Foto
                </label>
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white p-2 rounded-sm"
            >
              Concluir
            </button>
          </form>
        </div>
      </div>
      <Footer2 />
    </div>
  );
};

export default FreelancerForm;
