import React from 'react'
import { iconos } from '../../assets/iconos'

const Button = ({ onClick, children }) => {     
          return (
            <section className='flex items-center border px-5 py-3 rounded-xl'>
                <input type="text" placeholder='Buscar' className='outline-none placeholder:text-blue-200' />
                <button 
                onClick={onClick}
                className=''>
                    <img src={iconos.lupa} alt="" className='' />
                </button>
            </section>

    );
}

export default Button;