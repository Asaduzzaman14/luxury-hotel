import React from 'react';

const Service = ({ room }) => {

    const { name, _id, img, price } = room

    return (
        <div>
            <h2>Name: {name}</h2>
            <img src={img} alt="" />
        </div>
    );
};

export default Service;