
import {
    FaEnvelope,
    FaPhoneAlt,
    FaMapMarkerAlt,
    FaClock,
    FaPaperPlane,
} from "react-icons/fa";

const Contact = () => {
    return (
        <main className="bg-[#f8f7f4]">

            {/* ================= HERO ================= */}
            <section className="relative overflow-hidden bg-[#1D2434]">
                {/* Decorative circles */}
                <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#E0BDB7]/20 blur-3xl" />

                <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-[#E0BDB7]/10 blur-3xl" />

                <div className="relative mx-auto flex min-h-[360px] w-full max-w-7xl items-center px-4 py-16 sm:px-6 sm:py-20 lg:px-8 xl:px-10">
                    <div className="max-w-2xl">

                        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#E0BDB7]">
                            Get In Touch
                        </p>

                        <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                            We'd Love To
                            <span className="block text-[#E0BDB7]">
                                Hear From You.
                            </span>
                        </h1>

                        <p className="mt-5 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
                            Have a question about our products, your order, or anything
                            else? Send us a message and our team will get back to you.
                        </p>

                    </div>
                </div>
            </section>

            {/* ================= CONTACT CONTENT ================= */}
            <section className="py-14 sm:py-18 lg:py-24">
                <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-5 lg:px-8 xl:px-10">

                    {/* ================= CONTACT INFO ================= */}
                    <div className="lg:col-span-2">

                        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#E0BDB7]">
                            Contact Information
                        </p>

                        <h2 className="text-3xl font-bold tracking-tight text-[#1D2434] sm:text-4xl">
                            Let's Start A
                            <span className="block">Conversation</span>
                        </h2>

                        <div className="mt-4 h-[2px] w-20 bg-[#1D2434]" />

                        <p className="mt-5 max-w-md text-sm leading-7 text-slate-500 sm:text-base">
                            Our team is here to help. Whether you have a question about a
                            product or need assistance with an order, feel free to reach out.
                        </p>

                        {/* Contact Cards */}
                        <div className="mt-8 space-y-4">

                            {/* Email */}
                            <div className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#E0BDB7] hover:shadow-lg sm:p-5">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#E0BDB7] text-[#1D2434] transition-all duration-300 group-hover:bg-[#1D2434] group-hover:text-[#E0BDB7]">
                                    <FaEnvelope />
                                </div>

                                <div>
                                    <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
                                        Email
                                    </p>

                                    <p className="mt-1 text-sm font-semibold text-[#1D2434]">
                                        support@yourstore.com
                                    </p>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#E0BDB7] hover:shadow-lg sm:p-5">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#E0BDB7] text-[#1D2434] transition-all duration-300 group-hover:bg-[#1D2434] group-hover:text-[#E0BDB7]">
                                    <FaPhoneAlt />
                                </div>

                                <div>
                                    <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
                                        Phone
                                    </p>

                                    <p className="mt-1 text-sm font-semibold text-[#1D2434]">
                                        +91 98765 43210
                                    </p>
                                </div>
                            </div>

                            {/* Address */}
                            <div className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#E0BDB7] hover:shadow-lg sm:p-5">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#E0BDB7] text-[#1D2434] transition-all duration-300 group-hover:bg-[#1D2434] group-hover:text-[#E0BDB7]">
                                    <FaMapMarkerAlt />
                                </div>

                                <div>
                                    <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
                                        Address
                                    </p>

                                    <p className="mt-1 text-sm font-semibold text-[#1D2434]">
                                        New Delhi, India
                                    </p>
                                </div>
                            </div>

                            {/* Working Hours */}
                            <div className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#E0BDB7] hover:shadow-lg sm:p-5">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#E0BDB7] text-[#1D2434] transition-all duration-300 group-hover:bg-[#1D2434] group-hover:text-[#E0BDB7]">
                                    <FaClock />
                                </div>

                                <div>
                                    <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
                                        Working Hours
                                    </p>

                                    <p className="mt-1 text-sm font-semibold text-[#1D2434]">
                                        Mon - Sat · 9:00 AM - 6:00 PM
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* ================= CONTACT FORM ================= */}
                    <div className="lg:col-span-3">

                        <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7 lg:p-8">

                            <div className="mb-7">
                                <h3 className="text-2xl font-bold text-[#1D2434]">
                                    Send Us A Message
                                </h3>

                                <p className="mt-2 text-sm leading-6 text-slate-500">
                                    Fill out the form below and we'll get back to you as soon as
                                    possible.
                                </p>
                            </div>

                            <form className="space-y-5">

                                {/* Name + Email */}
                                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

                                    <div>
                                        <label
                                            htmlFor="name"
                                            className="mb-2 block text-sm font-semibold text-[#1D2434]"
                                        >
                                            Your Name
                                        </label>

                                        <input
                                            id="name"
                                            type="text"
                                            placeholder="Enter your name"
                                            className="
                        w-full
                        rounded-xl
                        border
                        border-slate-200
                        bg-[#f8f7f4]
                        px-4
                        py-3
                        text-sm
                        text-[#1D2434]
                        outline-none
                        transition-all
                        placeholder:text-slate-400
                        focus:border-[#E0BDB7]
                        focus:bg-white
                        focus:ring-2
                        focus:ring-[#E0BDB7]/30
                      "
                                        />
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="email"
                                            className="mb-2 block text-sm font-semibold text-[#1D2434]"
                                        >
                                            Email Address
                                        </label>

                                        <input
                                            id="email"
                                            type="email"
                                            placeholder="Enter your email"
                                            className="
                        w-full
                        rounded-xl
                        border
                        border-slate-200
                        bg-[#f8f7f4]
                        px-4
                        py-3
                        text-sm
                        text-[#1D2434]
                        outline-none
                        transition-all
                        placeholder:text-slate-400
                        focus:border-[#E0BDB7]
                        focus:bg-white
                        focus:ring-2
                        focus:ring-[#E0BDB7]/30
                      "
                                        />
                                    </div>

                                </div>

                                {/* Subject */}
                                <div>
                                    <label
                                        htmlFor="subject"
                                        className="mb-2 block text-sm font-semibold text-[#1D2434]"
                                    >
                                        Subject
                                    </label>

                                    <input
                                        id="subject"
                                        type="text"
                                        placeholder="What can we help you with?"
                                        className="
                      w-full
                      rounded-xl
                      border
                      border-slate-200
                      bg-[#f8f7f4]
                      px-4
                      py-3
                      text-sm
                      text-[#1D2434]
                      outline-none
                      transition-all
                      placeholder:text-slate-400
                      focus:border-[#E0BDB7]
                      focus:bg-white
                      focus:ring-2
                      focus:ring-[#E0BDB7]/30
                    "
                                    />
                                </div>

                                {/* Message */}
                                <div>
                                    <label
                                        htmlFor="message"
                                        className="mb-2 block text-sm font-semibold text-[#1D2434]"
                                    >
                                        Message
                                    </label>

                                    <textarea
                                        id="message"
                                        rows="6"
                                        placeholder="Write your message here..."
                                        className="
                      w-full
                      resize-none
                      rounded-xl
                      border
                      border-slate-200
                      bg-[#f8f7f4]
                      px-4
                      py-3
                      text-sm
                      text-[#1D2434]
                      outline-none
                      transition-all
                      placeholder:text-slate-400
                      focus:border-[#E0BDB7]
                      focus:bg-white
                      focus:ring-2
                      focus:ring-[#E0BDB7]/30
                    "
                                    />
                                </div>

                                {/* Submit */}
                                <button
                                    type="submit"
                                    className="
                    flex
                    w-full
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    bg-[#1D2434]
                    px-6
                    py-3.5
                    text-sm
                    font-bold
                    text-white
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:bg-[#E0BDB7]
                    hover:text-[#1D2434]
                    hover:shadow-lg
                    sm:w-auto
                  "
                                >
                                    <FaPaperPlane className="text-xs" />
                                    Send Message
                                </button>

                            </form>
                        </div>
                    </div>

                </div>
            </section>

            {/* ================= BOTTOM CTA ================= */}
            <section className="bg-[#E0BDB7] py-12 sm:py-14">
                <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">

                    <h2 className="text-2xl font-bold text-[#1D2434] sm:text-3xl">
                        We're Always Happy To Help
                    </h2>

                    <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-[#1D2434]/70 sm:text-base">
                        Your questions, feedback and suggestions help us make your shopping
                        experience even better.
                    </p>

                </div>
            </section>

        </main>
    );
};

export default Contact;

