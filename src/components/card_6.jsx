import React from 'react';
import Logo_app from '../images/app-store.png';
import Logo_play from '../images/play-store.png';

const card_6 = () => {
  return (
    <>
      <div className="card-6 w-full h-[903px] bg-orange-100 relative flex flex-col  ">
         
         <div className="card-title w-[1108px] h-[196px] bg-white flex box-border justify-evenly rounded-3xl ml-[15%] mt-20">
 
 
           <div className="a flex items-center">
             <div className="img-a w-[100px] h-[100px] bg-transparent bg-[url(./images/discounts.png)] bg-cover">
 
             </div>
 
             <div className="text ml-4 ">
 
               <span className='text-2xl font-bold text-gradient   '>Daily <br /> Discounts</span>
             </div>
           </div>
 
           <div className="b flex items-center">
             <div className="img-a w-[100px] h-[100px] bg-transparent bg-[url(./images/live-tracking.png)] bg-cover">
 
             </div>
             <div className="text ml-4 ">
 
               <span className='text-2xl font-bold text-gradient  '>Live <br /> Tracking</span>
             </div>
           </div>
 
 
 
           <div className="c flex items-center">
             <div className="img-a w-[100px] h-[100px] bg-transparent bg-[url(./images/quick-delivery.png)] bg-cover">
 
             </div>
             <div className="text ml-4  ">
 
               <span className='text-2xl font-bold text-gradient '>Quick <br /> Delivery</span>
             </div>
           </div>
 
 
         </div>
 
 
 
         <div className="owl ">
           <div className="download absolute bottom-0 overflow-hidden left-72 z-20">
             <div className="cont ">
               <div className="img h-[335px] w-[443px] bg-[url(./images/phone-cta-one.png)] bg-cover">
               </div>
             </div>
 
           </div>
 
 
 
 
             <div className="text absolute bottom-60 right-[350px]">
               <span className='text-4xl font-bold text-gradient   '>Install The App</span>
               <span className='text-slate-500'><p>It's never been easier to order food. Look for the finest <br />discounts and you'll be lost in a world of delectable food.</p></span>
               <div className="images bg-transparent flex justify-center items-center">
                 <img className='w-30 h-14 mr-3' src={Logo_app} alt="" />
                 <img className='w-48 h-20' src={Logo_play} alt="" />
               </div>
 
             
           </div>
 
         </div>
 
 
 
 
 
 
         <div className="shape flex relative">
 
           <div class="custom-shape mt-[507px]"></div>
           <div class="custom-shape-2 mt-[558px] absolute z-10 right-0.5"></div>
         </div>
       </div >
    </>
  )
}

export default card_6