import {
    Page,
    Text,
    Box,
    Card,
    Layout,
    List,
    Banner,
} from "@shopify/polaris";
import ListEffectsComponent from "../components/effects/ListEffects.Component";

export default function HomePage() {

    return (
        <div className="sp-dashboard-page">
            <Page title="Dashboard" >
                <Layout>
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
                        <Card roundedAbove="sm">
                            <Text as="h2" variant="headingSm">
                                Choose effect
                            </Text>
                            <Box paddingBlockStart="200">
                                <ListEffectsComponent/>
                            </Box>
                        </Card>
                    </Layout.Section>

                </Layout>
            </Page>
        </div>
    );
}
