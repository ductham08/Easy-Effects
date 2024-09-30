import { 
    Card, 
    Page, 
    Layout,
    Text, 
    InlineGrid, 
    BlockStack, 
    Button, 
    Tooltip, 
    Icon, 
    Banner,
    FooterHelp,
    Link,
    Box,
    Tabs,
    LegacyCard
} from "@shopify/polaris";
import { useTranslation } from "react-i18next";
import { useCallback, useEffect, useState } from "react";
import { useLazyQuery } from "@apollo/client";
import { GET_MERCHANT_BY_SHOP_ENCODE } from "../../apollo-client/query.js";
import { appClient } from "../../apollo-client/index.js";
import {useAppBridge} from "@shopify/app-bridge-react";
import { encode } from "js-base64";

export default function HomePage() {
    const {t} = useTranslation();
    const shopify = useAppBridge()
    const shopUrl = shopify.config.shop
    const shopEndcode = encode(shopUrl)
    const [selected, setSelected] = useState(0);

    const handleTabChange = useCallback(
        (selectedTabIndex) => setSelected(selectedTabIndex),
        [],
    );

    const [getMerchant, {data}] = useLazyQuery(GET_MERCHANT_BY_SHOP_ENCODE, {
        client: appClient,
        fetchPolicy: "no-cache"
    })

    const tabs = [
        {
          id: 'seasonal-effects',
          content: 'Seasonal Effects',
          badge: '10+',
          accessibilityLabel: 'Seasonal Effects',
          panelID: 'seasonal-effects',
        },
        {
          id: 'store-sale-effects',
          content: 'Store Sale Effects',
          badge: '10+',
          accessibilityLabel: 'Store Sale Effects',
          panelID: 'store-sale-effects',
        },
        {
          id: 'fall-effects',
          content: 'Fall Effects',
          badge: '10+',
          accessibilityLabel: 'Fall Effects',
          panelID: 'fall-effects',
        },
        {
          id: 'space-effects',
          content: 'Space Effects',
          badge: '10+',
          accessibilityLabel: 'Space Effects',
          panelID: 'space-effects',
        },
        {
          id: 'other-effects',
          content: 'Other Effects',
          badge: '10+',
          accessibilityLabel: 'Other Effects',
          panelID: 'other-effects',
        },
    ];

    useEffect(() => {

        getMerchant({
            variables: {
                shopEncode: shopEndcode
            }
        }).then()

    }, [])

    return (
        <Page>

            <BlockStack gap={'400'}>
                <Box>
                    <Text variant="headingLg" as="h5">
                        Hi! { data ? data?.getMerchantByShopEncode?.name : ''}
                    </Text>
                    <Text variant="bodyLg" as="p">
                        Welcome to Easy Builder, where you can freely create websites according to your own personality without worrying about functional limitations.
                    </Text>
                </Box>

                <Box>
                    <Banner
                        title="Easy Effects is currently disabled on your store. Click 'Enable App' to activate."
                        tone="warning"
                        action={{content: 'Enable App', url: ``}}
                        onDismiss={() => {}}
                    >
                        <p>
                            Add weights to show accurate rates at checkout and when buying shipping
                            labels in Shopify.
                        </p>
                    </Banner>
                </Box>

                <Box>
                    <LegacyCard sectioned>
                        <Tabs tabs={tabs} selected={selected} onSelect={handleTabChange} fitted>
                            <LegacyCard.Section title={tabs[selected].content}>
                                <p>Tab {selected} selected</p>
                            </LegacyCard.Section>
                        </Tabs>
                    </LegacyCard>
                </Box>

                <Box>
                    <FooterHelp>
                        Learn more about{' '}
                        <Link url="https://help.shopify.com/manual/orders/fulfill-orders">
                            fulfilling orders
                        </Link>
                    </FooterHelp>
                </Box>
            </BlockStack>
        </Page>
    );
}
