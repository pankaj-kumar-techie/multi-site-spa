import React from "react";

interface FooterProps {
    data: any;
}

const Footer: React.FC<FooterProps> = ({ data }) => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-950 text-white pt-20 pb-10 border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Section */}
                    <div className="lg:col-span-1">
                        {data?.logo ? (
                            <div className="flex items-center gap-3 mb-6">
                                <img
                                    src={data.logo.imageSrc}
                                    alt={data.logo.imageAlt}
                                    className="w-12 h-12 object-contain rounded-xl transition-all duration-300 hover:scale-110"
                                />
                                <span className="text-2xl font-display font-bold tracking-tight">
                                    {data.title}
                                </span>
                            </div>
                        ) : data?.title && (
                            <div className="flex items-center gap-2 mb-6">
                                <div className="w-10 h-10 bg-primary-600 rounded-xl flex items-center justify-center font-display font-black text-xl">
                                    {data.title[0]}
                                </div>
                                <span className="text-2xl font-display font-bold tracking-tight">
                                    {data.title}
                                </span>
                            </div>
                        )}
                        {data?.description && (
                            <p className="text-slate-400 mb-8 leading-relaxed max-w-xs">
                                {data.description}
                            </p>
                        )}
                        {data?.footer?.socialLink && data.footer.socialLink.length > 0 && (
                            <div className="flex gap-4">
                                {data.footer.socialLink.map((social: any) => (
                                    <a key={social.id} href={social.line || "#"} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary-600 transition-colors">
                                        <span className="sr-only">{social.name}</span>
                                        <div className="w-5 h-5 bg-white/20 rounded-sm flex items-center justify-center text-[10px] font-bold">
                                            {social.name[0].toUpperCase()}
                                        </div>
                                    </a>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Links - Company */}
                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-primary-500">Company</h4>
                        <ul className="space-y-4">
                            {[
                                { label: 'About Us', url: '/about' },
                                { label: 'Our Team', url: '/about#team' },
                                { label: 'Careers', url: '/contact' },
                                { label: 'Contact', url: '/contact' }
                            ].map((link) => (
                                <li key={link.label}>
                                    <a href={link.url} className="text-slate-400 hover:text-white transition-colors">{link.label}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Links - Product */}
                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-primary-500">Product</h4>
                        <ul className="space-y-4">
                            {['Features', 'Templates', 'Pricing', 'Integration'].map((link) => (
                                <li key={link}>
                                    <a href="#" className="text-slate-400 hover:text-white transition-colors">{link}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-primary-500">Subscribe</h4>
                        <p className="text-slate-400 mb-6 text-sm">Join our newsletter to stay updated with latest features.</p>
                        <div className="flex bg-white/5 p-1 rounded-xl border border-white/10 group focus-within:border-primary-500 transition-all">
                            <input
                                type="email"
                                placeholder="Email address"
                                className="bg-transparent border-none focus:ring-0 text-sm px-4 flex-grow placeholder:text-slate-500"
                            />
                            <button className="bg-primary-600 hover:bg-primary-500 px-4 py-2 rounded-lg text-sm font-bold transition-colors">
                                Join
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-slate-500 text-sm">
                        {data?.footer?.copyright || (
                            <span>
                                &copy; {currentYear} All rights reserved.
                                <span className="mx-1">|</span>
                                Developed by <a href="https://pankaj-kumar-techie.github.io/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Pankaj Kumar Techie</a>
                            </span>
                        )}
                    </p>
                    <div className="flex gap-8 text-sm text-slate-500">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
