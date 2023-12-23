"use client";

import { X } from "lucide-react";
import { Check } from "lucide-react";
import React from "react";

const PricingPage = () => {
  return (
    <main className="container max-w-6xl pb-16">
      <p>
        This is just to give you an idea of what I charge for a website. I can do a lot more than just websites, so if
        you have a project in mind, please reach out to me and we can discuss it.
      </p>

      <div className="grid grid-cols-2 gap-8 items-start mt-8">
        <div className="w-full h-full border shadow-lg rounded-lg px-8 py-6">
          <h2 className="text-2xl font-bold text-center">One Page</h2>
          <p className="text-lg font-semibold text-center mt-4 flex flex-col leading-tight">
            <span className="text-xs">Staring from</span>
            $99 (35,000LKR)
          </p>

          <ul className="mt-6 space-y-2">
            <li className="flex items-center">
              <Check className="h-5 w-5 mr-2 text-green-500" />
              <span>One Page</span>
            </li>
            <li className="flex items-center mt-2">
              <Check className="h-5 w-5 mr-2 text-green-500" />
              <span>Upto 5 sections</span>
            </li>
            <li className="flex items-center mt-2">
              <Check className="h-5 w-5 mr-2 text-green-500" />
              <span>3 Revisions</span>
            </li>
            <li className="flex items-center mt-2">
              <Check className="h-5 w-5 mr-2 text-green-500" />
              <span>Responsive Design</span>
            </li>
            <li className="flex items-center mt-2">
              <Check className="h-5 w-5 mr-2 text-green-500" />
              <span>Source File</span>
            </li>
          </ul>
        </div>

        <div className="w-full h-full border shadow-lg rounded-lg px-8 py-6 md:mt-0">
          <h2 className="text-2xl font-bold text-center">Multi Page</h2>
          <p className="text-lg font-semibold text-center mt-4 flex flex-col leading-tight">
            <span className="text-xs">Staring from</span>
            $199 (70,000LKR)
          </p>

          <ul className="mt-6 space-y-2">
            <li className="flex items-center">
              <Check className="h-5 w-5 mr-2 text-green-500" />
              <span>Upto 5 Pages</span>
            </li>
            <li className="flex items-center mt-2">
              <Check className="h-5 w-5 mr-2 text-green-500" />
              <span>5 Revisions</span>
            </li>
            <li className="flex items-center mt-2">
              <Check className="h-5 w-5 mr-2 text-green-500" />
              <span>Responsive Design</span>
            </li>
            <li className="flex items-center mt-2">
              <Check className="h-5 w-5 mr-2 text-green-500" />
              <span>Source File</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border p-8 mt-8 rounded-lg">
        <h2 className="text-2xl font-bold text-center">Ecommerce</h2>
        <div className="grid grid-cols-2 gap-8 items-start mt-8">
          <div className="w-full h-full border shadow-lg rounded-lg px-8 py-6">
            <h3 className="text-xl font-semibold text-center">Storefront Only</h3>
            <p className="text-lg font-semibold text-center mt-4 flex flex-col leading-tight">
              <span className="text-xs">Staring from</span>
              $299 (105,000LKR)
            </p>

            <ul className="mt-6 space-y-2">
              <li className="flex items-center">
                <X className="h-5 w-5 mr-2 text-red-500" />
                <span>Admin Dashboard </span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 mr-2 text-green-500" />
                <span>Storefront</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 mr-2 text-green-500" />
                <span>Payment Gateway</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 mr-2 text-green-500" />
                <span>5 Revisions</span>
              </li>
              <li className="flex items-center mt-2">
                <Check className="h-5 w-5 mr-2 text-green-500" />
                <span>Responsive Design</span>
              </li>
              <li className="flex items-center mt-2">
                <Check className="h-5 w-5 mr-2 text-green-500" />
                <span>Source File</span>
              </li>
            </ul>
          </div>

          <div className="w-full h-full border shadow-lg rounded-lg px-8 py-6">
            <h3 className="text-xl font-semibold text-center">Admin Dashboard + Storefront</h3>
            <p className="text-lg font-semibold text-center mt-4 flex flex-col leading-tight">
              <span className="text-xs">Staring from</span>
              $799 (280,000LKR)
            </p>

            <ul className="mt-6 space-y-2">
              <li className="flex items-center">
                <Check className="h-5 w-5 mr-2 text-green-500" />
                <span>Admin Dashboard </span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 mr-2 text-green-500" />
                <span>Storefront</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 mr-2 text-green-500" />
                <span>Payment Gateway</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 mr-2 text-green-500" />
                <span>5 Revisions</span>
              </li>
              <li className="flex items-center mt-2">
                <Check className="h-5 w-5 mr-2 text-green-500" />
                <span>Responsive Design</span>
              </li>
              <li className="flex items-center mt-2">
                <Check className="h-5 w-5 mr-2 text-green-500" />
                <span>Source File</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PricingPage;
