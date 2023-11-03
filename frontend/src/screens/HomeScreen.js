
import axios from 'axios';
import logger from 'use-reducer-logger'; 
import { useEffect, useReducer } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Product from "../components/Product";
import { Helmet } from 'react-helmet-async';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Bot from '../components/Bot';



const reducer =(state,action) => {
    switch(action.type) {
        case 'FETCH_REQUEST':
            return {...state , loading:true};
        case 'FETCH_SUCCESS':
            return {...state,products: action.payload,loading:false};
        case 'FETCH_FAIL':
            return{...state,loading:false,error:action.payload};
        default:
            return state;
    }
};


function HomeScreen() {
    const[{loading,error,products},dispatch]=useReducer(logger(reducer),
        {
            products:[],
            loading:true,
            error:'',
        });

    // const[products,setProducts] = useState([]);
    useEffect(()=>{
        const fetchData = async () => {
            dispatch({type: 'FETCH_REQUEST'});
            try {
                const result =await axios.get('/api/products');
                dispatch({type:'FETCH_SUCCESS',payload:result.data});
            }catch(err){
                dispatch({type:'FETCH_FAIL',payload:err.message});
            }
            
            // setProducts(result.data);
        };
        fetchData();
    }, []);

    return( <div >
        <Bot/>
        <Helmet>
            <title>Shopzyy</title>

        </Helmet>
        <header>
      <main>
        <section class="flex-container">
          <div ><h2>Up to 70% off | Deals on Brands & more</h2>
            
            <img src="../images/sa.avif" alt="Hurry order now"/>
        </div>
          <div>
            <h2>Footwear and More! | Order Now</h2>
            <img src="../images/foot.avif" alt="footwear and more"/>
        </div>
          <div>
            <h2>50% - 80% off | Women's fashion</h2>
            <img src="../images/dress.avif" alt="women's fashion"/>
          </div>
          <div>
            <h2>Deals on smartphones and electronics</h2>
            <img src="../images/elec.avif" alt="electronics"/>
        </div>
        </section>
        </main>
        </header>

            <br></br>
            <br></br>

        

            
         <h1>Featured products</h1>
        <div className="products">
            
        { 
         loading? (
         <LoadingBox />
         ):
         error?(
         <MessageBox variant="danger">{error}</MessageBox>
         ): (

        <Row>
         {products.map((product) => (
            <Col key ={product.slug} sm={6} md={4} lg={3} className="mb-3">
          <Product product={product}></Product>
          </Col>
          
          )) }
          </Row>  
          
)}
          </div>
          
    </div>
    


    )
}

export default HomeScreen;