import React from 'react'

const navbar = () => {
    return (
        
            <div className="navbar h-16  bg-slate-50 flex items-center relative">
                <nav className='flex items-center w-full justify-between fixed z-40 bg-slate-100 h-16 px-4'>
                    <span className='pl-14'>

                        <img src="https://technext.github.io/foodwagon/v1.0.0/assets/img/gallery/logo.svg" alt="logo" className='h-8 ' />
                    </span>
                    <span className='text-2xl font-bold text-gradient absolute left-28'>foodwaGon</span>
                    <div className='flex items-center'>
                        <span className='font-bold text-stone-600 text-base pr-2'> Deliver To:</span>
                        <svg className="text-orange-500 w-3 h-4 mx-1" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="map-marker-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" data-fa-i2svg="">
                            <path fill="orange" d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
                        </svg>
                        <span className='text-slate-500 font-bold font-sans'>Current Location <span className='font-bold text-stone-600 text-base p-4'>Mirpur 1 Bus Stand, Pune</span></span>
                    </div>
                    <div className='flex items-center w-64 h-10 bg-white p-2'>
                        <svg className="text-orange-500 w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">
                            <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                        </svg>
                        <input type="text" placeholder='Search Food' className='w-full pl-2 rounded-3xl' />
                    </div>
                    <div className='flex items-center'>
                        <svg className="text-orange-500 w-4 h-4 mr-1" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg="">
                            <path fill="currentColor" d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path>
                        </svg>
                        <span className='text-m font-bold text-gradient pr-4'>Log In</span>
                    </div>
                </nav>
            </div>
        
    )
}

export default navbar