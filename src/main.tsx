//import 
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ProductProvider } from './context/ProductContext.tsx'
import { SidebarProvider } from './context/SidebarContext.tsx'
import { CartProvider } from './context/CartContext.tsx'
import { AuthProvider } from './auth/context/AuthProvider.tsx'

// type

// function
ReactDOM.createRoot(document.getElementById('root')!).render( 
    <SidebarProvider> 
        <CartProvider>
            <ProductProvider>
                <AuthProvider>
                    <App />
                </AuthProvider>
            </ProductProvider>
        </CartProvider>
    </SidebarProvider>
)
