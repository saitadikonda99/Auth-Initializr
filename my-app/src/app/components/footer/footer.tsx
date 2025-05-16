import React from 'react'
import Link from 'next/link'

import './footer.css'

import { FaHeart } from "react-icons/fa";

const footer = () => {
  return (
        <div className="FooterComponent">
            <div className="FooterComponent-in">
                <div className="footer-one">
                    <p>Build by <Link href='https://saitadikonda.in/'>Tadikonda Sai Manikanta</Link></p>
                </div>

                <div className="footer-two">
                    <FaHeart />
                    <p>Sponsor</p>
                </div>
            </div>
        </div>
  )
}

export default footer