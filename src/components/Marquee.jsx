import { motion } from 'framer-motion'
import React from 'react'

function Marquee({image,direction}) {
  return (
    <motion.div className='flex  overflow-hidden invert h-[12vh] w-full'>
      <motion.div
      initial={{x:direction === 'left' ? '0' : '-100%'}}
      animate={{x:direction === 'left' ? '-100%' : '0%'}}
      transition={{ease:'linear', duration:30, repeat:Infinity}}
      className='flex flex-shrink-0 gap-40 py-10 pr-40 '>
      {image.map((url,i)=>(
        <img src={url} key={i} className=''/>
        ))}
      </motion.div>
     
      <motion.div
      initial={{x:direction === 'left' ? '0' : '-100%'}}
      animate={{x:direction === 'left' ? '-100%' : '0%'}}
      transition={{ease:'linear', duration:30, repeat:Infinity}}
      className='flex flex-shrink-0 gap-40 py-10 pr-40 '>
      {image.map((url,i)=>(
        <img src={url} key={i} className=''/>
        ))}
      </motion.div>  
    </motion.div>
  )
}

export default Marquee