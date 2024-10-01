

function Products(productIem){
   // console.log(productIem.products[0]);
   //const {id,title,price,description,category,image,rating}=productIem;
   let items=[];
   items=productIem.products.map((item)=>{
    const {id,title,price,description,image,rating}=item;
    return <div key={id} className="card" >
        <div className="cardImage">
            <img src={image} alt="" />
        </div>
        <h1 className="cardHeading">{title}</h1>
        <p>{price}</p>
        <p>{rating.rate}/5</p>
        <p className="product__desc">{description}</p>
        <button className="product__btn btn">Add to cart</button>
    </div>
   });
   return <div >{items}</div> 
}
export default Products;