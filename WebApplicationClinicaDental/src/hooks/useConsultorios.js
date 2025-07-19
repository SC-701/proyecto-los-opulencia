import { useState } from "react";
import { obtenerConsultorios } from "../services/Consultorios";

export const useConsultorios = () => {
    const [consultorios, setConsultorios] = useState([]);

    const cargarConsultorios = async () => {
        try {
            const response = await obtenerConsultorios();
            setConsultorios(response);
            return response;
        } catch (err) {
            console.error('Error cargando consultorios:', err);
        }
    };

    return { consultorios, cargarConsultorios };
};

