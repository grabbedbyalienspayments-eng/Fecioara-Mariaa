import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
    gdpr: false,
    honeypot: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.honeypot) {
      return;
    }

    if (!formData.gdpr) {
      alert('Vă rugăm să acceptați politica de confidențialitate.');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://readdy.ai/api/public/form/submit/cedfecioaramaria-contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          message: formData.message,
        }).toString(),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          phone: '',
          email: '',
          message: '',
          gdpr: false,
          honeypot: '',
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      {/* Curved Top Separator */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg className="relative block w-full h-20" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            fill="#FFFFFF"
          />
        </svg>
      </div>

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FFF9F5] via-white to-[#FFF5ED]" />

      {/* Floating Shapes */}
      <div className="absolute top-40 right-10 w-72 h-72 bg-gradient-to-br from-[#FFE5D9]/20 to-[#FFD4C4]/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-40 left-10 w-64 h-64 bg-gradient-to-br from-[#FFF4E6]/30 to-[#FFE8CC]/30 rounded-full blur-3xl animate-float-delayed" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-block mb-4">
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#FF8A65] to-[#FF7043] rounded-2xl shadow-lg">
              <i className="ri-calendar-check-line text-3xl text-white" />
            </div>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            Programează o vizită
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Dacă doriți să aflați mai multe despre centru, program, oferta educațională sau înscriere, ne puteți contacta telefonic, pe email sau prin formular.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Cards */}
          <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            {/* Director Card */}
            <div className="group bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
              <div className="flex items-start gap-6">
                <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-[#FF8A65] to-[#FF7043] rounded-2xl shadow-md group-hover:scale-110 transition-transform duration-300">
                  <i className="ri-user-star-line text-2xl text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">Director</h3>
                  <p className="text-lg text-gray-700 font-medium">Lavinia Dumitrașcu</p>
                </div>
              </div>
            </div>

            {/* Director Educațional Card */}
            <div className="group bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
              <div className="flex items-start gap-6">
                <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-[#FFB74D] to-[#FFA726] rounded-2xl shadow-md group-hover:scale-110 transition-transform duration-300">
                  <i className="ri-book-open-line text-2xl text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">Director educațional</h3>
                  <p className="text-lg text-gray-700 font-medium">Alina Manolache</p>
                </div>
              </div>
            </div>

            {/* Secretariat Card */}
            <div className="group bg-gradient-to-br from-[#FF8A65] to-[#FF7043] rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
              <div className="flex items-start gap-6">
                <div className="flex items-center justify-center w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl shadow-md group-hover:scale-110 transition-transform duration-300">
                  <i className="ri-phone-line text-2xl text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">Secretariat</h3>
                  <a
                    href="tel:0799741474"
                    className="inline-flex items-center gap-2 text-2xl font-bold text-white hover:scale-105 transition-transform duration-300 cursor-pointer"
                  >
                    <span>0799 741 474</span>
                    <i className="ri-arrow-right-up-line text-xl" />
                  </a>
                </div>
              </div>
            </div>

            {/* Address Cards */}
            <div className="group bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
              <div className="flex items-start gap-6">
                <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-[#66BB6A] to-[#4CAF50] rounded-2xl shadow-md group-hover:scale-110 transition-transform duration-300">
                  <i className="ri-map-pin-line text-2xl text-white" />
                </div>
                <div className="flex-1 space-y-4">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Adresă 1</h3>
                    <p className="text-gray-700">Bd. Basarabia nr. 20, București</p>
                  </div>
                  <div className="border-t border-gray-100 pt-4">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Adresă 2</h3>
                    <p className="text-gray-700">Str. Popescu Vasile nr. 30, zona Baba Novac – Dristor, București</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Email Cards */}
            <div className="group bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
              <div className="flex items-start gap-6">
                <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-[#42A5F5] to-[#1E88E5] rounded-2xl shadow-md group-hover:scale-110 transition-transform duration-300">
                  <i className="ri-mail-line text-2xl text-white" />
                </div>
                <div className="flex-1 space-y-3">
                  <a
                    href="mailto:cedfecioaramaria@gmail.com"
                    className="block text-gray-700 hover:text-[#FF8A65] transition-colors duration-300 cursor-pointer"
                  >
                    cedfecioaramaria@gmail.com
                  </a>
                  <a
                    href="mailto:info@cedfecioaramaria.ro"
                    className="block text-gray-700 hover:text-[#FF8A65] transition-colors duration-300 cursor-pointer"
                  >
                    info@cedfecioaramaria.ro
                  </a>
                </div>
              </div>
            </div>

            {/* Social Buttons */}
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/cedfecioaramaria"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center w-14 h-14 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer overflow-hidden relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#1877F2] to-[#0C63D4] scale-0 group-hover:scale-100 transition-transform duration-300 rounded-2xl" />
                <i className="ri-facebook-fill text-2xl text-[#1877F2] group-hover:text-white relative z-10 transition-colors duration-300" />
              </a>
              <a
                href="https://www.youtube.com/@cedfecioaramaria"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center w-14 h-14 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer overflow-hidden relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF0000] to-[#CC0000] scale-0 group-hover:scale-100 transition-transform duration-300 rounded-2xl" />
                <i className="ri-youtube-fill text-2xl text-[#FF0000] group-hover:text-white relative z-10 transition-colors duration-300" />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <form
              id="contact-form"
              data-readdy-form
              onSubmit={handleSubmit}
              className="bg-white rounded-3xl p-8 md:p-10 shadow-lg"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Trimite-ne un mesaj</h3>

              <div className="space-y-5">
                <div className="group">
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Nume *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 bg-gray-50 border-2 border-gray-200 rounded-2xl text-gray-900 placeholder-gray-400 focus:border-[#FF8A65] focus:bg-white focus:ring-4 focus:ring-[#FF8A65]/10 transition-all duration-300 outline-none"
                    placeholder="Numele tău"
                  />
                </div>

                <div className="group">
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Telefon *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 bg-gray-50 border-2 border-gray-200 rounded-2xl text-gray-900 placeholder-gray-400 focus:border-[#FF8A65] focus:bg-white focus:ring-4 focus:ring-[#FF8A65]/10 transition-all duration-300 outline-none"
                    placeholder="Numărul tău de telefon"
                  />
                </div>

                <div className="group">
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 bg-gray-50 border-2 border-gray-200 rounded-2xl text-gray-900 placeholder-gray-400 focus:border-[#FF8A65] focus:bg-white focus:ring-4 focus:ring-[#FF8A65]/10 transition-all duration-300 outline-none"
                    placeholder="adresa@email.com"
                  />
                </div>

                <div className="group">
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Mesaj *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    maxLength={500}
                    rows={5}
                    className="w-full px-5 py-4 bg-gray-50 border-2 border-gray-200 rounded-2xl text-gray-900 placeholder-gray-400 focus:border-[#FF8A65] focus:bg-white focus:ring-4 focus:ring-[#FF8A65]/10 transition-all duration-300 outline-none resize-none"
                    placeholder="Scrie-ne mesajul tău aici..."
                  />
                  <p className="text-sm text-gray-500 mt-2">
                    {formData.message.length}/500 caractere
                  </p>
                </div>

                {/* Honeypot */}
                <input
                  type="text"
                  name="honeypot"
                  value={formData.honeypot}
                  onChange={handleChange}
                  style={{ display: 'none' }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                {/* GDPR Checkbox */}
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="gdpr"
                    name="gdpr"
                    checked={formData.gdpr}
                    onChange={handleChange}
                    required
                    className="mt-1 w-5 h-5 text-[#FF8A65] border-2 border-gray-300 rounded focus:ring-2 focus:ring-[#FF8A65]/20 cursor-pointer"
                  />
                  <label htmlFor="gdpr" className="text-sm text-gray-600 cursor-pointer">
                    Sunt de acord cu prelucrarea datelor personale conform Politicii de Confidențialitate. *
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-5 bg-gradient-to-r from-[#FF8A65] to-[#FF7043] text-white font-bold text-lg rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 whitespace-nowrap cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed group"
                >
                  <span className="flex items-center justify-center gap-3">
                    {isSubmitting ? (
                      <>
                        <i className="ri-loader-4-line text-xl animate-spin" />
                        <span>Se trimite...</span>
                      </>
                    ) : (
                      <>
                        <span>Trimite mesajul</span>
                        <i className="ri-send-plane-fill text-xl group-hover:translate-x-1 transition-transform duration-300" />
                      </>
                    )}
                  </span>
                </button>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-50 border-2 border-green-200 rounded-2xl">
                    <p className="text-green-700 font-medium text-center">
                      ✓ Mesajul a fost trimis cu succes! Vă vom contacta în curând.
                    </p>
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-50 border-2 border-red-200 rounded-2xl">
                    <p className="text-red-700 font-medium text-center">
                      ✗ A apărut o eroare. Vă rugăm să încercați din nou.
                    </p>
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>

        {/* Map */}
        <div className="animate-fade-in-up" style={{ animationDelay: '300ms' }}>
          <div className="bg-white rounded-3xl p-4 shadow-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2849.1234567890123!2d26.1234567!3d44.4234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDTCsDI1JzI0LjQiTiAyNsKwMDcnMjQuNCJF!5e0!3m2!1sro!2sro!4v1234567890123!5m2!1sro!2sro"
              width="100%"
              height="450"
              style={{ border: 0, borderRadius: '1.5rem' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Locația Centrul Educațional Fecioara Maria"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
