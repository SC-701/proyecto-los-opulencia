import React from 'react'
import { motion } from 'framer-motion'

const DashBoardCard = ({nombre, icon: Icon, color, valor}) => {
    return (
		<motion.div
			className='bg-white bg-opacity-50 backdrop-blur-md overflow-hidden shadow-lg rounded-xl '
			whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)" }}
		>
			<div className='px-4 py-5 sm:p-6'>
				<span className='flex items-center text-sm font-medium text-[#263238]'>
					<Icon size={20} className='mr-2' style={{ color }} />
					{nombre}
				</span>
				<p className='mt-1 text-3xl font-semibold text-[#263238]'>{valor}</p>
			</div>
		</motion.div>
    )
}

export default DashBoardCard
