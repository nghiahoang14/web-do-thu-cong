'use client';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

export const Footer = () => {
  return (
    <div className="bg-[#dcdacb] py-[50px] px-4 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Top Info */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="flex items-start md:items-center gap-3">
            <LocalShippingOutlinedIcon fontSize="large" />
            <p className="font-semibold text-[18px] md:text-[20px] max-w-[200px]">
              FREESHIPPING & RETURN POLICY
            </p>
          </div>
          <div className="flex items-start md:items-center gap-3">
            <PersonOutlineOutlinedIcon fontSize="large" />
            <p className="font-semibold text-[18px] md:text-[20px] max-w-[200px]">
              90 DAYS WARRANTY
            </p>
          </div>
          <div className="flex items-start md:items-center gap-3">
            <Inventory2OutlinedIcon fontSize="large" />
            <p className="font-semibold text-[18px] md:text-[20px] max-w-[220px]">
              NEW PRODUCTS OFFERING & DEALS
            </p>
          </div>
        </div>

        <div className="h-[1px] bg-[#aaa] my-[50px]" />

        {/* Contact + Form */}
        <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-[100px]">
          {/* Left contact */}
          <div className="flex-1">
            <div className="mb-4">
              <h3 className="font-semibold text-[20px]">Address</h3>
              <p>Peakview Tower, 36 Hoang Cau, Dong Da, Hanoi</p>
            </div>
            <div className="mb-4">
              <h3 className="font-semibold text-[20px]">Contact</h3>
              <p>0967827698 - 0947282986</p>
            </div>
            <div className="mb-4">
              <h3 className="font-semibold text-[20px]">Email</h3>
              <p>vietquilt.com@gmail.com</p>
            </div>

            {/* Social icons */}
            <div className="mt-4 flex items-center gap-5">
              {/* Facebook */}
              <div className="h-[40px] w-[40px] text-blue-600 flex items-center justify-center cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 320 512" className="w-full h-full">
                  <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35
                  12.42-50.06 52.24-50.06H293V6.26S259.5 0 225.36
                  0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.2V288z" />
                </svg>
              </div>
              {/* YouTube */}
              <div className="h-[40px] w-[40px] text-red-600 flex items-center justify-center cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 576 512" className="w-full h-full">
                  <path d="M549.655 124.083c-6.281-23.646-24.812-42.193-48.295-48.504C458.782 64 288 64 288
                  64S117.218 64 74.64 75.579c-23.483 6.311-42.014 24.858-48.295 48.504C16
                  168.291 16 256 16 256s0 87.709 10.345 131.917c6.281 23.646 24.812 42.193
                  48.295 48.504C117.218 448 288 448 288 448s170.782 0 213.36-11.579c23.483-6.311
                  42.014-24.858 48.295-48.504C560 343.709 560 256 560 256s0-87.709-10.345-131.917zM232
                  334V178l142 78-142 78z" />
                </svg>
              </div>
              {/* TikTok */}
              <div className="h-[35px] w-[35px] flex items-center justify-center cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512" className="w-full h-full">
                  <path d="M448,209.9c-38.8,0-74.6-13.4-103.1-35.9V349.4A162.6,162.6,0,1,1,185,188.3V278.2a74.6,74.6,0,1,0,
                  52.2,71.2V0h88A121.2,121.2,0,0,0,327.1,22.2h0A122.2,122.2,0,0,0,381,102.4a121.4,121.4,0,0,0,67,20.1Z" />
                </svg>
              </div>
              {/* Instagram */}
              <div className="h-[35px] w-[35px] text-[#E1306C] cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512" className="w-full h-full">
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9
                  114.9s51.3 114.9 114.9 114.9S339 319.5
                  339 255.9 287.7 141 224.1 141zm0
                  189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7
                  74.7-74.7 74.7 33.5 74.7 74.7-33.6
                  74.7-74.7 74.7zm146.4-194.3c0
                  14.9-12 26.8-26.8 26.8-14.9
                  0-26.8-12-26.8-26.8s12-26.8
                  26.8-26.8 26.8 12 26.8 26.8zm76.1
                  27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9
                  0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7
                  35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9
                  93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8
                  388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7
                  9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6
                  132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Right form */}
          <div className="flex-1 w-full">
            <h3 className="font-semibold text-[24px] mb-4">Leave us a message</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-1">Name</label>
                <input type="text" id="name" className="w-full h-[40px] px-4 rounded-md bg-white text-sm font-semibold outline-none" />
              </div>
              <div>
                <label htmlFor="email" className="block mb-1">Email</label>
                <input type="email" id="email" className="w-full h-[40px] px-4 rounded-md bg-white text-sm font-semibold outline-none" />
              </div>
              <div>
                <label htmlFor="phone" className="block mb-1">Phone number</label>
                <input type="text" id="phone" className="w-full h-[40px] px-4 rounded-md bg-white text-sm font-semibold outline-none" />
              </div>
              <button
                type="submit"
                className="border border-black text-black hover:bg-black hover:text-white transition-colors duration-300 px-6 py-2 rounded-md mt-2"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
