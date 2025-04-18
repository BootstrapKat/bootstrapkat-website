'use client';
import Layout from '../components/Layout';
import { useState, useEffect } from 'react';

export default function WindDownWednesday() {
  const [timeRemaining, setTimeRemaining] = useState('');
  const [status, setStatus] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      setStatus('pending');
      setError(null);

      const formData = new FormData(event.currentTarget);
      const formParams = new URLSearchParams();
      formData.forEach((value, key) => formParams.append(key, value as string));

      const res = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: formParams.toString(),
      });

      if (res.status === 200) {
        setStatus('ok');
      } else {
        setStatus('error');
        setError(`${res.status} ${res.statusText}`);
      }
    } catch (e) {
      setStatus('error');
      setError(`${e}`);
    }
  };

  const getNextShowDate = () => {
    const now = new Date();
    const nextWednesday = new Date();
    nextWednesday.setDate(now.getDate() + ((3 + 7 - now.getDay()) % 7));
    nextWednesday.setHours(20, 0, 0, 0);
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
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
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
      <main className="min-h-screen p-6 md:p-12">
        {/* Intro */}
        <section className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-5xl font-bold text-[#3C2624] mb-4">Wind Down Wednesday</h1>
          <p className="text-lg text-[#4B3B39]">
            A midweek exhale of sound — gentle tunes, curated covers, and audio cozy-core. Airs live every Wednesday at 8PM on{' '}
            <span className="text-[#9B6A9C] font-semibold">WART 95.5 FM</span>.
          </p>
        </section>

        {/* Countdown */}
        <section className="text-center max-w-xl mx-auto mb-12">
          <div className="bg-white/70 backdrop-blur-md border border-[#9B6A9C] p-6 rounded-lg shadow">
            <h2 className="text-2xl font-bold text-[#3C2624] mb-2">Next Episode In:</h2>
            <p className="text-xl text-[#9B6A9C] animate-pulse">🎧 {timeRemaining}</p>
          </div>
        </section>

        {/* Episode Player */}
        <section className="bg-[#EAEFDA] p-6 rounded-lg shadow-md text-[#2F3E46] max-w-4xl mx-auto mb-12">
          <h2 className="text-2xl font-bold mb-2">Listen to the Latest Episode</h2>
          <p>
            Aired on{' '}
            <a href="http://station.voscast.com/5530050e0a38b/" target="_blank" rel="noopener noreferrer" className="text-[#6700F9] underline hover:text-[#9B6A9C]">
              WART 95.5 FM
            </a>
          </p>
          <audio controls className="w-full mt-4 rounded-md shadow-inner">
            <source src="WDW_Episode22_3-5-25-website.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </section>

        {/* Request Form */}
        <section
          className="relative mb-12 p-6 rounded-lg shadow-md max-w-4xl mx-auto"
          style={{
            backgroundImage: "url('/wednesday.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-80 rounded-lg" />
          <div className="relative z-10 text-white">
            <h2 className="text-2xl font-bold">Make a Request</h2>
            <p className="mb-4">Dedications and suggestions that fit the Wind Down Wednesday vibe.</p>
            <form
              name="wind-down-wednesday-requests"
              onSubmit={handleFormSubmit}
              className="space-y-4"
            >
              <input type="hidden" name="form-name" value="wind-down-wednesday-requests" />
              <div>
                <label htmlFor="request" className="block text-lg font-bold">Song Request</label>
                <input type="text" name="request" id="request" required className="w-full p-2 border rounded-lg text-gray-800" />
              </div>
              <div>
                <label htmlFor="name" className="block text-lg font-bold">Your Name (Optional)</label>
                <input type="text" name="name" id="name" className="w-full p-2 border rounded-lg text-gray-800" />
              </div>
              <div>
                <label htmlFor="email" className="block text-lg font-bold">Email (Optional)</label>
                <input type="email" name="email" id="email" className="w-full p-2 border rounded-lg text-gray-800" />
              </div>
              <div>
                <label htmlFor="note" className="block text-lg font-bold">Note (Optional)</label>
                <textarea name="note" id="note" className="w-full p-2 border rounded-lg text-gray-800" />
              </div>
              <button type="submit" className="bg-[#3C2624] text-white py-2 px-4 rounded-lg shadow-lg hover:bg-[#9B6A9C] transition duration-300">
                Send it in 💌
              </button>
              {status === 'ok' && <div className="mt-2 text-green-300">Thanks for your request!</div>}
              {status === 'error' && <div className="mt-2 text-red-300">Something went wrong. {error}</div>}
            </form>
          </div>
        </section>
      </main>
    </Layout>
  );
}