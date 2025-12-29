import React from 'react';

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg border-t-4 border-green-600">

        <h1 className="text-3xl font-extrabold text-green-800 mb-6 text-center">
          Terms & Conditions
        </h1>

        <div className="space-y-4 text-gray-700 text-sm leading-relaxed">

          <p>
            By registering as a volunteer with ISKCON Govardhan EcoVillage, you agree to
            follow the guidelines, values, and discipline of the community.
          </p>

          <p>
            Volunteers are expected to maintain respectful behavior, spiritual integrity,
            and cooperation with fellow volunteers, staff, and visitors at all times.
          </p>

          <p>
            Participation is voluntary and unpaid unless explicitly mentioned. ISKCON
            Govardhan EcoVillage is not responsible for personal belongings lost or damaged
            during the volunteering period.
          </p>

          <p>
            Volunteers must inform the management about any medical conditions that may
            affect their ability to perform assigned duties.
          </p>

          <p>
            The organization reserves the right to assign, modify, or discontinue volunteer
            roles based on operational requirements.
          </p>

          <p>
            By submitting the volunteer application, you consent to being contacted via
            phone, email, or messaging platforms for volunteering-related communication.
          </p>

          <p className="font-semibold">
            If you do not agree with these terms, please do not proceed with the registration.
          </p>

        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
