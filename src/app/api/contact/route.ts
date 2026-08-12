import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const webhookUrl = process.env.DISCORD_WEBHOOK_URL;

    if (!webhookUrl) {
      console.error("DISCORD_WEBHOOK_URL is not set in environment variables");
      return NextResponse.json({ error: 'Webhook URL not configured' }, { status: 500 });
    }

    // Format the Discord message embed
    const embed = {
      title: 'New Message from Portfolio!',
      color: 3900150, // Accent blue color
      fields: [
        { name: 'Name', value: name, inline: true },
        { name: 'Email', value: email, inline: true },
        { name: 'Message', value: message },
      ],
      timestamp: new Date().toISOString(),
    };

    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: 'Portfolio Bot',
        avatar_url: 'https://cdn-icons-png.flaticon.com/512/4712/4712010.png',
        embeds: [embed],
      }),
    });

    if (!response.ok) {
      throw new Error(`Failed to send to Discord: ${response.statusText}`);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending message:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
