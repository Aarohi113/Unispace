import React from 'react';
import { motion } from 'framer-motion';
import {
  ShieldCheck,
  Lock,
  Eye,
  Database,
  Share2,
  Globe2,
  UserCheck,
  RefreshCw,
  Mail,
  FileText,
  Building2,
  ExternalLink,
  ArrowLeft,
  CheckCircle2,
  Calendar
} from 'lucide-react';
import Button from './Button';

const PrivacyPolicy = ({ onOpenConsultation }) => {
  const sections = [
    {
      id: "section-1",
      number: "01",
      title: "Information We Collect",
      icon: Database,
      content: (
        <div className="space-y-4 text-sm text-text-charcoal/80 leading-relaxed font-light">
          <p>
            We collect information that identifies, relates to, or could reasonably be linked with you. This includes:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
            <div className="bg-primary-bg p-5 rounded-lg border border-black/5">
              <div className="flex items-center gap-2.5 mb-2.5">
                <span className="w-2 h-2 rounded-full bg-brand-accent"></span>
                <h4 className="font-sans font-semibold text-primary-dark text-sm">Information You Provide to Us</h4>
              </div>
              <p className="text-xs text-text-charcoal/70 leading-relaxed">
                When you fill out contact forms on our Site or submit information via LinkedIn Lead Gen Forms (or similar ad platform forms), we may collect your name, job title, company name, email address, phone number, and any other professional details you provide.
              </p>
            </div>

            <div className="bg-primary-bg p-5 rounded-lg border border-black/5">
              <div className="flex items-center gap-2.5 mb-2.5">
                <span className="w-2 h-2 rounded-full bg-luxury-highlight"></span>
                <h4 className="font-sans font-semibold text-primary-dark text-sm">Automated Information</h4>
              </div>
              <p className="text-xs text-text-charcoal/70 leading-relaxed">
                When you browse our Site, we automatically collect certain technical data via cookies and tracking pixels (such as the LinkedIn Insight Tag and Google Analytics). This includes your IP address, browser type, operating system, referring URLs, and details about your behavior on our website.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "section-2",
      number: "02",
      title: "How We Use Your Information",
      icon: Eye,
      content: (
        <div className="space-y-3 text-sm text-text-charcoal/80 leading-relaxed font-light">
          <p>We use the collected information for specific, lawful business purposes, including:</p>
          <ul className="space-y-2.5 mt-2">
            {[
              "To fulfill requests, provide services, and respond to inquiries you submit via our lead forms.",
              "To deliver relevant advertisements, analyze the effectiveness of our marketing campaigns, and optimize our advertising on platforms like LinkedIn.",
              "To send you promotional communications, newsletters, and marketing materials (you may opt out at any time).",
              "To maintain, monitor, secure, and improve the performance of our website."
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-luxury-highlight shrink-0 mt-0.5" />
                <span className="text-xs text-text-charcoal/80 leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )
    },
    {
      id: "section-3",
      number: "03",
      title: "Legal Basis for Processing (GDPR / Global Compliance)",
      icon: Globe2,
      content: (
        <div className="space-y-4 text-sm text-text-charcoal/80 leading-relaxed font-light">
          <p>
            If you are visiting from the European Economic Area (EEA), United Kingdom, or jurisdictions with similar frameworks, our legal basis for collecting and using your data depends on the context:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
            <div className="border border-black/10 bg-white p-5 rounded-lg shadow-sm">
              <h5 className="font-semibold text-primary-dark text-sm mb-2 flex items-center gap-2">
                <span className="px-2 py-0.5 bg-primary-bg rounded text-xs font-mono text-luxury-highlight font-medium">01</span>
                Consent
              </h5>
              <p className="text-xs text-text-charcoal/70 leading-relaxed">
                Where you have explicitly given us consent (e.g., ticking a box or submitting a Lead Gen form).
              </p>
            </div>
            <div className="border border-black/10 bg-white p-5 rounded-lg shadow-sm">
              <h5 className="font-semibold text-primary-dark text-sm mb-2 flex items-center gap-2">
                <span className="px-2 py-0.5 bg-primary-bg rounded text-xs font-mono text-luxury-highlight font-medium">02</span>
                Legitimate Interests
              </h5>
              <p className="text-xs text-text-charcoal/70 leading-relaxed">
                To follow up on business inquiries, optimize our marketing, and improve our services, provided it does not override your fundamental privacy rights.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "section-4",
      number: "04",
      title: "Sharing and Disclosure of Information",
      icon: Share2,
      content: (
        <div className="space-y-3 text-sm text-text-charcoal/80 leading-relaxed font-light">
          <div className="p-4 bg-emerald-50/80 border border-emerald-200/60 rounded-lg mb-3">
            <p className="text-xs font-medium text-emerald-900 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              We do not sell, rent, or trade your personal data.
            </p>
          </div>
          <p>We only share your data with:</p>
          <div className="space-y-3 mt-2">
            <div className="bg-primary-bg p-4 rounded-lg border border-black/5">
              <strong className="text-primary-dark block text-xs uppercase tracking-wider font-semibold mb-1">
                Service Providers
              </strong>
              <p className="text-xs text-text-charcoal/70 leading-relaxed">
                Trusted third-party vendors who assist us with hosting, data analysis, marketing automation, and email delivery. These providers are bound by strict confidentiality obligations.
              </p>
            </div>
            <div className="bg-primary-bg p-4 rounded-lg border border-black/5">
              <strong className="text-primary-dark block text-xs uppercase tracking-wider font-semibold mb-1">
                Compliance and Legal Obligations
              </strong>
              <p className="text-xs text-text-charcoal/70 leading-relaxed">
                When required by law, subpoena, or government authority to protect our rights, your safety, or the safety of others.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "section-5",
      number: "05",
      title: "Third-Party Links and Tracking Tools",
      icon: ExternalLink,
      content: (
        <div className="space-y-3 text-sm text-text-charcoal/80 leading-relaxed font-light">
          <p>Our website implements tracking technologies from third-party advertising platforms:</p>
          <ul className="space-y-2 mt-2">
            <li className="flex items-start gap-2.5">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 shrink-0"></div>
              <p className="text-xs text-text-charcoal/80 leading-relaxed">
                <strong className="text-primary-dark font-medium">LinkedIn Insight Tag:</strong> This allows us to track conversions, retarget website visitors, and unlock insights about members interacting with our LinkedIn ads.
              </p>
            </li>
            <li className="flex items-start gap-2.5">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 shrink-0"></div>
              <p className="text-xs text-text-charcoal/80 leading-relaxed">
                <strong className="text-primary-dark font-medium">Google Analytics / Ads:</strong> Used to understand web traffic and serve relevant ads across Google networks.
              </p>
            </li>
          </ul>
          <div className="bg-primary-bg p-4 rounded-lg border border-black/5 text-xs text-text-charcoal/70 mt-3 leading-relaxed">
            You can manage cookie preferences directly through your browser or opt out of targeted advertising via platforms like the <span className="text-primary-dark font-medium">Network Advertising Initiative</span> or <span className="text-primary-dark font-medium">Digital Advertising Alliance</span>.
          </div>
        </div>
      )
    },
    {
      id: "section-6",
      number: "06",
      title: "Data Security and Retention",
      icon: Lock,
      content: (
        <div className="space-y-3 text-sm text-text-charcoal/80 leading-relaxed font-light">
          <p className="text-xs md:text-sm text-text-charcoal/80 leading-relaxed">
            We implement robust administrative, technical, and physical security measures designed to protect your personal data from unauthorized access or disclosure. We retain your personal data only as long as necessary to fulfill the business purposes outlined in this policy or to comply with legal obligations.
          </p>
        </div>
      )
    },
    {
      id: "section-7",
      number: "07",
      title: "Your Privacy Rights",
      icon: UserCheck,
      content: (
        <div className="space-y-4 text-sm text-text-charcoal/80 leading-relaxed font-light">
          <p>
            Depending on your geographic location (e.g., GDPR, CCPA/CPRA), you may have the following rights regarding your personal information:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
            {[
              { title: "Access & Portability", desc: "The right to request copies of your personal data." },
              { title: "Correction", desc: "The right to request that we correct inaccurate or incomplete information." },
              { title: "Erasure (\"Right to be Forgotten\")", desc: "The right to request that we delete your personal data under certain conditions." },
              { title: "Opt-Out", desc: "The right to withdraw consent or object to marketing communications at any time." }
            ].map((right, idx) => (
              <div key={idx} className="p-4 bg-primary-bg rounded-lg border border-black/5 flex flex-col justify-between">
                <div>
                  <h6 className="font-semibold text-primary-dark text-xs mb-1.5">{right.title}</h6>
                  <p className="text-[11px] text-text-charcoal/70 leading-relaxed">{right.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-text-charcoal/70 mt-2">
            To exercise any of these rights, please contact us at the email address provided below.
          </p>
        </div>
      )
    },
    {
      id: "section-8",
      number: "08",
      title: "Updates to This Privacy Policy",
      icon: RefreshCw,
      content: (
        <div className="space-y-3 text-sm text-text-charcoal/80 leading-relaxed font-light">
          <p className="text-xs md:text-sm text-text-charcoal/80 leading-relaxed">
            We may update this Privacy Policy from time to time to reflect changes in our practices or compliance mandates from advertising platforms. The "Effective Date" at the top of this page will indicate when the latest revisions were made.
          </p>
        </div>
      )
    },
    {
      id: "section-9",
      number: "09",
      title: "Contact Us",
      icon: Mail,
      content: (
        <div className="space-y-4 text-sm text-text-charcoal/80 leading-relaxed font-light">
          <p className="text-xs md:text-sm text-text-charcoal/80 leading-relaxed">
            If you have any questions or concerns regarding this Privacy Policy or how your data is handled, please contact us at:
          </p>
          <div className="bg-primary-dark text-white p-6 rounded-xl relative overflow-hidden">
            <div className="relative z-10 space-y-2.5">
              <h5 className="font-display text-lg font-semibold text-luxury-highlight">Unispace Contracts Pvt Ltd</h5>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-xs text-white/80 pt-1">
                <a href="mailto:info@unispacecontracts.com" className="flex items-center gap-2 hover:text-luxury-highlight transition-colors">
                  <Mail className="w-4 h-4 text-luxury-highlight" />
                  info@unispacecontracts.com
                </a>
                <a href="https://unispacecontracts.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-luxury-highlight transition-colors">
                  <Globe2 className="w-4 h-4 text-luxury-highlight" />
                  Unispacecontracts.com
                </a>
              </div>
            </div>
            <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-luxury-highlight/10 rounded-full blur-2xl pointer-events-none" />
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="bg-primary-bg min-h-screen pt-[70px] md:pt-[80px] font-sans text-text-charcoal overflow-x-hidden">

      {/* 1. Header Hero Banner */}
      <section className="relative py-16 md:py-24 w-full flex items-center justify-center overflow-hidden bg-primary-dark text-white">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(#C8A96A_1px,transparent_1px)] [background-size:24px_24px]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          {/* Breadcrumb / Back button */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <a
              href="#home"
              className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-white/60 hover:text-luxury-highlight transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Back to Home
            </a>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-luxury-highlight/15 border border-luxury-highlight/30 text-luxury-highlight text-xs font-semibold tracking-widest uppercase mb-4"
          >
            <ShieldCheck className="w-4 h-4" />
            Legal & Compliance
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-light tracking-wide leading-tight mb-4"
          >
            Privacy <span className="font-semibold text-luxury-highlight">Policy</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap items-center justify-center gap-4 md:gap-8 text-xs text-white/70 font-light mt-4"
          >
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-luxury-highlight" />
              Effective Date: September 10, 2010
            </span>
            <span className="hidden md:inline">•</span>
            <span className="flex items-center gap-1.5">
              <Globe2 className="w-3.5 h-3.5 text-luxury-highlight" />
              Website: Unispacecontracts.com
            </span>
            <span className="hidden md:inline">•</span>
            <span className="flex items-center gap-1.5">
              <Building2 className="w-3.5 h-3.5 text-luxury-highlight" />
              Unispace Contracts Pvt Ltd
            </span>
          </motion.div>
        </div>
      </section>

      {/* 2. Main Content Container */}
      <section className="py-12 md:py-20 max-w-5xl mx-auto px-6 md:px-12">

        {/* Intro Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-white rounded-2xl p-6 md:p-10 border border-black/10 shadow-sm mb-12 space-y-4"
        >
          <div className="flex items-center gap-3 text-luxury-highlight">
            <FileText className="w-6 h-6" />
            <h2 className="font-display text-xl md:text-2xl font-semibold text-primary-dark">
              Our Commitment to Your Privacy
            </h2>
          </div>
          <p className="text-sm md:text-base text-text-charcoal/80 leading-relaxed font-light">
            <strong className="font-semibold text-primary-dark">Unispace Contracts Pvt Ltd</strong> ("we," "us," or "our") operates the website <strong className="font-semibold text-primary-dark">Unispacecontracts.com</strong> (the "Site"). We respect your privacy and are committed to protecting the personally identifiable information (PII) you share with us.
          </p>
          <p className="text-sm md:text-base text-text-charcoal/80 leading-relaxed font-light">
            This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or interact with our advertisements, including lead generation campaigns on LinkedIn, Google, and other advertising platforms.
          </p>
          <div className="p-4 bg-primary-bg rounded-lg border-l-4 border-luxury-highlight text-xs md:text-sm text-text-charcoal/80 italic">
            By using our Site or submitting your information through our lead forms, you agree to the terms of this Privacy Policy.
          </div>
        </motion.div>

        {/* Policy Sections Grid/List */}
        <div className="space-y-8">
          {sections.map((sec, idx) => {
            const Icon = sec.icon;
            return (
              <motion.div
                key={sec.id}
                id={sec.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.04 }}
                className="bg-white rounded-2xl p-6 md:p-8 border border-black/10 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4 mb-4 pb-4 border-b border-black/5">
                  <div className="w-10 h-10 rounded-xl bg-primary-bg flex items-center justify-center text-luxury-highlight shrink-0 border border-black/5">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono tracking-widest text-luxury-highlight uppercase font-semibold">
                      Section {sec.number}
                    </span>
                    <h3 className="font-display text-xl md:text-2xl font-light text-primary-dark">
                      {sec.title}
                    </h3>
                  </div>
                </div>

                <div className="pt-2">
                  {sec.content}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Disclaimer Footer Note */}
        <div className="mt-12 p-6 bg-white/60 border border-black/5 rounded-xl text-center">
          <p className="text-xs text-text-charcoal/50 leading-relaxed font-light">
            This document is for informational purposes only. For legal compliance specific to your jurisdiction, consult a legal professional.
          </p>
        </div>

        {/* Bottom Call to Action for Consultation */}
        <div className="mt-12 bg-white rounded-2xl p-8 border border-black/10 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="font-display text-xl font-semibold text-primary-dark mb-1">
              Have Questions Regarding Your Workspace Project?
            </h4>
            <p className="text-xs text-text-charcoal/70">
              Speak directly with our senior corporate architects and turnkey fit-out specialists.
            </p>
          </div>
          <a href="#contact-form" className="shrink-0">
            <Button variant="primary" className="py-3 px-8 text-xs uppercase tracking-widest font-semibold">
              Contact Our Team
            </Button>
          </a>
        </div>

      </section>

    </div>
  );
};

export default PrivacyPolicy;
