import React from "react";
import { Link } from "react-router-dom";
import MainLayout from "../layout/MainLayout";

const Page404 = () => {
  return (
    <MainLayout>
      <div className="py-16">
        <div className="text-center">
          <p className="text-sm font-semibold text-blue uppercase tracking-wide">
            Error 404
          </p>
          <h1 className="mt-2 text-4xl font-extrabold text-red-500 tracking-tight sm:text-5xl">
            Page not found.
          </h1>
          <p className="mt-2 text-base text-blue">
            We are sorry, but this page does not exist.
          </p>
          <div className="mt-6">
            <Link to="/" className="text-base font-medium text-blue">
              Back to home <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Page404;
