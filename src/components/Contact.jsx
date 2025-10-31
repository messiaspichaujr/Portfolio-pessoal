import React, { useState } from 'react';
import { FiMail } from 'react-icons/fi';
import '../css/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const WEB3FORMS_ACCESS_KEY = 'd0f2e64a-3eee-4c65-8097-a085a631435e';

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const data = JSON.stringify({
      ...formData,
      access_key: WEB3FORMS_ACCESS_KEY,
      subject: `Nova mensagem de ${formData.name} (Portfólio)`,
    });

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: data,
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' }); 
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contato" className="contact-container">
      <p className="contact-intro">Conecte-se comigo</p>
      <h2 className="contact-title">Entre em contato</h2>
      <p className="contact-description">
        Vamos conversar? Peça um orçamento ou fale comigo sobre possíveis colaborações.
      </p>

      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-grid">
          <input
            type="text"
            name="name"
            placeholder="Seu nome"
            value={formData.name}
            onChange={handleChange}
            required
            className="form-input"
          />
          <input
            type="email"
            name="email"
            placeholder="Seu e-mail"
            value={formData.email}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
        <textarea
          name="message"
          placeholder="Escreva sua mensagem"
          value={formData.message}
          onChange={handleChange}
          required
          rows="7"
          className="form-textarea"
        />

        <button type="submit" className="submit-button" disabled={isSubmitting}>
          {isSubmitting ? 'Enviando...' : 'Enviar'}
          {!isSubmitting && <FiMail size={16} style={{ marginLeft: '8px' }} />}
        </button>
        
        {submitStatus === 'success' && (
          <p className="form-success">Mensagem enviada com sucesso! Obrigado.</p>
        )}
        {submitStatus === 'error' && (
          <p className="form-error">Ocorreu um erro. Tente novamente mais tarde.</p>
        )}
      </form>
    </section>
  );
};

export default Contact;