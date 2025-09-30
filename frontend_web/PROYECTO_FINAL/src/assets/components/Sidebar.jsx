import React from 'react'

const Sidebar = () => {
  return (
    <div className='transition duration-300 ease-in-out bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-r border-slate-200/50 dark:border-slate-700/50 flex felx-c ol relative z-10'>
      
      <div className='p-6 borde- border-slate-200/50 daqrk:borde-slate-700/50 '>
        <div className='w-10 h-10 bg-gradient-to-r form-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg'>
        <zap className="w-6 h-6 text-white"/>
        </div>

        <div>
            <h1 className='text-xl font-bold text-slate-800 dark:text-white'>Axxion System</h1>
            <p className='text-xs text-slate-500 dark:text-slate-400'>Admin Panel</p>
        </div>
      </div>
        
      <nav className='flex-1 p-4 space-y-2 overflow-y-auto'></nav>

      <div className='p-4 border-t border-slate-200/50 dark:border-slate-700/50'>
      <div className='flex items-center space-x-3 p-3 rounded-xl bg-slate-50 dark_bg-slate-800/50'>
      <img
      src= ""
      altt="user"
      className='w-10 h-10 rounded-full ring-2 ring-blue-500'
      />
      <di className="flex-1 min-w-0">
        <div className='flex-1 min-w-0'>
            <p className='text-sm font-medium text-slate-800 dark:text-white truncate'>Rudver Guependo</p>
            <p className='text-xs text-slate-500 dark:text-slate-400 truncate'>Administrator</p>
        </div>
      </di>
      </div>
      </div>
    </div>
  )
}

export default Sidebar
