import React from 'react';

const Footer = () => {
    return (
        <footer class="footer p-10 bg-accent text-white">
            <div>
                <span class=" font-serif text-lg text-white"><span className='text-secondary'>Lusury</span><span>Living</span></span>
                <a class="link link-hover hover:text-gray-300">Branding</a>
                <a class="link link-hover hover:text-gray-400 ">Design</a>
                <a class="link link-hover hover:text-gray-400 ">Marketing</a>
                <a class="link link-hover hover:text-gray-400 ">Advertisement</a>
            </div>
            <div>
                <span class=" text-lg text-white font-serif">Services</span>
                <a class="link link-hover hover:text-gray-300">Branding</a>
                <a class="link link-hover hover:text-gray-300">Design</a>
                <a class="link link-hover hover:text-gray-300">Marketing</a>
                <a class="link link-hover">Advertisement</a>
            </div>
            <div>
                <span class=" text-lg text-white font-serif">Company</span>
                <a class="link link-hover hover:text-gray-300">About us</a>
                <a class="link link-hover hover:text-gray-300">Contact</a>
                <a class="link link-hover hover:text-gray-300">Jobs</a>
                <a class="link link-hover hover:text-gray-300">Press kit</a>
            </div>
            <div>
                <span class=" text-lg text-white font-serif">Social</span>
                <a class="link link-hover hover:text-gray-300">Facebook</a>
                <a class="link link-hover hover:text-gray-300">Twiter</a>
                <a class="link link-hover hover:text-gray-300">Instagram</a>
            </div>
        </footer>
    );
};

export default Footer;