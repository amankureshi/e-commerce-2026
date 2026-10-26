import { FaTruck, FaShieldAlt, FaUndo, FaHeadset } from "react-icons/fa";

const WhyChooseUs = () => {
    const features = [
        { icon: FaTruck, title: "Free Shipping", description: "Enjoy free shipping on all orders with fast and reliable delivery." },
        { icon: FaShieldAlt, title: "Secure Payment", description: "Your payment information is protected with safe and secure checkout." },
        { icon: FaUndo, title: "Easy Returns", description: "Not satisfied? Return your product easily within our return policy." },
        { icon: FaHeadset, title: "24/7 Support", description: "Our support team is always here to help you with your questions." },
    ];

    return (
        <section className="bg-white py-16 sm:py-20 lg:py-24">
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-10">
                <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-12">
                    <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-pink-600">Why Choose Us</p>
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">We Make Shopping Simple</h2>
                    <p className="mt-3 text-sm leading-6 text-slate-500 sm:text-base">Everything you need for a smooth, secure and enjoyable shopping experience.</p>
                    <div className="mx-auto mt-4 h-[2px] w-20 rounded-full bg-slate-900" />
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;

                        return (
                            <div key={index} className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-[#f8f7f4] p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-pink-200 hover:bg-white hover:shadow-xl hover:shadow-slate-200/60 sm:p-7">
                                <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-blue-100/50 blur-2xl transition-transform duration-500 group-hover:scale-150" />
                                <div className="relative mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-pink-300 text-white shadow-lg shadow-pink-300/20 transition-all duration-300 group-hover:scale-110 group-hover:bg-slate-900">
                                    <Icon className="text-xl" />
                                </div>
                                <h3 className="relative mt-5 text-base font-bold text-slate-900 sm:text-lg">{feature.title}</h3>
                                <p className="relative mt-2 text-xs leading-5 text-slate-500 sm:text-sm sm:leading-6">{feature.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
