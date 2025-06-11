import React from 'react'

const Header = ({title}) => {
    return (
		<header className='bg-[#B4C0D9] bg-opacity-50 backdrop-blur-md shadow-lg border-b border-[#B4C0D9]'>
			<div className='max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex items-center gap-4'>
				<h1 className='text-2xl  font-semibold text-[#263238]'>{title}</h1>
			</div>
		</header>
        
    )
}

export default Header
