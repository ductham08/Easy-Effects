import {BrowserRouter, Link} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {NavMenu} from "@shopify/app-bridge-react";
import Routes from "./Routes";
import {QueryProvider, PolarisProvider} from "./components";
import {Provider} from 'react-redux'
import "./assets/scss/index.scss"
import store from "./app/store/store";

export default function App() {
    // Any .tsx or .jsx files in /pages will become a route
    // See documentation for <Routes /> for more info
    const pages = import.meta.glob("./pages/**/!(*.test.[jt]sx)*.([jt]sx)", {
        eager: true,
    });
    const {t} = useTranslation();

    return (
        <PolarisProvider>
            <BrowserRouter>
                <QueryProvider>
                    <Provider store={store}>
                        <NavMenu>
                            <Link to={"/"} rel={"home"}>Home</Link>
                            <Link to={"/settings-page"} >Settings Effect</Link>
                        </NavMenu>  
                        <Routes pages={pages}/>
                    </Provider>
                </QueryProvider>
            </BrowserRouter>
        </PolarisProvider>
    );
}
