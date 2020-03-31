import { Form, Label, TextField, TextAreaField, FieldError, Submit } from '@redwoodjs/web'
import BlogLayout from 'src/layouts/BlogLayout'

const ContactPage = () => {
  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <BlogLayout>
      <Form onSubmit={onSubmit} validation={{ mode: 'onBlur' }}>
        <Label name="name" style={{ display: 'block' }} errorStyle={{ display: 'block', color: 'red' }} />
        <TextField
          name="name"
          style={{ display: 'block' }}
          validation={{ required: true }}
          errorStyle={{ display: 'block', borderColor: 'red' }}
        />
        <FieldError name="name" style={{ color: 'red' }} />

        <Label name="email" style={{ display: 'block' }} errorStyle={{ display: 'block', color: 'red' }} />
        <TextField
          name="email"
          style={{ display: 'block' }}
          validation={{
            required: true,
            pattern: {
              value: /[^@]+@[^.]+\..+/,
              message: 'Please enter a valid email address'
            }
          }}
          errorStyle={{ display: 'block', borderColor: 'red' }}
        />
        <FieldError name="email" style={{ color: 'red' }} />

        <Label name="message" style={{ display: 'block' }} errorStyle={{ display: 'block', color: 'red' }} />
        <TextAreaField
          name="message"
          style={{ display: 'block' }}
          validation={{ required: true }}
          errorStyle={{ display: 'block', borderColor: 'red' }}
        />
        <FieldError name="message" style={{ color: 'red' }} />
        <Submit style={{ display: 'block' }}>Save</Submit>
      </Form>
    </BlogLayout>
  )
}

export default ContactPage
