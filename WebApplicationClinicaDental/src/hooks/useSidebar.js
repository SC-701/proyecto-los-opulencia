import { useState } from 'react'

export const useSidebar = (inicio =  true) => {
    const [abrirSidebar, setAbrirSidebar] = useState(inicio);

    const toggleSidebar = () => {
        setAbrirSidebar(prev => !prev);
    };

    const openSidebar = () => {
        setAbrirSidebar(true);
    };

    const closeSidebar = () => {
        setAbrirSidebar(false);
    };

    return {
        abrirSidebar,
        toggleSidebar,
        openSidebar,
        closeSidebar
    }
}