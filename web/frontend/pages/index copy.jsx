import {
    Card,
    Page,
    Layout,
    Image,
    Link,
    Text, BlockStack, Button,
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
        <Page narrowWidth>
            <TitleBar title={t("HomePage.title")}/>
            <Layout>
                <Layout.Section>
                    <Card sectioned>
                        <Button onClick={handleGetMerchant}>Gett merchant</Button>

                        <BlockStack>
                            <Text as="h2" variant="headingMd">
                                {t("HomePage.heading")}
                            </Text>
                            <p>
                                <Trans
                                    i18nKey="HomePage.yourAppIsReadyToExplore"
                                    components={{
                                        PolarisLink: (
                                            <Link url="https://polaris.shopify.com/" external/>
                                        ),
                                        AdminApiLink: (
                                            <Link url="https://shopify.dev/api/admin-graphql" external />
                                        ),
                                        AppBridgeLink: (
                                            <Link url="https://shopify.dev/apps/tools/app-bridge" external />
                                        ),
                                    }}
                                />
                            </p>
                            <p>{t("HomePage.startPopulatingYourApp")}</p>
                            <p>
                                <Trans
                                    i18nKey="HomePage.learnMore"
                                    components={{
                                        ShopifyTutorialLink: (
                                            <Link url="https://shopify.dev/apps/getting-started/add-functionality" external />
                                        ),
                                    }}
                                />
                            </p>
                            <div style={{padding: "0 20px"}}>
                                <Image
                                    source={trophyImage}
                                    alt={t("HomePage.trophyAltText")}
                                    width={120}
                                />
                            </div>
                        </BlockStack>
                    </Card>
                </Layout.Section>
                <Layout.Section>
                    <ProductsCard/>
                </Layout.Section>
            </Layout>
        </Page>
    );
}
