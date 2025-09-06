/**
 * Executive summary page:
 * - A concise statement of Naiad's value and approach.
 */
export const metadata = {
  title: "Executive Summary | Naiad Firm Dynamics Consulting",
};

export default function ExecutiveSummaryPage() {
  return (
    <div className="container-px py-16">
      <h1 className="text-3xl font-bold text-brand-green">Executive Summary</h1>
      <div className="mt-4 card space-y-4">
        <p className="text-gray-700">
          At Naiad, we assess the needs of an organization and identify vital
          gaps between employees and the organization that the client can
          benefit from filling. Our tailor-made solutions are research-based and
          practical enough for clients to execute seamlessly.
        </p>
        <p className="text-gray-700">
          Our goal is to help clients positively change their perspectives about
          their employees and their needs—regardless of the current climate.
          We achieve these goals by ensuring the mental and physical wellbeing
          of employees are well understood and addressed, which in turn
          improves both individual and organizational performance.
        </p>
        <p className="text-gray-700">
          We pride ourselves on being fully focused on the needs of the client
          and putting in place practical measures that your firm needs to
          achieve synchronization.
        </p>
      </div>
    </div>
  );
}
