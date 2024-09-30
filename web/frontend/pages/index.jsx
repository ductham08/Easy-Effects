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
    Box
} from "@shopify/polaris";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
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

    const [getMerchant, {data}] = useLazyQuery(GET_MERCHANT_BY_SHOP_ENCODE, {
        client: appClient,
        fetchPolicy: "no-cache"
    })

    // const href = `https://${shopUrl}/admin/themes/current/editor?context=apps&template=product&activateAppId=${process.env.SHOPIFY_THEME_APP_EXTENSION_ID}/shinepage-scripts`
    // const newWindow = window.open(href, '_blank')
    // if (!newWindow || newWindow.closed || typeof newWindow.closed == 'undefined') {
    //     shopify.toast.show("Unblock browser pop-ups and try again")
    // }

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
