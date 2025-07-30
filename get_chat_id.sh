#!/bin/bash

# Telegram Bot Setup Helper Script
# Run this after adding your bot to a group and sending a message

BOT_TOKEN="8217770791:AAF3ivAw-4fTNZVPPhQPb6-Kn2p_L0zkgAU"

echo "🤖 Fetching updates from Telegram Bot API..."
echo "Bot Token: $BOT_TOKEN"
echo ""

# Get updates from Telegram
curl -s "https://api.telegram.org/bot$BOT_TOKEN/getUpdates" | jq '.'

echo ""
echo "📋 Instructions:"
echo "1. Look for the 'chat' object in the response above"
echo "2. Find the 'id' field (it will be negative for groups)"
echo "3. Copy that ID and add it to your .env file as TELEGRAM_GROUP_ID"
echo ""
echo "Example: TELEGRAM_GROUP_ID=-1001234567890"
