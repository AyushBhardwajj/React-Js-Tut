import React from "react";

const Card = (props) => {
  console.log(props);
  return (
    <div className='bg-white text-black inline-block p-6 text-center rounded '>
      {props.user.map((elem) => {
        return (
          <div className='display-flex inline-block text-center'>
            <h1>{elem.name}</h1>
            <h1>{elem.age}</h1>
            <h1>{elem.profession}</h1>
            <h1>{elem.city}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
