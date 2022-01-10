import React from 'react'
import Mailchimp from 'react-mailchimp-form'

export default function MailchimpForm() {
  return (
    <div className='mailchimp-form-container'>
      <h2 className='mailchimp-title'>¡Suscríbete!</h2>
      <p className='mailchimp-description'>
        Si deseas ser notificado cada vez que se publique un nuevo post, te
        invito a suscribirte.
      </p>
      <Mailchimp
        className='mailchimp-form'
        action={process.env.MAILCHIMP_ACTION_URL}
        fields={[
          {
            name: 'FNAME',
            placeholder: 'Nombre',
            type: 'text',
            required: true
          },
          {
            name: 'EMAIL',
            placeholder: 'Email',
            type: 'email',
            required: true
          }
        ]}
      />
    </div>
  )
}
