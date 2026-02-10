import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-blue-700 rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row">
          {/* Info Side */}
          <div className="lg:w-2/5 p-12 lg:p-16 text-white bg-blue-800">
            <h3 className="text-4xl font-bold mb-6">Connect with our specialists.</h3>
            <p className="text-blue-100 text-lg mb-12">
              Ready to integrate world-class precision into your systems? We're ready to discuss your requirements.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-500/30 rounded-xl flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-blue-200 text-sm font-medium uppercase tracking-wider mb-1">Email Us</p>
                  <p className="text-xl font-semibold">info@analogics.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-500/30 rounded-xl flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-blue-200 text-sm font-medium uppercase tracking-wider mb-1">Call Us</p>
                  <p className="text-xl font-semibold">+1 (800) 555-ANALOG</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-500/30 rounded-xl flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-blue-200 text-sm font-medium uppercase tracking-wider mb-1">HQ</p>
                  <p className="text-xl font-semibold">Corporate Headquarters, MA, USA</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:w-3/5 p-12 lg:p-16 bg-white">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                  <Send className="w-10 h-10" />
                </div>
                <h4 className="text-3xl font-bold text-slate-900 mb-4">Request Received</h4>
                <p className="text-slate-600 text-lg max-w-sm">
                  Thank you for your interest. A technical representative will contact you within one business day.
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-blue-700 font-bold hover:underline"
                >
                  Send another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Full Name</label>
                    <input 
                      type="text" 
                      required
                      placeholder="Jane Smith"
                      className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Email Address</label>
                    <input 
                      type="email" 
                      required
                      placeholder="jane@organization.com"
                      className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Sector of Interest</label>
                  <select className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all appearance-none bg-slate-50 cursor-pointer">
                    <option>Technical Products</option>
                    <option>Software Solutions</option>
                    <option>Industrial Systems</option>
                    <option>Power Electronics</option>
                    <option>Other Enquiry</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Message</label>
                  <textarea 
                    rows={4} 
                    required
                    placeholder="Specify your technical requirements..."
                    className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-blue-700 hover:bg-blue-800 disabled:bg-blue-400 text-white font-bold py-5 rounded-xl shadow-xl shadow-blue-100 transition-all flex items-center justify-center gap-2"
                >
                  {isSubmitting ? 'Processing...' : 'Submit Technical Inquiry'}
                  {!isSubmitting && <Send className="w-5 h-5" />}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;