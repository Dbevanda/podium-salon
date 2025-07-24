
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { toast } from "react-hot-toast";

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast.error(t('contact.form.required'));
      return;
    }

    try {
      // Create nicely formatted email content
      const subject = formData.subject.trim() || `Contact from ${formData.name} - Podium Zagreb`;
      const body = `Dear Podium Zagreb Team,

You have received a new contact form submission from your website:

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

👤 NAME: ${formData.name}
📧 EMAIL: ${formData.email}
📱 PHONE: ${formData.phone || 'Not provided'}
📝 SUBJECT: ${formData.subject || 'General Inquiry'}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

💬 MESSAGE:
${formData.message}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This message was sent from the Podium Zagreb website contact form.
Please reply directly to ${formData.email} to respond to the customer.

Best regards,
Podium Zagreb Website System`;

      // Create mailto link with proper encoding
      const mailtoLink = `mailto:skincare.podium@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
      // Try to open email client
      const emailWindow = window.open(mailtoLink, '_blank');
      
      // Check if popup was blocked or failed
      setTimeout(() => {
        if (!emailWindow || emailWindow.closed) {
          // Fallback: try direct location change
          window.location.href = mailtoLink;
        }
      }, 100);
      
      // Show success message and reset form
      toast.success(t('contact.form.success'));
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      
    } catch (error) {
      console.error('Email error:', error);
      toast.error(t('contact.form.error'));
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="pt-20 flex-grow">
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
                {t('contact.title')}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {t('contact.description')}
              </p>
            </div>

            <div className="max-w-2xl mx-auto">
              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder={t('contact.form.name')}
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-none focus:outline-none focus:border-gray-400 transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder={t('contact.form.email')}
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-none focus:outline-none focus:border-gray-400 transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder={t('contact.form.phone')}
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-none focus:outline-none focus:border-gray-400 transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="subject"
                    placeholder={t('contact.form.subject')}
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-none focus:outline-none focus:border-gray-400 transition-colors"
                  />
                </div>
                <div>
                  <textarea
                    rows={5}
                    name="message"
                    placeholder={t('contact.form.message')}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-none focus:outline-none focus:border-gray-400 transition-colors resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-gray-900 text-white text-sm font-medium tracking-wide hover:bg-gray-800 transition-colors"
                >
                  {t('contact.form.send')}
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
