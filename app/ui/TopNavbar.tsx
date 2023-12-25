"use client"

import { useState } from "react";
import LoginSignup from "@/components/Login-Signup";
import UserIcon from "./UserIcon";

export default function TopNavigation() {
  const [loggedIn, setlogin]=useState(false);

  return (
    <>
      <div className="navbar bg-base-100 w-[100vw]">
        <div className="flex-1">
          <a className="btn btn-ghost text-2xl">ONDC</a>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control flex flex-row px-6 ">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-[30rem] max-w-xs"
            />
            <button className="btn btn-ghost btn-circle ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
          {loggedIn?<UserIcon/>: <LoginSignup/>}
        </div>
      </div>
    </>
  );
}
