import React from 'react';
import Style from "./title.module.css";

const Title = () => {
  return (
    <div className={Style.title_wrapper}>
      <div className={Style.round}></div>
      <h1 className="absolute top-14 flex text-5xl hover:text-green-500 text-[#444444] font-oregano">
        Why people need a Health Coach
      </h1>
    </div>
  );
}

export default Title;