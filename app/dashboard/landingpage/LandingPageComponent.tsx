"use client";

import React from 'react';
import Link from "next/link";
import { Button } from "@/app/ui/button";
import company from '@/app/lib/companydata';
import SimilarCompanies from '@/app/ui/landingpage/similar-company';

function LandingPageComponent() {
  const companyData = company[0]; // Assuming we're using the first company's data
  const {
    legal_name,
    employees,
    revenue,
    website,
    industry,
    parent_industry,
  } = companyData.company_facts.base_facts;

  const contacts = companyData.company_facts.many_person_contact.contacts;
  const services = companyData.company_facts.services.services.slice(0, 3); // Limit to 3 services

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <header className="bg-white text-gray-900 py-4 px-4 md:px-6">
          <div className="container mx-auto mt-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div>
                  <MountainIcon className="h-20 w-20" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold">{legal_name}</h1>
                  <p className="text-gray-600 text-sm">
                    {companyData.company_facts.self_description.global_summary}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </header>
        <section id="overview" className="py-6 md:py-8 lg:py-10">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold mb-4">Overview</h2>
                <div>
                  <h3 className="font-semibold">Founded</h3>
                  <p className="text-gray-600 dark:text-gray-400">2010</p>
                </div>
                <div>
                  <h3 className="font-semibold">Location</h3>
                  <p className="text-gray-600 dark:text-gray-400">San Francisco, CA</p>
                </div>
                {industry && (
                  <div>
                    <h3 className="font-semibold">Industry</h3>
                    <p className="text-gray-600 dark:text-gray-400">{industry}</p>
                  </div>
                )}
                {parent_industry && (
                  <div>
                    <h3 className="font-semibold">Sub-Industry</h3>
                    <p className="text-gray-600 dark:text-gray-400">{parent_industry}</p>
                  </div>
                )}
                {website && (
                  <div>
                    <h3 className="font-semibold">Website</h3>
                    <Link href={website} className="text-blue-500 hover:underline" prefetch={false}>
                      {website}
                    </Link>
                  </div>
                )}
                <div>
                  <h3 className="font-semibold">Social Media</h3>
                  <div className="flex space-x-4">
                    <Link href="#" className="text-blue-500 hover:underline" prefetch={false}>
                      Twitter
                    </Link>
                    <Link href="#" className="text-blue-500 hover:underline" prefetch={false}>
                      LinkedIn
                    </Link>
                    <Link href="#" className="text-blue-500 hover:underline" prefetch={false}>
                      Facebook
                    </Link>
                  </div>
                </div>
              </div>
              <div className="space-y-4 mt-12">
                <div className="flex flex-col gap-4">
                  <div>
                    <h3 className="font-semibold">Company State</h3>
                    <p className="text-gray-600 dark:text-gray-400">Private</p>
                  </div>
                  {revenue && (
                    <div>
                      <h3 className="font-semibold">Revenue</h3>
                      <p className="text-gray-600 dark:text-gray-400">${revenue.toLocaleString()}</p>
                    </div>
                  )}
                  {employees && (
                    <div>
                      <h3 className="font-semibold">Employees</h3>
                      <p className="text-gray-600 dark:text-gray-400">{employees}</p>
                    </div>
                  )}
                  <div>
                    <h3 className="font-semibold">Funding</h3>
                    <p className="text-gray-600 dark:text-gray-400">$50M Series B</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 md:mt-0 border-l border-gray-200 dark:border-gray-800 pl-8">
              <h2 className="text-2xl font-bold mb-4">Products/Service</h2>
              <div className="space-y-4">
                {services.map((service, index) => (
                  <div key={index}>
                    <h3 className="text-lg font-bold">{service.name}</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {service.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-8 md:mt-0 border-l border-gray-200 dark:border-gray-800 pl-8 relative flex flex-col items-center justify-center">
              <h2 className="text-2xl font-bold mb-4">Contacts</h2>
              <div className="space-y-4 blur w-full flex-grow flex flex-col justify-center">
                {contacts.map((contact, index) => (
                  <div key={index} className="flex justify-between items-center w-full">
                    <div>
                      <h3 className="text-lg font-bold blur-sm">
                        {contact.first_name} {contact.last_name}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm blur-sm">
                        {contact.position} - {contact.department}
                      </p>
                    </div>
                    <Link href="#" className="text-blue-500 hover:underline font-bold" prefetch={false}>
                      Contact
                    </Link>
                  </div>
                ))}
              </div>
              <div className="absolute bottom-65 left-1/2 transform -translate-x-[calc(50%-1rem)]">
                <Button variant="solid" className="bg-blue-500 text-white">
                  Sign Up for the Contact Information
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="py-2">
          <div className="container mx-auto">
            <SimilarCompanies />
          </div>
        </section>
      </main>
    </div>
  );
}

function MountainIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

export default LandingPageComponent;
