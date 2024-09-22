'use client';
import Layout from '../components/Layout';
import { useState, useEffect } from 'react';

export default function WindDownWednesday() {
  const [timeRemaining, setTimeRemaining] = useState('');

  // Function to get the next Wednesday at 8:00 PM
  const getNextShowDate = () => {
    const now = new Date();
    const nextWednesday = new Date();

    // Set to next Wednesday 8:00 PM
    nextWednesday.setDate(
      now.getDate() + ((3 + 7 - now.getDay()) % 7) // 3 corresponds to Wednesday
    );
    nextWednesday.setHours(20, 0, 0, 0); // Set time to 8:00 PM

    // If we're already past 8:00 PM on Wednesday, move to the next Wednesday
    if (now.getDay() === 3 && now.getHours() >= 20) {
      nextWednesday.setDate(nextWednesday.getDate() + 7);
    }

    return nextWednesday;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const nextShow = getNextShowDate().getTime();
      const distance = nextShow - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        setTimeRemaining('The episode is live!');
      } else {
        setTimeRemaining(`${days}d ${hours}h ${minutes}m ${seconds}s`);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Layout>
      <div
        role="main"
        className="min-h-screen p-2 md:p-8 bg-[#FEFBC4] md:rounded-lg"
      >
        {/* Logo and Countdown Section */}
        <div className="mb-8 flex flex-col md:flex-row items-center justify-between md:justify-center space-y-4 md:space-y-0 md:space-x-12">
          {/* Show Logo */}
          <div className="text-center">
            <img
              src="/wednesday.png"
              alt="Wind Down Wednesday Logo"
              className="mx-auto h-40 shadow-lg rounded-full border-4 border-[#9B6A9C]"
            />
          </div>

          {/* Countdown to Next Episode */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold mb-2 text-[#3C2624]">
              Next Episode in:
            </h2>

            {/* Countdown Timer */}
            <p
              className="text-xl text-[#9B6A9C] animate-pulse transition-all duration-500 ease-in-out transform scale-100 hover:scale-110"
              aria-live="polite"
            >
              ⏳ {timeRemaining} ✨
            </p>

            {/* Styling the Countdown Timer */}
            <style jsx>{`
              .animate-pulse {
                animation: pulse 2s infinite;
              }

              @keyframes pulse {
                0% {
                  transform: scale(1);
                }
                50% {
                  transform: scale(1.05);
                }
                100% {
                  transform: scale(1);
                }
              }
            `}</style>
          </div>
        </div>

        {/* Latest Episode Player */}
        <div className="mb-8 bg-[#98A17A] p-6 rounded-lg shadow-md text-white">
          <h2 className="text-3xl font-bold">Listen to the Latest Episode</h2>
          <p>
            Previously aired on{' '}
            <a
              href="http://station.voscast.com/5530050e0a38b/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FEFBC4] underline hover:text-[#9B6A9C]"
            >
              95.5 FM WART
            </a>
          </p>
          <audio controls className="w-full mt-4">
            <source src="WDW_Episode4_9-18-24.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>

        {/* Request Form with Background Image */}
        <div
          className="relative mb-8 p-6 rounded-lg shadow-md"
          style={{
            backgroundImage: "url('/www-bg.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Semi-transparent overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>

          {/* Form content on top of the overlay */}
          <div className="relative z-10 text-white">
            <h2 className="text-2xl font-bold">Make a Request</h2>
            <p className="mb-4">
              Dedications and suggestions that fit the Wind Down Wednesday vibe
            </p>
            <form
              name="wind-down-wednesday-requests"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              className="space-y-4"
            >
              <input
                type="hidden"
                name="form-name"
                value="wind-down-wednesday-requests"
              />
              <div className="hidden">
                <label>
                  Don’t fill this out: <input name="bot-field" />
                </label>
              </div>
              <div>
                <label htmlFor="request" className="block text-lg font-bold">
                  Song Request
                </label>
                <input
                  type="text"
                  name="request"
                  id="request"
                  required
                  className="w-full p-2 border rounded-lg text-gray-800"
                />
              </div>
              <div>
                <label htmlFor="name" className="block text-lg font-bold">
                  Your Name (Optional)
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="w-full p-2 border rounded-lg text-gray-800"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-lg font-bold">
                  Email (Optional)
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="w-full p-2 border rounded-lg text-gray-800"
                />
              </div>

              <div>
                <label htmlFor="note" className="block text-lg font-bold">
                  Note (Optional)
                </label>
                <textarea
                  name="note"
                  id="note"
                  className="w-full p-2 border rounded-lg text-gray-800"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-[#3C2624] text-white py-2 px-4 rounded-lg shadow-lg hover:bg-[#9B6A9C] transition duration-300"
              >
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}
