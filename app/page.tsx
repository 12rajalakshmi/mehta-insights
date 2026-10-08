"use client";

import { useEffect, useState } from "react";
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  Brain,
  Check,
  ChevronDown,
  CircleDollarSign,
  LineChart,
  ShieldCheck,
  Target,
  X,
} from "lucide-react";
import { useRouter } from "next/navigation";

const problems = [
  {
    problem: "Constant strategy hopping.",
    solution: "One clear framework.",
  },
  {
    problem: "Poor timing.",
    solution: "Weekly practice.",
  },
  {
    problem: "Revenge trading.",
    solution: "Risk first.",
  },
  {
    problem: "Information overload.",
    solution: "Live weekly sessions.",
  },
  {
    problem: "No feedback.",
    solution: "Direct mentor feedback.",
  },
];

const learningAreas = [
  {
    title: "Market Fundamentals",
    description:
      "Understand market terminology, instruments and trading basics.",
    icon: <BarChart3 size={26} />,
  },
  {
    title: "Technical Analysis",
    description:
      "Explore charts, price action, trends and technical indicators.",
    icon: <LineChart size={26} />,
  },
  {
    title: "Trade Planning",
    description:
      "Understand how traders assess entries, exits and potential risk.",
    icon: <Target size={26} />,
  },
  {
    title: "Risk Management",
    description:
      "Learn why position sizing, stop-loss planning and capital protection matter.",
    icon: <ShieldCheck size={26} />,
  },
  {
    title: "Trading Psychology",
    description:
      "Recognise emotional biases and the importance of consistency.",
    icon: <Brain size={26} />,
  },
  {
    title: "Market Analysis",
    description:
      "Develop a framework for interpreting market information before making decisions.",
    icon: <BookOpen size={26} />,
  },
];

const faqs = [
  {
    question: "Who can join?",
    answer:
      "The program is intended to help aspiring and developing traders build a structured understanding of the markets. Confirm the final eligibility criteria with the program team.",
  },
  {
    question: "Is live-mentored?",
    answer:
      "The program is described as a 16-week live-mentored trading program. Contact the team to confirm session frequency, format and mentor access.",
  },
  {
    question: "Risk management?",
    answer:
      "Risk management is a recommended core learning area. Confirm the exact topics covered in the final curriculum.",
  },
  {
    question: "Guarantees?",
    answer:
      "No profit or return should be expected or guaranteed. Trading involves market risk, and learning does not eliminate the possibility of losses.",
  },
];

export default function Home() {
  const router = useRouter();

  const [showForm, setShowForm] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // POPUP AFTER 5 SECONDS
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowForm(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  // FORM SUBMIT
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    router.push("/thank-you");
  };

  return (
    <main className="min-h-screen bg-[#F3F7FC] text-[#092252]">

      {/* =====================================================
          HEADER
      ===================================================== */}
      <header className="sticky top-0 z-40 h-[82px] border-b border-[#DCE7F3] bg-[#F3F7FC]/95 backdrop-blur-md">

        <div className="mx-auto flex h-full max-w-[1400px] items-center justify-between px-6 lg:px-10">

          {/* LOGO */}
          <a href="#" className="flex items-center">
            <img
              src="/logo.png"
              alt="Mehta Insights"
              className="h-[52px] w-auto object-contain"
            />
          </a>

          {/* DESKTOP NAV */}
          <nav className="hidden items-center gap-8 lg:flex">

            <a
              href="#program"
              className="text-[16px] font-bold text-[#092252] transition hover:text-[#1769D1]"
            >
              Program
            </a>

            <a
              href="#why-mehta"
              className="text-[16px] font-bold text-[#092252] transition hover:text-[#1769D1]"
            >
              Why Mehta Insights
            </a>

            <a
              href="#faq"
              className="text-[16px] font-bold text-[#092252] transition hover:text-[#1769D1]"
            >
              FAQ
            </a>

            <button
              onClick={() => setShowForm(true)}
              className="rounded-[14px] bg-[#1769D1] px-8 py-3.5 text-[16px] font-bold text-white shadow-[0_10px_25px_rgba(23,105,209,0.2)] transition hover:bg-[#0D58B7]"
            >
              Register Now
            </button>

          </nav>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setShowForm(true)}
            className="rounded-xl bg-[#1769D1] px-5 py-3 text-sm font-bold text-white lg:hidden"
          >
            Register
          </button>

        </div>

      </header>


      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="bg-[#F3F7FC]">

        <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-start gap-5 px-6 pb-14 pt-10 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:pt-10">

          {/* LEFT */}
          <div className="relative z-10 pt-2">

            {/* SMALL LABEL */}
            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-[#BCD7F5] bg-[#F3F7FC] px-6 py-3.5">

              <span className="h-3 w-3 rounded-full bg-[#1769D1]" />

              <span className="text-[14px] font-extrabold uppercase tracking-[0.22em] text-[#1769D1] sm:text-[15px]">
                16-WEEK LIVE-MENTORED TRADING PROGRAM
              </span>

            </div>


            {/* HEADLINE */}
            <h1 className="max-w-[720px] text-[48px] font-black leading-[1.02] tracking-[-0.035em] text-[#092252] sm:text-[56px] lg:text-[62px] xl:text-[68px]">

              Master Trading with 16-Week Live-Mentored Program

            </h1>


            {/* DESCRIPTION */}
            <p className="mt-6 max-w-[650px] text-[17px] leading-7 text-[#52627A] sm:text-[18px]">

              Build your understanding of the markets through a 16-week
              live-mentored trading program designed to help you develop
              analytical skills, trading discipline and a more structured
              approach to market decisions.

            </p>


            {/* CTA */}
            <div className="mt-7 flex flex-wrap gap-4">

              <button
                onClick={() => setShowForm(true)}
                className="inline-flex items-center gap-3 rounded-xl bg-[#1769D1] px-6 py-4 text-[16px] font-bold text-white shadow-[0_10px_25px_rgba(23,105,209,0.2)] transition hover:bg-[#0D58B7]"
              >

                Explore the Program | Talk to a Mentor

                <ArrowRight size={19} />

              </button>

            </div>


            {/* TRUST BAR */}
            <div className="mt-7 max-w-[680px] border-l-4 border-[#1769D1] pl-4">

              <p className="text-[14px] font-semibold leading-6 text-[#52627A]">

                Led by Ankit Mehta, CMT, CFTe, QPFP | SEBI Registered Research
                Analyst (INH000025577)

              </p>

            </div>

          </div>


          {/* =================================================
              ANKIT MEHTA PHOTO
          ================================================= */}
          <div className="relative flex min-h-[470px] items-start justify-center lg:min-h-[540px] lg:justify-end">

            {/* SAME BACKGROUND COLOR */}
            <div className="absolute inset-0 bg-[#F3F7FC]" />

            <img
              src="/ankit%20mehta.png"
              alt="Ankit Mehta"
              className="relative z-10 mt-[-5px] h-auto w-[430px] object-contain object-top sm:w-[500px] lg:mt-[-18px] lg:w-[555px] xl:w-[590px]"
            />

          </div>

        </div>

      </section>


      {/* =====================================================
          PROBLEM
      ===================================================== */}
      <section
        id="program"
        className="border-t border-[#E2EAF3] bg-white py-16 lg:py-20"
      >

        <div className="mx-auto max-w-[1250px] px-6 lg:px-10">

          <div className="max-w-[820px]">

            <p className="mb-3 text-sm font-extrabold uppercase tracking-[0.2em] text-[#1769D1]">
              THE PROBLEM
            </p>

            <h2 className="text-3xl font-black tracking-tight text-[#092252] sm:text-4xl lg:text-[44px]">
              Stop Guessing. Start Understanding the Markets.
            </h2>

            <p className="mt-4 text-[17px] leading-7 text-[#52627A]">
              Random tips, conflicting opinions and emotional decisions can
              make trading difficult to navigate. A structured learning
              approach can help you understand the reasoning behind market
              decisions.
            </p>

          </div>


          {/* TABLE */}
          <div className="mt-10 overflow-hidden rounded-2xl border border-[#DCE7F3] bg-[#F3F7FC]">

            {problems.map((item, index) => (

              <div
                key={index}
                className="grid grid-cols-1 gap-2 border-b border-[#DCE7F3] px-6 py-4 last:border-b-0 md:grid-cols-2"
              >

                <div className="font-bold text-[#092252]">
                  {item.problem}
                </div>

                <div className="flex items-center gap-2 font-semibold text-[#1769D1]">

                  <Check
                    size={18}
                    className="rounded-full bg-[#1769D1] p-0.5 text-white"
                  />

                  {item.solution}

                </div>

              </div>

            ))}

          </div>


          <button
            onClick={() => setShowForm(true)}
            className="mt-7 inline-flex items-center gap-3 rounded-xl bg-[#092252] px-6 py-3.5 text-[16px] font-bold text-white transition hover:bg-[#1769D1]"
          >

            Register for the 16 week Program

            <ArrowRight size={19} />

          </button>

        </div>

      </section>


      {/* =====================================================
          WHAT YOU WILL LEARN
      ===================================================== */}
      <section className="bg-[#F3F7FC] py-16 lg:py-20">

        <div className="mx-auto max-w-[1250px] px-6 lg:px-10">

          <div className="max-w-[820px]">

            <p className="mb-3 text-sm font-extrabold uppercase tracking-[0.2em] text-[#1769D1]">
              WHAT YOU WILL LEARN
            </p>

            <h2 className="text-3xl font-black tracking-tight text-[#092252] sm:text-4xl lg:text-[44px]">
              Build the Skills Behind Better Trading Decisions
            </h2>

            <p className="mt-4 text-[17px] leading-7 text-[#52627A]">
              Explore the concepts and analytical approaches that support a
              more structured understanding of the financial markets.
            </p>

          </div>


          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

            {learningAreas.map((item, index) => (

              <div
                key={index}
                className="rounded-2xl border border-[#DCE7F3] bg-white p-6 shadow-[0_7px_22px_rgba(9,34,82,0.04)] transition hover:-translate-y-1"
              >

                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-[#E7F1FD] text-[#1769D1]">
                  {item.icon}
                </div>

                <h3 className="text-[19px] font-extrabold text-[#092252]">
                  {item.title}
                </h3>

                <p className="mt-3 text-[14px] leading-6 text-[#52627A]">
                  {item.description}
                </p>

              </div>

            ))}

          </div>


          <button
            onClick={() => setShowForm(true)}
            className="mt-8 inline-flex items-center gap-3 rounded-xl bg-[#1769D1] px-6 py-3.5 text-[16px] font-bold text-white transition hover:bg-[#0D58B7]"
          >

            Get the Program Curriculum

            <ArrowRight size={19} />

          </button>

        </div>

      </section>


      {/* =====================================================
          WHY MEHTA INSIGHTS
      ===================================================== */}
      <section
        id="why-mehta"
        className="bg-white py-16 lg:py-20"
      >

        <div className="mx-auto max-w-[1250px] px-6 lg:px-10">

          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">


            {/* DARK CARD */}
            <div className="rounded-[26px] bg-[#092252] p-7 text-white">

              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#1769D1]">
                <CircleDollarSign size={26} />
              </div>

              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#76B5FF]">
                RESEARCH-DRIVEN LEARNING
              </p>

              <h3 className="mt-3 text-2xl font-black">
                Learn with a Research-Driven Perspective
              </h3>

              <p className="mt-4 text-[15px] leading-7 text-[#D7E5F7]">
                Independent equity research informed by fundamental and
                technical analysis, with an emphasis on transparency,
                documented reasoning and informed decisions.
              </p>

              <div className="mt-6 space-y-3">

                {[
                  "Research-driven approach",
                  "Fundamental + technical perspective",
                  "Structured learning process",
                  "Focus on informed decisions",
                ].map((text, index) => (

                  <div key={index} className="flex gap-3">

                    <Check
                      size={19}
                      className="mt-0.5 shrink-0 rounded-full bg-[#1769D1] p-1"
                    />

                    <span className="text-sm text-[#E5EFFA]">
                      {text}
                    </span>

                  </div>

                ))}

              </div>

            </div>


            {/* CONTENT */}
            <div>

              <p className="mb-3 text-sm font-extrabold uppercase tracking-[0.2em] text-[#1769D1]">
                WHY MEHTA INSIGHTS?
              </p>

              <h2 className="text-3xl font-black tracking-tight text-[#092252] sm:text-4xl lg:text-[44px]">
                Learn with a Research-Driven Perspective
              </h2>

              <p className="mt-5 text-[17px] leading-7 text-[#52627A]">
                Ankit Mehta, CMT, CFTe, QPFP, is a SEBI Registered Research
                Analyst (INH000025577, BSE Enlistment 7060).Focuses on
                independent equity research informed by fundamental and
                technical analysis, with an emphasis on transparency,
                documented reasoning and informed decisions.
              </p>


              <div className="mt-7 space-y-3">

                {[
                  "Taught by a SEBI-registered analyst with a verifiable regulatory identity",
                  "Live mentoring, so your questions never go unanswered",
                  "Fundamentals and technicals taught together, not in isolation",
                  "Complete transparency on methods, fees and risks, with no hidden fine print",
                  "Independent by design: we never manage your money or execute trades for you",
                ].map((text, index) => (

                  <div key={index} className="flex gap-3">

                    <Check
                      size={20}
                      className="mt-1 shrink-0 rounded-full bg-[#1769D1] p-1 text-white"
                    />

                    <p className="text-[15px] font-semibold leading-6 text-[#334563]">
                      {text}
                    </p>

                  </div>

                ))}

              </div>


              <p className="mt-7 text-[17px] leading-7 text-[#52627A]">
                The program explains why more information doesn't automatically
                lead to better decisions. It then walks you through a
                structured process for reading, planning and reviewing trades.
                There's no pressure. If the approach makes sense to you.
              </p>


              <button
                onClick={() => setShowForm(true)}
                className="mt-7 inline-flex items-center gap-3 rounded-xl bg-[#1769D1] px-6 py-3.5 text-[16px] font-bold text-white transition hover:bg-[#0D58B7]"
              >

                Know More About Mehta Insights

                <ArrowRight size={19} />

              </button>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FAQ
      ===================================================== */}
      <section
        id="faq"
        className="bg-[#F3F7FC] py-16 lg:py-20"
      >

        <div className="mx-auto max-w-[1000px] px-6 lg:px-10">

          <div className="text-center">

            <p className="mb-3 text-sm font-extrabold uppercase tracking-[0.2em] text-[#1769D1]">
              FAQ
            </p>

            <h2 className="text-3xl font-black tracking-tight text-[#092252] sm:text-4xl">
              Your Questions, Answered
            </h2>

          </div>


          <div className="mt-10 space-y-3">

            {faqs.map((faq, index) => {

              const isOpen = openFaq === index;

              return (

                <div
                  key={index}
                  className="overflow-hidden rounded-xl border border-[#DCE7F3] bg-white"
                >

                  <button
                    onClick={() =>
                      setOpenFaq(isOpen ? null : index)
                    }
                    className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
                  >

                    <span className="text-[16px] font-extrabold text-[#092252]">
                      {faq.question}
                    </span>

                    <ChevronDown
                      size={20}
                      className={`shrink-0 text-[#1769D1] transition ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />

                  </button>


                  {isOpen && (

                    <div className="border-t border-[#E5ECF4] px-5 pb-5 pt-4">

                      <p className="text-[15px] leading-6 text-[#52627A]">
                        {faq.answer}
                      </p>

                    </div>

                  )}

                </div>

              );

            })}

          </div>

        </div>

      </section>


      {/* =====================================================
          FOOTER
      ===================================================== */}
      <footer className="bg-[#092252] px-6 py-8 text-white">

        <div className="mx-auto max-w-[1250px]">

          <div className="flex flex-col items-center justify-between gap-5 border-b border-white/15 pb-6 md:flex-row">

            <img
              src="/logo.png"
              alt="Mehta Insights"
              className="h-[48px] w-auto object-contain brightness-0 invert"
            />

            <p className="text-center text-xs text-[#C8D7EA] md:text-right">
              MEHTA INSIGHTS | Chart to Trade | SEBI Reg. No. INH000025577 |
              BSE Enlistment 7060
            </p>

          </div>


          <p className="mx-auto mt-6 max-w-[1000px] text-center text-xs leading-5 text-[#AFC0D8]">

            Educational program. No promise or guarantee of returns. Market
            investments involve risk. Investments in the securities market are
            subject to market risks. Read all related documents carefully
            before investing.

          </p>

        </div>

      </footer>


      {/* =====================================================
          POPUP FORM
      ===================================================== */}
      {showForm && (

        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#061631]/70 px-4 backdrop-blur-sm">

          <div className="relative max-h-[90vh] w-full max-w-[720px] overflow-y-auto rounded-[26px] bg-white p-7 shadow-2xl sm:p-9">

            {/* CLOSE BUTTON */}
            <button
              type="button"
              onClick={() => setShowForm(false)}
              aria-label="Close form"
              className="absolute right-5 top-5 z-50 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-[#F1F5F9] text-[#092252] transition hover:bg-[#E2EAF3]"
            >
              <X size={23} strokeWidth={2.5} />
            </button>


            {/* FORM */}
            <div className="pr-8">

              <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#1769D1]">
                GET STARTED
              </p>

              <h2 className="mt-2 text-3xl font-black text-[#092252]">
                Talk to a Mentor
              </h2>

              <p className="mt-3 text-[16px] text-[#52627A]">
                Share your details and our team will get in touch with you.
              </p>

            </div>


            <form
              onSubmit={handleSubmit}
              className="mt-7 space-y-4"
            >

              {/* NAME */}
              <input
                required
                name="name"
                type="text"
                placeholder="Name"
                className="w-full rounded-xl border border-[#D6E0EB] bg-[#F8FAFC] px-5 py-4 text-[16px] text-[#092252] outline-none transition focus:border-[#1769D1]"
              />


              {/* CONTACT */}
              <input
                required
                name="contact"
                type="tel"
                placeholder="Contact Number"
                className="w-full rounded-xl border border-[#D6E0EB] bg-[#F8FAFC] px-5 py-4 text-[16px] text-[#092252] outline-none transition focus:border-[#1769D1]"
              />


              {/* EMAIL */}
              <input
                required
                name="email"
                type="email"
                placeholder="Email ID"
                className="w-full rounded-xl border border-[#D6E0EB] bg-[#F8FAFC] px-5 py-4 text-[16px] text-[#092252] outline-none transition focus:border-[#1769D1]"
              />


              {/* EXPERIENCE */}
              <select
                required
                name="experience"
                defaultValue=""
                className="w-full rounded-xl border border-[#D6E0EB] bg-[#F8FAFC] px-5 py-4 text-[16px] text-[#52627A] outline-none focus:border-[#1769D1]"
              >

                <option value="" disabled>
                  Trading Experience
                </option>

                <option value="Beginner">
                  Beginner
                </option>

                <option value="Intermediate">
                  Intermediate
                </option>

                <option value="Advanced">
                  Advanced
                </option>

              </select>


              {/* APPROACH */}
              <select
                required
                name="approach"
                defaultValue=""
                className="w-full rounded-xl border border-[#D6E0EB] bg-[#F8FAFC] px-5 py-4 text-[16px] text-[#52627A] outline-none focus:border-[#1769D1]"
              >

                <option value="" disabled>
                  Trading Approach
                </option>

                <option value="Intraday">
                  Intraday
                </option>

                <option value="Swing Trading">
                  Swing Trading
                </option>

                <option value="Positional">
                  Positional
                </option>

                <option value="Investing">
                  Investing
                </option>

                <option value="Not Sure">
                  Not Sure
                </option>

              </select>


              {/* CONSULTATION */}
              <select
                required
                name="consultation"
                defaultValue=""
                className="w-full rounded-xl border border-[#D6E0EB] bg-[#F8FAFC] px-5 py-4 text-[16px] text-[#52627A] outline-none focus:border-[#1769D1]"
              >

                <option value="" disabled>
                  Consultation Mode
                </option>

                <option value="Online">
                  Online
                </option>

                <option value="Phone Call">
                  Phone Call
                </option>

                <option value="WhatsApp">
                  WhatsApp
                </option>

              </select>


              {/* SUBMIT */}
              <button
                type="submit"
                className="mt-2 flex w-full cursor-pointer items-center justify-center gap-3 rounded-xl bg-[#1769D1] px-6 py-4 text-[17px] font-bold text-white transition hover:bg-[#0D58B7]"
              >

                Submit

                <ArrowRight size={20} />

              </button>


              <p className="pt-2 text-center text-xs leading-5 text-[#6B7A90]">
                By submitting your details, you agree to be contacted by the
                Mehta Insights team regarding the program.
              </p>

            </form>

          </div>

        </div>

      )}

    </main>
  );
}