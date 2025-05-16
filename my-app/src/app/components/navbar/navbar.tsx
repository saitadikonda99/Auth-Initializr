import React from 'react'
import Image from 'next/image'

import './navbar.css'

import { MdOutlineLightMode } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { FaCodeMerge } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className="NavComponent">
      <div className="NavComponent-in">

         <div className="Nav-one">
            <div className="Nav-one-one">
                <div className="Nav-one-one-img">
                    <Image 
                        src="/next.svg"
                        alt="Hero"
                        width={200}
                        height={200}
                    />
                </div>
                <div className="Nav-one-one-text">
                    <h1>NextAuth Initializr</h1>
                </div>
            </div>
            <div className="Nav-one-two">
                <div className="Nav-one-two-star">
                    <FaGithub />
                    <p>Start on Github</p>
                    <FaRegStar className='star-icon'/>
                </div>
                <div className="Nav-one-two-star">
                    <FaCodeMerge />
                    <p>Contribute</p>
                </div>
                <div className="Nav-one-two-theme">
                    <MdOutlineLightMode />
                </div>
            </div>
         </div>
         
      </div>
    </div>
  )
}

export default Navbar