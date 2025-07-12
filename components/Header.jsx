import { assets } from '@/assets/assets';
import { motion } from "motion/react";
import Image from 'next/image';
import { useEffect, useState } from 'react';

const Header = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className='w-11/12 max-w-3xl text-center mx-auto py-20 md:py-28 flex flex-col items-center justify-center gap-4'>
        <div className='rounded-full w-32 h-32 bg-gray-200 dark:bg-gray-700 animate-pulse'></div>
        <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'>
          Welcome! I'm Swaraj Reddy <span className='w-6 h-6 inline-block'></span>
        </h3>
        <h1 className='text-4xl sm:text-7xl lg:text-[45px] font-Ovo opacity-0'>Loading...</h1>
      </div>
    );
  }

  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto pt-38 pb-15 md:py-28 flex flex-col items-center justify-center gap-4'>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
      >
        <Image src={assets.profile_img} alt='' className='rounded-full w-32'/>
      </motion.div>

      <motion.h3
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'
      >
        Welcome! I'm Swaraj Reddy <Image src={assets.hand_icon} alt='' className='w-6'/>
      </motion.h3>

      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className='text-2xl sm:text-5xl lg:text-[30px] font-Ovo'
      >
        Computer Science Graduate based in Hyderabad, India.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className='max-w-2xl mx-auto font-Ovo'
      >
        Aspiring Software Engineer and have hands-on experience in Full-Stack Development, Cloud Technologies, and Deep Learning Applications.
      </motion.p>

      <div className='flex flex-col sm:flex-row items-center justify-center gap-4 mt-4'>
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          href="#contact"
          className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 dark:bg-transparent'
        >
          Contact Me <Image src={assets.right_arrow_white} alt='' className='w-4'/>
        </motion.a>
      </div>
    </div>
  )
}

export default Header
