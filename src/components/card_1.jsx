import React from 'react';


const card_1 = () => {
  return (
    <>
      <div className="cards-1 h-52 w-full bg-white mt-2 flex justify-center">

        <div className="card1 w-[271px] h-[322px] overflow-hidden rounded-lg mr-4 mt-8">
          <div className="img1 w-[271px] h-[228px] bg-black relative bg-cover bg-no-repeat bg-[url('./images/discount-item-1.png')] rounded-b-lg">
            <div className="discount w-[130px] h-[65px] rounded-bl-[25%] bg-[#FFB30E] opacity-100 text-center flex justify-center items-center text-2xl absolute bottom-0 custom-border-radius text-white font-['Franklin_Gothic_Medium']">
              50%
            </div>
          </div>
          <div className="card-disc flex flex-col pl-1 pt-2">
            <span id="flat" className="font-extrabold font-['Lucida_Sans']">Flat Hill Slingback</span>
            <div id="disc" className="w-[160px] h-[40px] text-center font-['Helvetica'] pt-2 mt-1 font-extrabold bg-red-100 rounded-md text-[#F17228] text-sm">
              6 days Remaining
            </div>
          </div>

        </div>
        <div className="card2 w-[271px] h-[322px] overflow-hidden rounded-lg mr-4 mt-8">
          <div className="img2 w-[271px] h-[228px] bg-black relative bg-cover bg-no-repeat bg-[url('./images/discount-item-2.png')] rounded-b-lg">
            <div className="discount custom-border-radius w-[130px] h-[65px] rounded-bl-[25%] bg-[#FFB30E] opacity-100 text-center flex justify-center items-center text-2xl absolute bottom-0 text-white font-['Franklin_Gothic_Medium']">
              40%
            </div>
          </div>
          <div className="card-disc flex flex-col pl-1 pt-2">
            <span id="flat" className="font-extrabold font-['Lucida_Sans']">Ocean Blue Ring</span>
            <div id="disc" className="w-[160px] h-[40px] text-center font-['Helvetica'] pt-2 mt-1 font-extrabold bg-red-100 rounded-md text-[#F17228] text-sm">
              6 days Remaining
            </div>
          </div>

        </div>
        <div className="card3 w-[271px] h-[322px] overflow-hidden rounded-lg mr-4 mt-8">
          <div className="img3 w-[271px] h-[228px] bg-black relative bg-cover bg-no-repeat bg-[url('./images/discount-item-3.png')] rounded-b-lg">
            <div className="discount custom-border-radius w-[130px] h-[65px] rounded-bl-[25%] bg-[#FFB30E] opacity-100 text-center flex justify-center items-center text-2xl absolute bottom-0 text-white font-['Franklin_Gothic_Medium']">
              30%
            </div>
          </div>
          <div className="card-disc flex flex-col pl-1 pt-2">
            <span id="flat" className="font-extrabold font-['Lucida_Sans']">Brown Leathered Wallet</span>
            <div id="disc" className="w-[160px] h-[40px] text-center font-['Helvetica'] pt-2 mt-1 font-extrabold bg-red-100 rounded-md text-[#F17228] text-sm">
              6 days Remaining
            </div>
          </div>

        </div>
        <div className="card4 w-[271px] h-[322px] overflow-hidden rounded-lg mr-4 mt-8">
          <div className="img4 w-[271px] h-[228px] bg-black relative bg-cover bg-no-repeat bg-[url('./images/discount-item-4.png')] rounded-b-lg">
            <div className="discount custom-border-radius w-[130px] h-[65px] rounded-bl-[25%] bg-[#FFB30E] opacity-100 text-center flex justify-center items-center text-2xl absolute bottom-0 text-white font-['Franklin_Gothic_Medium']">
              20%
            </div>
          </div>
          <div className="card-disc flex flex-col pl-1 pt-2">
            <span id="flat" className="font-extrabold font-['Lucida_Sans']">Silverside Wristwatch</span>
            <div id="disc" className="w-[160px] h-[40px] text-center font-['Helvetica'] pt-2 mt-1 font-extrabold bg-red-100 rounded-md text-[#F17228] text-sm">
              6 days Remaining
            </div>
          </div>

        </div>
      </div>

    </>
  )
}

export default card_1