import { assets } from '@/assets/assets'
import Image from 'next/image'

const Footer = ({ isDarkMode }) => {
  return (
    <div className='mt-20'>
      <div className='text-center'>
        <Image src={isDarkMode ? assets.logo_dark : assets.logo} alt='Logo' className='w-36 mx-auto mb-2' />

        <div className='w-max flex items-center gap-2 mx-auto'>
          <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt='Email Icon' className='w-6' />
          <a href="mailto:swarajchandra22@gmail.com" className='hover:underline'>swarajchandra22@gmail.com</a>
        </div>
      </div>

      <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
        <p>© Swaraj Reddy. All rights reserved.</p>
        <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
          <li><a target='_blank' href="https://github.com/swarajreddy10/" rel="noopener noreferrer">GitHub</a></li>
          <li><a target='_blank' href="https://www.linkedin.com/in/swarajreddy/" rel="noopener noreferrer">LinkedIn</a></li>
          <li><a target='_blank' href="https://www.credly.com/users/swarajreddy" rel="noopener noreferrer">Credly</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
