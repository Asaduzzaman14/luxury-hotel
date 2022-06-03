import React from 'react';

const Service = ({ room }) => {

    const { name, _id, img, price } = room

    return (
        <div class="card card-compact w-60  bg-base-100 shadow-xl">
            <figure><img className='w-full h-50' src={img} alt="room" /></figure>
            <div class="card-body">
                <h2 class="card-title">{name}</h2>
                <p>Price: ${price}</p>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary">Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default Service;