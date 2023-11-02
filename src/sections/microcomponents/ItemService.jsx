import React from 'react';

const ItemService = ({ data }) => {


  return (
    <aside
      className={`flex flex-col items-center justify-between lg:flex-row `}
    >
    <a href={data.link}>
      <img src={data.icon} alt={data.title} className='h-10 lg:h-20'/>
      </a>
      <section className={`text-center lg:text-start lg:px-7`}>
        <h2 className='text-white font-normal lg:text-2xl'>{data.title}</h2>
        <p className={` text-[#616161] font-normal text-sm lg:text-base`}>
          {data.subTitle}
        </p>
      </section>
    </aside>
  );
};

export default ItemService;
