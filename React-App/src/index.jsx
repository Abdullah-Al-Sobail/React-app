import { createRoot } from 'react-dom/client'

const todoTitle="Call Family";
const todoDes="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod, maxime.";
const monthName=new Date().getMonth();
const dateName=new Date().getDate()
const currentYear=new Date().getFullYear();



createRoot(document.getElementById('root')).render(

   <div>
     <h1 className='headinStyle'>Todo App</h1>
       <div className='card'>
       <h3 className='cardTitle'>{todoTitle}</h3>
        <p className='cardDes'>{todoDes}</p>
        <p className='cardFooter'>{dateName+"/"+monthName+"/"+currentYear}</p>
       </div>
   </div>
 ,
)
