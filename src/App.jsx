import { useState } from "react";
import { Modal } from "./modal/modal";
import Logo from "./assets/JOB-Identity-FINAL-CMYK.png";
import { FormInput } from "./FormInputs/FormInput";
import axios from "axios";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [folio, setFolio] = useState("");
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    Nombre: "",
    Apellido: "",
    Edad: 0,
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

    setFolio(registerResponse.data.id);
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
            Registrármelo
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;
