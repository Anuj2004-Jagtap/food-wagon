import React from 'react';
import noodle from '../images/hero-header.png'

const main = () => {
  return (
    <>
     <div className="main w-full bg-yellow-500 h-[91vh] overflow-hidden relative">
        <div className="pges w-full h-full flex ">
          <div className="text w-1/2 h-full pl-40 pt-28 ">
            <h1 className='text-[68.7971px] text-slate-50 font-black text-nowrap'>Are You Starving?</h1>
            <p className='text-[33.1776px] text-zinc-500 font-bold'>Within a few clicks, find meals <br />that are accessible near you </p>

            <div className="card-body w-[536px] h-36 bg-white rounded-lg ">
              <div className="nav">
                <div className="navcard  rounded-md flex pt-2 mt-6">
                  <span className='bg-red-100 flex rounded-md justify-center items-center ml-5  w-32 h-10'>

                    <svg className='w-5 h-4 text-orange-500' aria-hidden="true" focusable="false" data-prefix="fas" data-icon="motorcycle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" data-fa-i2svg=""><path fill="currentColor" d="M512.9 192c-14.9-.1-29.1 2.3-42.4 6.9L437.6 144H520c13.3 0 24-10.7 24-24V88c0-13.3-10.7-24-24-24h-45.3c-6.8 0-13.3 2.9-17.8 7.9l-37.5 41.7-22.8-38C392.2 68.4 384.4 64 376 64h-80c-8.8 0-16 7.2-16 16v16c0 8.8 7.2 16 16 16h66.4l19.2 32H227.9c-17.7-23.1-44.9-40-99.9-40H72.5C59 104 47.7 115 48 128.5c.2 13 10.9 23.5 24 23.5h56c24.5 0 38.7 10.9 47.8 24.8l-11.3 20.5c-13-3.9-26.9-5.7-41.3-5.2C55.9 194.5 1.6 249.6 0 317c-1.6 72.1 56.3 131 128 131 59.6 0 109.7-40.8 124-96h84.2c13.7 0 24.6-11.4 24-25.1-2.1-47.1 17.5-93.7 56.2-125l12.5 20.8c-27.6 23.7-45.1 58.9-44.8 98.2.5 69.6 57.2 126.5 126.8 127.1 71.6.7 129.8-57.5 129.2-129.1-.7-69.6-57.6-126.4-127.2-126.9zM128 400c-44.1 0-80-35.9-80-80s35.9-80 80-80c4.2 0 8.4.3 12.5 1L99 316.4c-8.8 16 2.8 35.6 21 35.6h81.3c-12.4 28.2-40.6 48-73.3 48zm463.9-75.6c-2.2 40.6-35 73.4-75.5 75.5-46.1 2.5-84.4-34.3-84.4-79.9 0-21.4 8.4-40.8 22.1-55.1l49.4 82.4c4.5 7.6 14.4 10 22 5.5l13.7-8.2c7.6-4.5 10-14.4 5.5-22l-48.6-80.9c5.2-1.1 10.5-1.6 15.9-1.6 45.6-.1 82.3 38.2 79.9 84.3z"></path></svg>
                    <span className='pl-2 text-orange-600'>Delivery</span>
                  </span>

                  <span className='bg-white  flex rounded-md justify-center items-center pl-5  '>
                    <svg className='w-5 h-4 text-neutral-500 ' aria-hidden="true" focusable="false" data-prefix="fas" data-icon="shopping-bag" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M352 160v-32C352 57.42 294.579 0 224 0 153.42 0 96 57.42 96 128v32H0v272c0 44.183 35.817 80 80 80h288c44.183 0 80-35.817 80-80V160h-96zm-192-32c0-35.29 28.71-64 64-64s64 28.71 64 64v32H160v-32zm160 120c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24zm-192 0c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24z"></path></svg>
                    <span className='pl-2 text-neutral-500'>Pickup</span>
                  </span>
                </div>
                <hr className='w-[90%] mt-5 ml-[5%]' />
                <div className="input flex text-center relative ">
                  <span className='text-center'>
                    <svg className='w-3 h-4  text-orange-500 absolute bottom-4 left-8 top-7' aria-hidden="true" focusable="false" data-prefix="fas" data-icon="map-marker-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" data-fa-i2svg=""><path fill="currentColor" d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path></svg>
                    <input type="text" className='w-[355px] h-10 bg-zinc-100 ml-5 mt-4 pl-8 text-neutral-200' placeholder='Enter Your Address' />
                    <button className='w-32 h-10 bg-orange-500 text-center text-white rounded-md ml-3'>Find Food</button>
                  </span>
                </div>

              </div>
            </div>
          </div>
          <div className="img text w-1/2 h-full flex">
            <img src={noodle} className='w-[538px] h-[538px] mt-36 absolute cursor-pointer hover:-translate-y-14 duration-500 ease-out' alt="" />
          </div>
        </div>

      </div>
    </>
  )
}

export default main