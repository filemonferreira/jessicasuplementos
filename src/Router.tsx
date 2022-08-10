import { Route, Routes } from "react-router-dom";
import { ProtectedLayout } from "./components/ProtectedLayout";
import { AuthProvider } from "./context/AuthProvider";
import { AdminLayout } from "./layouts/AdminLayout";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { UserLayout } from "./layouts/UserLayout";


import { CreateAccount } from "./pages/CreateAccount";
import { Details } from "./pages/Details";
import { Home } from "./pages/Home";
import { Indicated } from "./pages/myAccount/Indicated";
import { MyOrders } from "./pages/myAccount/MyOrders";
import { UserLogin } from "./pages/UserLogin";

export function Router() {
    return (
        <AuthProvider>
            <Routes>

                <Route path="/" element={<DefaultLayout />}>
                    <Route index element={<Home />} />
                    <Route path="create-account" element={<CreateAccount />} />
                    <Route path="create-account/:code_indicated" element={<CreateAccount />} />
                    <Route path="login" element={<UserLogin />} />
                    <Route path="details/:slug" element={<Details />} />
                    <Route path="*" element={<p>There's nothing here: 404!</p>} />
                </Route>

                <Route path="/my-account" element={<ProtectedLayout><UserLayout /></ProtectedLayout>}>

                    <Route index element={<h1>Minha conta</h1>} />
                    <Route path="my-orders" element={<MyOrders />} />
                    <Route path="cupom" element={<MyOrders />} />
                    <Route path="indication" element={<Indicated />} />

                    <Route path="*" element={<p>There's nothing here: 404!</p>} />
                </Route>

                <Route path="/admin" element={<AdminLayout />}>
                    <Route index element={<h1>Lol</h1>} />
                    <Route path="admin" element={<h1>Home</h1>} />
                    <Route path="dash" element={<h1>Dashboard</h1>} />
                    <Route path="*" element={<p>There's nothing here: 404!</p>} />
                </Route>


            </Routes>
        </AuthProvider>
    )
}

