import React, { useState } from 'react';
import Service from './Service';

const Services = () => {

    const [rooms, setRooms] = useState([])

    fetch('rooms.json')
        .then(res => res.json())
        .then(rooms => setRooms(rooms))



    return (
        <div className='p-5 text-center justify-center'>
            <h2 className="text-3xl my-5">AVAILABLE ROOM</h2>


            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 center'>
                {rooms.map(room => <Service
                    room={room}
                    key={room._id}
                ></Service>)

                }
            </div>






            <div className='flex justify-center my-4'>
                <a href="#_" class="  px-4 py-2.5 relative rounded group overflow-hidden font-medium bg-blue-100 text-primary-600 inline-block justify-center">
                    <span class="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-500 ease-in-out transform translate-x-0 bg-secondary group-hover:h-full opacity-90"></span>
                    <span class=" relative group-hover:text-white">SEE ALL SERVICES</span>
                </a>
            </div>
        </div>
    );
};

export default Services;