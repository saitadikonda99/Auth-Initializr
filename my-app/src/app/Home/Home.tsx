"use client";
import React, { useState } from "react";
import Image from "next/image";
import "./Home.css";

import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";

import { SiNextdotjs } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiMongodb } from "react-icons/si";
import { AiOutlineEnter } from "react-icons/ai";

type FeatureKey =
  | "signUp"
  | "signIn"
  | "forgotPassword"
  | "googleAuth"
  | "emailVerification"
  | "roleBasedAuth"
  | "jwtAuth";

interface Config {
  stack: "nextjs" | "nodejs";
  database: "mongodb" | "postgresql" | "mysql";
  features: {
    [key in FeatureKey]: boolean;
  };
}

const Page = () => {
  const [config, setConfig] = useState<Config>({
    stack: "nextjs",
    database: "mongodb",
    features: {
      signUp: false,
      signIn: false,
      forgotPassword: false,
      googleAuth: false,
      emailVerification: false,
      roleBasedAuth: false,
      jwtAuth: false,
    },
  });

  const handleConfigChange = (
    key: keyof Omit<Config, "features">,
    value: Config[keyof Omit<Config, "features">]
  ) => {
    setConfig((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleFeatureToggle = (feature: FeatureKey) => {
    setConfig((prev) => ({
      ...prev,
      features: {
        ...prev.features,
        [feature]: !prev.features[feature],
      },
    }));
  };

  return (
    <div className="HomeComponent">
      <div className="HomeComponent-in">
        <Navbar />

        <div className="home-one">
          <div className="home-one-one">
            <p>
              Build a complete authentication system that's ready for
              production, using your preferred setup.
            </p>
          </div>

          <div className="home-one-two">
            <div className="home-one-two-select">
              <h1>Select the Project</h1>
            </div>
            <div className="home-one-two-options">

              <div className="home-pro-one selection-box">
                <label>
                  <p> <SiNextdotjs /> Next.js (Frontend + Backend)</p>
                  <input type="radio" name="stack" value="next-fullstack" />
                </label>
              </div>

              <div className="home-pro-two selection-box">
                <label>
                  <p> <FaReact /> React (Frontend) + Node.js (Backend)</p>
                  <input type="radio" name="stack" value="react-node" />
                </label>

              </div>
            </div>
          </div>

          <div className="home-one-three">
            <div className="home-one-three-select">
              <h1>Select the Project</h1>
            </div>
            <div className="home-one-three-options">

              <div className="home-db-one selection-box">
                <label>
                  <p><SiMysql /> MySQL</p>
                  <input type="radio" name="db" value="next-fullstack" />
                </label>
              </div>

              <div className="home-db-two selection-box">
                <label>
                  <p><BiLogoPostgresql /> PostgreSQL</p>
                  <input type="radio" name="db" value="react-node" />
                </label>
              </div>

              <div className="home-db-three selection-box">
                <label>
                  <p><SiMongodb /> MongoDB</p>
                  <input type="radio" name="db" value="react-node" />
                </label>
              </div>
            </div>
          </div>

          <div className="home-one-four">
            <div className="home-one-four-select">
              <h1>Select Features</h1>
            </div>
            <div className="home-one-four-options">
              <div className="home-feature-one selection-box">
                <label>
                  <p>Sign Up</p>
                  <input 
                    type="checkbox" 
                    checked={config.features.signUp}
                    onChange={() => handleFeatureToggle("signUp")}
                  />
                </label>
              </div>

              <div className="home-feature-two selection-box">
                <label>
                  <p>Sign In</p>
                  <input 
                    type="checkbox" 
                    checked={config.features.signIn}
                    onChange={() => handleFeatureToggle("signIn")}
                  />
                </label>
              </div>

              <div className="home-feature-three selection-box">
                <label>
                  <p>Forgot Password</p>
                  <input 
                    type="checkbox" 
                    checked={config.features.forgotPassword}
                    onChange={() => handleFeatureToggle("forgotPassword")}
                  />
                </label>
              </div>

              <div className="home-feature-four selection-box">
                <label>
                  <p>Google Auth</p>
                  <input 
                    type="checkbox" 
                    checked={config.features.googleAuth}
                    onChange={() => handleFeatureToggle("googleAuth")}
                  />
                </label>
              </div>

              <div className="home-feature-five selection-box">
                <label>
                  <p>Email Verification</p>
                  <input 
                    type="checkbox" 
                    checked={config.features.emailVerification}
                    onChange={() => handleFeatureToggle("emailVerification")}
                  />
                </label>
              </div>

              <div className="home-feature-six selection-box">
                <label>
                  <p>Role Based Auth</p>
                  <input 
                    type="checkbox" 
                    checked={config.features.roleBasedAuth}
                    onChange={() => handleFeatureToggle("roleBasedAuth")}
                  />
                </label>
              </div>

              <div className="home-feature-eight selection-box">
                <label>
                  <p>JWT Auth</p>
                  <input 
                    type="checkbox" 
                    checked={config.features.jwtAuth}
                    onChange={() => handleFeatureToggle("jwtAuth")}
                  />
                </label>
              </div>
            </div>
          </div>

          <div className="home-generate">
            <button className="generate-button">
              <span>Generate Project</span>
              <AiOutlineEnter />
            </button>
          </div>

        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Page;
