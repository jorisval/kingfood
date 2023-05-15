import { useState, createContext } from 'react';

export const HeaderContext = createContext();
export const HeaderProvider = ({children}) => {
    const [activePage, setActivePage] = useState('');
    const [favoriteItemIds, setFavoriteItemIds] = useState([]);

    /*To persist favoriteItemIds on the client side, 
    we can use the localStorage API of the Web Storage interface. 
    This will allow the data to persist even when the user closes the app or the browser, 
    and it will be available for retrieval when they come back.

    const initialFavorites = localStorage.getItem('favoriteItemIds')
        ? JSON.parse(localStorage.getItem('favoriteItemIds'))
        : [];
    const [favoriteItemIds, setFavoriteItemIds] = useState(initialFavorites);

    useEffect(() => {
        localStorage.setItem('favoriteItemIds', JSON.stringify(favoriteItemIds));
    }, [favoriteItemIds]);
    
    note that localStorage should be used for small amounts of data and isn't secure, 
    so it shouldn't be used for sensitive information. A more robust solution for larger 
    amounts of data or sensitive information would be IndexedDB or server-side storage.*/

    return (
        <HeaderContext.Provider value={{activePage, setActivePage, favoriteItemIds, setFavoriteItemIds}}>
            {children}
        </HeaderContext.Provider>
    );
};

export const CartContext = createContext();
export const CartProvider = ({children}) => {
    const [orderPlaced, setOrderPlaced] = useState({});
    function getInitialOrderInfos() {
        return {
            email: '',
            name: '',
            totalAmount: 0,
            orderStatus: '',
            shippingAddress: {
                street: '',
                city: '',
                state: '',
                country: '',
                zipCode: ''
            },
            billingAddress: {
                street: '',
                city: '',
                state: '',
                country: '',
                zipCode: ''
            },
            paymentMethod: '',
            paymentStatus: '',
            paymentAmount: 0,
            orderItems: [],
        }
    };

    const [orderInfos, setOrderInfos] = useState(getInitialOrderInfos);
    
    const [orderItem, setOrderItem] = useState({
        productId: '',
        option: '',
        price: 0,
        quantity: 0
    });
    return (
        <CartContext.Provider value={{orderInfos, setOrderInfos, orderItem, setOrderItem, orderPlaced, setOrderPlaced, getInitialOrderInfos}}>
            {children}
        </CartContext.Provider>
    )
};
