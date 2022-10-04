import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import React, { useState } from "react";
import { Avatar } from 'primereact/avatar';

const TapInfo = () => {
    const styleSubTitle = `.subTitle { color: #0000008f; } .title { color: #000000; }`
    return (
        <>  <style>{styleSubTitle}</style>
            <div className="grid p-fluid">
                <div className="col-12 md:col-6">
                    <div className="card p-fluid">
                        <h5>Información básica </h5>
                        <div className="col-12">
                            <div className="grid">
                                <label htmlFor="name3" className="col-12 flex align-items-center md:col-7 md:mb-0">Id</label>
                                <div className="col-12 md:col-5">
                                    <p>01912721661</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="grid">
                                <label htmlFor="name3" className="col-12 flex align-items-center md:col-7 md:mb-0">Tipo</label>
                                <div className="col-12 md:col-5">
                                    <p>Empresa</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="grid">
                                <label htmlFor="name3" className="col-12 flex align-items-center md:col-7 md:mb-0">Nombre</label>
                                <div className="col-12 md:col-5">
                                    <InputText id="name3" type="text" value={"Portal del Quindio"} />
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="grid">
                                <label htmlFor="email3" className="col-12 flex align-items-center md:col-7 md:mb-0">Representante</label>
                                <div className="col-12 md:col-5">
                                    <InputText id="email3" type="text" value={"Fico"} />
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="grid">
                                <label htmlFor="email3" className="col-12 flex align-items-center md:col-7 md:mb-0">Registro Nacional C. (RCN)</label>
                                <div className="col-12 md:col-5">
                                    <InputText id="email3" type="number" value={"1005095432"} />
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="grid">
                                <label htmlFor="email3" className="col-12 flex align-items-center md:col-7 md:mb-0">Tipo cliente</label>
                                <div className="col-12 md:col-5">
                                    <InputText id="email3" type="text" value={"Cliente directo"} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 md:col-6">
                    <div className="card p-fluid">
                        <h5>Información de contacto</h5>
                        <div className="col-12">
                            <div className="grid">
                                <label htmlFor="name3" className="col-12 flex align-items-center md:col-7 md:mb-0">Teléfono</label>
                                <div className="col-12 md:col-5">
                                    <p>3216908765</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="grid">
                                <label htmlFor="name3" className="col-12 flex align-items-center md:col-7 md:mb-0">Correo</label>
                                <div className="col-12 md:col-5">
                                    <p>empresa@gmail.ocm</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="grid">
                                <label htmlFor="name3" className="col-12 flex align-items-center md:col-7 md:mb-0">Dirección</label>
                                <div className="col-12 md:col-5">
                                    <InputText id="name3" type="text" value={"Crra 5 #45-5"} />
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="grid">
                                <label htmlFor="email3" className="col-12 flex align-items-center md:col-7 md:mb-0">Provincia</label>
                                <div className="col-12 md:col-5">
                                    <InputText id="email3" type="text" value={"Quindio"} />
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="grid">
                                <label htmlFor="email3" className="col-12 flex align-items-center md:col-7 md:mb-0">Localidad</label>
                                <div className="col-12 md:col-5">
                                    <InputText id="email3" type="text" value={"Armenia"} />
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="grid">
                                <label htmlFor="email3" className="col-12 flex align-items-center md:col-7 md:mb-0">Preferencia de contacto</label>
                                <div className="col-12 md:col-5">
                                    <InputText id="email3" type="text" value={"Correo"} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid">
                <div className="col-5 md:col-3">
                    <Button label="Guardar" className="p-button-rounded p-button-warning w-full" />
                </div>
                <div className="col-7"></div>
            </div>
            <div className="col-12">
                <div className="card p-fluid">
                    <h5>Actividad</h5>
                    <div className="grid">
                        <div className="col-2 flex align-items-center flex justify-content-center">
                            <Avatar label="M" />
                        </div>
                        <div className="col-10">
                            <div className="col-12"><p className="title"><strong>El sistema</strong> creó una transacción #10 con una suma $300 </p></div>
                            <div className="col-12"><p className="subTitle">Hace 17 horas (2022-05-21 15:42:00)</p></div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default TapInfo