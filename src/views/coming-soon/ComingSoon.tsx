import React from "react";

interface ComingSoonProps {
    data: any;
}

const ComingSoon: React.FC<ComingSoonProps> = ({ data }) => {
    return (
        <section className="min-h-[80vh] flex items-center justify-center bg-slate-950 relative overflow-hidden section-padding">
            {/* Background Effects */}
            <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary-600/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-600/20 rounded-full blur-[120px]" />
            </div>

            <div className="container mx-auto relative z-10 text-center">
                <div className="max-w-3xl mx-auto glass p-12 md:p-20 rounded-[3rem] border border-white/10 shadow-hard animate-fade-in">
                    <h2 className="text-sm font-bold tracking-[0.3em] text-primary-400 uppercase mb-8">
                        {data.subTitle || "Coming Soon"}
                    </h2>
                    <h3 className="text-5xl md:text-7xl font-display font-black text-white mb-8 leading-tight">
                        {data.title || "Something Big is Brewing"}
                    </h3>
                    <p className="text-xl text-slate-300 mb-12 leading-relaxed">
                        {data.description || "We're working hard to bring you a revolutionary new experience. Stay tuned for our grand launch."}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 px-8 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 transition-all"
                        />
                        <button className="px-8 py-4 rounded-2xl bg-primary-600 text-white font-bold hover:bg-primary-500 active:scale-95 transition-all shadow-lg shadow-primary-600/20">
                            Notify Me
                        </button>
                    </div>

                    <div className="mt-12 flex justify-center gap-8 text-slate-500 text-sm font-bold uppercase tracking-widest">
                        <div className="flex flex-col">
                            <span className="text-white text-3xl font-black mb-1">12</span>
                            <span>Days</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-white text-3xl font-black mb-1">08</span>
                            <span>Hours</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-white text-3xl font-black mb-1">45</span>
                            <span>Mins</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ComingSoon;


