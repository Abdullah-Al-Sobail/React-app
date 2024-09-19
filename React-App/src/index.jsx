import { createRoot } from 'react-dom/client'

const todoTitle="Call Family";
const todoDes="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod, maxime.";
const monthName=new Date().getMonth();
const dateName=new Date().getDate()
const currentYear=new Date().getFullYear();



createRoot(document.getElementById('root')).render(

   <div>
     <h1 className='headinStyle'>Todo App</h1>
        <h3>{todoTitle}</h3>
        <p>{todoDes}</p>
        <p>{dateName+"/"+monthName+"/"+currentYear}</p>
   </div>
 ,
)
