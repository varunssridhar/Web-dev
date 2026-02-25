import { Linkedin, Mail, FileDown, Globe } from "lucide-react";

export default function ResumePage() {
  return (
    <>
      <div className="mx-auto max-w-3xl px-6 py-8 lg:px-8 resume-content print:py-4 print:px-0">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 print:gap-2">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight text-neutral-900 dark:text-white print:text-black print:text-2xl">
              Varun Sridhar
            </h1>
            <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400 print:text-neutral-700 print:mt-0.5 print:text-xs">
              New York City, NY
            </p>
            <div className="mt-2 flex items-center gap-3 flex-wrap">
              <a
                href="https://varunsridhar.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 transition-colors print:text-neutral-700"
                aria-label="Website"
              >
                <Globe className="h-4 w-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/varunsridhar/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 transition-colors print:text-neutral-700"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="mailto:varunssridhar@gmail.com"
                className="text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 transition-colors print:text-neutral-700"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>
          <a
            href="/resume.pdf"
            download
            className="no-print inline-flex items-center gap-2 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 px-4 py-2 text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors"
          >
            <FileDown className="h-4 w-4" />
            Download PDF
          </a>
        </div>

        <section className="mt-6 print:mt-3">
          <h2 className="text-lg font-semibold text-neutral-900 dark:text-white print:text-black border-b border-neutral-200 dark:border-neutral-700 print:border-neutral-300 pb-1 print:text-base">
            Experience
          </h2>
          <ul className="mt-3 space-y-4 print:mt-2 print:space-y-2">
            <li>
              <div className="flex flex-wrap justify-between gap-2 print:gap-1">
                <span className="font-bold text-neutral-900 dark:text-white print:text-black print:text-xs">
                  Head of Product
                </span>
                <span className="text-sm text-neutral-500 dark:text-neutral-400 print:text-neutral-600 print:text-xs print:text-xs">
                  March 2022 – Present
                </span>
              </div>
              <div className="flex flex-wrap justify-between gap-2 mt-0.5 print:mt-0">
                <span className="font-semibold text-slate-700 dark:text-slate-400 print:text-slate-700 print:text-xs">
                  Gynger Inc.
                </span>
                <span className="text-sm text-neutral-500 dark:text-neutral-400 print:text-neutral-600 print:text-xs print:text-xs">
                  New York City, NY
                </span>
              </div>
              <ul className="mt-1.5 list-disc pl-5 space-y-0.5 text-sm text-neutral-600 dark:text-neutral-400 print:text-neutral-700 print:mt-1 print:space-y-0 print:text-xs print:leading-snug">
                <li><strong className="text-neutral-900 dark:text-white print:text-black">Product Leadership:</strong> Employee #3, owning the end-to-end product strategy and execution for an AI-powered financing and payments platform.</li>
                <li><strong className="text-neutral-900 dark:text-white print:text-black">Embedded Financing:</strong> Deployed a financing platform with a proprietary automated underwriting engine that has facilitated 9-figure loan originations since its early 2023 launch.</li>
                <li><strong className="text-neutral-900 dark:text-white print:text-black">Revenue Automation:</strong> Delivered a mid-2024 expansion into full-scale revenue and payments automation, enabling tech vendors to advance revenue by offering flexible payment options to their customers.</li>
                <li><strong className="text-neutral-900 dark:text-white print:text-black">Platform &amp; Growth:</strong> Unified various financial workflows—AP, AR, CRM and ERP syncs—into an integrated platform, driving multi-X topline growth and nearing 8-figures in ARR.</li>
              </ul>
            </li>
            <li>
              <div className="flex flex-wrap justify-between gap-2">
                <span className="font-bold text-neutral-900 dark:text-white print:text-black print:text-xs">
                  Vice President and Lead PM, Global Banking Technology
                </span>
                <span className="text-sm text-neutral-500 dark:text-neutral-400 print:text-neutral-600 print:text-xs">
                  January 2021 – March 2022
                </span>
              </div>
              <div className="flex flex-wrap justify-between gap-2 mt-0.5">
                <span className="font-semibold text-slate-700 dark:text-slate-400 print:text-slate-700 print:text-xs">
                  Morgan Stanley
                </span>
                <span className="text-sm text-neutral-500 dark:text-neutral-400 print:text-neutral-600 print:text-xs">
                  New York City, NY
                </span>
              </div>
              <ul className="mt-1.5 list-disc pl-5 space-y-0.5 text-sm text-neutral-600 dark:text-neutral-400 print:text-neutral-700 print:mt-1 print:space-y-0 print:text-xs print:leading-snug">
                <li>Led product development for Tailored Lending platform, driving 26% CAGR and supporting high 9-figures in yearly revenue.</li>
                <li>Delivered Fed-mandated Alternative Reference Rates across the multi-billion dollar loan book by leading a cross-functional and multi-platform/team initiative.</li>
              </ul>
            </li>
            <li>
              <div className="flex flex-wrap justify-between gap-2">
                <span className="font-bold text-neutral-900 dark:text-white print:text-black print:text-xs">
                  Product Manager, Global Banking Technology
                </span>
                <span className="text-sm text-neutral-500 dark:text-neutral-400 print:text-neutral-600 print:text-xs">
                  August 2015 – December 2020
                </span>
              </div>
              <div className="flex flex-wrap justify-between gap-2 mt-0.5">
                <span className="font-semibold text-slate-700 dark:text-slate-400 print:text-slate-700 print:text-xs">
                  Morgan Stanley
                </span>
                <span className="text-sm text-neutral-500 dark:text-neutral-400 print:text-neutral-600 print:text-xs">
                  New York City, NY ; Montreal, QC
                </span>
              </div>
              <ul className="mt-1.5 list-disc pl-5 space-y-0.5 text-sm text-neutral-600 dark:text-neutral-400 print:text-neutral-700 print:mt-1 print:space-y-0 print:text-xs print:leading-snug">
                <li>Increased revenue $5M+ annually by launching a multi-collateral loan product.</li>
                <li>Delivered a reduction of 60% in loan booking time via servicing workflow automation and API integrations.</li>
                <li>Drove 40% YoY loan volume growth by deploying new loan origination system.</li>
              </ul>
            </li>
            <li>
              <div className="flex flex-wrap justify-between gap-2">
                <span className="font-bold text-neutral-900 dark:text-white print:text-black print:text-xs">
                  Technology and Data Summer Intern, Business Analyst
                </span>
                <span className="text-sm text-neutral-500 dark:text-neutral-400 print:text-neutral-600 print:text-xs">
                  June 2014 – August 2014
                </span>
              </div>
              <div className="flex flex-wrap justify-between gap-2 mt-0.5">
                <span className="font-semibold text-slate-700 dark:text-slate-400 print:text-slate-700 print:text-xs">
                  Morgan Stanley
                </span>
                <span className="text-sm text-neutral-500 dark:text-neutral-400 print:text-neutral-600 print:text-xs">
                  New York City, NY
                </span>
              </div>
              <ul className="mt-1.5 list-disc pl-5 space-y-0.5 text-sm text-neutral-600 dark:text-neutral-400 print:text-neutral-700 print:mt-1 print:space-y-0 print:text-xs print:leading-snug">
                <li>Wrote a PRD for a Wealth Management application that was to be used by 16000+ Financial Advisors.</li>
              </ul>
            </li>
          </ul>
        </section>

        <section className="mt-6 print:mt-3">
          <h2 className="text-lg font-semibold text-neutral-900 dark:text-white print:text-black border-b border-neutral-200 dark:border-neutral-700 print:border-neutral-300 pb-1 print:text-base">
            Skills and Expertise
          </h2>
          <div className="mt-3 space-y-2 print:mt-2 print:space-y-1">
            <p className="text-sm text-neutral-600 dark:text-neutral-400 print:text-neutral-700 print:text-xs">
              <span className="font-bold text-neutral-900 dark:text-white print:text-black">Product Leadership:</span>{" "}
              Strategy, Roadmap planning, Stakeholder management, Product launches, Branding
            </p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 print:text-neutral-700 print:text-xs">
              <span className="font-bold text-neutral-900 dark:text-white print:text-black">Technical Skills:</span>{" "}
              Python, SQL, GraphQL, API tools, Figma, Retool, JIRA, Prompt engineering, AI tooling
            </p>
          </div>
        </section>

        <section className="mt-6 print:mt-3">
          <h2 className="text-lg font-semibold text-neutral-900 dark:text-white print:text-black border-b border-neutral-200 dark:border-neutral-700 print:border-neutral-300 pb-1 print:text-base">
            Education
          </h2>
          <ul className="mt-3 space-y-4 print:mt-2 print:space-y-2">
            <li>
              <div className="flex flex-wrap justify-between gap-2">
                <span className="font-bold text-neutral-900 dark:text-white print:text-black print:text-xs">
                  University of Pennsylvania
                </span>
                <span className="text-sm text-neutral-500 dark:text-neutral-400 print:text-neutral-600 print:text-xs">
                  August 2013 – May 2015
                </span>
              </div>
              <p className="mt-0.5 font-semibold text-slate-700 dark:text-slate-400 print:text-slate-700 text-sm print:text-xs">
                Masters in Systems Engineering, GPA: 3.94/4.0
              </p>
            </li>
            <li>
              <div className="flex flex-wrap justify-between gap-2">
                <span className="font-bold text-neutral-900 dark:text-white print:text-black print:text-xs">
                  The Wharton School, University of Pennsylvania
                </span>
                <span className="text-sm text-neutral-500 dark:text-neutral-400 print:text-neutral-600 print:text-xs">
                  September 2014 – January 2015
                </span>
              </div>
              <p className="mt-0.5 font-semibold text-slate-700 dark:text-slate-400 print:text-slate-700 text-sm print:text-xs">
                Research Assistant
              </p>
              <ul className="mt-1.5 list-disc pl-5 space-y-0.5 text-sm text-neutral-600 dark:text-neutral-400 print:text-neutral-700 print:mt-1 print:space-y-0 print:text-xs print:leading-snug">
                <li>Built machine learning models to predict TV show viewership trends using scraped social network data.</li>
              </ul>
            </li>
            <li>
              <div className="flex flex-wrap justify-between gap-2">
                <span className="font-bold text-neutral-900 dark:text-white print:text-black print:text-xs">
                  Netaji Subhas Institute of Technology, University of Delhi
                </span>
                <span className="text-sm text-neutral-500 dark:text-neutral-400 print:text-neutral-600 print:text-xs">
                  August 2009 – June 2013
                </span>
              </div>
              <p className="mt-0.5 font-semibold text-slate-700 dark:text-slate-400 print:text-slate-700 text-sm print:text-xs">
                B.E. in Electronics and Communication Engineering, First Division with Distinction
              </p>
            </li>
            <li>
              <div className="flex flex-wrap justify-between gap-2">
                <span className="font-bold text-neutral-900 dark:text-white print:text-black print:text-xs">
                  Carnegie Mellon University
                </span>
                <span className="text-sm text-neutral-500 dark:text-neutral-400 print:text-neutral-600 print:text-xs">
                  June 2012 – August 2012
                </span>
              </div>
              <p className="mt-0.5 font-semibold text-slate-700 dark:text-slate-400 print:text-slate-700 text-sm print:text-xs">
                Summer Research Intern, Electrical and Computer Engineering
              </p>
              <ul className="mt-1.5 list-disc pl-5 space-y-0.5 text-sm text-neutral-600 dark:text-neutral-400 print:text-neutral-700 print:mt-1 print:space-y-0 print:text-xs print:leading-snug">
                <li>Developed a feature extraction algorithm achieving 96% classification accuracy on low-resolution images.</li>
              </ul>
            </li>
          </ul>
        </section>
      </div>
    </>
  );
}
