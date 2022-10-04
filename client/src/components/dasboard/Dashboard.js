
import { Avatar } from 'primereact/avatar';

const Dashboard = () => {
 
  return (
    <>
      <div className='h-screen flex align-items-center justify-content-center'>
        <div className=''>
          <div className='flex justify-content-center'>
            <Avatar icon="pi pi-ban" className="mr-2" size="xlarge" style={{ 'backgroundColor': '#20dad8'}}/>
          </div>
          
          <h1 className='mb-1 text-center'>Dashboard</h1>
          <label className='mt-1'>Todavia no hay datos por mostrar.</label>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
