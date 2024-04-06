const text='This is simple text';
const title='Call Family';
const date=new Date().getFullYear();
// const style={
//   color:"red",fontWeight:"bold",backgroundColor:"yellow",display:"inline-block"
// };
function Card(props){
      return <div className='Card'>
      <h1 className='style'>{props.title}</h1>
      <h3 className='heading'>{props.des}</h3>
      <p className='text'>{text}</p>
      <p className='text'>{date}</p>
    </div>
}
export default Card;