'use client'
import { motion } from 'framer-motion';
import { textVariant } from '../../../core/utils/motion';
import withAnimate from '../../hoc/WithAnimate';

const Mission = () => {
  return (
    <div className="w-[100%] flex flex-col md:grid md:grid-cols-2 padding-x padding-y justify-between gap-10">
      <div>
        <motion.div variants={textVariant(0.1)}>
          <p className="text-2xl">Company&apos;s Mission</p>
          <h1>Mission</h1>
        </motion.div>
        <motion.div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam culpa modi aut doloribus nihil ratione? Necessitatibus assumenda laudantium placeat vero. Eum ducimus veniam quae quas sapiente aliquam, vitae deserunt ullam non officia? Quos, debitis itaque. Consequatur voluptate illum magni. Nemo harum sit fugiat, esse explicabo ea eveniet incidunt perferendis blanditiis!
          </p>
        </motion.div>
      </div>
      <div className={'bg-white h-[20rem] w-[100%]'}>

      </div>
    </div>
  )
}

export default withAnimate(Mission);