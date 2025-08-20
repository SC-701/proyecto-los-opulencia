import { create } from "zustand";
import { loginUser } from "../services/login";    
import { verificarUser } from "../services/auth"; 

export const useLogin = create((set, get) => ({
  token: localStorage.getItem("access_token") || null,
  user: null,   
  error: null,


  isAuthenticated: () => Boolean(get().token),


  login: async (correoElectronico, passwordHash) => {
    try {
      const { validacionExitosa, accessToken } =
        await loginUser({ correoElectronico, passwordHash });

      if (validacionExitosa && accessToken) {
        localStorage.setItem("access_token", accessToken);
        set({ token: accessToken, error: null });
        return true;
      } else {
        localStorage.removeItem("access_token");
        set({ token: null, error: "Credenciales invalidas" });
        return false;
      }
    } catch {
      localStorage.removeItem("access_token");
      set({ token: null, error: "Error al iniciar sesion" });
      return false;
    }
  },

 checkAuth: async () => {
  try {
    const response = await verificarUser(); 
    set({ user: response, token: localStorage.getItem("access_token") });
    return true;
  } catch {
    localStorage.removeItem("access_token");
    set({ token: null, user: null });
    return false;
    }
  },

}));

