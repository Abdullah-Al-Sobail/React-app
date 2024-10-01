
const monthName=new Date().getMonth();
const dateName=new Date().getDate()
const currentYear=new Date().getFullYear();

function Card(props){
  const {titleText,desText}=props;
  return  <div className='card'>
     <h3 className='cardTitle'>{titleText}</h3>
     <p className='cardDes'>{desText}</p>
     <p className='cardFooter'>{dateName+"/"+monthName+"/"+currentYear}</p>
  </div>
}

export default Card;