export default function Contact() {
    return (
      <section
        id="contact"
        className="bg-brand-dark py-20 text-brand-light sm:py-24 lg:py-32"
      >
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
  
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
  
            {/* Left */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-accent">
                Contact
              </p>
  
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                Let's work together.
              </h2>
  
              <p className="mt-6 max-w-xl text-base leading-7 text-brand-light/70 sm:text-lg sm:leading-8">
                Have a project, idea, or opportunity? Feel free to
                reach out. I'd be happy to hear from you.
              </p>
  
              {/* Contact Information */}
              <div className="mt-8 space-y-4">
  
                <a
                  href="mailto:your@email.com"
                  className="block text-brand-light transition hover:text-brand-accent"
                >
                  your@email.com
                </a>
  
                <a
                  href="#"
                  className="block text-brand-light transition hover:text-brand-accent"
                >
                  GitHub
                </a>
  
                <a
                  href="#"
                  className="block text-brand-light transition hover:text-brand-accent"
                >
                  LinkedIn
                </a>
  
              </div>
            </div>
  
            {/* Form */}
            <form className="space-y-6">
  
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium"
                >
                  Name
                </label>
  
                <input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-lg border border-brand-light/20 bg-brand-light/10 px-4 py-3 text-brand-light outline-none placeholder:text-brand-light/40 focus:border-brand-accent"
                />
              </div>
  
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium"
                >
                  Email
                </label>
  
                <input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  className="w-full rounded-lg border border-brand-light/20 bg-brand-light/10 px-4 py-3 text-brand-light outline-none placeholder:text-brand-light/40 focus:border-brand-accent"
                />
              </div>
  
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium"
                >
                  Message
                </label>
  
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full resize-none rounded-lg border border-brand-light/20 bg-brand-light/10 px-4 py-3 text-brand-light outline-none placeholder:text-brand-light/40 focus:border-brand-accent"
                />
              </div>
  
              <button
                type="submit"
                className="w-full rounded-lg bg-brand-light px-6 py-3 font-semibold text-brand-dark transition hover:bg-brand-accent"
              >
                Send Message
              </button>
  
            </form>
  
          </div>
        </div>
      </section>
    );
  }