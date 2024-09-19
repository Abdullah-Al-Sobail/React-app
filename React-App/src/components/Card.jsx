const todoTitle="Call Family";
const todoDes="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod, maxime.";
const monthName=new Date().getMonth();
const dateName=new Date().getDate()
const currentYear=new Date().getFullYear();

function Card(){
  return  <div className='card'>
     <h3 className='cardTitle'>{todoTitle}</h3>
     <p className='cardDes'>{todoDes}</p>
     <p className='cardFooter'>{dateName+"/"+monthName+"/"+currentYear}</p>
  </div>
}

export default Card;