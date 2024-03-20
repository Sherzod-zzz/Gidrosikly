import React from 'react'
import { Link } from 'react-router-dom'
import { Icons } from '../../assets/icons'

const Footer = () => {
  return (
    <footer className='mt-24 bg-gray pt-10 pb-7'>
        <div className="container">
            <div className='flex items-start justify-between'>
                <div className='flex flex-col gap-8'>
                    <h3 className='text-title-color text-xs w-[242px] font-bold'>Подпишитесь на нашу рассылку и узнавайте о акция быстрее</h3>

                    <form>
                        <input type="text" placeholder='Введите ваш e-mail:' className='py-2 px-4'/>
                        <button type='submit' className='py-2 px-4 bg-primary text-white'>Отправить</button>
                    </form>
                </div>

                <div className='flex flex-col gap-3'>
                    <h3 className='font-bold text-title-color text-sm'>Информация </h3>

                    <nav className='flex flex-col gap-3'>
                        <a href='#!' className='text-title-color font-normal text-xs'>О компании</a>
                        <a href='#!' className='text-title-color font-normal text-xs'>Контакты</a>
                        <a href='#!' className='text-title-color font-normal text-xs'>Акции</a>
                        <a href='#!' className='text-title-color font-normal text-xs'>Магазины</a>
                    </nav>
                </div>
                <div className='flex flex-col gap-3'>
                    <h3 className='font-bold text-title-color text-sm'>Информация </h3>

                    <nav className='flex flex-col gap-3'>
                        <a href='#!' className='text-title-color font-normal text-xs'>О компании</a>
                        <a href='#!' className='text-title-color font-normal text-xs'>Контакты</a>
                        <a href='#!' className='text-title-color font-normal text-xs'>Акции</a>
                        <a href='#!' className='text-title-color font-normal text-xs'>Магазины</a>
                    </nav>
                </div>

                <div className='flex items-center justify-center gap-8 self-center'>
                    <a href="#!">
                        <Icons.instaIcon/>
                    </a>
                    <a href="#!">
                        <Icons.vkIcon/>
                    </a>
                    <a href="#!">
                        <Icons.facebookIcon/>
                    </a>
                    <a href="#!">
                        <Icons.youtubeIcon/>
                    </a>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer