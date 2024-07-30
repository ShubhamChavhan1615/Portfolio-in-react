import React from "react";

function About() {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
    >
      <div>
        <h1 className="text-4xl font-bold text-center mb-5">About Me</h1>
        <p className="text-lg mb-6 text-gray-700">
          Hello, I'm <strong>Shubham Chavhan</strong>, a passionate web developer with a keen eye for the MERN stack. 
          With a background in IT, I strive to create impactful and visually stunning software solutions that leave a lasting impression.
        </p>

        <section className="mb-8">
          <h2 className="text-green-600 font-semibold text-2xl mb-2">Education & Training</h2>
          <p className="text-gray-700">
            [BCA], [Abasaheb kakade collge of IT shevgaon], [2025] <br />
            [HSC], [Navjeevan junior collge dhahigaon-ne], [2022] <br />
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-green-600 font-semibold text-2xl mb-2">Skills & Expertise</h2>
          <p className="text-gray-700">
            Proficient in [Programming Languages] <br />
            Experienced with [Software Tools/Technologies] <br />
            Strong grasp of [Design Principles/Concepts] <br />
            Excellent problem-solving skills <br />
          </p>
        </section>

        {/* <section className="mb-8">
          <h2 className="text-green-600 font-semibold text-2xl mb-2">Professional Experience</h2>
          <p className="text-gray-700">
            [Job Title], [Company/Organization], [Dates] <br />
            [Brief description of responsibilities and achievements] <br />
            [Job Title], [Company/Organization], [Dates] <br />
            [Brief description of responsibilities and achievements] <br />
            [Freelance/Contract Work], [Client/Organization], [Dates] <br />
            [Brief description of projects and contributions]
          </p>
        </section> */}

        {/* <section className="mb-8">
          <h2 className="text-green-600 font-semibold text-2xl mb-2">Achievements & Awards</h2>
          <p className="text-gray-700">
            [Award/Recognition], [Organization/Institution], [Year] <br />
            [Achievement], [Organization/Platform], [Year]
          </p>
        </section> */}

        <section>
          <h2 className="text-green-600 font-semibold text-2xl mb-2">Mission Statement</h2>
          <p className="text-gray-700">
            My mission is to leverage my skills and creativity to deliver innovative [Your Field] solutions that exceed client expectations and contribute positively to the digital landscape. 
            I am committed to continuous learning and growth, always seeking new challenges and opportunities to expand my horizons.
          </p>
        </section>
      </div>
    </div>
  );
}

export default About;
