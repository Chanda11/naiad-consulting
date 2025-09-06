/**
 * Global footer containing contact information and a small tagline.
 */
export default function Footer() {
  return (
    <footer className="mt-16 bg-white border-t">
      <div className="container-px py-10 grid gap-8 md:grid-cols-3">
        {/* About snippet */}
        <div>
          <h4 className="text-lg font-semibold">About Naiad</h4>
          <p className="mt-2 text-sm text-gray-600">
            We synchronize employees and organizations using research-driven
            organizational psychology and clear communication strategies.
          </p>
        </div>

        {/* Contact details */}
        <div>
          <h4 className="text-lg font-semibold">Contact</h4>
          <p className="mt-2 text-sm text-gray-600">
            Plot 2613 Nkwilimba St, Off Airport Rd, Livingstone
          </p>
          <p className="mt-1 text-sm text-gray-600">+260-960-240-600</p>
          <p className="mt-1 text-sm text-gray-600">+260-977-518-844</p>
          <p className="mt-1 text-sm text-gray-600">naiad.research@gmail.com</p>
        </div>

        {/* Tagline */}
        <div>
          <h4 className="text-lg font-semibold">Our Promise</h4>
          <p className="mt-2 text-sm text-gray-600">
            Research-based, tailored solutions that improve human relationships,
            productivity, and performance.
          </p>
        </div>
      </div>

      <div className="border-t py-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Naiad Firm Dynamics Consulting. All rights reserved.
      </div>
    </footer>
  );
}
