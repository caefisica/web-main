import fetch from 'node-fetch'

const { SENDGRID_API_KEY } = process.env;
const { ADMIN_EMAIL } = process.env;
const { NOTIFICATION_EMAIL } = process.env;

exports.handler = async (event) => {

  const body = JSON.parse(event.body);
  const { email, name } = body.payload.data;

  console.log(`Submission: ${email}`)

  let headersList = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${SENDGRID_API_KEY}`,
  }

  let bodyContent = JSON.stringify({ 
    list_ids: [ 
      '6ead6f40-571d-4fcc-82b8-7da4ba3599fc',
    ],
    contacts: [
      {
        'email': email,
        'first_name': name,
      },
    ],
  });

  let response = await fetch('https://api.sendgrid.com/v3/marketing/contacts', {
    method: 'PUT',
    body: bodyContent,
    headers: headersList,
  });

  let data = await response.text();
  console.log('Response:', data);

  if (response.status === 202) {
    
    let BodyNotification = JSON.stringify({
      personalizations: [
        {
          to: [
            { email: ADMIN_EMAIL },
          ],
          subject: 'Nuevo suscriptor',
        },
      ],
      from: { 
        email: NOTIFICATION_EMAIL,
      },
      reply_to: { 
        email: NOTIFICATION_EMAIL,
      },
      content: [
        {
          type: 'text/plain',
          value: `Nuevo correo registrado: ${email} - ${name}`,
        },
      ],
    });

    let responses = await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      body: BodyNotification,
      headers: headersList,
    });

    let notification = await responses.text();
    console.log('Response 2:', notification);
  }

  return {
    statusCode: response.status,
    body: data,
  };

};