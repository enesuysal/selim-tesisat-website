import TelegramBot from 'node-telegram-bot-api';

interface TelegramMessage {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  service?: string;
  location: string;
  message: string;
  isUrgent: boolean;
  messageId: string;
  ipAddress: string;
}

class TelegramNotifier {
  private bot: TelegramBot | null = null;
  private chatId: string | null = null;

  constructor() {
    const token = process.env['TELEGRAM_BOT_TOKEN'];
    const groupId = process.env['TELEGRAM_GROUP_ID'];

    if (token && groupId) {
      this.bot = new TelegramBot(token);
      this.chatId = groupId;
      console.log('✅ Telegram bot initialized successfully');
    } else {
      console.log('Telegram credentials not configured. Skipping Telegram notifications.');
    }
  }

  async sendContactFormMessage(messageData: TelegramMessage): Promise<boolean> {
    if (!this.bot || !this.chatId) {
      console.log('Telegram not configured. Skipping notification.');
      return false;
    }

    try {
      const urgentIcon = messageData.isUrgent ? '🚨 ACİL ' : '';
      const serviceText = messageData.service ? messageData.service : 'Belirtilmemiş';
      
      const telegramMessage = `
${urgentIcon}📩 *Yeni İletişim Formu*

👤 *Ad Soyad:* ${messageData.firstName} ${messageData.lastName}
📧 *Email:* ${messageData.email}
📱 *Telefon:* ${messageData.phone}
📍 *Konum:* ${messageData.location}
🔧 *Hizmet:* ${serviceText}
${messageData.isUrgent ? '⚠️ *ÖNCELIK:* ACİL DURUM' : ''}

💬 *Mesaj:*
${messageData.message}

📊 *Detaylar:*
• Talep ID: \`${messageData.messageId}\`
• IP Adresi: ${messageData.ipAddress}
• Tarih: ${new Date().toLocaleString('tr-TR')}

${messageData.isUrgent ? '🔥 *Bu talep acil olarak işaretlenmiştir!*' : ''}
      `.trim();

      await this.bot.sendMessage(this.chatId, telegramMessage, {
        parse_mode: 'Markdown',
        disable_web_page_preview: true
      });

      console.log('Telegram notification sent successfully for message:', messageData.messageId);
      return true;
    } catch (error) {
      console.error('Failed to send Telegram notification:', error instanceof Error ? error.message : error);
      return false;
    }
  }

  async sendTestMessage(): Promise<boolean> {
    if (!this.bot || !this.chatId) {
      console.log('Telegram not configured for test.');
      return false;
    }

    try {
      await this.bot.sendMessage(this.chatId, '✅ Selim Tesisat Web Sitesi Telegram entegrasyonu aktif!');
      console.log('Test message sent successfully');
      return true;
    } catch (error) {
      console.error('Failed to send test message:', error instanceof Error ? error.message : error);
      return false;
    }
  }
}

export const telegramNotifier = new TelegramNotifier();
