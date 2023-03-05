'use client';

import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';

const InsightCard = ({ imgUrl, title, subtitle, index }) => (
  <motion.div variants={fadeIn('up', 'spring', index * 0.5, 1)}
    className="flex flex-col md:flex-row gap-4 items-center justify-between"
  >
    <img src={imgUrl} alt="planets" className="md:w-[270px] w-full h-[250px] rounded-[32px] object-cover " />
    <div className="w-full flex justify-between items-center ">
      <div className="flex-1 md:ml-[62px] flex flex-col max-w-[650px] ">
        <h4 className="lg:text-[42px] text-2xl text-white font-normal ">{title}</h4>
        <p className="mt-4 font-normal lg:text-xl text-sm text-secondary-white ">{subtitle}</p>
      </div>
    </div>
    <div className="lg:flex hidden items-center justify-center w-[100px] h-[80px] rounded-full bg-transparent border-[1px] ">
      <img src="arrow.svg" alt="arrow" className=" object-contain " />
    </div>
  </motion.div>
);

export default InsightCard;
