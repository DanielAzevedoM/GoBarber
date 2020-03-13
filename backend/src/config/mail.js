export default {
  host: 'smtp.mailtrap.io',
  port: 2525,
  secure: false,
  auth: {
    user: 'a6af6fdf1d493b',
    pass: '47cf0cc6d40463',
  },
  default: {
    From: 'Equipe Gobarber <noreply@gobarber.com',
  },
};

/* Host de email utilizado mailtrap, site "mailtrap.io" , que só servirá para 
ambiente de desenvolvimento. 

Para quando o sistema estiver online, terão essas opções:

Amazon SES
Mailgun
Sparkpost
Mandril(mailchimp)
Gmail


*/
