import React from 'react';
import Location from '../images/location.png'
import Meals from '../images/meals.png';
import Order from '../images/order.png';
import Pay from '../images/pay.png';

const card_2 = () => {
    return (
        <div>
            <div className="card2 w-full h-[485px] bg-gradient-to-b from-rose-50 to-white mt-44 flex justify-center items-center flex-col">
                <span className='text-orange-500 text-[34px] font-bold opacity-80 text-center '><h5>How Does It Work </h5></span>

                <div className="icons flex justify-center pt-10 text-center items-center ">

                    <div className='w-[210px] h-[243px] text-center flex flex-col justify-center items-center mt-5 pr-6'>
                        <img src={Location} alt="" className='w-[84px] h-[110px] ' />
                        <h5 class="mt-4 font-bold text-[18px] opacity-85">Select location</h5>
                        <p class="mb-md-0 text[14px] text-zinc-500 pt-3">Choose the location where your food will be delivered.</p>
                    </div>

                    <div className='w-[210px] h-[243px] text-center flex flex-col justify-center items-center pr-6'>
                        <img src={Order} alt="" className='w-[84px] h-[110px] mt-3 ' />
                        <h5 class="mt-4 font-bold text-[18px] opacity-85 ">Choose order</h5>
                        <p class="mb-md-0 text[14px] text-zinc-500 pt-3 ">Check over hundreds of menus to pick your favorite  food.</p>
                    </div>

                    <div className='w-[210px] h-[243px] text-center flex flex-col justify-center items-center mt-5 pr-6'>
                        <img src={Pay} alt="" className='w-[84px] h-[110px] ' />
                        <h5 class="mt-4 font-bold text-[18px] opacity-85">Pay advanced</h5>
                        <p class="mb-md-0 text[14px] text-zinc-500 pt-3">It's quick, safe, and simple. Select several methods of payment.</p>
                    </div>

                    <div className='w-[210px] h-[243px] text-center flex flex-col justify-center items-center mt-6 pr-6'>
                        <img src={Meals} alt="" className='w-[84px] h-[110px] ' />
                        <h5 class="mt-4 font-bold text-[18px] opacity-85">Enjoy meals</h5>
                        <p class="mb-md-0 text[14px] text-zinc-500 pt-3">Choose the location where your food will be delivered.</p>
                    </div>


                </div>
            </div>



        </div>
    )
}

export default card_2