import * as React from 'react';
import { FaSquareFacebook } from 'react-icons/fa6';


export default function FooterMain() {
    return (
        <footer className='w-screen bg-[#0e1215] p-3'>
            <div className='lg:w-[1140px] lg:px-10 m-auto'>
                <div className='flex items-center justify-between'>
                    <p className='text-2xl  font-extrabold w-max bg-gradient-to-r  lg:m-0 lg:col-span-2 from-red-600 to-orange-500 bg-clip-text text-transparent'>
                        {/* <img src="https://picsum.photos/200" alt="" /> */}
                        HoatHinhOnline
                    </p>
                    <FaSquareFacebook color='white' size={25} />
                </div>
                <div className='flex justify-between items-center text-white'>
                    <span className='text-xs py-5 font-thin'>© Copyright ® 2023 HOATHINHONLINE.</span>
                </div>
            </div>
        </footer>
    );
}
