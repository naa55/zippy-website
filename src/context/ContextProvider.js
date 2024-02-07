import { createContext, useContext, useState } from "react";
import axiosClient from "../axios.client";
import { toast } from "react-toastify";

const StateContext = createContext({
    token: null,
    setUser: () => { },
    setOrders: () => { },
    setToken: () => { },
})

export const ContextProvider = ({ children }) => {
    const [orders, setOrders] = useState([]);
    const [status, setStatus] = useState([]);
    const [token, _setToken] = useState(localStorage.getItem('ACCESS_TOKEN'));
    const [currentPage] = useState(5)

    const getOrder = () => {
        axiosClient.get(`/get_orders?page=1&pageSize=${currentPage}`)
            .then((response) => {
                if (response.data.data) {
                    setOrders(response.data.data)
                } else {
                    toast.error(response.data.responseDesc)
                }
            })
            .catch((error) => {
                toast.error(error.data)
            })
    }
    const getOrderStatus = () => {
        axiosClient.get('/get_order_statuses')
            .then((response) => {
                if (response.data.data) {
                    setStatus(response.data.data)
                } else {
                    setStatus([])
                    toast.error(response.data.responseDesc)
                }
            })
            .catch((error) => {
                toast.error(error.data)
            })
    }

    const setCurrentOrder = (number) => {
        axiosClient.get(`/get_orders?page=${number}&pageSize=${currentPage}`)
            .then((response) => {
                if (response.data.data) {
                    setOrders(response.data.data)
                } else {
                    toast.error(response.data.responseDesc)
                }
            })
            .catch((error) => {
                toast.error(error.data)
            })

    }

    const setSearch = (item) => {
        const getItem = []
        axiosClient.get(`/get_order_details?orderId=${item}`)
        .then((response) => {
            console.log(response.data.data)

            console.log(response.data.responseCode)
            if (response.data.responseCode === '004') {
                getItem.push(response.data.data)
                setOrders(getItem)
            } else {
                toast.error(response.data.responseDesc)
            }
        })
        .catch((error) => {
            toast.error(error.data)
        })
    }

    const setToken = (token) => {
        _setToken(token)
        if (token) {
            localStorage.setItem('ACCESS_TOKEN', token);
        } else {
            localStorage.removeItem('ACCESS_TOKEN');
        }
    }


    return (
        <StateContext.Provider value={{
            orders,
            setOrders,
            token,
            status,
            setToken,
            setSearch,
            setCurrentOrder,
            getOrder,
            getOrderStatus
        }}>
            {children}
        </StateContext.Provider>
    );
}

export const useStateContext = () => useContext(StateContext);