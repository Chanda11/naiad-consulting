/**
 * Home page:
 * - Hero with headline, subtext, and CTA.
 * - Quick services overview.
 * - Value proposition block.
 */
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="container-px py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-brand-green">
            Synchronizing People & Organizations
          </h1>
          <p className="mt-4 text-gray-600">
            We align employee needs with organizational goals using psychology,
            communication, training, and technology.
          </p>
          <div className="mt-6 flex gap-3">
            <Link href="/services" className="btn-primary">Explore Services</Link>
            <Link href="/contact" className="inline-flex items-center px-5 py-3 rounded-2xl border">
              Contact Us
            </Link>
          </div>
        </div>

        {/* Founder image (place your image at /public/founder.jpg) */}
        <div className="flex justify-center">
          <Image
            src="/founder.jpg"
            alt="Founder portrait"
            width={420}
            height={560}
            className="rounded-2xl shadow-soft object-cover"
            priority
          />
        </div>
      </section>

      {/* Services preview */}
      <section className="bg-white border-y">
        <div className="container-px py-14">
          <h2 className="text-2xl font-bold text-center">Our Core Services</h2>
          <p className="mt-2 text-center text-gray-600">
            Tailored, research-based solutions for your organization.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Organizational Psychology",
                desc: "Employee testing, wellness, productivity, stress management.",
              },
              {
                title: "Communications Strategy",
                desc: "Messaging, systems, conflict resolution, stakeholder alignment.",
              },
              {
                title: "Training & Development",
                desc: "Leadership, management training, growth programs.",
              },
              {
                title: "Business Development",
                desc: "Policy planning, workforce forecasting, product delivery insights.",
              },
              {
                title: "IT Services",
                desc: "Practical tech enablement to support your operations.",
              },
            ].map((s) => (
              <div key={s.title} className="card">
                <h3 className="text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-gray-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value proposition */}
      <section className="container-px py-16">
        <div className="card">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-green">
            Why We’re Different
          </h2>
          <p className="mt-3 text-gray-700">
            Our service goes beyond coaching—we address the psychological
            principles behind human interaction and workplace behavior. Our
            multidisciplinary team (psychologists, analysts, IT specialists,
            social workers, and counselors) delivers research-driven, practical
            solutions you can execute seamlessly.
          </p>
        </div>
      </section>
    </div>
  );
}
