import AdminContext from "./AdminContext.jsx";

const AdminContextProvider = ({children}) => {
    const currency = '$';
    const  backendUrl = import.meta.env.VITE_BACKEND_URL;

    const value = {
        currency,
        backendUrl
    }
    return (
        <AdminContext.Provider value={value}>
            {children}
        </AdminContext.Provider>
    )
}

export default AdminContextProvider;