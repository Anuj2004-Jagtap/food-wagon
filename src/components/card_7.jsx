import React from 'react'

const card_7 = () => {
    return (
        <>
            <div className="card-7 w-full h-[2000px] bg-slate-100 flex flex-col items-center justify-evenly">

                <div className="card1 w-[1140px] h-[492px] bg-white flex ">
                    <div className="text w-[461px] h-[492px]  flex flex-col justify-end items-start pl-10 pb-14">
                        <span><h1 className='text-[39px] font-bold pb-6'>Best deals <span className='text-gradient'>Crispy <br />Sandwiches</span></h1></span>
                        <span className='pb-16'>Enjoy the large size of sandwiches. Complete <br /> your meal with the perfect slice of <br /> sandwiches.</span>
                        <button className='w-[365px]  h-10 bg-yellow-500 text-center text-white rounded-md  font-bold'>Proceed To Order
                            <i class="ri-arrow-right-s-line"></i>

                        </button>
                    </div>
                    <div className="text w-[680px] h-[493px]  bg-[url(./images/crispy-sandwiches2.png)] bg-cover"></div>
                </div>


                <div className="card2 w-[1140px] h-[492px] bg-white flex flex-row-reverse">
                    <div className="text w-[461px] h-[492px]  flex flex-col justify-end items-start pl-10 pb-14">
                        <span><h1 className='text-[39px] font-bold pb-6'>Celebrate Parties <br /> <span className='text-gradient'>with Fried Chicken</span></h1></span>
                        <span className='pb-16'>Get the best fried chicken smeared with a lip <br /> smacking lemon chili flavor. Check out best <br /> deals for fried chicken.</span>
                        <button className='w-[365px]  h-10 bg-yellow-500 text-center text-white rounded-md  font-bold'>Proceed To Order
                            <i class="ri-arrow-right-s-line"></i>

                        </button>
                    </div>
                    <div className="text w-[680px] h-[493px]  bg-[url(./images/fried-chicken.png)] bg-cover"></div>
                </div>


                <div className="card3 w-[1140px] h-[492px] bg-white flex ">
                    <div className="text w-[461px] h-[492px]  flex flex-col justify-end items-start pl-10 pb-14">
                        <span><h1 className='text-[39px] font-bold pb-6'>Wanna eat hot & <br /><span className='text-gradient'>Spicy Pizza?</span></h1></span>
                        <span className='pb-16'>Pair up with a friend and enjoy the hot and <br /> crispy pizza pops. Try it with the best deals.</span>
                        <button className='w-[365px]  h-10 bg-yellow-500 text-center text-white rounded-md  font-bold'>Proceed To Order
                            <i class="ri-arrow-right-s-line"></i>

                        </button>
                    </div>
                    <div className="text w-[680px] h-[493px]  bg-[url(./images/pizza.png)] bg-cover"></div>
                </div>

            </div>
        </>
    )
}

export default card_7