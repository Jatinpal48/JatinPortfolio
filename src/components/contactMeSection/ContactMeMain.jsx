import React from 'react'
import ContactMeLeft from './ContactMeLeft'
import ContactMeRight from './ContactMeRight'

function ContactMeMain() {
    return (
        <div id='Contact' className='max-w-[1200px] mx-auto items-center justify-center mt-[100px] px-4'>
            <h2 className='text-6xl text-cyan mb-10 text-center'>Contact Me</h2>
            <div className='flex juatify-between gap-24 bg-brown p-8 rounded-2xl lg:flex-row sm:flex-col '>
            <ContactMeLeft/>
            <ContactMeRight/>
            </div>
        </div>
    )
}

export default ContactMeMain
