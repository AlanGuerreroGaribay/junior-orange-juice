import { useState } from "react";
import { Modal } from "./modal/modal";
import Logo from "./assets/JOB-Identity-FINAL-CMYK.png";

function App() {
  const [folio, setFolio] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
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
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.lastName ||
      !formData.age ||
      !formData.category ||
      !formData.state ||
      !formData.email ||
      !formData.phone
    ) {
      return alert(
        "Revise todos los campos del formulario y llenelos correctamente!"
      );
    }

    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="min-h-screen flex flex-col items-center text-gray-800">
      <Modal
        folio={folio}
        isOpen={isModalOpen}
        onClose={() => {
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
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Nombre"
            className="input"
          />
          <input
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Apellido"
            className="input"
          />
          <input
            name="age"
            type="number"
            value={formData.age}
            onChange={handleChange}
            placeholder="Edad"
            className="input"
          />
          <input
            name="category"
            value={formData.category}
            onChange={handleChange}
            placeholder="categoría"
            className="input"
          />
          <input
            name="country"
            value={formData.country}
            onChange={handleChange}
            placeholder="país"
            className="input"
          />
          <input
            name="state"
            value={formData.state}
            onChange={handleChange}
            placeholder="Estado"
            className="input"
          />
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="input"
          />
          <input
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Teléfono"
            className="input"
          />
          <button
            type="submit"
            className="w-full bg-green text-white py-2 rounded mt-4"
            onClick={() =>
              setFolio(`JOB-${Math.floor(100000 + Math.random() * 900000)}`)
            }
          >
            Mandar registro
          </button>
        </form>
        {/* {folio && (
          <p className="text-sm mt-4">
            Tu folio es: <span className="text-orange">{folio}</span>
          </p>
        )} */}
        <p className="text-sm mt-2">
          Por favor, realiza el depósito usando el número de folio como
          referencia y envía los detalles por correo a María.
        </p>
      </section>
    </div>
  );
}

export default App;
