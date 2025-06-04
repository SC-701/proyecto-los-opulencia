import { Menu } from 'lucide-react'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { sidebar_item } from '../../assets/constants/sidebar_item'
import { useSidebar } from '../../hooks/useSidebar'

const Sidebar = () => {
    
    const { abrirSidebar, toggleSidebar } = useSidebar(true);
    

    return (
        <motion.div
            className={`relative z-10 transition-all duration-300 ease-in-out flex-shrink-0${abrirSidebar ? ' w-64' : ' w-10'}`}
            animate={{ width: abrirSidebar ? 256 : 60 }}
        >
            <div
                className='h-full bg-opacity-50 backdrop-blur-md flex flex-col border-r border-[#B4C0D9]'
                style={{ backgroundColor: '#B4C0D9' }} 
            >
                <motion.button
                    whileHover={{ scale: 1.0 }}
                    whileTap={{ scale: 0.7 }}
                    onClick={toggleSidebar}
                    className='p-2 rounded-full hover:bg-[#7E94BF] transition-colors max-w-fit ml-2 mt-2'
                >
                    <Menu size={20} color='#263238' />
                </motion.button>

                <nav className='mt-8 flex-grow'>
                    {sidebar_item.map((item) => (
                        <Link key={item.path} to={item.path}>
                            <motion.div
                                className='flex items-center p-4 text-sm font-medium rounded-lg hover:bg-[#7E94BF] transition-colors mb-2 text-[#263238]'
                            >
                                <item.icon size={20} style={{ color: item.color, minWidth: '20px' }} />
                                <AnimatePresence>
                                    {abrirSidebar && (
                                        <motion.span
                                            className='ml-4 whitespace-nowrap'
                                            initial={{ opacity: 0, width: 0 }}
                                            animate={{ opacity: 1, width: 'auto' }}
                                            exit={{ opacity: 0, width: 0 }}
                                            transition={{ duration: 0.2, delay: 0.3 }}
                                        >
                                            {item.nombre}
                                        </motion.span>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        </Link>
                    ))
                    }
                </nav>
            </div>
        </motion.div>
    )
}

export default Sidebar
