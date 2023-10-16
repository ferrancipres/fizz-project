
import { FC } from 'react'
import { BsInstagram, BsLinkedin, BsFacebook, BsTwitter } from 'react-icons/bs'

export const Footer: FC = () => {
  return (
    <footer>
      <section className='bg-black mb-auto p-10 grid lg:grid-cols-3 gap-2 text-gray-300'>
        <div>
          <h1 className='text-3xl font-bold text-white-400'>fizz</h1>
          <p className='py-4'>Fizz was founded in 1995 by six co-founders, Mo Constantine, Mark Constantine, Rowena Bird, Helen Ambrosen, Liz Bennett and Paul Greeves.</p>
          <div className='flex md:w-[75%] my-5 justify-around'>
            <BsFacebook size={30} />
            <BsInstagram size={30} />
            <BsLinkedin size={30} />
            <BsTwitter size={30} />
          </div>
        </div>

        <div className='lg:col-span-2 flex justify-around mt-6'>
          <div>
            <h6 className='font-medium text-gray-500'>Support</h6>
            <ul>
              <li className='py-2 text-sm'>Pricing</li>
              <li className='py-2 text-sm'>Documentation</li>
              <li className='py-2 text-sm'>Guides</li>
              <li className='py-2 text-sm'>API Status</li>
            </ul>
          </div>

          <div>
            <h6 className='font-medium text-gray-500'>Company</h6>
            <ul>
              <li className='py-2 text-sm'>About</li>
              <li className='py-2 text-sm'>Blog</li>
              <li className='py-2 text-sm'>Jobs</li>
              <li className='py-2 text-sm'>Careers</li>
            </ul>
          </div>

          <div>
            <h6 className='font-medium text-gray-500'>Legal</h6>
            <ul>
              <li className='py-2 text-sm'>Claim</li>
              <li className='py-2 text-sm'>Policy</li>
              <li className='py-2 text-sm'>Commerce</li>
              <li className='py-2 text-sm'>Insights</li>
            </ul>
          </div>
          
        </div>
      </section>
    </footer>
  )
}