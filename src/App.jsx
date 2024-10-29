import { useState } from "react";
import { Modal } from "./modal/modal";
import Logo from "./assets/JOB-Identity-FINAL-CMYK.png";

function App() {
  const [folio, setFolio] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    age: "",
    category: "",
    country: "",
    state: "",
    email: "",
    phone: "",
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

  const handleSubmit = () => {
    if (validateForm()) {
      setIsModalOpen(!isModalOpen);
      setFolio(`JOB-${Math.floor(100000 + Math.random() * 900000)}`);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center text-gray-800">
      <Modal
        folio={folio}
        isOpen={isModalOpen}
        onClose={() => {
          setFormData({
            name: "",
            lastName: "",
            age: "",
            category: "",
            country: "",
            state: "",
            email: "",
            phone: "",
          });
          setIsModalOpen(!isModalOpen);
        }}
      />
      {/* Banner Section */}
      <header className="w-full bg-orange-200 p-4 flex justify-center items-center">
        <img src={Logo} alt="Junior Orange Bowl Logo" className="h-24" />
      </header>

      {/* Text Body Section */}
      <section className="p-6 max-w-2xl text-center">
        <h1 className="text-2xl font-semibold text-orange-600">
          Bienvenido a Junior Orange Bowl!
        </h1>
        <p className="text-lg mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit...
        </p>
      </section>

      {/* Registration Form */}
      <section className="bg-white shadow-md rounded p-8 w-full max-w-lg my-8">
        <h2 className="text-xl font-semibold text-orange-600 mb-4">
          Regístrate aquí
        </h2>
        <div className="space-y-4">
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder={errors.name ? "Falta agregar un Nombre" : "Nombre"}
            className={`input ${
              errors.name ? "placeholder-red-500 border-red-500" : ""
            }`}
          />
          <input
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder={
              errors.lastName ? "Falta agregar un Apellido!" : "Apellido"
            }
            className={`input ${
              errors.lastName ? "placeholder-red-500 border-red-500" : ""
            }`}
          />
          <input
            name="age"
            type="number"
            value={formData.age}
            onChange={handleChange}
            placeholder={errors.age ? "Agrega la Edad" : "Edad"}
            className={`input ${
              errors.age ? "placeholder-red-500 border-red-500" : ""
            }`}
          />
          <input
            name="category"
            value={formData.category}
            onChange={handleChange}
            placeholder={
              errors.category ? "Falta agregar una Categoría!" : "Categoría"
            }
            className={`input ${
              errors.category ? "placeholder-red-500 border-red-500" : ""
            }`}
          />
          <input
            name="country"
            value={formData.country}
            onChange={handleChange}
            placeholder={errors.country ? "Falta agregar un País!" : "País"}
            className={`input ${
              errors.country ? "placeholder-red-500 border-red-500" : ""
            }`}
          />
          <input
            name="state"
            value={formData.state}
            onChange={handleChange}
            placeholder={errors.state ? "Falta agregar un Estado!" : "Estado"}
            className={`input ${
              errors.state ? "placeholder-red-500 border-red-500" : ""
            }`}
          />
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder={errors.email ? "Falta agregar un Email!" : "Email"}
            className={`input ${
              errors.email ? "placeholder-red-500 border-red-500" : ""
            }`}
          />
          <input
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder={
              errors.phone ? "Falta agregar un Teléfono!" : "Teléfono"
            }
            className={`input ${
              errors.phone ? "placeholder-red-500 border-red-500" : ""
            }`}
          />
          <button
            type="submit"
            className="w-full bg-green text-white py-2 rounded mt-4"
            onClick={() => handleSubmit()}
          >
            Mandar registro
          </button>
        </div>
        {/* {folio && (
          <p className="text-sm mt-4">
            Tu folio es: <span className="text-orange">{folio}</span>
          </p>
        )} */}
        {/* <p className="text-sm mt-2">
          Por favor, realiza el depósito usando el número de folio como
          referencia y envía los detalles por correo a María.
        </p> */}
      </section>
    </div>
  );
}

export default App;
