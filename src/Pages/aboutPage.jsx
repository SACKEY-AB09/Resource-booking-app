import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const TEAM = [
  {
    name: 'Akwasi',
    role: 'Frontend Developer',
    initials: 'AK',
    color: '#2563eb',
  },
  {
    name: 'Team Member',
    role: 'Backend Developer',
    initials: 'TM',
    color: '#0d9488',
  },
  {
    name: 'Team Member',
    role: 'UI/UX Designer',
    initials: 'TM',
    color: '#7c3aed',
  },
];

const STEPS = [
  {
    number: '01',
    title: 'Create an Account',
    description: 'Sign up with your student or staff credentials to get access to the booking system.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
        <path d="M16 11l2 2 4-4" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Browse Resources',
    description: 'Explore available ICT labs, classrooms, and auditoriums across campus.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Place a Booking',
    description: 'Select your preferred date, time, and duration, then submit your booking request.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
        <path d="M9 16l2 2 4-4" />
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Await Approval',
    description: 'An admin reviews your request and approves or declines it. You get notified either way.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
];

const STATS = [
  { value: '3+', label: 'Resource Types' },
  { value: '24/7', label: 'Available Online' },
  { value: '100%', label: 'Campus Coverage' },
  { value: '1-Click', label: 'Booking Process' },
];

function AboutPage() {
  const navigate = useNavigate();
  const heroRef = useRef(null);

  // Intersection observer for scroll-reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('ap-visible');
          }
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll('.ap-reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="ap-root">
      {/* ── Header ── */}
      <header className="ap-header">
        <span className="ap-header__logo">ResBook</span>
        <nav className="ap-header__nav">
          <button type="button" onClick={() => navigate('/')}>Home</button>
          <button type="button" className="ap-header__nav--active">About</button>
          <button type="button" onClick={() => navigate('/login')} className="ap-header__cta">
            Sign In
          </button>
        </nav>
      </header>

      {/* ── Hero ── */}
      <section className="ap-hero" ref={heroRef}>
        <div className="ap-hero__bg">
          <div className="ap-hero__circle ap-hero__circle--1" />
          <div className="ap-hero__circle ap-hero__circle--2" />
          <div className="ap-hero__grid" />
        </div>
        <div className="ap-hero__content">
          <span className="ap-hero__tag">KNUST · Resource Management</span>
          <h1 className="ap-hero__title">
            Booking campus<br />
            <em>resources made simple.</em>
          </h1>
          <p className="ap-hero__sub">
            A modern platform built for students and staff at Kwame Nkrumah University
            of Science and Technology to reserve labs, classrooms, and auditoriums —
            without the paperwork.
          </p>
          <button type="button" className="ap-hero__btn" onClick={() => navigate('/signup')}>
            Get Started Free
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="ap-stats">
        {STATS.map((s) => (
          <div className="ap-stats__item ap-reveal" key={s.label}>
            <span className="ap-stats__value">{s.value}</span>
            <span className="ap-stats__label">{s.label}</span>
          </div>
        ))}
      </section>

      {/* ── Mission ── */}
      <section className="ap-mission ap-reveal">
        <div className="ap-mission__left">
          <span className="ap-section-tag">Our Mission</span>
          <h2 className="ap-section-title">
            Eliminating the friction of resource booking on campus
          </h2>
          <p className="ap-mission__text">
            Every semester, students and staff waste time hunting down available rooms,
            making phone calls, and filling out manual forms. ResBook was built to fix
            exactly that — one centralized platform where any resource can be found,
            requested, and confirmed digitally.
          </p>
          <p className="ap-mission__text">
            Built as a final-year project at KNUST, this system reflects the real
            challenges faced by the university community and proposes a scalable,
            modern solution.
          </p>
        </div>
        <div className="ap-mission__right">
          <div className="ap-mission__card">
            <div className="ap-mission__card-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <h3>Admin-Approved Bookings</h3>
            <p>Every request goes through an admin review, ensuring fair and accountable use of campus resources.</p>
          </div>
          <div className="ap-mission__card">
            <div className="ap-mission__card-icon ap-mission__card-icon--green">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </div>
            <h3>Real-Time Availability</h3>
            <p>Resources show live availability status so you never waste time requesting something already booked.</p>
          </div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section className="ap-how">
        <div className="ap-how__head ap-reveal">
          <span className="ap-section-tag">How It Works</span>
          <h2 className="ap-section-title">From sign-up to confirmed booking in minutes</h2>
        </div>
        <div className="ap-how__steps">
          {STEPS.map((step, i) => (
            <div
              className="ap-how__step ap-reveal"
              key={step.number}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="ap-how__step-num">{step.number}</div>
              <div className="ap-how__step-icon">{step.icon}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Team ── */}
      <section className="ap-team">
        <div className="ap-team__head ap-reveal">
          <span className="ap-section-tag">The Team</span>
          <h2 className="ap-section-title">Built by students, for students</h2>
        </div>
        <div className="ap-team__grid">
          {TEAM.map((member, i) => (
            <div
              className="ap-team__card ap-reveal"
              key={i}
              style={{ animationDelay: `${i * 0.12}s` }}
            >
              <div
                className="ap-team__avatar"
                style={{ background: member.color + '18', color: member.color, borderColor: member.color + '33' }}
              >
                {member.initials}
              </div>
              <h3 className="ap-team__name">{member.name}</h3>
              <p className="ap-team__role">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Contact ── */}
      <section className="ap-contact ap-reveal">
        <div className="ap-contact__inner">
          <span className="ap-section-tag ap-section-tag--light">Contact</span>
          <h2 className="ap-section-title ap-section-title--light">Have questions or feedback?</h2>
          <p className="ap-contact__sub">
            Reach out to the project team — we'd love to hear from you.
          </p>
          <div className="ap-contact__links">
            <a href="mailto:resbook@knust.edu.gh" className="ap-contact__link">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              resbook@knust.edu.gh
            </a>
            <a href="https://knust.edu.gh" target="_blank" rel="noopener noreferrer" className="ap-contact__link">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
              knust.edu.gh
            </a>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="ap-footer">
        <span>© 2026 ResBook · KNUST Resource Booking System</span>
        <span>Built with ♥ by KNUST Students</span>
      </footer>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=Mulish:ital,wght@0,400;0,500;0,600;1,400&display=swap');

        /* ── Reset & Tokens ── */
        .ap-root {
          --navy: #0d1f3c;
          --navy-mid: #162d52;
          --blue: #2563eb;
          --blue-light: #eff6ff;
          --teal: #0d9488;
          --text: #111827;
          --text-2: #4b5563;
          --text-3: #9ca3af;
          --border: #e5e7eb;
          --bg: #f8fafc;
          --card: #ffffff;
          --radius: 16px;
          --shadow: 0 1px 3px rgba(0,0,0,.06), 0 4px 16px rgba(0,0,0,.07);
          --shadow-lg: 0 8px 32px rgba(0,0,0,.12);

          font-family: 'Mulish', sans-serif;
          color: var(--text);
          background: var(--bg);
          min-height: 100vh;
          overflow-x: hidden;
        }

        * { box-sizing: border-box; margin: 0; padding: 0; }

        /* ── Scroll reveal ── */
        .ap-reveal {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity .6s ease, transform .6s ease;
        }
        .ap-reveal.ap-visible {
          opacity: 1;
          transform: none;
        }

        /* ── Header ── */
        .ap-header {
          position: sticky;
          top: 0;
          z-index: 100;
          background: rgba(13,31,60,.97);
          backdrop-filter: blur(12px);
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 6%;
          height: 60px;
          border-bottom: 1px solid rgba(255,255,255,.07);
        }
        .ap-header__logo {
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: 1.2rem;
          color: #fff;
          letter-spacing: -.02em;
        }
        .ap-header__nav {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .ap-header__nav button {
          background: none;
          border: none;
          color: rgba(255,255,255,.65);
          font-family: 'Mulish', sans-serif;
          font-size: .9rem;
          font-weight: 600;
          cursor: pointer;
          padding: 6px 14px;
          border-radius: 8px;
          transition: color .15s, background .15s;
        }
        .ap-header__nav button:hover { color: #fff; background: rgba(255,255,255,.08); }
        .ap-header__nav--active { color: #fff !important; }
        .ap-header__cta {
          background: var(--blue) !important;
          color: #fff !important;
          padding: 7px 18px !important;
        }
        .ap-header__cta:hover { background: #1d4ed8 !important; }

        /* ── Hero ── */
        .ap-hero {
          position: relative;
          min-height: 92vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          background: var(--navy);
        }
        .ap-hero__bg {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }
        .ap-hero__grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.03) 1px, transparent 1px);
          background-size: 48px 48px;
        }
        .ap-hero__circle {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
        }
        .ap-hero__circle--1 {
          width: 600px; height: 600px;
          background: radial-gradient(circle, rgba(37,99,235,.35), transparent 70%);
          top: -200px; right: -100px;
        }
        .ap-hero__circle--2 {
          width: 400px; height: 400px;
          background: radial-gradient(circle, rgba(13,148,136,.2), transparent 70%);
          bottom: -100px; left: -50px;
        }
        .ap-hero__content {
          position: relative;
          text-align: center;
          max-width: 720px;
          padding: 0 24px;
          animation: heroFadeUp .9s ease both;
        }
        @keyframes heroFadeUp {
          from { opacity: 0; transform: translateY(40px); }
          to   { opacity: 1; transform: none; }
        }
        .ap-hero__tag {
          display: inline-block;
          font-size: .78rem;
          font-weight: 700;
          letter-spacing: .1em;
          text-transform: uppercase;
          color: #60a5fa;
          background: rgba(37,99,235,.15);
          border: 1px solid rgba(96,165,250,.25);
          border-radius: 20px;
          padding: 5px 14px;
          margin-bottom: 24px;
        }
        .ap-hero__title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(2.4rem, 6vw, 4rem);
          font-weight: 800;
          color: #fff;
          line-height: 1.1;
          letter-spacing: -.03em;
          margin-bottom: 20px;
        }
        .ap-hero__title em {
          font-style: normal;
          background: linear-gradient(135deg, #60a5fa, #34d399);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .ap-hero__sub {
          font-size: 1.05rem;
          color: rgba(255,255,255,.65);
          line-height: 1.7;
          max-width: 560px;
          margin: 0 auto 36px;
        }
        .ap-hero__btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: var(--blue);
          color: #fff;
          border: none;
          border-radius: 12px;
          padding: 14px 28px;
          font-family: 'Mulish', sans-serif;
          font-size: 1rem;
          font-weight: 700;
          cursor: pointer;
          transition: background .15s, transform .15s, box-shadow .15s;
        }
        .ap-hero__btn svg { width: 18px; height: 18px; transition: transform .2s; }
        .ap-hero__btn:hover { background: #1d4ed8; transform: translateY(-2px); box-shadow: 0 8px 24px rgba(37,99,235,.4); }
        .ap-hero__btn:hover svg { transform: translateX(4px); }

        /* ── Stats ── */
        .ap-stats {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          background: var(--navy-mid);
          border-top: 1px solid rgba(255,255,255,.06);
        }
        .ap-stats__item {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 32px 16px;
          border-right: 1px solid rgba(255,255,255,.06);
        }
        .ap-stats__item:last-child { border-right: none; }
        .ap-stats__value {
          font-family: 'Syne', sans-serif;
          font-size: 2rem;
          font-weight: 800;
          color: #fff;
          letter-spacing: -.03em;
        }
        .ap-stats__label {
          font-size: .82rem;
          color: rgba(255,255,255,.45);
          margin-top: 4px;
          font-weight: 600;
          letter-spacing: .04em;
          text-transform: uppercase;
        }

        /* ── Shared section styles ── */
        .ap-section-tag {
          display: inline-block;
          font-size: .75rem;
          font-weight: 700;
          letter-spacing: .1em;
          text-transform: uppercase;
          color: var(--blue);
          background: var(--blue-light);
          border-radius: 20px;
          padding: 4px 12px;
          margin-bottom: 14px;
        }
        .ap-section-tag--light { color: #93c5fd; background: rgba(37,99,235,.15); }
        .ap-section-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(1.6rem, 3.5vw, 2.4rem);
          font-weight: 800;
          letter-spacing: -.03em;
          line-height: 1.15;
          color: var(--text);
        }
        .ap-section-title--light { color: #fff; }

        /* ── Mission ── */
        .ap-mission {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: center;
          padding: 100px 8%;
          background: var(--bg);
        }
        .ap-mission__text {
          color: var(--text-2);
          line-height: 1.75;
          margin-top: 16px;
          font-size: .97rem;
        }
        .ap-mission__right {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .ap-mission__card {
          background: var(--card);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 24px;
          box-shadow: var(--shadow);
          display: flex;
          flex-direction: column;
          gap: 8px;
          transition: transform .2s, box-shadow .2s;
        }
        .ap-mission__card:hover { transform: translateY(-3px); box-shadow: var(--shadow-lg); }
        .ap-mission__card-icon {
          width: 44px; height: 44px;
          border-radius: 10px;
          background: var(--blue-light);
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 4px;
        }
        .ap-mission__card-icon svg { width: 22px; height: 22px; stroke: var(--blue); }
        .ap-mission__card-icon--green { background: #f0fdf4; }
        .ap-mission__card-icon--green svg { stroke: var(--teal); }
        .ap-mission__card h3 {
          font-family: 'Syne', sans-serif;
          font-size: 1rem;
          font-weight: 700;
        }
        .ap-mission__card p { font-size: .88rem; color: var(--text-2); line-height: 1.6; }

        /* ── How it works ── */
        .ap-how {
          padding: 100px 8%;
          background: var(--navy);
        }
        .ap-how__head {
          text-align: center;
          margin-bottom: 60px;
        }
        .ap-how__head .ap-section-title { color: #fff; }
        .ap-how__steps {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }
        .ap-how__step {
          background: rgba(255,255,255,.04);
          border: 1px solid rgba(255,255,255,.08);
          border-radius: var(--radius);
          padding: 28px 24px;
          position: relative;
          transition: background .2s, border-color .2s;
        }
        .ap-how__step:hover {
          background: rgba(255,255,255,.07);
          border-color: rgba(96,165,250,.3);
        }
        .ap-how__step-num {
          font-family: 'Syne', sans-serif;
          font-size: 2.5rem;
          font-weight: 800;
          color: rgba(255,255,255,.06);
          position: absolute;
          top: 16px; right: 20px;
          line-height: 1;
        }
        .ap-how__step-icon {
          width: 48px; height: 48px;
          border-radius: 12px;
          background: rgba(37,99,235,.2);
          border: 1px solid rgba(96,165,250,.2);
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 16px;
        }
        .ap-how__step-icon svg { width: 22px; height: 22px; stroke: #60a5fa; }
        .ap-how__step h3 {
          font-family: 'Syne', sans-serif;
          font-size: 1rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: 8px;
        }
        .ap-how__step p { font-size: .85rem; color: rgba(255,255,255,.5); line-height: 1.65; }

        /* ── Team ── */
        .ap-team {
          padding: 100px 8%;
          background: var(--bg);
        }
        .ap-team__head { text-align: center; margin-bottom: 52px; }
        .ap-team__grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          max-width: 760px;
          margin: 0 auto;
        }
        .ap-team__card {
          background: var(--card);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 36px 24px;
          text-align: center;
          box-shadow: var(--shadow);
          transition: transform .2s, box-shadow .2s;
        }
        .ap-team__card:hover { transform: translateY(-4px); box-shadow: var(--shadow-lg); }
        .ap-team__avatar {
          width: 72px; height: 72px;
          border-radius: 50%;
          border: 2px solid;
          display: flex; align-items: center; justify-content: center;
          font-family: 'Syne', sans-serif;
          font-size: 1.3rem;
          font-weight: 800;
          margin: 0 auto 16px;
        }
        .ap-team__name {
          font-family: 'Syne', sans-serif;
          font-size: 1rem;
          font-weight: 700;
          margin-bottom: 4px;
        }
        .ap-team__role { font-size: .83rem; color: var(--text-3); font-weight: 600; }

        /* ── Contact ── */
        .ap-contact {
          background: var(--navy);
          padding: 100px 8%;
        }
        .ap-contact__inner { max-width: 600px; margin: 0 auto; text-align: center; }
        .ap-contact__sub { color: rgba(255,255,255,.5); margin: 14px 0 32px; line-height: 1.7; }
        .ap-contact__links { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; }
        .ap-contact__link {
          display: flex;
          align-items: center;
          gap: 8px;
          background: rgba(255,255,255,.06);
          border: 1px solid rgba(255,255,255,.12);
          border-radius: 10px;
          padding: 12px 20px;
          color: rgba(255,255,255,.8);
          text-decoration: none;
          font-size: .9rem;
          font-weight: 600;
          transition: background .15s, border-color .15s, color .15s;
        }
        .ap-contact__link svg { width: 18px; height: 18px; }
        .ap-contact__link:hover { background: rgba(255,255,255,.1); border-color: rgba(255,255,255,.25); color: #fff; }

        /* ── Footer ── */
        .ap-footer {
          background: #060f1e;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px 8%;
          font-size: .82rem;
          color: rgba(255,255,255,.3);
          border-top: 1px solid rgba(255,255,255,.05);
        }

        /* ── Responsive ── */
        @media (max-width: 900px) {
          .ap-mission { grid-template-columns: 1fr; gap: 40px; padding: 60px 6%; }
          .ap-how__steps { grid-template-columns: repeat(2, 1fr); }
          .ap-stats { grid-template-columns: repeat(2, 1fr); }
          .ap-stats__item:nth-child(2) { border-right: none; }
          .ap-how { padding: 60px 6%; }
          .ap-team { padding: 60px 6%; }
          .ap-contact { padding: 60px 6%; }
        }
        @media (max-width: 600px) {
          .ap-header { padding: 0 5%; }
          .ap-how__steps { grid-template-columns: 1fr; }
          .ap-team__grid { grid-template-columns: 1fr; max-width: 320px; }
          .ap-stats { grid-template-columns: repeat(2, 1fr); }
          .ap-footer { flex-direction: column; gap: 8px; text-align: center; }
          .ap-hero__content { padding: 0 16px; }
        }
      `}</style>
    </div>
  );
}

export default AboutPage;