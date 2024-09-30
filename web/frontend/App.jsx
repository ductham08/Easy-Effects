import {BrowserRouter, Link} from "react-router-dom";
import {ApolloProvider} from "@apollo/client";
import {useTranslation} from "react-i18next";
import {NavMenu} from "@shopify/app-bridge-react";
import Routes from "./Routes";
import {QueryProvider, PolarisProvider} from "./components";
import {shopifyClient} from "../apollo-client/index.js";
import {Provider} from 'react-redux'
import store from "./store/store.js";

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
                    <ApolloProvider client={shopifyClient}>
                        <Provider store={store}>
                            <NavMenu>
                                <Link to={"/"} rel={"home"}>Home</Link>
                            </NavMenu>
                            <Routes pages={pages}/>
                        </Provider>
                    </ApolloProvider>
                </QueryProvider>
            </BrowserRouter>
        </PolarisProvider>
    );
}
