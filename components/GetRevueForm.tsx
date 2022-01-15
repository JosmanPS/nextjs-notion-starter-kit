import React from 'react'

export default function GetRevueForm() {
  return (
    <div id='revue-embed'>
      <h2 className='getrevue-title'>¡Suscríbete!</h2>
      <p className='getrevue-description'>
        Si deseas ser notificado cada vez que se publique un nuevo post, te
        invito a suscribirte.
      </p>
      <form
        action='https://www.getrevue.co/profile/josmanproudinat/add_subscriber'
        method='post'
        id='revue-form'
        name='revue-form'
        target='_blank'
      >
        <div className='revue-form-group'>
          <input
            className='revue-form-field'
            placeholder='Email *'
            type='email'
            name='member[email]'
            id='member_email'
          />
        </div>
        <div className='revue-form-group'>
          <input
            className='revue-form-field'
            placeholder='Nombre'
            type='text'
            name='member[first_name]'
            id='member_first_name'
          />
        </div>
        <div className='revue-form-group'>
          <input
            className='revue-form-field'
            placeholder='Apellido'
            type='text'
            name='member[last_name]'
            id='member_last_name'
          />
        </div>
        <div className='revue-form-actions'>
          <input
            type='submit'
            value='Suscríbete'
            name='member[subscribe]'
            id='member_submit'
          />
        </div>
        <div className='revue-form-footer notion-gray'>
          By subscribing, you agree with Revue’s{' '}
          <a target='_blank' href='https://www.getrevue.co/terms'>
            Terms of Service
          </a>{' '}
          and{' '}
          <a target='_blank' href='https://www.getrevue.co/privacy'>
            Privacy Policy
          </a>
          .
        </div>
      </form>
    </div>
  )
}
