# WhatsApp Calling Demo 📞

A demonstration project for the **Twilio Level Up** event on **October 8, 2025**, showcasing how to enhance WhatsApp chats through voice calling capabilities using Twilio's API.

## 🎯 About

This project demonstrates the integration of voice calling features within WhatsApp conversations using Twilio's Programmable Voice and WhatsApp Business API. Built for the Level Up session: "Enhance WhatsApp Chats Through Voice Calling".

**Event Details:** [Twilio Level Up Registration](https://developers.twilio.com/Twilio-Developers/level-up-enhance-whatsapp-chats-through-voice-calling)

## 🚀 Features

- **WhatsApp Webhook Handler**: Processes incoming WhatsApp messages
- **Voice Call Integration**: Initiates and handles voice calls through WhatsApp
- **TwiML Responses**: Automated voice responses with customizable messages
- **Fastify Server**: Lightweight HTTP server for webhook endpoints

## 🛠️ Tech Stack

- **Node.js** with **Fastify** framework
- **Twilio SDK** for voice and messaging
- **TwiML** for call flow control
- **pnpm** for package management

## 📋 Prerequisites

- Node.js (v14 or higher)
- Twilio account with WhatsApp Business API access
- ngrok or similar tunneling tool for local development

## ⚡ Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/IObert/levelup-whatsappcalling
   cd levelup-whatsappcalling
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   # Add your Twilio credentials and phone numbers
   export TWILIO_ACCOUNT_SID=your_account_sid
   export TWILIO_AUTH_TOKEN=your_auth_token
   export MARIUS_NUMBER=your_whatsapp_number
   ```

4. **Start the server**
   ```bash
   node server.js
   ```

5. **Expose localhost (for webhook testing)**
   ```bash
   ngrok http 3000
   ```

## 📡 API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/message` | ALL | Incoming message processor |
| `/voice` | ALL | Incoming voice call handler |
| `/status-callback` | ALL | call status callback handler |

## 🔧 Usage

### Making an outbound Call
Run the `makeCall.js` script to initiate a WhatsApp voice call:
```bash
node makeCall.js
```

### Webhook Configuration
Configure your Twilio WhatsApp sandbox or Business account to point to:
- **Webhook URL**: `https://your-domain.com/webhook`
- **Voice URL**: `https://your-domain.com/voice`

## 📁 Project Structure

```
├── server.js      # Main Fastify server with webhook endpoints
├── makeCall.js    # Script to initiate WhatsApp voice calls
├── helper.js      # Utility functions for logging and data handling
├── package.json   # Project dependencies and configuration
└── README.md      # This file
```

## 🎨 Customization

- Modify the TwiML responses in `server.js` to customize voice messages
- Update the `makeCall.js` script to change call recipients or content
- Extend the webhook handlers to add more interactive features

## 📚 Learn More

- [Twilio WhatsApp Business Calling Documentation](https://www.twilio.com/docs/voice/whatsapp-business-calling)
- [TwiML Voice Documentation](https://www.twilio.com/docs/voice/twiml)
- [Fastify Documentation](https://fastify.dev/docs/latest/)

## 📅 Event Information

This demo was created for the Twilio Level Up event focusing on enhancing WhatsApp conversations with voice calling capabilities. Join us on **October 8, 2025**!

## 📄 License

This project is licensed under the Apache-2.0 License. See the [LICENSE](LICENSE) file for details.

---

*Built with ❤️ for the Twilio Developer Community*