import React, { useState } from 'react'
import {motion} from "framer-motion"

import { useRouter } from "next/router";
import Link from 'next/link';

//<motion.div></motion.div>

const Intro = () => {
    const [additionalInfo, setAdditionalInfo] = useState('')
  return (
    <motion.div
      className="z-10"
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3, type: "spring" }}
    >
      
    </motion.div>
  )
}

export default Intro