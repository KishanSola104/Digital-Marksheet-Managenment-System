import { Link } from "react-router-dom";
import {
  GraduationCap,
  ShieldCheck,
  FileSpreadsheet,
  Users,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

import Button from "../components/ui/Button";
import HeroImage from "../assets/images/Image.png";

function HomePage() {
  return (
    <div className="min-h-screen bg-slate-50">

      {/* ================= NAVBAR ================= */}

      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-200">

        <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">

          <div className="flex items-center gap-3">

            <div className="w-11 h-11 rounded-xl bg-blue-700 flex items-center justify-center">

              <GraduationCap className="text-white" size={24} />

            </div>

            <div>

              <h2 className="font-bold text-slate-900 text-lg">
                DMMS
              </h2>

              <p className="text-xs text-slate-500">
                Digital Marksheet Management System
              </p>

            </div>

          </div>

          <div className="hidden md:flex items-center gap-8">


            <a
              href="#about"
              className="text-slate-600 hover:text-blue-700"
            >
              About
            </a>

            <Link to="/login">

              <Button>
                Login
              </Button>

            </Link>

          </div>

        </div>

      </header>

      {/* ================= HERO ================= */}

      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT */}

          <div>

            <span className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">

              <CheckCircle2 size={16} />

              Smart Academic Platform

            </span>

            <h1 className="mt-8 text-5xl lg:text-6xl font-extrabold leading-tight text-slate-900">

              Digital
              <br />

              Marksheet
              <br />

              Management
              <br />

              System

            </h1>

            <p className="mt-8 text-lg text-slate-600 leading-8 max-w-xl">

              Simplify student record management, examinations,
              marksheets and academic reporting through one secure
              and centralized platform designed for schools.

            </p>

            <div className="mt-10 flex gap-4">

              <Link to="/login">

                <Button size="lg">

                  Get Started

                  <ArrowRight size={18} />

                </Button>

              </Link>

            </div>

            {/* Features */}

            <div className="grid sm:grid-cols-2 gap-4 mt-14">

              <div className="flex items-center gap-3">

                <ShieldCheck
                  className="text-blue-700"
                  size={22}
                />

                <span className="text-slate-700">
                  Secure Login
                </span>

              </div>

              <div className="flex items-center gap-3">

                <Users
                  className="text-blue-700"
                  size={22}
                />

                <span className="text-slate-700">
                  Role Based Access
                </span>

              </div>

              <div className="flex items-center gap-3">

                <FileSpreadsheet
                  className="text-blue-700"
                  size={22}
                />

                <span className="text-slate-700">
                  Digital Marksheets
                </span>

              </div>

              <div className="flex items-center gap-3">

                <GraduationCap
                  className="text-blue-700"
                  size={22}
                />

                <span className="text-slate-700">
                  Examination Management
                </span>

              </div>

            </div>

          </div>

          {/* RIGHT */}

          <div className="relative">

            <div className="absolute -top-10 -left-10 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-70"></div>

            <img
              src={HeroImage}
              alt="DMMS Dashboard"
              className="relative w-full rounded-3xl shadow-2xl"
            />

          </div>

        </div>

      </section>

      {/* ================= FEATURES ================= */}

      <section
        id="features"
        className="max-w-7xl mx-auto px-6 pb-20"
      >

        <div className="text-center">

          <h2 className="text-4xl font-bold text-slate-900">

            Everything Your School Needs

          </h2>

          <p className="mt-4 text-slate-500">

            A complete digital solution for managing academic records.

          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">

          <div className="bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-xl transition">

            <Users
              className="text-blue-700"
              size={34}
            />

            <h3 className="mt-5 font-bold text-lg">

              Student Management

            </h3>

            <p className="mt-3 text-sm text-slate-500 leading-6">

              Manage student records with ease.

            </p>

          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-xl transition">

            <FileSpreadsheet
              className="text-blue-700"
              size={34}
            />

            <h3 className="mt-5 font-bold text-lg">

              Digital Marksheets

            </h3>

            <p className="mt-3 text-sm text-slate-500 leading-6">

              Generate professional report cards instantly.

            </p>

          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-xl transition">

            <GraduationCap
              className="text-blue-700"
              size={34}
            />

            <h3 className="mt-5 font-bold text-lg">

              Examination Module

            </h3>

            <p className="mt-3 text-sm text-slate-500 leading-6">

              Manage exams, grades and results efficiently.

            </p>

          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-xl transition">

            <ShieldCheck
              className="text-blue-700"
              size={34}
            />

            <h3 className="mt-5 font-bold text-lg">

              Secure Access

            </h3>

            <p className="mt-3 text-sm text-slate-500 leading-6">

              Role-based permissions for every user.

            </p>

          </div>

        </div>

      </section>

      {/* ================= FOOTER ================= */}

      <footer
        id="about"
        className="border-t border-slate-200 py-8"
      >

        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">

          <p className="text-slate-500 text-sm">

            © {new Date().getFullYear()} Digital Marksheet Management System.

          </p>

          <p className="text-sm text-slate-500 mt-3 md:mt-0">

            Built for Modern Schools

          </p>

        </div>

      </footer>

    </div>
  );
}

export default HomePage;