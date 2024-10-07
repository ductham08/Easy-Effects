import { BlockStack, Box, Button, Card, InlineGrid, Text } from '@shopify/polaris'
import {Icon} from '@shopify/polaris';
import { ViewIcon } from '@shopify/polaris-icons';
import React from 'react'

const FallEffect = () => {
    return (
        <div>
            <BlockStack gap="400">
                <Card roundedAbove="sm">
                    <BlockStack gap="200">
                        <InlineGrid columns="1fr auto">
                            <Text as="h2" variant="headingSm">
                                Variants
                            </Text>
                            <Button
                                onClick={() => {}}
                                accessibilityLabel="Vieww demo"
                                icon={ ViewIcon }
                            />
                        </InlineGrid>
                        <Text as="p" variant="bodyMd">
                            Export variants
                        </Text>
                    </BlockStack>
                </Card>
            </BlockStack>
        </div>
    )
}

export default FallEffect
