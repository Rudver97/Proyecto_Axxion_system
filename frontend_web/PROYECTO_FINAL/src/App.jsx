import React from 'react'
import Sidebar from './assets/components/Layout/Sidebar';
import Sidebar from './assets/components/Layout/Header';

const login = () =>{
  return (
    <div>
      <div>
        <h1>login</h1>
      <div>
        <div>
          <input type='email'/>
          <label htmlFor=''>your email</label>
          </div>
          <div>
            <input type="checkbox" name="" id=""/>
            <label htmlform="remember me"></label>
          </div>
          <span>Forgot password?</span>
        </div>
        <button type='submit'>login</button>
      </div>
    </div>
  );
}

function App ()  {
  return (
        <div className='min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-all duration-500'>
        <div className='flex h-screen overflow-hiddden'>
        <sidebar/>
        <div className='flex-1 flex flex-col overflow-hidden'>
        <header/>
        </div>
        </div>
      </div>
  );
}

export default App
