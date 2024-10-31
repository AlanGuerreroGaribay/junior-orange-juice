import { useState, useEffect } from "react";
import { FormInput } from "./components/FormInputs/FormInput";
import { Modal } from "./components/Modal/Modal";
import { Banner } from "./components/Banner/Banner";
import Logo from "./assets/JOB-Identity-FINAL-CMYK.png";
import axios from "axios";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [folio, setFolio] = useState("");
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    Nombre: "",
    Apellido: "",
    Edad: 12,
    Categoria: "12-14 años",
    Pais: "",
    Estado: "",
    Email: "",
    Telefono: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: false });
  };

  const validateForm = () => {
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        newErrors[key] = true; // Campo vacío
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const register = async (data) => {
    const registerResponse = await axios.post("/tournament/api/users", data);

    setFolio(registerResponse?.data?.id);
    return registerResponse.data;
  };

  //"5c5c209f-9650-11ef-ba0f-00163e560bc8"

  const handleSubmit = () => {
    const data = {
      name: formData.Nombre,
      last_name: formData.Apellido,
      age: Number(formData.Edad),
      country: formData.Pais,
      state: formData.Estado,
      email: formData.Email,
      phone: formData.Telefono,
      category: formData.Categoria,
    };

    if (validateForm()) {
      setIsModalOpen(!isModalOpen);
      register(data);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // Al deslizar hacia abajo, oculta el header
        setShowHeader(false);
      } else {
        // Al deslizar hacia arriba, muestra el header
        setShowHeader(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    // Limpia el evento al desmontar el componente
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div className="min-h-screen flex flex-col items-center text-gray-800">
      <Modal
        folio={folio}
        isOpen={isModalOpen}
        onClose={() => {
          setFormData({
            Nombre: "",
            Apellido: "",
            Edad: 12,
            Categoria: "12-14 años",
            Pais: "",
            Estado: "",
            Email: "",
            Telefono: "",
          });
          setIsModalOpen(!isModalOpen);
        }}
      />
      {/* Header Section */}
      <header
        className={`fixed top-0 left-0 w-full h-30 p-4 bg-white flex justify-start items-center transition-transform duration-300 z-50 ${
          showHeader ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <img src={Logo} alt="Junior Orange Bowl Logo" className="h-24" />
      </header>

      {/* Banner Section*/}
      <Banner />

      {/* Text Body Section */}
      <section className="p-6 w-full max-w-4xl text-center my-6">
        <h1 className="text-2xl font-semibold text-orange-600">
          Bienvenido a Junior Orange Bowl!
        </h1>
        <p className="text-lg mt-4">
          El Campeonato Internacional de Tenis Junior Orange Bowl es uno de los
          torneos de tenis juvenil más importantes y prestigiosos del mundo.
          ¡Este evento, reconocido a nivel global, reúne a 800 de los mejores
          jugadores juveniles, tanto masculinos como femeninos, de las
          categorías sub-12 y sub-14, representando a 76 países! El torneo
          cuenta con una impresionante lista de exalumnos profesionales, entre
          ellos Andy Murray, Coco Gauff, Roger Federer y muchos otros.
          ¡Esperamos con entusiasmo recibir a los talentosos jugadores juveniles
          de este año y felicitar a los nuevos campeones!
        </p>
        <div className="bg-orange w-[50%] m-auto h-[1px] mt-10"></div>
      </section>

      {/* Registration Form */}
      <section className="bg-white shadow-md rounded p-8 w-full max-w-lg my-8">
        <h2 className="text-xl font-semibold text-orange-600 mb-4">
          Regístrate aquí
        </h2>
        <div className="space-y-4">
          {Object.keys(formData).map((state) => {
            return (
              <FormInput
                key={state}
                name={state}
                value={formData[state]}
                onChange={handleChange}
                placeholder={state}
                error={errors[state]}
              />
            );
          })}
          <button
            type="submit"
            className="w-full bg-orange text-white font-semibold py-2 rounded-3xl mt-4"
            onClick={() => handleSubmit()}
          >
            Registrarme
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;
