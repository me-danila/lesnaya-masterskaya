import {NextResponse} from 'next/server';

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

export async function POST(request) {
    try {
        const {formType, ...formData} = await request.json();

        if (!formType) {
            return NextResponse.json({error: 'Не указан тип формы'}, {status: 400});
        }

        switch (formType) {
            case 'order':
                if (!formData) {
                    return NextResponse.json({error: 'Заполните все обязательные поля'}, {status: 400});
                }

                const messageText = `
📌 НОВАЯ ЗАЯВКА С САЙТА

🛒 Товар: ${formData.product} (Артикул: ${formData.id})
💰 Стоимость: ${formData.price}
👤 Имя: ${formData.name}
📞 Контакт: ${formData.contactType} ${formData.contact}
                `.trim();

                if (formData.photo) {
                    await sendTelegramPhoto({
                        photo: formData.photo, caption: messageText
                    });
                } else {
                    await sendTelegramMessage(messageText);
                }
                break;

            default:
                return NextResponse.json({error: 'Неизвестный тип формы'}, {status: 400});
        }

        return NextResponse.json({message: 'Ваше сообщение успешно отправлено!'}, {status: 200});

    } catch (error) {
        console.error('Server error:', error);
        return NextResponse.json({error: 'Внутренняя ошибка сервера'}, {status: 500});
    }
}

async function sendTelegramPhoto({photo, caption = ''}) {
    const formData = new FormData();
    formData.append('photo', photo);
    formData.append('chat_id', TELEGRAM_CHAT_ID);
    formData.append('caption', caption);
    formData.append('parse_mode', 'HTML');

    const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendPhoto`, {
        method: 'POST', body: formData
    });

    if (!response.ok) {
        throw new Error(`Telegram API error: ${await response.text()}`);
    }

    return response.json();
}

async function sendTelegramMessage(text) {
    const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
        method: 'POST', headers: {
            'Content-Type': 'application/json',
        }, body: JSON.stringify({
            chat_id: TELEGRAM_CHAT_ID, text: text, parse_mode: 'HTML'
        })
    });

    if (!response.ok) {
        throw new Error(`Ошибка Telegram API: ${await response.text()}`);
    }

    return response.json();
}