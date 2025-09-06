/**
 * Services page:
 * - High-level categories.
 * - Detailed bullet list grouped by themes.
 */
export const metadata = {
  title: "Services | Naiad Firm Dynamics Consulting",
};

const serviceGroups: { title: string; items: string[] }[] = [
  {
    title: "Employee Wellbeing & Psychology",
    items: [
      "Employee testing and assessment",
      "Stress management and employee wellness",
      "Improving workplace productivity",
      "Synthesizing work styles",
    ],
  },
  {
    title: "Organizational Development",
    items: [
      "Policy planning and advice",
      "Workforce forecasting",
      "Project management mental health support",
      "Improving management",
      "Overseeing analysis",
    ],
  },
  {
    title: "Communication & Business Strategy",
    items: [
      "Communications strategies and systems",
      "Conflict resolution",
      "Advertisement and selling strategy",
      "Product and product delivery assessments",
    ],
  },
  {
    title: "Training & Development",
    items: [
      "Training and development design",
      "Leadership development",
      "Tailored employee growth programs",
    ],
  },
  {
    title: "IT Services",
    items: [
      "Technology enablement to support operations",
      "Basic process automation and integration",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="container-px py-16 space-y-10">
      <header className="space-y-3">
        <h1 className="text-3xl font-bold text-brand-green">Our Services</h1>
        <p className="text-gray-700">
          We assess organizational needs and identify vital gaps between
          employees and the organization. Our tailored solutions are
          research-based and practical enough to execute seamlessly—regardless
          of the current climate.
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-2">
        {serviceGroups.map((group) => (
          <div key={group.title} className="card">
            <h2 className="text-xl font-semibold">{group.title}</h2>
            <ul className="mt-3 space-y-2 list-disc pl-5 text-gray-700">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </div>
  );
}
