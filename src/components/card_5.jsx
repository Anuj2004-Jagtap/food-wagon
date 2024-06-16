import React from 'react'

const card_5 = () => {
  return (
    <>
      <div className="card-4 w-full h-[447px] bg-slate-50  flex flex-col justify-center items-center">

<div className="card_1 ">

  <div className="title flex justify-between mb-24">
    <span className='text-[25px] font-bold font-sans '>Search By Food</span>
    <div className='flex items-center '><span className='text-[12px] font-bold mr-4 text-neutral-500'>View All ➡️ </span>

      <div className='flex justify-evenly'><div className='flex items-center text-xl mr-2 w-5 h-5 text-white rounded-lg bg-amber-400'>
        <i class="ri-arrow-left-s-line"></i>
      </div>
        <div className='flex items-center text-xl w-5 h-5 text-white rounded-lg bg-amber-400'>
          <i class="ri-arrow-right-s-line"></i>
        </div></div></div>

  </div>
  <div className="card-body flex ">

    <div className="img-a flex flex-col items-center mr-6">
      <div className="img1 w-[140px] h-[140px] rounded-full bg-slate-500 bg-[url(./images/search-pizza.png)] bg-cover"></div>
      <div><span className='text-[12px] text-slate-700 font-bold'>Pizza</span></div>
    </div>

    <div className="img-a flex flex-col items-center mr-6">
      <div className="img1 w-[140px] h-[140px] rounded-full bg-slate-500 bg-[url(./images/burger.png)] bg-cover"></div>
      <div><span className='text-[12px] text-slate-700 font-bold'>Burger</span></div>
    </div>

    <div className="img-b flex flex-col items-center mr-6">
      <div className="img1 w-[140px] h-[140px] rounded-full bg-slate-500 bg-[url(./images/noodles.png)] bg-cover"></div>
      <div><span className='text-[12px] text-slate-700 font-bold'>Noodles</span></div>
    </div>

    <div className="img-c flex flex-col items-center mr-6">
      <div className="img1 w-[140px] h-[140px] rounded-full bg-slate-500 bg-[url(./images/sub-sandwich.png)] bg-cover"></div>
      <div><span className='text-[12px] text-slate-700 font-bold'>Sub-Sandwich</span></div>
    </div>

    <div className="img-d flex flex-col items-center mr-6">
      <div className="img1 w-[140px] h-[140px] rounded-full bg-slate-500 bg-[url(./images/chowmein.png)] bg-cover"></div>
      <div><span className='text-[12px] text-slate-700 font-bold'>Chowmein</span></div>
    </div>

    <div className="img-e flex flex-col items-center mr-6">
      <div className="img1 w-[140px] h-[140px] rounded-full bg-slate-500 bg-[url(./images/steak.png)] bg-cover"></div>
      <div><span className='text-[12px] text-slate-700 font-bold'>Steak</span></div>
    </div>
  </div>
</div>
</div>
    </>
  )
}

export default card_5