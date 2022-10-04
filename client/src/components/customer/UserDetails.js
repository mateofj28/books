import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Avatar } from "primereact/avatar";
import axios from 'axios';
import { useState } from 'react';
import ReadCustomerTap from './detail/ReadCustomerTap';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import toast, { Toaster } from 'react-hot-toast';


const UserDetails = () => {
  var url = sessionStorage.getItem("url")
  const id = sessionStorage.getItem("id")
  const name = sessionStorage.getItem("name")
  const lastName = sessionStorage.getItem("lastname")
  const numberPhone = sessionStorage.getItem("phoneNumber")
  const email = sessionStorage.getItem("email")
  const username = sessionStorage.getItem("email")
  const password = sessionStorage.getItem("email")
  const [displayResponsive, setDisplayResponsive] = useState(false);
  const [displayResponsivePassword, setDisplayResponsivePassword] = useState(false);
  const [txtUrl, setTxtUrl] = useState("");
  const [txtPassOne, setPassOne] = useState("");
  const [img, setImg] = useState(`${url}`)

  const urlImg = `URL(${img})`

  const renderFooter = () => {
    return (
      <div>
        <Button label="Cerrar" icon="pi pi-times" onClick={() => setDisplayResponsive(false)} className="p-button-text" />
        <Button label="Agregar" icon="pi pi-check" onClick={() => httpPutImg()} className="p-button-rounded p-button-help" />
      </div>
    );
  }

  const httpPutImg = async () => {

    if (txtUrl === "") {
      toast.error("Se requiere una Url")
      return
    } else {
      const json = {
        "id": id,
        "name": name,
        "lastName": lastName,
        "email": email,
        "numberPhone": numberPhone,
        "userName": username,
        "password": password,
        "urlImg": txtUrl,
      }

      const res = await axios.post('http://localhost:8080/user/api/putImg', json)
      console.log(res.data)
      setDisplayResponsive(false)
      setTxtUrl("")
      setImg(res.data.urlImg)
    }
  }

  const httpPutPass = async () => {

    if (txtPassOne === "") {
      toast.error("Ingresa la nueva contraseña")
      return
    } else {
      const json = {
        "id": id,
        "name": name,
        "lastName": lastName,
        "email": email,
        "numberPhone": numberPhone,
        "userName": username,
        "password": txtPassOne,
        "urlImg": img,
      }

      const res = await axios.post('http://localhost:8080/user/api/putPassword', json)
      console.log(res.data)
      setDisplayResponsivePassword(false)
      setPassOne("")
    }
  }

  const renderFooterPassword = () => {
    return (
      <div>
        <Button label="Cerrar" icon="pi pi-times" onClick={() => setDisplayResponsivePassword(false)} className="p-button-text" />
        <Button label="Actualizar" icon="pi pi-check" onClick={() => httpPutPass()} className="p-button-rounded p-button-help" />
      </div>
    );
  }

  return (
    <>
      <div className='grid col-12'>
        <div className='col-4 h-24rem border-round-3xl shadow-7 cursor-pointer' onClick={() => setDisplayResponsive(true)} style={{ 'backgroundImage': urlImg, 'backgroundSize': 'cover' }}></div>
        <div className='col-7 ml-4 h-30rem'>
          <h2 className='text-center'>Información de usuario</h2>
          <div className='grid'>
            <div className='col-4'>
              <h3 className='mb-1'>Nombre:</h3>
              <p className='mt-1'>{name}</p>
            </div>

            <div className='col-4'>
              <h3 className='mb-1'>Apellido:</h3>
              <p className='mt-1'>{lastName}</p>
            </div>

            <div className='col-4'>
              <h3 className='mb-1'>Correo:</h3>
              <p className='mt-1'>{email}</p>
            </div>

            <div className='col-4'>
              <h3 className='mb-1'>Teléfono:</h3>
              <p className='mt-1'>{numberPhone}</p>
            </div>
          </div>

          <Dialog header="Modificar foto" visible={displayResponsive} onHide={() => setDisplayResponsive(false)} footer={renderFooter}>
            <div className='flex justify-content-center'>
              <div className='col-12'>
                <h3 className='mb-1'>Url de la imagen:</h3>
                {/*  */}
                <InputText className=' w-full' value={txtUrl} onChange={(e) => setTxtUrl(e.target.value)} />
              </div>
            </div>
          </Dialog>

          <Toaster
            position="bottom-left"
            reverseOrder={false}
          />

          <Dialog header="Actualizar contraseña" visible={displayResponsivePassword} onHide={() => setDisplayResponsivePassword(false)} footer={renderFooterPassword}>
            <div className='flex justify-content-center'>
              <div className='col-12'>
                <h3 className='mb-1'>Nueva contraseña:</h3>
                <InputText className=' w-full' value={txtPassOne} type="password" onChange={(e) => setPassOne(e.target.value)} />
              </div>
            </div>
          </Dialog>

          <Button label="Actualizar mi contraseña" onClick={() => setDisplayResponsivePassword(true)} icon="pi pi-lock" className="p-button-rounded p-button-success mt-6" />
        </div>
      </div>
    </>
  )
}

export default UserDetails