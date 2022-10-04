import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Dialog } from 'primereact/dialog';
import toast, { Toaster } from 'react-hot-toast';

const Login = ({ setLogged }) => {

    const navigate = useNavigate()
    const [displayResponsive, setDisplayResponsive] = useState(false);
    const [displayResponsiveRegister, setDisplayResponsiveRegister] = useState(false);
    const [txtUsername, setTxtUsername] = useState("");
    const [txtPassword, setTxtPassword] = useState("");

    const [txtName, settxtName] = useState("");
    const [txtlastName, settxtlastName] = useState("");
    const [txtNumberPhone, settxtNumberPhone] = useState("");
    const [txtEmail, settxtEmail] = useState("");


    const onLogin = async (e) => {
        e.preventDefault()

        if (txtUsername === "" || txtPassword === "") {
            // muestra el toast
            toast.error("Ingresa los datos por favor.")
            return
        } else {
            // ejecutar la informacion
            const json = {
                "username": txtUsername,
                "password": txtPassword
            }


            const res = await axios.post('http://localhost:8080/user/api/login', json)
            console.log(res.data)
            if (res.data.id === null) {
                toast.error("No existe el usuario")
                setTxtUsername("")
                return 
            } else {
                sessionStorage.setItem("id", res.data.id)
                sessionStorage.setItem("url", res.data.urlImg)
                sessionStorage.setItem("name", res.data.name)
                sessionStorage.setItem("lastname", res.data.lastName)
                sessionStorage.setItem("phoneNumber", res.data.numberPhone)
                sessionStorage.setItem("email", res.data.email)
                sessionStorage.setItem("username", res.data.username)
                sessionStorage.setItem("password", res.data.password)                
            }
        }


        setLogged('true')
        navigate('../', { replace: true })
    }

    const httpCreateUser = async () => {

        if (txtName === "" || txtlastName === "" || txtEmail === "" || txtNumberPhone === "" || txtUsername === "" || txtPassword === "") {
            toast.error("Ingresa los datos por favor.")
            return
        } else {
            const json = {
                "name": txtName,
                "lastName": txtlastName,
                "email": txtEmail,
                "numberPhone": txtNumberPhone,
                "userName": txtUsername,
                "password": txtPassword,
                "urlImg": null,
            }

            const res = await axios.post('http://localhost:8080/user/api/createUser', json)
            console.log(res.data)
            setDisplayResponsiveRegister(false)
            settxtName("")
            settxtlastName("")
            settxtEmail("")
            settxtNumberPhone("")
        }
    }

    const httpPutPassInLogin = async () => {

        if (txtUsername === "" || txtPassword === "") {
            toast.error("Ingresa los datos por favor.")
            return
        } else {


            const json = {
                "name": null,
                "lastName": null,
                "email": null,
                "numberPhone": null,
                "userName": txtUsername,
                "password": txtPassword,
                "urlImg": null,
            }

            const res = await axios.post('http://localhost:8080/user/api/putPasswordByLogin', json)
            console.log(res.data)
            setDisplayResponsive(false)
            setTxtUsername("")
            setTxtPassword("")            
        }
    }

    const renderFooter = () => {
        return (
            <div>
                <Button label="Cerrar" icon="pi pi-times" onClick={() => setDisplayResponsive(false)} className="p-button-text" />
                <Button label="Recuperar" icon="pi pi-check" onClick={() => httpPutPassInLogin()} className="p-button-rounded p-button-help" />
            </div>
        );
    }

    const renderFooterRegister = () => {
        return (
            <div>
                <Button label="Cerrar" icon="pi pi-times" onClick={() => setDisplayResponsiveRegister(false)} className="p-button-text" />
                <Button label="Registrarse" icon="pi pi-check" onClick={() => httpCreateUser()} className="p-button-rounded p-button-help" />
            </div>
        );
    }

    return (
        <div className='image'>
            <div className='h-screen flex align-content-center justify-content-center'>
                <div className='flex align-items-center justify-content-center'>
                    <div className='col-10 border-round-3xl shadow-7'>
                        <h1 className='text-center'>Iniciar sesión</h1>

                        <div className='col-12'>
                            <h1 className='mb-1'>Usuario:</h1>
                            <InputText className=' w-full' value={txtUsername} onChange={(e) => setTxtUsername(e.target.value)} />
                            <h1 className='mb-1'>Contraseña:</h1>
                            <InputText className=' w-full' value={txtPassword} type="password" onChange={(e) => setTxtPassword(e.target.value)} />
                            <Button label="¿Olvidaste tu contraseña?" onClick={() => {
                                setTxtUsername("")
                                setTxtPassword("")
                                setDisplayResponsive(true)
                            }} className="p-button-link mt-2" />
                        </div>

                        <Dialog header="Recuperar contraseña" visible={displayResponsive} onHide={() => setDisplayResponsive(false)} footer={renderFooter}>
                            <div className='flex justify-content-center'>
                                <div className='col-12'>
                                    <h1 className='mb-1'>Usuario:</h1>
                                    
                                    <InputText className=' w-full' value={txtUsername} onChange={(e) => setTxtUsername(e.target.value)}/>
                                    <h1 className='mb-1'>Nueva contraseña:</h1>
                                    
                                    <InputText className=' w-full' value={txtPassword} onChange={(e) => setTxtPassword(e.target.value)} />
                                </div>
                            </div>
                        </Dialog>

                        <Dialog header="Registrarse" visible={displayResponsiveRegister} onHide={() => setDisplayResponsiveRegister(false)} footer={renderFooterRegister}>
                            <div className='flex justify-content-center'>
                                <div className='col-12'>
                                    <h3 className='mb-1'>Nombre:</h3>

                                    <InputText className=' w-full' value={txtName} onChange={(e) => settxtName(e.target.value)} />
                                    <h3 className='mb-1'>Apellido:</h3>

                                    <InputText className=' w-full' value={txtlastName} onChange={(e) => settxtlastName(e.target.value)} />
                                    <h3 className='mb-1'>Nombre de usuario:</h3>

                                    <InputText className=' w-full' value={txtUsername} onChange={(e) => setTxtUsername(e.target.value)} />
                                    <h3 className='mb-1'>Correo:</h3>

                                    <InputText className=' w-full' value={txtEmail} onChange={(e) => settxtEmail(e.target.value)} />
                                    <h3 className='mb-1'>Teléfono:</h3>

                                    <InputText className=' w-full' value={txtNumberPhone} onChange={(e) => settxtNumberPhone(e.target.value)} />
                                    <h3 className='mb-1'>Contraseña:</h3>

                                    <InputText className=' w-full' type="password" value={txtPassword} onChange={(e) => setTxtPassword(e.target.value)} />
                                </div>
                            </div>
                        </Dialog>

                        <Toaster
                            position="bottom-left"
                            reverseOrder={false}
                        />


                        <div className='flex justify-content-center'>
                            <div className='col-12'>

                                <Button label="Iniciar sesión" onClick={(e) => onLogin(e)} className="p-button-rounded p-button-success col-12" />
                                <div className='flex justify-content-center'>
                                    <Button label="Registrarse" onClick={() => {
                                        setTxtUsername("")
                                        setTxtPassword("")
                                        setDisplayResponsiveRegister(true)
                                    }} className="p-button-rounded p-button-help col-8 mt-3" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login 