import { BrowserRouter, Route, Routes } from "react-router-dom"
import { LoginPage } from "../auth/pages/Log/LoginPage"
import { Home } from "../pages"
import { Checkout} from "../pages"
import { ProductDetails } from "../components"
import { PrivateRoute } from "./PrivateRoute"

export const AppRouter = () => {
    return (
        <>
        <BrowserRouter>
            <Routes>
                <Route path='login' element={<LoginPage />} />
                <Route path='/' element={<Home />} />
                <Route path='/home' element={<Home />} />

                <Route path='/product/:title' element={<ProductDetails />} />
                <Route path='/checkout' element= {
                    <PrivateRoute>
                        <Checkout />
                    </PrivateRoute>
                } />
            </Routes>
        </BrowserRouter>
        </>
    )
}