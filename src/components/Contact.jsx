import { useState } from "react";

const email = "anushanthr04@gmail.com";
const fieldClass =
  "w-full rounded-lg border border-white/20 bg-black px-3 py-2.5 text-white focus-visible:outline-2 focus-visible:outline-[var(--primary-color)]";
const linkClass =
  "text-[var(--primary-color)] underline underline-offset-4 hover:text-white";

export default function Contact() {
  const [showNotice, setShowNotice] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setShowNotice(true);
  }

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="mx-auto w-full max-w-5xl scroll-mt-[45px] px-5 py-12 md:px-8"
    >
      <h2 id="contact-heading" className="text-2xl font-bold md:text-3xl">
        Contact
      </h2>

      <div className="mt-6 grid gap-6 md:grid-cols-[2fr_3fr]">
        <div className="space-y-3">
          <h3 className="text-lg font-bold">Email me</h3>
          <a href={`mailto:${email}`} className={`break-all ${linkClass}`}>
            {email}
          </a>
          
          <div className="mt-5 flex flex-wrap gap-4">
            <a
              href="https://www.linkedin.com/in/anushanth-r-9848b6244"
              className={linkClass}
            >
              LinkedIn
            </a>
            <a href="https://github.com/Anushanth-R" className={linkClass}>
              GitHub
            </a>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          noValidate
          className="space-y-4 rounded-xl border border-white/15 bg-[var(--bg2-color)] p-5"
        >
          <div className="space-y-1.5">
            <label htmlFor="contact-name">Your name</label>
            <input
              id="contact-name"
              name="name"
              autoComplete="name"
              className={fieldClass}
            />
          </div>

          <div className="space-y-1.5">
            <label htmlFor="contact-email">Your email</label>
            <input
              id="contact-email"
              name="email"
              type="email"
              autoComplete="email"
              className={fieldClass}
            />
          </div>

          <div className="space-y-1.5">
            <label htmlFor="contact-message">Your message</label>
            <textarea
              id="contact-message"
              name="message"
              rows={3}
              className={`${fieldClass} resize-y`}
            />
          </div>

          <button
            type="submit"
            className="min-h-11 w-full rounded-xl bg-[var(--primary-color)] px-5 py-2.5 font-bold text-black hover:bg-sky-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--primary-color)] sm:w-auto"
          >
            Send Message
          </button>

          <p role="status" className="text-sm text-white/85 empty:hidden">
            {showNotice && (
              <>
                This form isn’t set up to send messages yet.{" "}
                <a href={`mailto:${email}`} className={linkClass}>
                  Please email me directly.
                </a>
              </>
            )}
          </p>
        </form>
      </div>
    </section>
  );
}