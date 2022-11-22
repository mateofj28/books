
import { Avatar } from 'primereact/avatar';

const Dashboard = () => {

  const data = [
    {
      name: "100 años de soledad",
      writer: "Fernando Salazar",
      date:"21/11/2022",
      city: "Barranquilla",
      src: "https://pymstatic.com/14375/conversions/libros-psicologia-wide.jpg",
      des: "Un libro muy interesante que narra la vida de charly",
      price: 40000
    },
    {
      name: "El agujero negro",
      writer: "Alvin Nuñez",
      date:"18/11/2022",
      src:"https://blogs.iadb.org/conocimiento-abierto/wp-content/uploads/sites/10/2022/04/Libros-sobre-conocimiento-abierto-en-acceso-abierto_ES_Working.jpg",
      city: "Cartagena",
      des: "Nos da una breve ilustración de los problemas que tenemos en la cotidianidad",
      price: 44400
    },
    {
      name: "El coronel no tiene quien le escriba",
      writer: "Silvio rodriguez",
      src: "https://hotmart.s3.amazonaws.com/product_contents/dd226ada-8df7-439e-8d61-d3f688b9ab49/libros2_2118499843.jpg",
      date:"17/11/2022",
      city: "Santa Marta",
      des: "El coronel no tiene quien le realice los trabajos",
      price: 3300
    },
    {
      name: "Fiesta con el primo ",
      writer: "Alvaro",
      date:"15/11/2022",
      src:"https://mesfix.com/blog/wp-content/uploads/2019/04/LIBROS-DE-EMPRENDIMIENTO.png",
      city: "Bogota",
      des: "Fiesta hoy en la piscina, con todos los amigos",
      price: 100000
    },
    {
      name: "jjj",
      writer: "Fernando tovar",
      date:"11/11/2022",
      src:"https://estaticos.muyhistoria.es/uploads/images/gallery/5ad871a95bafe8bd653c986a/libros.jpg",
      city: "Armenia",
      des: "Esto es una fiesta de locos, ey ey, esto es una fiesta de locos ey ey",
      price: 20000
    }
  ]
 
  return (
    <>
      <div className='h-screen flex align-items-center justify-content-center'>
        <div className='col-12'>
          <h1>Libros disponibles</h1>
        <div className='grid'>
          {data.map((data)=> (    
            <div className='col-2 m-2'>
              <div className='w-15rem h-19rem  shadow-6' style={{'borderRadius': '20px'}}>
                <h2 className='text-center pt-3 mb-0'>{data.writer}</h2>
                <h4 className='text-center m-0'>Fecha: {data.date}</h4>
                <img className='w-full mt-2 h-7rem bg-green-400' src={data.src} />
                <p className='p-2'>{data.des}</p>
              </div>
            </div>                    
          ))}
        </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
