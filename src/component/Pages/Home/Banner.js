import React from 'react';
import banner1 from '../../../image/banner-1.jpg'
import banner2 from '../../../image/banner-2.jpg'
import banner3 from '../../../image/banner-3.jpg'
import banner4 from '../../../image/hotel.jpg'


const Banner = () => {
    return (
        <div class="carousel w-full">

            <div id="slide1" class="carousel-item relative w-full" >
                <div class="hero min-h-screen" style={{
                    background: `url(${banner1})`,
                    backgroundSize: 'cover',
                }}>
                    <div class="hero-overlay bg-blue-900/[.5]"></div>
                    <div class="hero-content text-center text-neutral-content">
                        <div class="max-w-md ">
                            <h1 class="mb-5 text-5xl font-bold sm:text-2xl text-white">Welcome</h1>
                            <p class="mb-5 text-sm text-white lg:text-lg">pProvident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <button class="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>

                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" class="btn btn-circle ">❮</a>
                    <a href="#slide2" class="btn btn-circle">❯</a>
                </div>

            </div>

            <div id="slide2" class="carousel-item relative w-full" >
                <div class="hero min-h-screen" style={{
                    background: `url(${banner2})`,
                    backgroundSize: 'cover',
                }}>
                    <div class="hero-overlay bg-blue-900/[.6]"></div>
                    <div class="hero-content text-center text-neutral-content">
                        <div class="max-w-md text-white">
                            <h1 class="mb-5 text-5xl font-bold ">Hello there</h1>
                            <p class="mb-5 ">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <button class="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>

                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" class="btn btn-circle">❮</a>
                    <a href="#slide3" class="btn btn-circle">❯</a>
                </div>

            </div>

            <div id="slide3" class="carousel-item relative w-full" >
                <div class="hero min-h-screen" style={{
                    background: `url(${banner3})`,
                    backgroundSize: 'cover',
                }}>
                    <div class="hero-overlay bg-blue-900/[.5]"></div>
                    <div class="hero-content text-center text-neutral-content">
                        <div class="max-w-md text-white">
                            <h1 class="mb-5 text-5xl font-bold  text-white">Hello world</h1>
                            <p class="mb-5  text-lg text-white">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <button class="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>

                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" class="btn btn-circle">❮</a>
                    <a href="#slide4" class="btn btn-circle">❯</a>
                </div>

            </div>

            <div id="slide4" class="carousel-item relative w-full" >
                <div class="hero min-h-screen" style={{
                    background: `url(${banner4})`,
                    backgroundSize: 'cover',
                }}>
                    <div class="hero-overlay bg-blue-900/[.5] "></div>
                    <div class="hero-content text-center text-neutral-content">
                        <div class="max-w-md text-white">
                            <h1 class="mb-5 text-5xl font-bold ">Hello </h1>
                            <p class="mb-5 ">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <button class="btn btn-primary ">Get Started</button>
                        </div>
                    </div>
                </div>

                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" class="btn btn-circle">❮</a>
                    <a href="#slide1" class="btn btn-circle ">❯</a>
                </div>

            </div>
        </div>
    );
};

export default Banner;