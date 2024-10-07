import {
    Page,
    Text,
    Box,
    Card,
    Layout,
    List,
    Banner,
    Tabs,
    LegacyCard,
    Divider,
    CalloutCard,
} from "@shopify/polaris";
import { useTranslation } from "react-i18next";
import { useCallback, useEffect, useState } from "react";
import { useLazyQuery } from "@apollo/client";
import { GET_MERCHANT_BY_SHOP_ENCODE } from "../../apollo-client/query.js";
import { appClient } from "../../apollo-client/index.js";
import { useAppBridge } from "@shopify/app-bridge-react";
import { encode } from "js-base64";
import ChristmasEffect from "../components/effects/ChristmasEffect.jsx";
import StoreSaleEffect from './../components/effects/StoreSaleEffect';
import FallEffect from './../components/effects/FallEffect';

export default function HomePage() {
    const { t } = useTranslation();
    const shopify = useAppBridge()
    const shopUrl = shopify.config.shop
    const shopEndcode = encode(shopUrl)
    const [selected, setSelected] = useState(0);

    const handleTabChange = useCallback((selectedTabIndex) => setSelected(selectedTabIndex), []);

    const tabs = [
        {
            id: 'christmas-effect',
            content: 'Christmas Effect',
            accessibilityLabel: 'Christmas Effect',
            panelID: 'christmas-effect',
            children: <ChristmasEffect/>,
            badge: '10',
        },
        {
            id: 'store-sale-effect',
            content: 'Store Sale Effect',
            panelID: 'store-sale-effect',
            children: <StoreSaleEffect/>,
            badge: '10',
        },
        {
            id: 'fall-effect',
            content: 'Fall Effect',
            panelID: 'fall-effect',
            children: <FallEffect/>,
            badge: '10',
        }
    ];

    const [getMerchant, { data }] = useLazyQuery(GET_MERCHANT_BY_SHOP_ENCODE, {
        client: appClient,
        fetchPolicy: "no-cache"
    })

    useEffect(() => {

        getMerchant({
            variables: {
                shopEncode: shopEndcode
            }
        }).then()

    }, [])

    return (
        <div className="sp-dashboard-page">
            <Page title="Home Page" >

                <Layout>
                    <Layout.Section>
                        <Card roundedAbove="sm">
                            <Text as="h2" variant="headingSm">
                                Online store dashboard
                            </Text>
                            <Box paddingBlockStart="200">
                                <Text as="p" variant="bodyMd">
                                    View a summary of your online store’s performance.
                                </Text>
                            </Box>
                        </Card>
                    </Layout.Section>

                    <Layout.Section>
                        <Banner
                            title="The app is disabled on your published theme."
                            action={
                                {
                                    content: 'Enable on theme editor'
                                }
                            }
                            tone="warning"
                        >
                            <List>
                                <List.Item>
                                    Disabling the app will prevent it from working as intended.
                                </List.Item>
                            </List>
                        </Banner>
                    </Layout.Section>

                    <Layout.Section>
                        <Card>
                            <Tabs tabs={tabs} selected={selected} onSelect={handleTabChange}>
                                <Divider borderColor="border" />
                                <Box paddingBlock="400">
                                    <Box paddingBlockStart="200">
                                        {tabs[selected].children}
                                    </Box>
                                </Box>
                            </Tabs>
                        </Card>
                    </Layout.Section>

                    <Layout.Section>
                        <CalloutCard
                            title="Learn more about how to make the most of the Easy Effects app"
                            illustration="https://cdn.shopify.com/s/assets/admin/checkout/settings-customizecart-705f57c725ac05be5a34ec20c05b94298cb8afd10aac7bd9c7ad02030f48cfa0.svg"
                            primaryAction={{
                                content: 'Read article',
                                url: '#',
                            }}
                        >
                            <p>A complete guide to the steps to create the effect you want.</p>
                        </CalloutCard>
                    </Layout.Section>


                </Layout>

            </Page>
        </div>
    );
}
