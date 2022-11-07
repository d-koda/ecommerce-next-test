import React, { createContext, useContext, useState, useEffect } from "react";
import { toast } from 'react-hot-toast'

const Context = createContext();

export const StateContext = ({ children }) => {
    const [showCart, setShowCart] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalQuantity, setTotalQuantity] = useState(0);
    const [qty, setQty] = useState(1);

    let foundProduct;
    let index;

    const onAdd = (product, quantity) => {
        const checkCart = cartItems.find((item) => item._id === product._id);

        setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * quantity);
        setTotalQuantity((prevTotal) => prevTotal + quantity);
        if (checkCart) {
            const updatedCartItems = cartItems.map((cartProduct) => {
                if (cartProduct._id === product._id) return {
                    ...cartProduct,
                    quantity: cartProduct.quantity + quantity
                }
            })
            setCartItems(updatedCartItems);
        } else {
            product.quantity = quantity;
            setCartItems([...cartItems, { ...product }]);
        }
        toast.success(`${qty} ${product.name} added to cart!`)
    }

    const onRemove = (product) => {
        foundProduct = cartItems.find((item) => item._id === product._id)
        const newCartItems = cartItems.filter((item) => item._id !== product._id);

        setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price * foundProduct.quantity)
        setTotalQuantity(prevTotalQuantities => prevTotalQuantities - foundProduct.quantity)
        setCartItems(newCartItems)
    }

    const toggleCartItemQty = (id, value) => {
        //this lets us match our item to the id, and then edit the amount of said item
        foundProduct = cartItems.find((item) => item._id === id)
        index = cartItems.findIndex((product) => product._id === id)
        //use filter instead of splice because filter doesn't mutate state, splice does
        const newCartItems = cartItems.filter((item) => item._id !== id);

        if (value === 'inc') {
            let finalCartItems = [...newCartItems, { ...foundProduct, quantity: foundProduct.quantity + 1 }];
            let length = finalCartItems.length;
            [finalCartItems[index], finalCartItems[length - 1]] = [finalCartItems[length - 1], finalCartItems[index]];
            setCartItems(finalCartItems);
            setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price);
            setTotalQuantity((prevTotalQuantities) => prevTotalQuantities + 1);
        }
        else if (value === 'dec') {
            if (foundProduct.quantity > 1) {
                let finalCartItems = [...newCartItems, { ...foundProduct, quantity: foundProduct.quantity - 1 }];
                let length = finalCartItems.length;
                [finalCartItems[index], finalCartItems[length - 1]] = [finalCartItems[length - 1], finalCartItems[index]];
                setCartItems(finalCartItems);
                setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price);
                setTotalQuantity((prevTotalQuantities) => prevTotalQuantities - 1);
            }
        }

    }

    const incQty = () => {
        setQty((prevQty) => prevQty + 1);
    }

    const decQty = () => {
        setQty((prevQty) => {
            if (prevQty - 1 < 1) return 1;

            return prevQty - 1
        });
    }

    //essentially this whole thing wraps the entire Next app in context. this is a context provider that says hey, this is your cart, this is your cart items, this is how much everything is, this is how many items are in your cart when you're not looking at it, and this is how many of X item are you wanting to add to your cart
    return (
        <Context.Provider
            value={{
                showCart,
                cartItems,
                totalPrice,
                totalQuantity,
                qty,
                incQty,
                decQty,
                onAdd,
                setShowCart,
                setCartItems,
                setTotalPrice,
                setTotalQuantity,
                toggleCartItemQty,
                onRemove,
            }}>
            {children}
        </Context.Provider>
    )
}

//this basically lets me use all the garbage written up there as a hook. a custom hook essentially

export const useStateContext = () => useContext(Context);