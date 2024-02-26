"use client"
import React, { useState } from 'react';

const CollapsibleSection = ({ title, children }:any) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-t border-gray-200">
      <button
        className="flex justify-between items-center w-full text-left p-5"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2 className="text-xl font-semibold">{title}</h2>
        <span>{isOpen ? '-' : '+'}</span>
      </button>
      {isOpen && <div className="p-5">{children}</div>}
    </div>
  );
};

const TermsAndConditions = () => {
  return (
    <div className="bg-black text-white max-w-4xl mx-auto my-5 p-8 shadow-lg">
      <h1 className="text-5xl font-bold mb-6 text-center">TERMS AND CONDITIONS</h1>
      <p className="mb-4 text-[.1em]">
        Dillo Day strives to create the safest and most comfortable environment for all attendees. As such, we are providing a set of guidelines and community standards in order to ensure we meet this goal together. To have the best Dillo Day experience for the students, guests, artists, staff members, and Mayfest members, we have outlined the following expectations. If the following expectations are not met, we reserve the right to remove individuals from the festival without a refund:
        * Dillo Day has a zero-tolerance policy for discrimination of any kind, including but not limited to discrimination on the basis of race, color, religion, sex, gender identity, sexual orientation, national origin, age, disability, or genetic information. Attendees determined to have engaged in discriminatory behavior face removal from the festival.
        * Under no circumstances will harassment of any kind towards festival attendees, festival staff, Northwestern staff, security, or Mayfest members be tolerated and may result in grounds for removal from the festival.
        * Damage, defacement, destruction, or theft of property, including but not limited to festival decor, golf carts, and stages is grounds to be immediately removed from the festival.
        All attendees are required to adhere to the University community standards guidelines found in the Student Handbook .
      </p>
      <CollapsibleSection title="BAG POLICY">
        Bag policy text
      </CollapsibleSection>
      <CollapsibleSection title="PERMITTED AND PROHIBITED ITEMS">
        Prohibited items text
      </CollapsibleSection>
    </div>
  );
};

export default TermsAndConditions;
