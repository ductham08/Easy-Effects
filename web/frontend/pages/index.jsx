import {
    Card,
    Page,
    Layout,
    Image,
    Link,
    Text, BlockStack, Button,
    LegacyCard,
} from "@shopify/polaris";
import {TitleBar} from "@shopify/app-bridge-react";
import {useTranslation, Trans} from "react-i18next";

import {trophyImage} from "../assets";

import {ProductsCard} from "../components";
import {useCallback} from "react";
import {useLazyQuery} from "@apollo/client";
import {GET_MERCHANT_BY_SHOP_ENCODE} from "../../apollo-client/query.js";
import {appClient} from "../../apollo-client/index.js";

export default function HomePage() {
    const {t} = useTranslation();

    const [getMerchant, {data}] = useLazyQuery(GET_MERCHANT_BY_SHOP_ENCODE, {
        client: appClient,
        fetchPolicy: "no-cache"
    })

    const handleGetMerchant = useCallback(async () => {
        getMerchant({
            variables: {
                shopEncode: "cmltaXhidWlsZGVyLm15c2hvcGlmeS5jb20="
            }
        }).then(() => console.log('done'))
        console.log(data)
    }, [data])

    return (
        <Page>
            <Layout>
                <Layout.Section>
                    <Card sectioned>
                        <Button onClick={handleGetMerchant}>Get Merchant</Button>
                    </Card>
                </Layout.Section>
            </Layout>
        </Page>
    );
}
