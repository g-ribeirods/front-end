import React, { useState, useEffect } from 'react';
import './Cart.css';

// Cria um componente funcional chamado Cart5
const Cart5 = () => {
    // Define o estado 'products' usando o hook useState. Inicialmente, é um array vazio.
    const [products, setProducts] = useState([]);
    // Define o estado 'loading' para controlar se os dados estão sendo carregados.
    const [loading, setLoading] = useState(true);
    // Define o estado 'error' para armazenar qualquer erro que ocorra durante o carregamento.
    const [error, setError] = useState(null);

    // Usa o hook useEffect para buscar os dados do arquivo JSON quando o componente é montado.
    useEffect(() => {
        const fetchProducts = async () => {
        try {
            // Faz uma requisição GET para o arquivo 'products.json'.
            const response = await fetch('/products.json');
            // Verifica se a resposta da requisição foi bem-sucedida (status 200-299).
            if (!response.ok) {
            // Se a resposta não for bem-sucedida, lança um erro com o status do erro.
            throw new Error(`Erro ao buscar os produtos: ${response.status}`);
            }
            // Converte a resposta para o formato JSON.
            const data = await response.json();
            // Atualiza o estado 'products' com os dados obtidos.
            setProducts(data);
        } catch (error) {
            // Se ocorrer algum erro durante o processo de busca, atualiza o estado 'error'.
            setError(error);
        } finally {
            // Independente de sucesso ou erro, atualiza o estado 'loading' para false.
            setLoading(false);
        }
        };

        // Chama a função fetchProducts para iniciar a busca dos dados.
        fetchProducts();
    }, []); // O array vazio como segundo argumento garante que o efeito é executado apenas uma vez, na montagem do componente.

    // Funções para incrementar e decrementar quantidade
    const incrementQuantity = (id) => {
        setProducts(prevProducts => 
        prevProducts.map(product => 
            product.id === id ? { ...product, quantity: product.quantity + 1 } : product
        )
        );
    };

    const decrementQuantity = (id) => {
        setProducts(prevProducts => 
        prevProducts.map(product => 
            product.id === id && product.quantity > 0 
            ? { ...product, quantity: product.quantity - 1 } 
            : product
        )
        );
    };

    // Renderização condicional baseada nos estados 'loading' e 'error'.
    if (loading) {
        // Se 'loading' for true, exibe uma mensagem de carregamento.
        return <div>Carregando produtos...</div>;
    }

    if (error) {
        // Se 'error' não for null, exibe uma mensagem de erro.
        return <div>Erro: {error.message}</div>;
    }

  // Se não estiver carregando e não houver erro, renderiza a lista de produtos.
  return (
    <div className='products'>
      {products.map((product) => (
        <div className='product' key={product.id}>
          <div className='product_details'>
            {product.image &&(
                <img
                    src = {product.image}
                    alt = {product.product_name}
                    style={{width:'100px', height:'auto'}}
                />
            )}
            <h3>{product.product_name}</h3>
            <p>Produto dolor sit amet consectetur adipiscing elite</p>
            <h3>R$ {product.price.toFixed(2)}</h3>
          </div>
          <div className='product_quantity-container'>
            <button onClick={() => incrementQuantity(product.id)}>+</button>
            <p>{product.quantity}</p>
            <button onClick={() => decrementQuantity(product.id)}>-</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart5;