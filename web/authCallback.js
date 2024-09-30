import {shopifyApiClient, useQuery, useShopifyQuery} from "./helpers/common.js";
import shopify from "./shopify.js";
import {GET_MERCHANT_BY_SHOP_ENCODE} from "./apollo-client/query.js";
import {encode} from "js-base64"
import {GET_APP_ID} from "./apollo-client/shopify.query.js";
import {PLANS} from "./helpers/constants.js";
import {CREATE_MERCHANT} from "./apollo-client/mutation.js";

const authCallback = async (req, res, next) => {
    // create or update merchant data

    const {shop: shop_url} = req.query
    const redirect_url = `${process.env.HOST}/api/auth?shop=${shop_url}`

    try {
        const session = res.locals.shopify.session

        const merchant = await useQuery('getMerchantByShopEncode', GET_MERCHANT_BY_SHOP_ENCODE, {
            shopEncode: encode(shop_url)
        })

        const client = shopifyApiClient(session, shopify)

        const {data: shops} = await shopify.api.rest.Shop.all({
            session: session,
        });
        const shop = shops[0]

        const {data: themes} = await shopify.api.rest.Theme.all({
            session: session,
        });

        const main_theme = themes.find(theme => theme.role === 'main')

        const {currentAppInstallation: {id: appID}} = await useShopifyQuery(client, GET_APP_ID)

        if (!merchant) {
            const input = {
                name: shop.name,
                shop: shop.myshopify_domain,
                email: shop.email,
                meta: {
                    domain: shop.domain,
                    phone: shop.phone,
                    country_code: shop.country_code,
                    country_name: shop.country_name,
                    customer_email: shop.customer_email,
                    currency: shop.currency,
                    money_format: shop.money_format,
                    money_with_currency_format: shop.money_with_currency_format,
                    iana_timezone: shop.iana_timezone,
                    plan_name: shop.plan_name,
                    plan_display_name: shop.plan_display_name,
                    main_theme: main_theme,
                    appID: appID,
                },
                shopEncode: encode(shop.myshopify_domain),
                plan: PLANS.free
            }

            const m = await useQuery('createMerchant', CREATE_MERCHANT, {
                input: input
            })
            console.log(m)

        }

    } catch (e) {
        console.log(e)
        return res.redirect(redirect_url);
    }

    next()
}

export default authCallback