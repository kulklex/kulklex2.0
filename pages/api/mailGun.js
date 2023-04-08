import mailgun from 'mailgun-js'


export default async function handler(req, res) {
    const mg = mailgun({apiKey: 'YOUR_API_KEY', domain: 'YOUR_DOMAIN'})
}