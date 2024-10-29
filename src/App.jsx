import { useState } from "react";
import { Modal } from "./modal/modal";
import Logo from "./assets/JOB-Identity-FINAL-CMYK.png";
import { FormInput } from "./FormInputs/FormInput";

function App() {
  const [folio, setFolio] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    Nombre: "",
    Apellido: "",
    Edad: "",
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
            className="w-full bg-green text-white py-2 rounded mt-4"
            onClick={() => handleSubmit()}
          >
            Mandar registro
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;
