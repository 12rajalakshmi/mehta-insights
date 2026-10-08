"use client";

import { CheckCircle, ArrowRight } from "lucide-react";

export default function ThankYou() {
  return (
    <main className="min-h-screen bg-[#F3F7FC]">

      {/* Header */}
      <header className="border-b border-[#DCE7F3] bg-[#F3F7FC]">

        <div className="mx-auto flex h-[82px] max-w-[1400px] items-center px-6 lg:px-10">

          <a href="/">
            <img
              src="/logo.png"
              alt="Mehta Insights"
              className="h-[52px] w-auto object-contain"
            />
          </a>

        </div>

      </header>


      {/* Thank You Section */}
      <section className="flex min-h-[calc(100vh-82px)] items-center justify-center px-6 py-16">

        <div className="w-full max-w-[650px] rounded-[28px] border border-[#DCE7F3] bg-white px-7 py-12 text-center shadow-[0_20px_60px_rgba(9,34,82,0.08)] sm:px-12">

          {/* Success Icon */}
          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-[#E8F7EF]">

            <CheckCircle
              size={55}
              className="text-[#16834B]"
              strokeWidth={2}
            />

          </div>


          {/* Heading */}
          <h1 className="mt-8 text-4xl font-black tracking-tight text-[#092252] sm:text-5xl">

            Thank You!

          </h1>


          {/* Message */}
          <p className="mx-auto mt-5 max-w-[500px] text-[17px] leading-7 text-[#52627A]">

            Your details have been submitted successfully.

            <br />

            Our team will get in touch with you shortly regarding the
            16-week live-mentored trading program.

          </p>


          {/* CTA */}
          <a
            href="/"
            className="mt-8 inline-flex items-center gap-3 rounded-xl bg-[#1769D1] px-7 py-4 text-[16px] font-bold text-white shadow-[0_10px_25px_rgba(23,105,209,0.2)] transition hover:bg-[#0D58B7]"
          >

            Back to Website

            <ArrowRight size={19} />

          </a>


          {/* Small text */}
          <p className="mt-6 text-xs leading-5 text-[#7A889B]">

            MEHTA INSIGHTS | SEBI Reg. No. INH000025577

          </p>

        </div>

      </section>


      {/* Footer */}
      <footer className="bg-[#092252] px-6 py-6 text-center">

        <p className="text-xs leading-5 text-[#B9C9DD]">

          Educational program. No promise or guarantee of returns. Market
          investments involve risk.

        </p>

      </footer>

    </main>
  );
}