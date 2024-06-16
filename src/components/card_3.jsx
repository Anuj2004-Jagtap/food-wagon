import React from 'react';
import cheese_burger from '../images/cheese-burger.png';
import toffes_cake from '../images/toffes-cake.png';
import dancake from '../images/dancake.png';
import crispy_sandwitch from '../images/crispy-sandwitch.png';
import thai_soup from '../images/thai-soup.png';
import 'remixicon/fonts/remixicon.css';

const card_3 = () => {
  return (
    <>
        <div className="card_3 w-full h-[648px] bg-slate-50 text-center flex flex-col justify-center items-center ">
        <span className='text-[39px] font-bold font-sans pb-14'><h5>Popular items</h5></span>
        <div className='cards flex w-4/5 justify-evenly items-center'>
          <div className='flex items-center text-4xl w-10 h-10 text-white rounded-lg bg-amber-400'>
          <i class="ri-arrow-left-s-line"></i>
          </div>
          <div className="card1 text-left ">
            <div className="image w-52 h-52 bg-black rounded-xl overflow-hidden">
              <img src={cheese_burger} alt="" />
            </div>
            <span className='title text-[19px] font-bold'>Cheese Burger</span>
            <div>
              <svg className='w-3 h-5  text-orange-500 inline pr-0.5' aria-hidden="true" focusable="false" data-prefix="fas" data-icon="map-marker-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" data-fa-i2svg=""><path fill="currentColor" d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path></svg>
              <span className='text-[16px] text-amber-400 font-medium pl-1'>Burger Arena</span>
            </div>
            <span>$3.88</span>
            <div>

              <button className='w-52  h-10 bg-orange-500 text-center text-white rounded-md  font-bold'>Order Now</button>
            </div>


          </div>
          <div className="card1 text-left">
            <div className="image w-52 h-52 bg-black rounded-xl overflow-hidden">
              <img src={toffes_cake} alt="" />
            </div>
            <span className='title text-[19px] font-bold'>Toffe's Cake</span>
            <div>
              <svg className='w-3 h-5 text-orange-500 inline pr-0.5' aria-hidden="true" focusable="false" data-prefix="fas" data-icon="map-marker-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" data-fa-i2svg=""><path fill="currentColor" d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path></svg>
              <span className='text-[16px] text-amber-400 font-medium pl-1'>Top Sticks</span>
            </div>
            <span>$4.00</span>
            <div>

              <button className='w-52  h-10 bg-orange-500 text-center text-white rounded-md  font-bold'>Order Now</button>
            </div>


          </div>
          <div className="card1 text-left">
            <div className="image w-52 h-52 bg-black rounded-xl overflow-hidden">
              <img src={dancake} alt="" />
            </div>
            <span className='title text-[19px] font-bold'>Dancake</span>
            <div>
              <svg className='w-3 h-5  text-orange-500 inline pr-0.5' aria-hidden="true" focusable="false" data-prefix="fas" data-icon="map-marker-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" data-fa-i2svg=""><path fill="currentColor" d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path></svg>
              <span className='text-[16px] text-amber-400 font-medium pl-1'>Cake World</span>
            </div>
            <span>$1.99</span>
            <div>

              <button className='w-52  h-10 bg-orange-500 text-center text-white rounded-md  font-bold'>Order Now</button>
            </div>


          </div>
          <div className="card1 text-left">
            <div className="image w-52 h-52 bg-black rounded-xl overflow-hidden">
              <img src={crispy_sandwitch} alt="" />
            </div>
            <span className='title text-[19px] font-bold'>Cheese Burger</span>
            <div>
              <svg className='w-3 h-5  text-orange-500 inline pr-0.5' aria-hidden="true" focusable="false" data-prefix="fas" data-icon="map-marker-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" data-fa-i2svg=""><path fill="currentColor" d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path></svg>
              <span className='text-[16px] text-amber-400 font-medium pl-1'>Burger Arena</span>
            </div>
            <span>$3.88</span>
            <div>

              <button className='w-52  h-10 bg-orange-500 text-center text-white rounded-md  font-bold'>Order Now</button>
            </div>


          </div>
          <div className="card1 text-left">
            <div className="image w-52 h-52 bg-black rounded-xl overflow-hidden">
              <img src={thai_soup} alt="" />
            </div>
            <span className='title text-[19px] font-bold'>Thai Soup</span>
            <div>
              <svg className='w-3 h-5  text-orange-500 inline pr-0.5' aria-hidden="true" focusable="false" data-prefix="fas" data-icon="map-marker-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" data-fa-i2svg=""><path fill="currentColor" d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path></svg>
              <span className='text-[16px] text-amber-400 font-medium pl-1'>Foody Man</span>
            </div>
            <span>$2.79</span>
            <div>

              <button className='w-52  h-10 bg-orange-500 text-center text-white rounded-md  font-bold'>Order Now</button>
            </div>


          </div>
          <div className='flex items-center text-4xl w-10 h-10 text-white rounded-lg bg-amber-400'>
          <i class="ri-arrow-right-s-line"></i>
          </div>
        </div>


      </div>
     </>
  )
}

export default card_3