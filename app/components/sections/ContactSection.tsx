"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, AlertCircle, FileText } from "lucide-react";

const GithubIcon = ({ size = 18 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
);

const LinkedinIcon = ({ size = 18 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
    </svg>
);

const socials = [
    { icon: GithubIcon, label: "GITHUB", href: "https://github.com/hehemohit" },
    { icon: LinkedinIcon, label: "LINKEDIN", href: "https://www.linkedin.com/in/mohit-jangid-a54762346/" },
    { icon: FileText, label: "RESUME", href: "#" },
];

export const ContactSection = () => {
    const [formState, setFormState] = useState({ name: "", email: "", message: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [sendError, setSendError] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSendError(false);

        try {
            const formData = new FormData();
            formData.append("access_key", "ab7eba12-b1e6-4cd9-afc9-23141d1acde8");
            formData.append("name", formState.name);
            formData.append("email", formState.email);
            formData.append("message", formState.message);
            formData.append("subject", `New Portfolio Contact: ${formState.name}`);
            formData.append("from_name", "Portfolio Contact Form");

            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
            });

            const data = await response.json();

            if (data.success) {
                setSubmitted(true);
                setFormState({ name: "", email: "", message: "" });
            } else {
                setSendError(true);
            }
        } catch {
            setSendError(true);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section
            id="contact"
            className="relative min-h-screen bg-black text-white transition-colors duration-700 overflow-hidden
                       px-5 pt-20 pb-24
                       sm:px-8 sm:pt-28 sm:pb-32
                       md:px-16 md:pt-36 md:pb-40
                       lg:px-24"
        >
            {/* Background watermark */}
            <div
                aria-hidden="true"
                className="pointer-events-none select-none absolute bottom-[-10%] right-[-5%] leading-none z-0 overflow-hidden opacity-[0.07]"
            >
                <span className="font-headline font-black text-[clamp(250px,45vw,700px)] text-primary transition-colors duration-700 block translate-x-[15%]">
                    06
                </span>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto w-full">

                {/* ── Section label ── */}
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="font-label text-[10px] tracking-[0.3em] uppercase text-neutral-600 mb-4"
                >
                    06 / CONTACT
                </motion.p>

                {/* ── Main grid ── */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-start">

                    {/* LEFT — heading, copy, socials */}
                    <div className="lg:col-span-5">
                        <motion.h2
                            initial={{ opacity: 0, x: -24 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                            className="font-headline font-black leading-[0.88] tracking-tighter uppercase text-primary mb-6
                                       text-[clamp(2.4rem,10vw,6.5rem)]"
                        >
                            LET&apos;S<br />WORK<br />TOGETHER
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.25, duration: 0.6 }}
                            className="font-body text-sm sm:text-base text-neutral-400 leading-relaxed mb-8 max-w-sm"
                        >
                            Whether you have a specific project in mind or just want to explore a
                            potential collaboration — I&apos;m ready to build something exceptional.
                        </motion.p>

                        {/* Social cards */}
                        <div className="grid grid-cols-3 gap-3 sm:gap-4">
                            {socials.map(({ icon: Icon, label, href }, i) => (
                                <motion.a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    initial={{ opacity: 0, y: 16 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 * i, duration: 0.5 }}
                                    className="group flex flex-col items-center justify-center gap-2 py-4 sm:py-5 px-2
                                               border border-neutral-800
                                               hover:border-primary hover:bg-neutral-950
                                               transition-all duration-200"
                                >
                                    <Icon
                                        size={18}
                                        className="text-neutral-400 group-hover:text-primary transition-colors"
                                    />
                                    <span className="font-label text-[8px] sm:text-[9px] font-black tracking-[0.15em] text-neutral-400 group-hover:text-primary transition-colors">
                                        {label}
                                    </span>
                                </motion.a>
                            ))}
                        </div>

                        {/* Direct email line */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                            className="mt-6 font-label text-[10px] tracking-[0.15em] text-neutral-400"
                        >
                            OR EMAIL DIRECTLY:{" "}
                            <a
                                href="mailto:mohit.jangid2805@gmail.com"
                                className="text-white hover:text-primary transition-colors underline underline-offset-4"
                            >
                                mohit.jangid2805@gmail.com
                            </a>
                        </motion.p>
                    </div>

                    {/* RIGHT — contact form */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.7 }}
                        className="lg:col-span-7 bg-neutral-950 border border-neutral-900
                                   p-6 sm:p-8 md:p-10"
                    >
                        {submitted ? (
                            /* ── Success state ── */
                            <div className="flex flex-col items-center justify-center text-center py-16 gap-4">
                                <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center">
                                    <CheckCircle size={28} className="text-black" />
                                </div>
                                <h3 className="font-headline font-black text-2xl sm:text-3xl uppercase tracking-tighter">
                                    Message Sent
                                </h3>
                                <p className="text-neutral-400 text-sm max-w-xs">
                                    I&apos;ll get back to you within 24 hours.
                                </p>
                                <button
                                    onClick={() => setSubmitted(false)}
                                    className="mt-4 bg-primary text-black font-label font-black text-[10px] tracking-[0.2em] px-10 py-4 uppercase
                                               transition-all hover:translate-x-[3px] hover:-translate-y-[3px]
                                               hover:shadow-[6px_6px_0_0_#fff]"
                                >
                                    SEND_ANOTHER
                                </button>
                            </div>
                        ) : (
                            /* ── Form ── */
                            <form onSubmit={handleSubmit} className="flex flex-col gap-6">

                                {/* Name */}
                                <div className="flex flex-col gap-1.5">
                                    <label className="font-label text-[9px] font-black tracking-[0.25em] uppercase text-neutral-600">
                                        NAME
                                    </label>
                                    <input
                                        required
                                        type="text"
                                        placeholder="Your name"
                                        value={formState.name}
                                        onChange={e => setFormState({ ...formState, name: e.target.value })}
                                        className="w-full bg-black border border-neutral-800
                                                   p-3.5 font-body text-sm
                                                   focus:border-primary outline-none transition-colors
                                                   placeholder:text-neutral-700"
                                    />
                                </div>

                                {/* Email */}
                                <div className="flex flex-col gap-1.5">
                                    <label className="font-label text-[9px] font-black tracking-[0.25em] uppercase text-neutral-600">
                                        EMAIL
                                    </label>
                                    <input
                                        required
                                        type="email"
                                        placeholder="you@example.com"
                                        value={formState.email}
                                        onChange={e => setFormState({ ...formState, email: e.target.value })}
                                        className="w-full bg-black border border-neutral-800
                                                   p-3.5 font-body text-sm
                                                   focus:border-primary outline-none transition-colors
                                                   placeholder:text-neutral-700"
                                    />
                                </div>

                                {/* Message */}
                                <div className="flex flex-col gap-1.5">
                                    <label className="font-label text-[9px] font-black tracking-[0.25em] uppercase text-neutral-600">
                                        MESSAGE
                                    </label>
                                    <textarea
                                        required
                                        rows={5}
                                        placeholder="Project details or collaboration ideas..."
                                        value={formState.message}
                                        onChange={e => setFormState({ ...formState, message: e.target.value })}
                                        className="w-full bg-black border border-neutral-800
                                                   p-3.5 font-body text-sm
                                                   focus:border-primary outline-none resize-none transition-colors
                                                   placeholder:text-neutral-700"
                                    />
                                </div>

                                {/* Error message */}
                                {sendError && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -6 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="flex items-center gap-2 text-primary text-xs font-label tracking-wide"
                                    >
                                        <AlertCircle size={14} />
                                        Transmission failed — please try again or email directly.
                                    </motion.div>
                                )}

                                {/* Submit button */}
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="self-start bg-primary text-black font-label font-black text-[10px] tracking-[0.2em] uppercase
                                               px-10 py-4 sm:px-14 sm:py-5
                                               transition-all duration-150
                                               hover:translate-x-[3px] hover:-translate-y-[3px]
                                               hover:shadow-[6px_6px_0_0_#fff]
                                               disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-x-0 disabled:hover:translate-y-0 disabled:hover:shadow-none"
                                >
                                    {isSubmitting ? "TRANSMITTING..." : "SEND_MESSAGE →"}
                                </button>
                            </form>
                        )}
                    </motion.div>
                </div>
            </div>

            {/* ── Footer ── */}
            <div className="relative z-10 max-w-7xl mx-auto mt-24 sm:mt-32 pt-8 border-t border-neutral-900
                            flex flex-col sm:flex-row justify-between items-center gap-6">
                <div className="flex flex-col items-center sm:items-start gap-0.5">
                    <span className="font-headline font-black text-xl tracking-tighter uppercase text-primary">
                        MOHIT JANGID
                    </span>
                    <span className="font-label text-[9px] text-neutral-400 uppercase tracking-[0.35em]">
                        © 2026 MOHIT JANGID
                    </span>
                </div>
                <p className="font-label text-[9px] text-neutral-400 uppercase tracking-[0.2em] hidden sm:block font-bold">
                    DESIGNED &amp; BUILT WITH PRECISION
                </p>
                <div className="flex gap-8 font-label text-[9px] font-black tracking-[0.2em] text-neutral-400">
                    <a href="https://github.com/hehemohit" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">GITHUB</a>
                    <a href="https://www.linkedin.com/in/mohit-jangid-a54762346/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">LINKEDIN</a>
                    <a href="mailto:mohit.jangid2805@gmail.com" className="hover:text-primary transition-colors">EMAIL</a>
                </div>
            </div>
        </section>
    );
}
