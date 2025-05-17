import React from 'react'
import Link from 'next/link'

import './footer.css'

import { SiBuymeacoffee } from "react-icons/si";

const footer = () => {
  return (
        <div className="FooterComponent">
            <div className="FooterComponent-in">
                <div className="footer-one">
                    <p>Build by <Link href='https://saitadikonda.in/'>Tadikonda Sai Manikanta</Link></p>
                </div>

                <div className="footer-two">
                    <SiBuymeacoffee />
                    <p>Buy me a Coffee.</p>
                </div>
            </div>
        </div>
  )
}

export default footer