/**
 * About page:
 * - Background
 * - Mission & Vision
 * - Philosophy & sustainability
 */
export const metadata = {
  title: "About | Naiad Firm Dynamics Consulting",
};

export default function AboutPage() {
  return (
    <div className="container-px py-16 space-y-12">
      <section className="space-y-3">
        <h1 className="text-3xl font-bold text-brand-green">Background</h1>
        <p className="text-black-700">
          Naiad Firm Dynamics Consulting was founded by the desire to bring
          synchronization between the employees and the firms they are
          affiliated with. We observed a disharmony between employees and
          organizations and moved toward a deeper understanding of the
          organizational factors that influence performance—such as
          environments, stress, human relationships in the workplace, and
          psychological principles and motives.
        </p>
        <p className="text-gray-700">
          We improve organizational performance by examining aspects your
          clients may not see but experience through the services they receive.
          We match people to roles using personnel psychology and study how
          organizational cultures affect human behavior and decision-making.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-8">
        <div className="card">
          <h2 className="text-2xl font-semibold">Mission</h2>
          <p className="mt-2 text-gray-700">
            To provide professional and highly effective organizational
            psychology services to clients dedicated to their organizational
            goals. We position ourselves as the go-to firm by addressing the
            backbone of any institution—its employees.
          </p>
        </div>
        <div className="card">
          <h2 className="text-2xl font-semibold">Vision</h2>
          <p className="mt-2 text-gray-700">
            To build productive and progressive organizational structures for
            our clients by providing problem-solving, research-based solutions
            that create an environment of goal achievement.
          </p>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Why We’re Different</h2>
        <p className="text-gray-700">
          At Naiad, our clients’ best interests always come first and everything
          we do is guided by our values and professional ethics. We provide a
          platform for self-realization and self-awareness and create a safe
          space for aligning personal and organizational goals.
        </p>
        <p className="text-gray-700">
          As an age-conscious entity, we demonstrate our commitment to
          sustainability by participating in our communities and integrating
          sustainable business practices wherever possible. We hold ourselves to
          the highest standards by meeting our clients’ needs precisely and
          completely.
        </p>
      </section>
    </div>
  );
}
