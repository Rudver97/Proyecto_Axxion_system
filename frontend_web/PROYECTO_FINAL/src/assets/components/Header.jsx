import React from 'react'

function Header(){
  return (
    <div className='bg-white/-80 drak:bg-slate-900/80 backdrop-blur-2x1xl border-b border-slate-200/50 dark:border-slate-700/50 px-6 py-4'>
        <div className='flex items-center space-x-4'>
        <button className='p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors'>
        <menu className='w-6 h-6'/>
        </button>

        <div className='hidden md:block'>
        <h1 className='text-2-x-1 font-black text-slate-800 dark:text-white'></h1>
        <p> </p>
        </div>
        </div>

        <div className='flex-1 max-w-md mx-8'>
        <div className='relative'>
            <search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400"/>
            <input type="text"placeholder='Search Anything' className='w-full pl-10 pr-4'/>
        </div>
    </div>
    );
}

export default header
