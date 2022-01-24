import {useParams} from 'react-router-dom';
const ProductDetails = ()=>{
    const params = useParams();
   console.log(params.pid);
return (
    <div>
        <h1>Product Details</h1>
        <p>{params.pid}</p>
        
    </div>
)
}

export default ProductDetails