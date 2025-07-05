class NotificationChannel {
    send(recipient, message) {
        throw new Error("send() must be implemented");
    }
}

class EmailChannel extends NotificationChannel {
    send(recipient, message) {
        if (!recipient) {
            throw new Error("recipient required");
        }
        console.log(`Sending Email to ${recipient}: with a message of (${message})`);
    }
}

class SmsChannel extends NotificationChannel {
    send(recipient, message) {
        if (!recipient) {
            throw new Error("recipient required");
        }
        console.log(`Sending Message to ${recipient}: with a message of (${message})`);
    }
}

class TelegramChannel extends NotificationChannel {
    send(recipient, message) {
        if (!recipient) {
            throw new Error("recipient required");
        }
        console.log(`Sending TELEGRAM to ${recipient}: with a message of (${message})`);
    }
}

const emailChannel = new EmailChannel();
const smsChannel = new SmsChannel();
const telegramChannel = new TelegramChannel();



emailChannel.send('teumay21@gmail.com', 'Testing email message');
smsChannel.send('+1234567890', 'Testing SMS message');
telegramChannel.send('teumay1221', 'Testing Telegram message');