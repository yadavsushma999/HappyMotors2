import React, { useState, useEffect } from 'react';
import { stats } from '../constants';
import styles from '../style';

const Stats = () => {
  return (
    <div>
      <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
        {stats.map((stat) => (
          <StatCard key={stat.id} value={stat.value} title={stat.title} />
        ))}
      </section>
    </div>
  );
};

const StatCard = ({ value, title }) => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    let increment = 1;
    const target = value;
    const duration = 2000; // Duration in ms for the counting to complete
    const stepTime = Math.abs(Math.floor(duration / target));

    const interval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount < target) {
          return prevCount + increment;
        } else {
          clearInterval(interval);
          return target;
        }
      });
    }, stepTime);

    return () => clearInterval(interval);
  }, [value]);

  return (
    <div className={`flex-1 flex justify-center items-center flex-row m-3`}>
      <h4
        className='font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] 
        leading-[45px] text-white'>
        {count}+
      </h4>
      <p className='font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[23px] 
        leading-[21px] text-gradient uppercase ml-3'>
        {title}
      </p>
    </div>
  );
};

export default Stats;
