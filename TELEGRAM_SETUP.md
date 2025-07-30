# Telegram Integration Setup Guide

## 1. Create Telegram Bot

1. Open Telegram and search for `@BotFather`
2. Start a conversation and send `/newbot`
3. Choose a name for your bot (e.g., "Selim Tesisat Bot")
4. Choose a username for your bot (must end with "bot", e.g., "selim_tesisat_bot")
5. BotFather will give you a **Bot Token** - copy this token!

## 2. Set Up Telegram Group

1. Create a new Telegram group or use an existing one
2. Add your bot to the group:
   - Go to group settings
   - Add members
   - Search for your bot's username
   - Add the bot to the group
3. Make your bot an admin (optional, but recommended):
   - Go to group settings
   - Administrators
   - Add your bot as admin

## 3. Get Group Chat ID

### Method 1: Using Bot API
1. Send any message in your group
2. Visit this URL in your browser: `https://api.telegram.org/bot<YOUR_BOT_TOKEN>/getUpdates`
3. Replace `<YOUR_BOT_TOKEN>` with your actual bot token
4. Look for the `chat` object in the response
5. Copy the `id` value (it will be negative for groups, e.g., `-1001234567890`)

### Method 2: Using IDBot
1. Add `@userinfobot` to your group
2. The bot will automatically send the group ID
3. Remove the bot after getting the ID

## 4. Configure Environment Variables

Add these variables to your `.env` file:

```env
TELEGRAM_BOT_TOKEN=1234567890:ABCdefGHIjklMNOpqrsTUVwxyz
TELEGRAM_GROUP_ID=-1001234567890
```

## 5. Test the Integration

1. Start your server: `npm run dev`
2. Visit: `http://localhost:3000/contact/test-telegram`
3. Check your Telegram group for a test message

## 6. Features

### What notifications include:
- 📩 Contact form submissions
- 🚨 Urgent message indicator
- 👤 Customer details (name, email, phone)
- 📍 Location information
- 🔧 Service type requested
- 💬 Full message content
- 📊 Message ID and IP address for tracking
- 🕒 Timestamp

### Message format example:
```
🚨 📩 Yeni İletişim Formu

👤 Ad Soyad: Ahmet Yılmaz
📧 Email: ahmet@example.com
📱 Telefon: 0532 123 45 67
📍 Konum: Bornova, İzmir
🔧 Hizmet: Su Kaçağı Tamiri
⚠️ ÖNCELIK: ACİL DURUM

💬 Mesaj:
Evimde su kaçağı var, acil müdahale gerekiyor.

📊 Detaylar:
• Talep ID: 6488a4023f9fa71e226760e9f
• IP Adresi: 192.168.1.1
• Tarih: 30.07.2025 21:45:30

🔥 Bu talep acil olarak işaretlenmiştir!
```

## 7. Troubleshooting

### Common Issues:

1. **"Bot was not found"**
   - Check if bot token is correct
   - Make sure you've started a conversation with @BotFather

2. **"Chat not found"**
   - Verify the group ID is correct (should be negative for groups)
   - Make sure the bot is added to the group

3. **"Bot can't initiate conversation"**
   - The bot must be added to the group first
   - Send any message in the group to activate it

4. **"403 Forbidden"**
   - The bot needs to be an admin to send messages
   - Or group settings need to allow bots to send messages

### Testing Commands:
```bash
# Test Telegram integration
curl http://localhost:3000/contact/test-telegram

# Check bot info
curl https://api.telegram.org/bot<YOUR_BOT_TOKEN>/getMe

# Get chat updates
curl https://api.telegram.org/bot<YOUR_BOT_TOKEN>/getUpdates
```

## 8. Security Notes

- Keep your bot token secret
- Don't commit tokens to version control
- Use environment variables for configuration
- Consider IP whitelisting for production
- Monitor bot usage in BotFather

## 9. Advanced Features (Optional)

You can extend the Telegram integration with:
- Inline keyboards for quick actions
- Message threading for better organization
- File attachments (images, documents)
- Bot commands for status checking
- Integration with Telegram Web App
