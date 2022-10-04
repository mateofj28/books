import React, { useEffect, useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { InputTextarea } from 'primereact/inputtextarea';
import { Dropdown } from 'primereact/dropdown';
import { InputMask } from "primereact/inputmask";
import { Password } from "primereact/password";
import { RadioButton } from 'primereact/radiobutton';
import { AutoComplete } from 'primereact/autocomplete';
// import { CountryService } from "../../service/CountryService";
// import { NodeService } from "../../service/NodeService";

//#feb800

const CreateCustomer = () => {
    const [typeClient, setTypeClient] = useState("Persona");
    const [department, setDepartment] = useState();
    const [city, setCity] = useState();
    const [dropdownItem, setDropdownItem] = useState(null);

    //auto input
    const [selectedAutoValue, setSelectedAutoValue] = useState(null);
    const [autoFilteredValue, setAutoFilteredValue] = useState([]);
    const [autoValue, setAutoValue] = useState(null);
    

    const [radioValue, setRadioValue] = useState(null);
    const [radioClient, setClient] = useState(null);

    // get data auto search
    useEffect(() => {
        // const countryService = new CountryService;
        // const nodeService = new NodeService;
        //countryService.getCountries().then(data => setAutoValue(data));        
    }, []);

    const dropdownItems = [
        { name: 'Option 1', code: 'Option 1' },
        { name: 'Option 2', code: 'Option 2' },
        { name: 'Option 3', code: 'Option 3' }
    ];

    const typePersonSelectItems = [
        { label: "Empresa", value: "Empresa" },
        { label: "Persona", value: "Persona" },
    ];

    const departSelectItems = [
        { label: "AZUA", value: "Azua" },
        { label: "BAHORUCO", value: "Bahoruco" },
        { label: "BARAHONA", value: "Barahona" },
        { label: "DAJABON", value: "Dajabon" },
        { label: "SANTO DOMINGO (GRAN)", value: "Santo Domingo ( gran )" },
        { label: "DUARTE", value: "Duarte" },
        { label: "ELIAS PIÑA", value: "Elias Piña" },
        { label: "EL SEIBO", value: "El Seibo" },
        { label: "ESPAILLAT", value: "Espaillat" },
        { label: "HATO MAYOR", value: "Hato Mayor" },
        { label: "INDEPENDENCIA", value: "Indepencia" },
        { label: "LA ALTAGRACIA", value: "La Altagracia" },
        { label: "LA ROMANA", value: "La Romana" },
        { label: "LA VEGA", value: "La Vega" },
        { label: "MARÍA TRINIDAD SÁNCHEZ", value: "María Trinidad Sánchez" },
        { label: "MONSEÑOR NOUEL", value: "Monseñor Nouel" },
        { label: "MONTE CRISTI", value: "Monte Cristi" },
        { label: "MONTE PLATA", value: "Monte Plata" },
        { label: "DISTRITO NACIONAL", value: "Distrito Nacional" },
        { label: "PERAVIA", value: "Peravia" },
        { label: "PEDERNALES", value: "Pedernales" },
        { label: "PUERTO PLATA", value: "Puerto Plata" },
        { label: "HERMANAS MIRABAL (SALCEDO)", value: "Hermanas Mirabal (Salcedo)" },
        { label: "SAMANÁ", value: "Samaná" },
        { label: "SÁNCHEZ RAMÍREZ", value: "Sánchez Ramírez" },
        { label: "SAN CRISTÓBAL", value: "San Cristóbal" },
        { label: "SAN JOSÉ DE OCOA", value: "San Jose de Ocoa" },
        { label: "SAN JUAN DE LA MAGUANA", value: "San juan de la Maguana" },
        { label: "SAN PEDRO DE MACORÍS", value: "San Pedro de Macorís" },
        { label: "SANTIAGO", value: "Santiago" },
        { label: "SANTIAGO RODRÍGUEZ", value: "Santiago Rodríguez" },
        { label: "VALVERDE", value: "Valverde" },
    ];

    const citySelectItems = [
        { label: "Aesa", value: "aesa" },
        { label: "Agua Dulce", value: "bahoruco" },
        { label: "Alameda", value: "barahona" },
        { label: "Alma Rosa II", value: "dajabon" },
        { label: "Alpes I", value: "santo domingo ( gran )" },
        { label: "Altos de Arroyo Hondo I", value: "duarte" },
        { label: "Altos de Arroyo Hondo II", value: "elias piña" },
        { label: "Altos de Arroyo Hondo III", value: "el seibo" },
    ];

    const searchCountry = (event) => {
        setTimeout(() => {
            if (!event.query.trim().length) {
                setAutoFilteredValue([...autoValue]);
            }
            else {
                setAutoFilteredValue(autoValue.filter((country) => {
                    return country.name.toLowerCase().startsWith(event.query.toLowerCase());
                }));
            }
        }, 250);
    };

    const center_title_card = `.p-card-title { text-align: center; }`;

    return (<div className="grid">
        <div className="col-12 md:col-12">
            <div className="card p-fluid">
                <h5>Información basica</h5>

                <div className="field">
                    <label htmlFor="name1">Tipo</label>
                    <Dropdown value={typeClient} options={typePersonSelectItems} onChange={(e) => setTypeClient(e.value)} placeholder="Tipo de cliente" />
                </div>

                <div className="field">
                    <label htmlFor="name1">Nombre</label>
                    <InputText id="name1" type="text" />
                </div>
                <div className="field">
                    {typeClient === "Persona" && <label htmlFor="age1">Apellido</label>}
                    {typeClient === "Empresa" && <label htmlFor="age1">Representante</label>}

                    {typeClient === "Persona" && <InputText />}
                    {typeClient === "Empresa" && <InputText />}
                </div>

                <div className="field">
                    {typeClient === "Persona" && <label htmlFor="age1">Cedula</label>}
                    {typeClient === "Empresa" && <label htmlFor="age1">Registro nacional C. (RCN)</label>}

                    {typeClient === "Persona" && <InputText />}
                    {typeClient === "Empresa" && <InputText />}
                </div>
            </div>
        </div>

        <div className="col-12 md:col-12">

            <div className="card">
                <h5>Tipo de cliente</h5>
                <div className="grid align-items-center">
                    <div className="col-12 md:col-4">
                        <div className="field-radiobutton">
                            <RadioButton inputId="option1" name="option" value="Cliente directo" checked={radioClient === 'Cliente directo'} onChange={(e) => {setClient(e.value)
                                 setSelectedAutoValue('') }} />
                            <label htmlFor="option1">Cliente directo</label>
                        </div>
                    </div>
                    <div className="col-12 md:col-4">
                        <div className="field-radiobutton">
                            <RadioButton inputId="option2" name="option" value="Revendedor" checked={radioClient === 'Revendedor'} onChange={(e) => setClient(e.value)} />
                            <label htmlFor="option2">Revendedor</label>
                        </div>
                    </div>
                    <div className="col-12 md:col-4">
                        <div className="field-radiobutton">
                            {radioClient === "Revendedor" && <AutoComplete placeholder="Buscar revendedor" id="dd" dropdown value={selectedAutoValue} onChange={(e) => setSelectedAutoValue(e.value)} suggestions={autoFilteredValue} completeMethod={searchCountry} field="name" />}
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="col-12">
            <div className="card">
                <h5>Información de contacto</h5>
                <div className="p-fluid formgrid grid">
                    <div className="field col-12 md:col-6">
                        <label htmlFor="firstname2">Telefono</label>
                        <InputText id="firstname2" type="number" />
                    </div>
                    <div className="field col-12 md:col-6">
                        <label htmlFor="lastname2">Correo</label>
                        <InputText id="lastname2" type="email" />
                    </div>
                    <div className="field col-12">
                        <label htmlFor="address">Dirección</label>
                        <InputTextarea id="address" rows="4" />
                    </div>
                    <div className="field col-12 md:col-6">
                        <label htmlFor="city">Provincia</label>
                        <Dropdown value={department} className="w-full" options={departSelectItems} onChange={(e) => setDepartment(e.value)} />
                    </div>
                    <div className="field col-12 md:col-6">
                        <label htmlFor="state">Localidad</label>
                        <Dropdown value={department} className="w-full" options={departSelectItems} onChange={(e) => setDepartment(e.value)} />
                    </div>
                    <div className="card-container w-full ml-2">
                        <h5>Preferencia de contacto</h5>
                        <div className="grid">
                            <div className="col-12 md:col-4">
                                <div className="field-radiobutton">
                                    <RadioButton inputId="option1" name="option" value="WhatsApp" checked={radioValue === 'WhatsApp'} onChange={(e) => setRadioValue(e.value)} />
                                    <label htmlFor="option1">WhatsApp</label>
                                </div>
                            </div>
                            <div className="col-12 md:col-4">
                                <div className="field-radiobutton">
                                    <RadioButton inputId="option2" name="option" value="Los Angeles" checked={radioValue === 'Los Angeles'} onChange={(e) => setRadioValue(e.value)} />
                                    <label htmlFor="option2">Email</label>
                                </div>
                            </div>
                            <div className="col-12 md:col-4">
                                <div className="field-radiobutton">
                                    <RadioButton inputId="option3" name="option" value="Telefono" checked={radioValue === 'Telefono'} onChange={(e) => setRadioValue(e.value)} />
                                    <label htmlFor="option3">Teléfono</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>)

};

export default CreateCustomer;
