import React, { useState } from "react";

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';



const TapBilling = () => {
    const [user, setUser] = useState([])

    const object = [
        {
            id: '1',
            type: 'Un tiempo de factura',
            number: '10050947321',
            date: '2022-07-11',
            total: '200.00',
            due: '200.00',
            paymentDay: '2022-8-11',
            status: 'No pagado',
        },
        {
            id: '2',
            type: 'Voz',
            number: '20050947321',
            date: '2022-06-12',
            total: '200.00',
            due: '0',
            paymentDay: '2022-7-12',
            status: 'pagado',
        },
        {
            id: '3',
            type: 'Tiempo de factura',
            number: '20040947321',
            date: '2022-05-12',
            total: '200.00',
            due: '0',
            paymentDay: '2022-6-12',
            status: 'pagado',
        },
    ]



    return (
        <>
            <div className="datatable-doc-demo">
                <div className="card">
                    <DataTable value={object} paginator rows={10} rowsPerPageOptions={[10, 20, 30]} className="p-datatable-customers"
                        currentPageReportTemplate="Mira desde {first} hasta {last} de {totalRecords} Clientes" header="Documentación de Finanzas" responsiveLayout="scroll">
                        <Column field="id" header="ID" filterField="name" filter filterPlaceholder="Busca por nombre" style={{ minWidth: '10rem' }}></Column>
                        <Column field="type" header="Tipo" filterField="name" filter filterPlaceholder="Busca por nombre" style={{ minWidth: '10rem' }}></Column>
                        <Column field="number" header="Numero" filterField="lastName" filter filterPlaceholder="Busca por apellido" style={{ minWidth: '10rem' }}></Column>
                        <Column field="date" header="Fecha" filterField="cedula" filter filterPlaceholder="Busca por cedula" style={{ minWidth: '10rem' }}></Column>
                        <Column field="total" header="Total" filterField="telefono" filter filterPlaceholder="Busca por telefono" style={{ minWidth: '10rem' }}></Column>
                        <Column field="due" header="Debe" ></Column>
                        <Column field="paymentDay" header="Fecha de pago" ></Column>
                        <Column field="status" header="Estado" ></Column>
                    </DataTable>
                    <div className="grid mt-1">
                        <div className="col-12 md:col-6">
                            <div className="card">
                                <DataTable value={object} paginator rows={10} className="p-datatable-customers"
                                    currentPageReportTemplate="Mira desde {first} hasta {last} de {totalRecords} Clientes" header="Total facturado" responsiveLayout="scroll">
                                    <Column field="due" header="Estado" ></Column>
                                    <Column field="paymentDay" header="Cantidad" ></Column>
                                    <Column field="status" header="Total" ></Column>
                                </DataTable>
                            </div>
                        </div>
                        <div className="col-12 md:col-6">
                            <div className="card">
                                <DataTable value={object} paginator rows={10} className="p-datatable-customers"
                                    currentPageReportTemplate="Mira desde {first} hasta {last} de {totalRecords} Clientes" header="Total pagado" responsiveLayout="scroll">
                                    <Column field="due" header="Estado" ></Column>
                                    <Column field="paymentDay" header="Cantidad" ></Column>
                                    <Column field="status" header="Total" ></Column>
                                </DataTable>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TapBilling