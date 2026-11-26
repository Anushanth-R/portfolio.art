import { useState } from "react";

const email = "anushanthr04@gmail.com";
const formEndpoint = "https://formspree.io/f/maeokdkj";
const fieldClass =
  "w-full rounded-lg border border-white/20 bg-black px-3 py-2.5 text-white focus-visible:outline-2 focus-visible:outline-[var(--primary-color)]";
const linkClass =
  "text-[var(--primary-color)] underline underline-offset-4 hover:text-white";

export default function Contact() {
  const [status, setStatus] = useState("idle");

  async function handleSubmit(event) {
    event.preventDefault();

    if (status === "sending") return;

    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    if (!name || !message) {
      setStatus("incomplete");
      return;
    }

    data.set("name", name);
    data.set("message", message);
    setStatus("sending");

    try {
      const response = await fetch(form.action, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });

      if (!response.ok) {
        setStatus("error");
        return;
      }

      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
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
          action={formEndpoint}
          method="post"
          onSubmit={handleSubmit}
          className="space-y-4 rounded-xl border border-white/15 bg-[var(--bg2-color)] p-5"
        >
          <div className="space-y-1.5">
            <label htmlFor="contact-name">Your name</label>
            <input
              id="contact-name"
              name="name"
              autoComplete="name"
              required
              maxLength={100}
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
              required
              maxLength={254}
              className={fieldClass}
            />
          </div>

          <div className="space-y-1.5">
            <label htmlFor="contact-message">Your message</label>
            <textarea
              id="contact-message"
              name="message"
              rows={3}
              required
              maxLength={3000}
              className={`${fieldClass} resize-y`}
            />
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="min-h-11 w-full rounded-xl bg-[var(--primary-color)] px-5 py-2.5 font-bold text-black enabled:hover:bg-sky-300 disabled:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--primary-color)] sm:w-auto"
          >
            {status === "sending" ? "Sending…" : "Send Message"}
          </button>

          <p role="status" className="text-sm text-white/85">
            {status === "sending" && "Sending your message…"}
            {status === "sent" && "Thanks. Your message was sent."}
            {status === "incomplete" && "Please enter your name and message."}
            {status === "error" && (
              <>
                I couldn’t send your message. Try again or{" "}
                <a href={`mailto:${email}`} className={linkClass}>email me directly</a>.
              </>
            )}
          </p>
        </form>
      </div>
    </section>
  );
}
