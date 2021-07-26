import styled from 'styled-components';

export const Container = styled.div `
    width: 80%;
    margin: auto;
    .figuras {
        font-size: larger;
    }
    .nav{
        display: flex;
        align-items: center;
        justify-content: space-between;

        .cart {
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }

    section {
        height: 100vh;
        width: 100%;
        background: rgb(152, 230, 223);
        display: flex;
        justify-content: space-around;
        align-items: center;
    
      .product-content {
            display: grid;
            text-align: center;
            height: 400px;
            background: #fff;
            border-radius: 12px;
            padding: 12px;
        }
    }
`