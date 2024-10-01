import { BlockStack, Button, Card, InlineGrid, InlineStack, Text, Tooltip } from '@shopify/polaris'
import React from 'react'
import { ViewIcon } from '@shopify/polaris-icons';

const SeasonEffects = () => {
  return (
    <BlockStack gap="200">
        <Card roundedAbove="sm">
            <BlockStack gap="200">
                <InlineGrid columns="1fr auto">
                    <Text as="p" variant="headingSm">
                        Effect
                    </Text>
                    <Tooltip
                        content={'View Demo'}
                    >
                        <Button
                            onClick={() => {}}
                            accessibilityLabel="Export variants"
                            icon={ ViewIcon }
                        />
                    </Tooltip>
                </InlineGrid>
            </BlockStack>
        </Card> 
    </BlockStack>
  )
}

export default SeasonEffects