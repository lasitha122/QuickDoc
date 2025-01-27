import React from "react";
import Help from "../assets/Help.jpg";

const HelpPage = () => {
  return (
    <div className="p-8 font-sans leading-relaxed text-gray-800">
      {/* Main Container */}
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between">
        {/* Text Content */}
        <div className="md:w-2/3">
          <h1 className="text-3xl text-green-600 mb-4">QuickDoc Help Center</h1>
          <p className="text-lg mb-6">
            Welcome to the QuickDoc Help Center! Here you'll find everything you need to use the system effectively.
          </p>

          <section className="mb-8">
            <h2 className="text-2xl text-green-800 mb-2">Getting Started</h2>
            <ul className="list-disc ml-5">
              <li className="mb-2">
                <strong>Creating an Account:</strong> Click on "Sign Up" and fill in the required details.
              </li>
              <li className="mb-2">
                <strong>Logging In:</strong> Use your email and password to log in. Forgot password? Use the "Forgot Password" option.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl text-green-800 mb-2">Features Guide</h2>
            <h3 className="text-xl text-green-700 mt-4">For Patients:</h3>
            <ul className="list-disc ml-5">
              <li className="mb-2">Search for doctors by specialty, location, or availability.</li>
              <li className="mb-2">View doctor profiles, including qualifications and reviews.</li>
              <li className="mb-2">Book, reschedule, or cancel appointments.</li>
            </ul>
            <h3 className="text-xl text-green-700 mt-4">For Doctors:</h3>
            <ul className="list-disc ml-5">
              <li className="mb-2">Manage your schedule and update availability.</li>
              <li className="mb-2">View and manage patient appointments.</li>
            </ul>
          </section>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
          <img
            className="w-full  sm:max-w-md lg:max-w-lg h-auto rounded-lg shadow-lg"
            src={Help}
            alt="Doctor"
          />
        </div>
      </div>

      {/* Additional Sections */}
      <section className="mt-8">
        <h2 className="text-2xl text-green-800 mb-2">Using Medical Guidance</h2>
        <p className="mb-4">
          Access health resources by navigating to the "Medical Guidance" section in the main menu.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl text-green-800 mb-2">FAQs</h2>
        <ul className="list-disc ml-5">
          <li className="mb-2">
            <strong>How do I cancel an appointment?</strong> Go to "My Appointments," select the booking, and click "Cancel."
          </li>
          <li className="mb-2">
            <strong>What should I do if I forgot my password?</strong> Use the "Forgot Password" link on the login page.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl text-green-800 mb-2">Contact Support</h2>
        <p className="mb-4">If you have any issues, feel free to contact us:</p>
        <ul className="list-disc ml-5">
          <li className="mb-2">Email: support@quickdoc.com</li>
          <li className="mb-2">Phone: +1-800-555-1234</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl text-green-800 mb-2">Technical Requirements</h2>
        <p className="mb-4">
          QuickDoc works best on modern browsers like Chrome, Firefox, and Edge. Ensure JavaScript is enabled for optimal
          performance.
        </p>
      </section>
    </div>
  );
};

export default HelpPage;
