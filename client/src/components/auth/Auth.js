import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { useState } from 'react';
import { Checkbox } from 'primereact/checkbox';
//import logo from '../../assets/iconEnter/logo.png'

const Auth = () => {
    return (
        <div style={{ background: 'url("assets/images/blocks/signin/signin-2.jpg") no-repeat', backgroundSize: 'cover' }} className="px-4 py-8  lg:px-8">
            <div className="w-full p-4 lg:p-7 md:px-6 lg:px-8 flex align-items-center justify-content-center" style={{ backgroundColor: 'rgba(255,255,255,.7)' }}>
                
                    <div className="surface-card p-4 shadow-2 border-round w-full lg:w-6">
                        <div className="text-center mb-5">
                            {/** <img src={logo} alt="hyper" height={50} className="mb-3" /> */}
                            <div className="text-900 text-3xl font-medium mb-3">Bienvenido</div>
                            <span className="text-600 font-medium line-height-3">Activa la cuenta para Iniciar Sesión</span>
                            <a className="font-medium no-underline ml-2 text-blue-500 cursor-pointer">¡Ingresa los datos!</a>
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-900 font-medium mb-2">Email</label>
                            <InputText type="text" className="w-full mb-3" />

                            <label htmlFor="password" className="block text-900 font-medium mb-2">Token</label>
                            <InputText type="number" className="w-full mb-3" />



                            <Button label="Activar Cuenta" icon="pi pi-user" className="w-full" style={{ background: '#fbc02d', border: '#fbc02d'}} />
                        </div>
                    </div>
                
            </div>
            




        </div>
    )
}

export default Auth