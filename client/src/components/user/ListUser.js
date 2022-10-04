import React, { useState, useEffect } from "react";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Card as div } from "primereact/card";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Dialog } from 'primereact/dialog';
import { Password } from 'primereact/password';
import { UserService } from "../../services/user/UserService";
import "../../../node_modules/primeflex/primeflex.css"
//import toast, { Toaster } from "react-hot-toast";



const ListUser = () => {
    const [user, setUser] = useState([])
    const [displayBasic, setDisplayBasic] = useState(false);
    const [displayResponsive, setDisplayResponsive] = useState(false);
    const userService = new UserService()
    const [userName, setUserName] = useState(null);
    const [name, setName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [email, setEmail] = useState(null);
    const [phone, setPhone] = useState(null);
    const [permission, setPermission] = useState(null);


    useEffect(() => {
        removeClass(document.body, "p-dialog-header-icons")
    })



    const object = [
        {
            permission: 'Si',
            name: 'Fernando',
            lastName: 'Alvarez',
            cedula: '1005095042',
            telefono: '3218907654',
            email: 'fer@gmail.com'
        },
        {
            permission: 'No',
            name: 'Santiago',
            lastName: 'Florez',
            cedula: '1005025042',
            telefono: '3218907654',
            email: 'san@gmail.com'
        },
        {
            permission: 'Si',
            name: 'cris',
            lastName: 'ron',
            cedula: '1005095042',
            telefono: '3218907654',
            email: 'fer@gmail.com'
        },
        {
            permission: 'No',
            name: 'di',
            lastName: 'maria',
            cedula: '1005025042',
            telefono: '3218907654',
            email: 'san@gmail.com'
        },
    ]

    const onCreateUser = (e) => {
        e.preventDefault()

        if (userName === null || name === null || lastName === null || email === null || phone === null || permission === null) {
            //toast.error("Debes Ingresar todos los datos")
            return
        }

        const data = {
            username: userName,
            name: name,
            lastName: lastName,
            email: email,
            phoneNumber: phone,
            permission: permission
        }

        const res = userService.createUser(data)

        console.log(res)

        // toast.promise(res, {
        //     loading: 'Loading',
        //     success: 'Creación exitosa',
        //     error: 'Error',
        // });

        setName('')
        setUserName('')
        setLastName('')
        setEmail('')
        setPhone('')
        setPermission('')
        setDisplayResponsive(false)

    }

    const footer = (
        <div>
            <Button label="Agregar usuario" className="p-button-secondary" onClick={onCreateUser} />
        </div>
    );

    const removeClass = (element, className) => {
        if (element.classList)
            element.classList.remove(className);
        else
            element.className = element.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    }

    const centerTable = `
    
    .p-datatable-table {
        flex: 0 0 auto;
        padding: 0.5rem;
        width: 100%;
    }`

    const styleTable = `
    .p-datatable .p-datatable-tbody > tr {
        background: #313b46 !important;
        color: #ffffff;
    }  
    .p-datatable .p-datatable-thead > tr > th {
        color: #d8d8d9;
        background: #45515f;
    }    
    `

    const colorCard = `
    
    .surface-card {
        background-color: #313b46 !important;
    }`

    return (
        <>
            <style>
                {centerTable}
                {colorCard}
                {styleTable}
            </style>
            <div className="flex justify-content-center mt-6">
                {/* <Toaster
                    position="bottom-center"
                    reverseOrder={false}
                /> */}
                <div className="surface-card shadow-2 p-3 border-50 border-round-3xl col-12" style={{ backgroundColor: 'rgba(255,255,255,.1)' }}>
                    <Button icon="pi pi-user-plus" className="mb-3" onClick={() => setDisplayResponsive(true)} />
                    <Dialog header="Crear usuario" footer={footer} visible={displayResponsive} style={{ width: '50vw' }} closable={false}>
                        <div className="grid mt-1">
                            <div className="col-12 md:col-4">
                                <InputText placeholder="Nombre de usuario" className="w-full" onChange={(e) => setUserName(e.target.value)} />
                            </div>
                            <div className="col-12 md:col-4">
                                <InputText placeholder="Nombre" className="w-full" onChange={(e) => setName(e.target.value)} />
                            </div>
                            <div className="col-12 md:col-4" >
                                <InputText placeholder="Apellidos" className="w-full" onChange={(e) => setLastName(e.target.value)} />
                            </div>
                        </div>

                        <div className="grid">
                            <div className="col-12 md:col-6">
                                <InputText placeholder="Correo" className="w-full" onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className="col-12 md:col-3">
                                <InputText placeholder="Telefono" className="w-full" type="number" maxLength="10" onChange={(e) => setPhone(e.target.value)} />
                            </div>
                            <div className="col-12 md:col-3" >
                                <InputText placeholder="Permisos" className="w-full" onChange={(e) => setPermission(e.target.value)} />
                            </div>
                        </div>
                    </Dialog>



                    <DataTable value={object} style={{ 'borderRadius': '10px' }}>
                        <Column field="permission" header="Permisisos" filterField="name" filter filterPlaceholder="Busca por nombre" style={{ minWidth: '10rem' }}></Column>
                        <Column field="name" header="Nombre" filterField="name" filter filterPlaceholder="Busca por nombre" style={{ minWidth: '10rem' }}></Column>
                        <Column field="lastName" header="Apellido" filterField="lastName" filter filterPlaceholder="Busca por apellido" style={{ minWidth: '10rem' }}></Column>
                        <Column field="cedula" header="Cedula" filterField="cedula" filter filterPlaceholder="Busca por cedula" style={{ minWidth: '10rem' }}></Column>
                        <Column field="telefono" header="Telefono" filterField="telefono" filter filterPlaceholder="Busca por telefono" style={{ minWidth: '10rem' }}></Column>
                        <Column field="email" header="Correo"></Column>
                    </DataTable>




                </div>
            </div>
        </>
    )
}

export default ListUser



