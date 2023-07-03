"use client"
import { motion } from 'framer-motion'
import withAnimate from '../../hoc/WithAnimate';
import { textVariant } from '../../../core/utils/motion';
import { founders } from '../../../core/shared/constants';
import { FoundersCard } from '../../cards';

const Founders = () => {
  return (
    <div className="w-[100%]">
      <div className="w-[100%] padding-x padding-y bg-center">
        <motion.div variants={textVariant(0.1)}>
          <p className="text-2xl">Executives</p>
          <h1>Founders</h1>
        </motion.div>
        <div className='h-[10rem] mt-2 w-full bg-white rounded-lg flex items-center justify-center shadow-2xl'>
          <div className="w-[90%] h-[90%]" style={{ backgroundImage: 'url("https://www.webdew.com/hubfs/dotted-bg.svg")', backgroundRepeat: "no-repeat", backgroundPosition: 'center', backgroundSize: 'contain' }} />
        </div>
        <div className="flex flex-wrap -mt-24 gap-7 padding-x">
          {founders.map((founder, index) => (
            <FoundersCard key={founder.name} {...founder} index={index} />
          ))}
        </div>

      </div>

    </div>
  );
}

export default withAnimate(Founders)