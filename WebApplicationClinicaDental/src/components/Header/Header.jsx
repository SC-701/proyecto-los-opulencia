import { LogOut } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom';

const Header = ({ title }) => {
	const navigate = useNavigate();

	const cerrarSesion = () => {
		localStorage.removeItem('access_token');
		navigate(0);
	};

	return (
		<>
			<header className='bg-[#B4C0D9] bg-opacity-50 backdrop-blur-md shadow-lg border-b border-[#B4C0D9]'>
				<div className='max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex items-center gap-4 justify-between'>
					<h1 className='text-2xl  font-semibold text-[#263238]'>{title}</h1>
					<button onClick={cerrarSesion} className='bg-[#B4C0D9] text-[#263238] py-2 px-4 rounded-md hover:bg-[#A0A8B8] transition-colors' style={{ cursor: 'pointer' }}>
						<LogOut className='text-[#263238]'/>	
					</button>
				</div>
				
			</header>
		</>

	)
}

export default Header
