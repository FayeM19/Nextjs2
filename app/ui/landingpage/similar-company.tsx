"use client";

import Link from "next/link";
import companyData from "@/app/lib/companydata"; // Ensure this path is correct

const topCompanies = companyData.filter(company => company.rank >= 1 && company.rank <= 3);

export default function SimilarCompanies() {
  return (
    <section className="w-full py-10 md:py-20 lg:py-6">
      <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-4 md:px-6">
        <h2 className="col-span-full text-2xl font-bold mb-4">Similar Companies</h2>
        {topCompanies.map((company, index) => (
          <Link
            key={index}
            href="#"
            className="bg-white rounded-lg shadow-lg overflow-hidden dark:bg-gray-950 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            prefetch={false}
          >
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{company.company_facts.base_facts.legal_name}</h3>
              <p className="text-gray-500 dark:text-gray-400 mb-4">{company.company_facts.self_description.global_summary}</p>
              <ul className="space-y-2 text-sm">
                <li>
                  <strong>Industry:</strong> {company.company_facts.base_facts.industry}
                </li>
                <li>
                  <strong>Employees:</strong> {company.company_facts.base_facts.employees}
                </li>
                <li>
                  <strong>Headquarters:</strong> {company.company_facts.base_facts.city}, {company.company_facts.base_facts.state}
                </li>
                <li>
                  <strong>Website:</strong> <a href={company.company_facts.base_facts.website} target="_blank" rel="noopener noreferrer">{company.company_facts.base_facts.website}</a>
                </li>
              </ul>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
