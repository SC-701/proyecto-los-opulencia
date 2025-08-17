import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Eye, EyeOff } from 'lucide-react';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-blue-300">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="card w-full max-w-md shadow-xl bg-white rounded-2xl p-6"
            >

                <div className="text-center mb-6">
                    <h1 className="text-2xl font-bold text-blue-700">Clínica Dental</h1>
                    <p className="text-gray-500 text-sm">Inicia sesión para continuar</p>
                </div>


                <form>
                    <div className="form-control mb-4">
                        <label className="label">
                            <span className="label-text font-medium">Correo electrónico</span>
                        </label>
                        <input
                            type="email"
                            placeholder="ejemplo@correo.com"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>

                    <div className="form-control mb-4 relative">
                        <label className="label">
                            <span className="label-text font-medium">Contraseña</span>
                        </label>
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="********"
                            className="input input-bordered w-full pr-10"
                            required
                        />

                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-4 top-8.5 text-gray-500 hover:text-gray-700"
                        >
                            {showPassword ? (
                                <Eye size={22} />
                            ) : (
                                <EyeOff size={22} />
                            )}
                        </button>
                    </div>


                    <button type="submit" className="btn btn-primary w-full mt-2">
                        Iniciar sesión
                    </button>
                </form>


            </motion.div>
        </div>
    )
}

export default Login
