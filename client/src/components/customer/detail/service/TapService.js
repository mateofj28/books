
import React, { useState } from "react";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';



const TapService = () => {    
    const [user, setUser] = useState([])

    const object = [
        {
            id: '1',
            state: 'Activo',
            descrip: 'Internet ADSL 2MB/1MB',
            plan: 'ADSL 2MB/1MB',
            price: '200.00',
            startDate: '2022-4-11',
            endDate: '2022-5-11',
            serLogin: '0001',
            ipv4: '',
            rule: 'No rule'
        },
        {
            id: '2',
            state: 'Online',
            descrip: 'Internet ADSL 2MB/1MB',
            plan: 'ADSL 2MB/0.5MB',
            price: '100.00',
            startDate: '2022-5-11',
            endDate: '2022-6-11',
            serLogin: '00011',
            ipv4: '',
            rule: 'No rule'
        },
        {
            id: '2',
            state: 'Online',
            descrip: 'Internet ADSL 2MB/1MB',
            plan: 'ADSL 2MB/0.5MB',
            price: '100.00',
            startDate: '2022-5-11',
            endDate: '2022-6-11',
            serLogin: '00011',
            ipv4: '',
            rule: 'No rule'
        },
        {
            id: '2',
            state: 'Online',
            descrip: 'Internet ADSL 2MB/1MB',
            plan: 'ADSL 2MB/0.5MB',
            price: '100.00',
            startDate: '2022-5-11',
            endDate: '2022-6-11',
            serLogin: '00011',
            ipv4: '',
            rule: 'No rule'
        },
        {
            id: '2',
            state: 'Online',
            descrip: 'Internet ADSL 2MB/1MB',
            plan: 'ADSL 2MB/0.5MB',
            price: '100.00',
            startDate: '2022-5-11',
            endDate: '2022-6-11',
            serLogin: '00011',
            ipv4: '',
            rule: 'No rule'
        },
        {
            id: '2',
            state: 'Online',
            descrip: 'Internet ADSL 2MB/1MB',
            plan: 'ADSL 2MB/0.5MB',
            price: '100.00',
            startDate: '2022-5-11',
            endDate: '2022-6-11',
            serLogin: '00011',
            ipv4: '',
            rule: 'No rule'
        },
        {
            id: '2',
            state: 'Online',
            descrip: 'Internet ADSL 2MB/1MB',
            plan: 'ADSL 2MB/0.5MB',
            price: '100.00',
            startDate: '2022-5-11',
            endDate: '2022-6-11',
            serLogin: '00011',
            ipv4: '',
            rule: 'No rule'
        },
        {
            id: '2',
            state: 'Online',
            descrip: 'Internet ADSL 2MB/1MB',
            plan: 'ADSL 2MB/0.5MB',
            price: '100.00',
            startDate: '2022-5-11',
            endDate: '2022-6-11',
            serLogin: '00011',
            ipv4: '',
            rule: 'No rule'
        },
        {
            id: '2',
            state: 'Online',
            descrip: 'Internet ADSL 2MB/1MB',
            plan: 'ADSL 2MB/0.5MB',
            price: '100.00',
            startDate: '2022-5-11',
            endDate: '2022-6-11',
            serLogin: '00011',
            ipv4: '',
            rule: 'No rule'
        },
        {
            id: '2',
            state: 'Online',
            descrip: 'Internet ADSL 2MB/1MB',
            plan: 'ADSL 2MB/0.5MB',
            price: '100.00',
            startDate: '2022-5-11',
            endDate: '2022-6-11',
            serLogin: '00011',
            ipv4: '',
            rule: 'No rule'
        },
        {
            id: '2',
            state: 'Online',
            descrip: 'Internet ADSL 2MB/1MB',
            plan: 'ADSL 2MB/0.5MB',
            price: '100.00',
            startDate: '2022-5-11',
            endDate: '2022-6-11',
            serLogin: '00011',
            ipv4: '',
            rule: 'No rule'
        },
        {
            id: '2',
            state: 'Online',
            descrip: 'Internet ADSL 2MB/1MB',
            plan: 'ADSL 2MB/0.5MB',
            price: '100.00',
            startDate: '2022-5-11',
            endDate: '2022-6-11',
            serLogin: '00011',
            ipv4: '',
            rule: 'No rule'
        },
        {
            id: '2',
            state: 'Online',
            descrip: 'Internet ADSL 2MB/1MB',
            plan: 'ADSL 2MB/0.5MB',
            price: '100.00',
            startDate: '2022-5-11',
            endDate: '2022-6-11',
            serLogin: '00011',
            ipv4: '',
            rule: 'No rule'
        },
        {
            id: '2',
            state: 'Online',
            descrip: 'Internet ADSL 2MB/1MB',
            plan: 'ADSL 2MB/0.5MB',
            price: '100.00',
            startDate: '2022-5-11',
            endDate: '2022-6-11',
            serLogin: '00011',
            ipv4: '',
            rule: 'No rule'
        },
        {
            id: '2',
            state: 'Online',
            descrip: 'Internet ADSL 2MB/1MB',
            plan: 'ADSL 2MB/0.5MB',
            price: '100.00',
            startDate: '2022-5-11',
            endDate: '2022-6-11',
            serLogin: '00011',
            ipv4: '',
            rule: 'No rule'
        },
        {
            id: '2',
            state: 'Online',
            descrip: 'Internet ADSL 2MB/1MB',
            plan: 'ADSL 2MB/0.5MB',
            price: '100.00',
            startDate: '2022-5-11',
            endDate: '2022-6-11',
            serLogin: '00011',
            ipv4: '',
            rule: 'No rule'
        },
        {
            id: '2',
            state: 'Online',
            descrip: 'Internet ADSL 2MB/1MB',
            plan: 'ADSL 2MB/0.5MB',
            price: '100.00',
            startDate: '2022-5-11',
            endDate: '2022-6-11',
            serLogin: '00011',
            ipv4: '',
            rule: 'No rule'
        },
        {
            id: '2',
            state: 'Online',
            descrip: 'Internet ADSL 2MB/1MB',
            plan: 'ADSL 2MB/0.5MB',
            price: '100.00',
            startDate: '2022-5-11',
            endDate: '2022-6-11',
            serLogin: '00011',
            ipv4: '',
            rule: 'No rule'
        },
        {
            id: '2',
            state: 'Online',
            descrip: 'Internet ADSL 2MB/1MB',
            plan: 'ADSL 2MB/0.5MB',
            price: '100.00',
            startDate: '2022-5-11',
            endDate: '2022-6-11',
            serLogin: '00011',
            ipv4: '',
            rule: 'No rule'
        },
        {
            id: '2',
            state: 'Online',
            descrip: 'Internet ADSL 2MB/1MB',
            plan: 'ADSL 2MB/0.5MB',
            price: '100.00',
            startDate: '2022-5-11',
            endDate: '2022-6-11',
            serLogin: '00011',
            ipv4: '',
            rule: 'No rule'
        },
        {
            id: '2',
            state: 'Online',
            descrip: 'Internet ADSL 2MB/1MB',
            plan: 'ADSL 2MB/0.5MB',
            price: '100.00',
            startDate: '2022-5-11',
            endDate: '2022-6-11',
            serLogin: '00011',
            ipv4: '',
            rule: 'No rule'
        },
        {
            id: '2',
            state: 'Online',
            descrip: 'Internet ADSL 2MB/1MB',
            plan: 'ADSL 2MB/0.5MB',
            price: '100.00',
            startDate: '2022-5-11',
            endDate: '2022-6-11',
            serLogin: '00011',
            ipv4: '',
            rule: 'No rule'
        },
        {
            id: '2',
            state: 'Online',
            descrip: 'Internet ADSL 2MB/1MB',
            plan: 'ADSL 2MB/0.5MB',
            price: '100.00',
            startDate: '2022-5-11',
            endDate: '2022-6-11',
            serLogin: '00011',
            ipv4: '',
            rule: 'No rule'
        },
        {
            id: '2',
            state: 'Online',
            descrip: 'Internet ADSL 2MB/1MB',
            plan: 'ADSL 2MB/0.5MB',
            price: '100.00',
            startDate: '2022-5-11',
            endDate: '2022-6-11',
            serLogin: '00011',
            ipv4: '',
            rule: 'No rule'
        },              
    ]



    return (
        <>
            <div className="datatable-doc-demo">
                <div className="card">
                    
                    <DataTable value={object} paginator rows={10} rowsPerPageOptions={[10,20,30]} className="p-datatable-customers"
                    currentPageReportTemplate="Mira desde {first} hasta {last} de {totalRecords} Clientes" header="Servicios de Internet" responsiveLayout="scroll">
                        <Column field="id" header="ID" filterField="name" filter filterPlaceholder="Busca por nombre" style={{ minWidth: '10rem' }}></Column>
                        <Column field="state" header="Estado" filterField="name" filter filterPlaceholder="Busca por nombre" style={{ minWidth: '10rem' }}></Column>
                        <Column field="descrip" header="Descripción" filterField="lastName" filter filterPlaceholder="Busca por apellido" style={{ minWidth: '10rem' }}></Column>
                        <Column field="plan" header="Plan" filterField="cedula" filter filterPlaceholder="Busca por cedula" style={{ minWidth: '10rem' }}></Column>
                        <Column field="price" header="Precio" filterField="telefono" filter filterPlaceholder="Busca por telefono" style={{ minWidth: '10rem' }}></Column>
                        <Column field="startDate" header="Fecha de Inicio" ></Column>
                        <Column field="endDate" header="Facturado hasta" ></Column>
                        <Column field="serLogin" header="Servicio de login" ></Column>
                        <Column field="ipv4" header="IPv4" ></Column>
                        <Column field="rule" header="Reglas" ></Column>
                    </DataTable>
                </div>
            </div>
        </>
    )
}

export default TapService