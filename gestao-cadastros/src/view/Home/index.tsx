import React, { useState, useEffect} from "react";
import { Container } from './style';
import api from '../../services/api';
import Cart from '../../assets/cart_shopping.png'
import Logo from '../../assets/books_logo.jpg'

interface IProduct {
    id: number;
    photo: string;
    name: string;
    description: string;
    price: number;
}



const Home: React.FC = () => {
    const [data, setData] = useState<IProduct[]>([]);
    const [cart, setCart] = useState<IProduct[]>([]);

    useEffect(() => {
        api.get('').then(
            response => {
                setData(response.data)
            }
        )
    }, [])

    const handleCart = (index: number ) => {
        let push: any = [...cart, cart.push(data[index])]
        setCart (push)
        const productStore = JSON.stringify(cart)
        localStorage.setItem(`@cart`, productStore)   
    }
    return(
        <Container>
            <div className='nav'>
                <div className="logomarca">
                    <img src="https://i.pinimg.com/originals/3c/7a/f3/3c7af3c03a1fc34f679d6cb8d1af703a.png" alt="vtex " width= "100px" height="auto" />
                 </div>
                 <div className="cart">
                     <img src={Cart} alt="shoppcart" width="100px" height="auto"/>
                     <span>( {cart.length } ) - Itens  </span>
                     <button>Cadastre-se</button>
                 </div>
            </div>
            <section className="figuras">
                {data.map( (prod, index) => (
                <div className="product-content" key={prod.id}>
                    <img src={prod.photo} alt="livros" width = "200" height="300"/>
                    <h4>{prod.name}</h4>
                    <span>{prod.description}</span>
                    <h6>R$: {prod.price}</h6>
                    <button onClick={ () => handleCart(index)}>Adcionar ao Carrinho</button>
                </div>
                ))} 
            </section>
        </Container>
    )
}

export default Home;