import React, { useState } from 'react';
import '../css/ReservationForm.css';

function RegisterForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    carModel: '',
    pickupDate: '',
    returnDate: '',
    pickupLocation: '',
    destination: '',
    additionalNotes: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Réservation réussie pour ${formData.fullName}!`);
    console.log(formData);

  };

  return (
    <div className="reservation-form">
      <h2>Formulaire de réservation de voiture</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nom complet:
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Téléphone:
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Modèle de voiture:
          <input
            type="text"
            name="carModel"
            value={formData.carModel}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Date de prise en charge:
          <input
            type="date"
            name="pickupDate"
            value={formData.pickupDate}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Date de retour:
          <input
            type="date"
            name="returnDate"
            value={formData.returnDate}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Lieu de prise en charge:
          <input
            type="text"
            name="pickupLocation"
            value={formData.pickupLocation}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Destination:
          <input
            type="text"
            name="destination"
            value={formData.destination}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Notes supplémentaires:
          <textarea
            name="additionalNotes"
            value={formData.additionalNotes}
            onChange={handleChange}
            placeholder="Besoin d'une voiture spécifique ou d'équipements supplémentaires?"
          />
        </label>

        <button type="submit">Réserver</button>
      </form>
    </div>
  );
}

export default RegisterForm;
