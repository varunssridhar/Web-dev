import { ResumePrintButton } from "@/components/ResumePrintButton";

export default function ResumePage() {
  return (
    <>
      <div className="mx-auto max-w-3xl px-6 py-16 lg:px-8 resume-content">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight text-neutral-900 dark:text-white print:text-black">
              Varun S Sridhar
            </h1>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400 print:text-neutral-700">
          120 Smith St #2 · Brooklyn, NY 11201
          <br />
          varunssridhar@gmail.com · (213) 447-4403
            </p>
          </div>
          <ResumePrintButton />
        </div>

        <section className="mt-10">
          <h2 className="text-lg font-semibold text-neutral-900 dark:text-white print:text-black border-b border-neutral-200 dark:border-neutral-700 print:border-neutral-300 pb-1">
            Experience
          </h2>
          <ul className="mt-4 space-y-6">
            <li>
              <div className="flex flex-wrap justify-between gap-2">
                <span className="font-medium text-neutral-900 dark:text-white print:text-black">
                  Director of Product / Head of Product
                </span>
                <span className="text-sm text-neutral-500 dark:text-neutral-400 print:text-neutral-600">
                  Gynger Inc. · March 2022 – Present
                </span>
              </div>
              <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400 print:text-neutral-600">
                New York City, NY
              </p>
              <ul className="mt-2 list-disc pl-5 space-y-1 text-sm text-neutral-600 dark:text-neutral-400 print:text-neutral-700">
                <li>Employee #3, leading a small team, and owning the overall product strategy and roadmap execution.</li>
                <li>Launched Gynger for Buyers – embedded financing platform with fast underwriting for B2B tech payments.</li>
                <li>Launched Gynger for Sellers – platform with native integrations for tech sellers to offer embedded financing to buyers.</li>
                <li>Drove 2.5x topline and revenue growth (2023–2024) with new features across both Gynger products.</li>
              </ul>
            </li>
            <li>
              <div className="flex flex-wrap justify-between gap-2">
                <span className="font-medium text-neutral-900 dark:text-white print:text-black">
                  Vice President and Lead PM, Global Banking Technology
                </span>
                <span className="text-sm text-neutral-500 dark:text-neutral-400 print:text-neutral-600">
                  Morgan Stanley · January 2021 – March 2022
                </span>
              </div>
              <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400 print:text-neutral-600">
                New York City, NY
              </p>
              <ul className="mt-2 list-disc pl-5 space-y-1 text-sm text-neutral-600 dark:text-neutral-400 print:text-neutral-700">
                <li>Led product development for Tailored Lending platform, driving 31% CAGR with over $100M in yearly revenue.</li>
                <li>Delivered Fed-mandated Alternative Reference Rates across the multi-billion dollar loan book by leading a cross-functional and multi-platform/team initiative.</li>
              </ul>
            </li>
            <li>
              <div className="flex flex-wrap justify-between gap-2">
                <span className="font-medium text-neutral-900 dark:text-white print:text-black">
                  Product Manager, Global Banking Technology
                </span>
                <span className="text-sm text-neutral-500 dark:text-neutral-400 print:text-neutral-600">
                  Morgan Stanley · August 2015 – December 2020
                </span>
              </div>
              <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400 print:text-neutral-600">
                New York City, NY ; Montreal, QC
              </p>
              <ul className="mt-2 list-disc pl-5 space-y-1 text-sm text-neutral-600 dark:text-neutral-400 print:text-neutral-700">
                <li>Increased revenue $5M+ annually by launching a multi-collateral loan product.</li>
                <li>Delivered a reduction of 60% in loan booking time via servicing workflow automation and API integrations.</li>
                <li>Drove 40% YoY loan volume growth by deploying new loan origination system.</li>
              </ul>
            </li>
            <li>
              <div className="flex flex-wrap justify-between gap-2">
                <span className="font-medium text-neutral-900 dark:text-white print:text-black">
                  Research Assistant
                </span>
                <span className="text-sm text-neutral-500 dark:text-neutral-400 print:text-neutral-600">
                  The Wharton School, University of Pennsylvania · September 2014 – January 2015
                </span>
              </div>
              <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400 print:text-neutral-600">
                Philadelphia, PA
              </p>
              <ul className="mt-2 list-disc pl-5 space-y-1 text-sm text-neutral-600 dark:text-neutral-400 print:text-neutral-700">
                <li>Built machine learning models to predict TV show viewership trends using scraped social network data.</li>
              </ul>
            </li>
            <li>
              <div className="flex flex-wrap justify-between gap-2">
                <span className="font-medium text-neutral-900 dark:text-white print:text-black">
                  Technology and Data Summer Intern, Business Analyst
                </span>
                <span className="text-sm text-neutral-500 dark:text-neutral-400 print:text-neutral-600">
                  Morgan Stanley · June 2014 – August 2014
                </span>
              </div>
              <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400 print:text-neutral-600">
                New York City, NY
              </p>
              <ul className="mt-2 list-disc pl-5 space-y-1 text-sm text-neutral-600 dark:text-neutral-400 print:text-neutral-700">
                <li>Wrote a PRD for a Wealth Management application that was to be used by 16000+ Financial Advisors.</li>
              </ul>
            </li>
            <li>
              <div className="flex flex-wrap justify-between gap-2">
                <span className="font-medium text-neutral-900 dark:text-white print:text-black">
                  Summer Research Intern, Electrical and Computer Engineering
                </span>
                <span className="text-sm text-neutral-500 dark:text-neutral-400 print:text-neutral-600">
                  Carnegie Mellon University · June 2012 – August 2012
                </span>
              </div>
              <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400 print:text-neutral-600">
                Pittsburgh, PA
              </p>
              <ul className="mt-2 list-disc pl-5 space-y-1 text-sm text-neutral-600 dark:text-neutral-400 print:text-neutral-700">
                <li>Developed a feature extraction algorithm achieving 96% classification accuracy on low-resolution images.</li>
              </ul>
            </li>
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-lg font-semibold text-neutral-900 dark:text-white print:text-black border-b border-neutral-200 dark:border-neutral-700 print:border-neutral-300 pb-1">
            Skills and Expertise
          </h2>
          <div className="mt-4 space-y-3">
            <p className="text-sm text-neutral-600 dark:text-neutral-400 print:text-neutral-700">
              <span className="font-medium text-neutral-900 dark:text-white print:text-black">Product Leadership:</span>{" "}
              Strategy, Roadmap planning, Stakeholder management, Product launches, Branding
            </p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 print:text-neutral-700">
              <span className="font-medium text-neutral-900 dark:text-white print:text-black">Technical Skills:</span>{" "}
              Python, SQL, GraphQL, API tools, Figma, Retool, JIRA, Prompt engineering, AI tooling
            </p>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-lg font-semibold text-neutral-900 dark:text-white print:text-black border-b border-neutral-200 dark:border-neutral-700 print:border-neutral-300 pb-1">
            Education
          </h2>
          <ul className="mt-4 space-y-4">
            <li>
              <div className="flex flex-wrap justify-between gap-2">
                <span className="font-medium text-neutral-900 dark:text-white print:text-black">
                  Masters in Systems Engineering, GPA: 3.94/4.0
                </span>
                <span className="text-sm text-neutral-500 dark:text-neutral-400 print:text-neutral-600">
                  August 2013 – May 2015
                </span>
              </div>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 print:text-neutral-700">
                University of Pennsylvania
              </p>
            </li>
            <li>
              <div className="flex flex-wrap justify-between gap-2">
                <span className="font-medium text-neutral-900 dark:text-white print:text-black">
                  B.E. in Electronics and Communication Engineering, First Division with Distinction
                </span>
                <span className="text-sm text-neutral-500 dark:text-neutral-400 print:text-neutral-600">
                  August 2009 – June 2013
                </span>
              </div>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 print:text-neutral-700">
                Netaji Subhas Institute of Technology, University of Delhi
              </p>
            </li>
          </ul>
        </section>
      </div>
    </>
  );
}
