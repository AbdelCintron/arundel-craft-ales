"use client"; // This tells Next.js to run this code in the user's browser, enabling interactivity

import { useState } from "react";

export default function AgeGate() {
  // This is React State. It remembers if the user is verified. Default is 'false'.
  const [isVerified, setIsVerified] = useState(false);

  // If they clicked 'Yes', isVerified becomes true, and this component renders nothing (hides the pop-up).
  if (isVerified) {
    return null;
  }

  // If they haven't clicked 'Yes' yet, show this full-screen modal
  return (
    <div className="fixed inset-0 z-50 bg-neutral-950/90 backdrop-blur-sm flex flex-col items-center justify-center p-4">
      <div className="bg-neutral-900 border border-neutral-700 p-10 rounded-2xl max-w-lg text-center shadow-2xl">
        
        <h2 className="text-4xl font-bold text-amber-500 mb-4">Are you 21 or older?</h2>
        <p className="text-neutral-300 mb-8">
          You must be of legal drinking age to enter Arundel Craft Ales.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            // When clicked, update our state to 'true'
            onClick={() => setIsVerified(true)}
            className="bg-amber-500 hover:bg-amber-600 text-neutral-950 font-bold py-3 px-8 rounded-lg transition-colors"
          >
            Yes, I am
          </button>
          
          <button 
            onClick={() => alert("Sorry! Come back when you're older.")}
            className="border border-neutral-600 hover:border-neutral-400 text-white font-bold py-3 px-8 rounded-lg transition-colors"
          >
            No, I am not
          </button>
        </div>
        
      </div>
    </div>
  );
}