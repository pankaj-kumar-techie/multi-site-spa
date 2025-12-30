import React, { useState } from "react";
import { FieldConfig } from "../../modal/FieldConfig";

interface ContactUsProps {
    data: any;
}

const ContactUs: React.FC<ContactUsProps> = ({ data }) => {
    const contact = data?.contactUs || {
        address: "Innovator St., Silicon Valley, CA 94025",
        email: "hello@antigravity.com",
        phone: "+1 (555) 001-2024"
    };

    const formFields: FieldConfig[] = contact.formFields || [
        { name: 'name', label: 'Name', type: 'text', required: true },
        { name: 'email', label: 'Email', type: 'email', required: true },
        { name: 'subject', label: 'Subject', type: 'text', required: true },
        { name: 'message', label: 'Message', type: 'textarea', required: true },
    ];

    const [formData, setFormData] = useState<Record<string, string>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitted(true);
            setFormData({});
        }, 1500);
    };

    return (
        <section id="contact" className="section-padding bg-white relative overflow-hidden">
            <div className="container mx-auto relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* Contact Info */}
                    <div className="animate-fade-in">
                        <h2 className="text-sm font-bold tracking-widest text-primary-600 uppercase mb-3">
                            {data.subTitle || "Get In Touch"}
                        </h2>
                        <h3 className="text-4xl md:text-5xl font-display font-extrabold text-slate-900 mb-8 leading-tight">
                            {data.title || "Ready to Elevate Your Website?"}
                        </h3>
                        <p className="text-lg text-slate-600 mb-12 max-w-lg leading-relaxed">
                            {data.description || "Drop us a line and our expert team will get back to you within 24 hours to discuss your next big project."}
                        </p>

                        <div className="space-y-10">
                            {contact.address && (
                                <div className="flex gap-6 group">
                                    <div className="w-14 h-14 rounded-2xl bg-primary-50 flex items-center justify-center text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Our Office</div>
                                        <div className="text-lg font-bold text-slate-900 whitespace-pre-line">{contact.address}</div>
                                    </div>
                                </div>
                            )}

                            {contact.email && (
                                <div className="flex gap-6 group">
                                    <div className="w-14 h-14 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Email Us</div>
                                        <div className="text-lg font-bold text-slate-900">{contact.email}</div>
                                    </div>
                                </div>
                            )}

                            {contact.phone && (
                                <div className="flex gap-6 group">
                                    <div className="w-14 h-14 rounded-2xl bg-green-50 flex items-center justify-center text-green-600 group-hover:bg-green-600 group-hover:text-white transition-all duration-300">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Call Us</div>
                                        <div className="text-lg font-bold text-slate-900">{contact.phone}</div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-slate-50 p-10 md:p-12 rounded-[2.5rem] border border-slate-100 shadow-premium animate-fade-in-up">
                        {submitted ? (
                            <div className="text-center py-10 space-y-6">
                                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <h4 className="text-2xl font-bold text-slate-900">Message Sent!</h4>
                                <p className="text-slate-600">We've received your inquiry and will get back to you shortly.</p>
                                <button
                                    onClick={() => setSubmitted(false)}
                                    className="text-primary-600 font-bold hover:underline"
                                >
                                    Send another message
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {formFields.filter(f => f.type !== 'textarea').map((field) => (
                                        <div key={field.name} className="space-y-2">
                                            <label className="text-sm font-bold text-slate-700 ml-1">
                                                {field.label} {field.required && <span className="text-red-500">*</span>}
                                            </label>
                                            <input
                                                type={field.type}
                                                name={field.name}
                                                value={formData[field.name] || ''}
                                                onChange={handleInputChange}
                                                required={field.required}
                                                placeholder={`Enter ${field.label.toLowerCase()}...`}
                                                className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-200 focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 transition-all placeholder:text-slate-400 text-slate-900 outline-none"
                                            />
                                        </div>
                                    ))}
                                </div>

                                {formFields.filter(f => f.type === 'textarea').map((field) => (
                                    <div key={field.name} className="space-y-2">
                                        <label className="text-sm font-bold text-slate-700 ml-1">
                                            {field.label} {field.required && <span className="text-red-500">*</span>}
                                        </label>
                                        <textarea
                                            name={field.name}
                                            rows={4}
                                            value={formData[field.name] || ''}
                                            onChange={handleInputChange}
                                            required={field.required}
                                            placeholder={`Enter ${field.label.toLowerCase()}...`}
                                            className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-200 focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 transition-all placeholder:text-slate-400 text-slate-900 outline-none resize-none"
                                        />
                                    </div>
                                ))}

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`w-full py-5 rounded-2xl bg-primary-600 text-white font-bold text-lg shadow-lg shadow-primary-600/20 active:scale-95 transition-all ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-primary-500'}`}
                                >
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;

