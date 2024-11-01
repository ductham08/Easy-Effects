// @ts-check
import {join} from "path";
import {readFileSync} from "fs";
import express from "express";
import serveStatic from "serve-static";
import shopify from "./shopify.js";
import PrivacyWebhookHandlers from "./privacy.js";
import authCallback from "./backend/src/middleware/authCallback.js";
// import registerApis from "./backend/index.js";

const PORT = parseInt(
    process.env.BACKEND_PORT || process.env.PORT || "3000",
    10
);

const STATIC_PATH =
    process.env.NODE_ENV === "production"
        ? `${process.cwd()}/frontend/dist`
        : `${process.cwd()}/frontend/`;

const app = express();

// Set up Shopify authentication and webhook handling
app.get(shopify.config.auth.path, shopify.auth.begin());
app.get(
    shopify.config.auth.callbackPath,
    shopify.auth.callback(),
    authCallback,
    shopify.redirectToShopifyOrAppRoot()
);
app.post(
    shopify.config.webhooks.path,
    shopify.processWebhooks({webhookHandlers: PrivacyWebhookHandlers})
);

// If you are adding routes outside the /api path, remember to
// also add a proxy rule for them in web/frontend/vite.config.js

app.use("/api/*", shopify.validateAuthenticatedSession());

app.use(express.json());

// registerApis(app)

app.use(shopify.cspHeaders());
app.use(serveStatic(STATIC_PATH, {index: false}));

app.use("/*", shopify.ensureInstalledOnShop(), async (_req, res, _next) => {
    return res
        .status(200)
        .set("Content-Type", "text/html")
        .send(
            readFileSync(join(STATIC_PATH, "index.html"))
                .toString()
                .replace("%VITE_SHOPIFY_API_KEY%", process.env.SHOPIFY_API_KEY || "")
        );
});

app.listen(PORT);
