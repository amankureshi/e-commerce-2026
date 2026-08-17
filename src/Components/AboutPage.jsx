import {
    FaHeart,
    FaShippingFast,
    FaShieldAlt,
    FaUsers,
} from "react-icons/fa";

const AboutPage = () => {
    const features = [
        {
            icon: FaHeart,
            title: "Made With Passion",
            description:
                "We carefully select products that combine quality, style and everyday comfort.",
        },
        {
            icon: FaShippingFast,
            title: "Fast Delivery",
            description:
                "We make sure your favorite products reach you quickly and safely.",
        },
        {
            icon: FaShieldAlt,
            title: "Quality You Trust",
            description:
                "Every product is selected with quality and customer satisfaction in mind.",
        },
        {
            icon: FaUsers,
            title: "Customer First",
            description:
                "Our customers are at the heart of everything we do.",
        },
    ];

    return (
        <main className="bg-[#f8f7f4]">

            {/* ================= HERO ================= */}
            <section className="relative overflow-hidden bg-[#1D2434]">
                {/* Decorative Circle */}
                <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#E0BDB7]/20 blur-3xl" />

                <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-[#E0BDB7]/10 blur-3xl" />

                <div className="relative mx-auto flex min-h-[420px] w-full max-w-7xl items-center px-4 py-20 sm:px-6 lg:px-8 xl:px-10">
                    <div className="max-w-2xl">

                        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#E0BDB7]">
                            About Us
                        </p>

                        <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                            We Believe Shopping
                            <span className="block text-[#E0BDB7]">
                                Should Feel Special.
                            </span>
                        </h1>

                        <p className="mt-6 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
                            We are passionate about bringing you stylish, quality products
                            that make everyday life a little better. From carefully selected
                            collections to a simple shopping experience, we put you first.
                        </p>

                    </div>
                </div>
            </section>

            {/* ================= OUR STORY ================= */}
            <section className="bg-white py-16 sm:py-20 lg:py-24">
                <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8 xl:px-10">

                    {/* Left */}
                    <div>
                        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#E0BDB7]">
                            Our Story
                        </p>

                        <h2 className="text-3xl font-bold tracking-tight text-[#1D2434] sm:text-4xl">
                            More Than Just
                            <span className="block">An Online Store</span>
                        </h2>

                        <div className="mt-4 h-[2px] w-20 bg-[#1D2434]" />

                        <p className="mt-6 text-sm leading-7 text-slate-500 sm:text-base">
                            What started as a simple idea has grown into a place where
                            people can discover products they genuinely love. We believe
                            shopping should be easy, enjoyable and trustworthy.
                        </p>

                        <p className="mt-4 text-sm leading-7 text-slate-500 sm:text-base">
                            That's why we focus on quality products, thoughtful collections
                            and an experience that keeps our customers coming back.
                        </p>

                        <button
                            className="
                mt-7
                rounded-full
                bg-[#1D2434]
                px-6
                py-3
                text-sm
                font-semibold
                text-white
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-[#E0BDB7]
                hover:text-[#1D2434]
                hover:shadow-lg
              "
                        >
                            Explore Our Collection
                        </button>
                    </div>

                    {/* Right Visual */}
                    <div className="relative mx-auto w-full max-w-lg">
                        <div className="aspect-square rounded-[2rem] bg-[#E0BDB7] p-6 sm:p-8">

                            <div className="flex h-full items-center justify-center rounded-[1.5rem] border border-white/50 bg-[#1D2434]">

                                <div className="text-center px-6">
                                    <p className="text-5xl font-bold text-[#E0BDB7] sm:text-6xl">
                                        01
                                    </p>

                                    <p className="mt-3 text-lg font-semibold text-white">
                                        Quality
                                    </p>

                                    <p className="mt-2 text-sm leading-6 text-slate-300">
                                        Carefully selected products made for modern everyday life.
                                    </p>
                                </div>

                            </div>
                        </div>

                        {/* Small floating card */}
                        <div className="absolute -bottom-5 -left-3 rounded-2xl bg-white px-5 py-4 shadow-xl sm:-left-6">
                            <p className="text-xs font-medium text-slate-400">
                                Our Promise
                            </p>

                            <p className="mt-1 text-sm font-bold text-[#1D2434]">
                                Quality First ❤️
                            </p>
                        </div>
                    </div>

                </div>
            </section>

            {/* ================= STATS ================= */}
            <section className="bg-[#E0BDB7] py-14 sm:py-16">
                <div className="mx-auto grid w-full max-w-5xl grid-cols-2 gap-y-10 px-4 sm:px-6 md:grid-cols-4 lg:px-8">

                    <div className="text-center">
                        <h3 className="text-3xl font-bold text-[#1D2434] sm:text-4xl">
                            10K+
                        </h3>
                        <p className="mt-1 text-xs font-medium text-[#1D2434]/70 sm:text-sm">
                            Happy Customers
                        </p>
                    </div>

                    <div className="text-center">
                        <h3 className="text-3xl font-bold text-[#1D2434] sm:text-4xl">
                            500+
                        </h3>
                        <p className="mt-1 text-xs font-medium text-[#1D2434]/70 sm:text-sm">
                            Products
                        </p>
                    </div>

                    <div className="text-center">
                        <h3 className="text-3xl font-bold text-[#1D2434] sm:text-4xl">
                            25+
                        </h3>
                        <p className="mt-1 text-xs font-medium text-[#1D2434]/70 sm:text-sm">
                            Categories
                        </p>
                    </div>

                    <div className="text-center">
                        <h3 className="text-3xl font-bold text-[#1D2434] sm:text-4xl">
                            4.9
                        </h3>
                        <p className="mt-1 text-xs font-medium text-[#1D2434]/70 sm:text-sm">
                            Average Rating
                        </p>
                    </div>

                </div>
            </section>

            {/* ================= WHY US ================= */}
            <section className="bg-[#f8f7f4] py-16 sm:py-20 lg:py-24">
                <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-10">

                    <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-12">

                        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#E0BDB7]">
                            What We Stand For
                        </p>

                        <h2 className="text-3xl font-bold text-[#1D2434] sm:text-4xl">
                            Why People Choose Us
                        </h2>

                        <p className="mt-3 text-sm leading-6 text-slate-500 sm:text-base">
                            We keep things simple, honest and focused on what matters most.
                        </p>

                    </div>

                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

                        {features.map((feature, index) => {
                            const Icon = feature.icon;

                            return (
                                <div
                                    key={index}
                                    className="
                    group
                    rounded-2xl
                    border
                    border-slate-200
                    bg-white
                    p-6
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-[#E0BDB7]
                    hover:shadow-xl
                    hover:shadow-[#1D2434]/10
                  "
                                >
                                    <div
                                        className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-xl
                      bg-[#E0BDB7]
                      text-[#1D2434]
                      transition-all
                      duration-300
                      group-hover:bg-[#1D2434]
                      group-hover:text-[#E0BDB7]
                    "
                                    >
                                        <Icon />
                                    </div>

                                    <h3 className="mt-5 text-base font-bold text-[#1D2434] sm:text-lg">
                                        {feature.title}
                                    </h3>

                                    <p className="mt-2 text-sm leading-6 text-slate-500">
                                        {feature.description}
                                    </p>
                                </div>
                            );
                        })}

                    </div>
                </div>
            </section>

            {/* ================= CTA ================= */}
            <section className="bg-[#1D2434] py-16 sm:py-20">
                <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">

                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E0BDB7]">
                        Ready To Explore?
                    </p>

                    <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
                        Find Something You'll Love
                    </h2>

                    <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-slate-300 sm:text-base">
                        Discover our latest collection and find products selected
                        especially for you.
                    </p>

                    <button
                        className="
              mt-7
              rounded-full
              bg-[#E0BDB7]
              px-7
              py-3
              text-sm
              font-bold
              text-[#1D2434]
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-white
              hover:shadow-xl
            "
                    >
                        Shop Now
                    </button>

                </div>
            </section>

        </main>
    );
};

export default AboutPage;