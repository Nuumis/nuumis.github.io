import Head from 'next/head'
import { BsFillMoonStarsFill } from 'react-icons/bs'
import { AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube, AiFillInstagram, AiFillGithub } from 'react-icons/ai'
import Image from 'next/image'
import fox from '../public/fox.png'
import asd1 from '../public/asd1.png'
import asd2 from '../public/asd2.png'
import asd3 from '../public/asd3.png'
import web1 from '../public/web1.png'
import web2 from '../public/web2.png'
import web3 from '../public/web3.png'
import web4 from '../public/web4.png'
import web5 from '../public/web5.png'
import web6 from '../public/web6.png'
import { useState } from 'react'

export default function Home() {
  const [darkMode, setDarkMode] = useState(true)
  return (
    <div className={darkMode ? "dark" : ""}>

      <>
        <Head>
          <title>Portfolio</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />

        </Head>
        <main className='bg-white px-10 md:px-20 lg:px-60 dark:bg-gray-900'>
          <section className=' min-h-screen'>
            <nav className='py-10 mb-12 flex justify-between'>
              <h1 className='text-xl font-rubik' >nuumis.</h1>
              <ul className='flex items-center'>
                <li>
                  <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className='cursor-pointer text-2xl' />
                </li>
                <li>
                  <a className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8' href="#">Resume</a>
                  <a className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8' href='#'>Resume</a>

                </li>
              </ul>
            </nav>
            <div className='text-center p-10'>
              <h2 className='text-5xl py-2 font-rubik text-teal-600 font-medium md:text-6xl'>Vili-Petteri Maunu</h2>
              <h3 className='text-2xl py-2 font-rubik md:text-3xl'>Developer and designer.</h3>
              <p className='text-md py-5 leading-9 font-rubik text-gray-600 md:text-xl'>Welcome to my website! I&apos;m an ICT engineering student with a passion for programming
                and web development, and I&apos;m excited to share my journey and projects with you.</p>
            </div>
            <div className='text-5xl py-8 flex justify-center gap-7 text-red-400'>
              <AiFillInstagram />
              <AiFillLinkedin />
              <AiFillGithub />
            </div>
            <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 overflow-hidden md:h-100 md:w-100' >
              <Image src={fox} alt="image" fill cover />
            </div>
          </section>
          <section>
            <div className='text-center'>
              <h3 className='text-3xl py-1'>Placeholder</h3>
              <p className='text-md py-5 leading-9 font-rubik text-gray-600'>Welcome to my website! I&apos;m an ICT engineering
                student with a passion for programming and web development, and I&apos;m excited to
                share my journey and projects with you.</p>
            </div>
            <div className='lg:flex gap-10'>
              <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
                <Image src={asd1} alt="image" width={100} height={100} />
                <h3 className="text-lg font-medium pt-8 pb-2  ">
                  Beautiful Designs
                </h3>
                <p className="py-2">
                  Creating elegant designs suited for your needs following core
                  design theory.
                </p>
                <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
                <p className="text-gray-800 py-1">Photoshop</p>
                <p className="text-gray-800 py-1">Midjourney</p>
                <p className="text-gray-800 py-1">Figma</p>
                <p className="text-gray-800 py-1">Indesign</p>
              </div>
              <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
                <Image src={asd2} alt="image" width={100} height={100} />
                <h3 className="text-lg font-medium pt-8 pb-2  ">
                  Beautiful Designs
                </h3>
                <p className="py-2">
                  Creating elegant designs suited for your needs following core
                  design theory.
                </p>
                <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
                <p className="text-gray-800 py-1">Photoshop</p>
                <p className="text-gray-800 py-1">Midjourney</p>
                <p className="text-gray-800 py-1">Figma</p>
                <p className="text-gray-800 py-1">Indesign</p>
              </div>
              <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
                <Image src={asd3} alt="image" width={100} height={100} />
                <h3 className="text-lg font-medium pt-8 pb-2  ">
                  Beautiful Designs
                </h3>
                <p className="py-2">
                  Creating elegant designs suited for your needs following core
                  design theory.
                </p>
                <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
                <p className="text-gray-800 py-1">Photoshop</p>
                <p className="text-gray-800 py-1">Midjourney</p>
                <p className="text-gray-800 py-1">Figma</p>
                <p className="text-gray-800 py-1">Indesign</p>
              </div>


            </div>
            <div className='text-center'>
              <h3>Portfolio header</h3>
              <p>Portfolio text</p>
            </div>
            <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
              <div className="basis-1/3 flex-1 ">
                <Image
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  src={web1} alt="image"
                />
              </div>
              <div className="basis-1/3 flex-1">
                <Image
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  src={web2} alt="image"
                />
              </div>
              <div className="basis-1/3 flex-1">
                <Image
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  src={web3} alt="image"
                />
              </div>
              <div className="basis-1/3 flex-1">
                <Image
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  src={web4} alt="image"
                />
              </div>
              <div className="basis-1/3 flex-1">
                <Image
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  src={web5} alt="image"
                />
              </div>
              <div className="basis-1/3 flex-1">
                <Image
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  src={web6} alt="image"
                />
              </div>
            </div>
          </section>
        </main>
      </>
    </div>
  )
}
