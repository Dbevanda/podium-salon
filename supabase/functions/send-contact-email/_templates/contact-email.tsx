import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Link,
  Preview,
  Text,
  Section,
  Hr,
} from 'npm:@react-email/components@0.0.22'
import * as React from 'npm:react@18.3.1'

interface ContactEmailProps {
  name: string
  email: string
  phone?: string
  subject: string
  message: string
}

export const ContactEmail = ({
  name,
  email,
  phone,
  subject,
  message,
}: ContactEmailProps) => (
  <Html>
    <Head />
    <Preview>New contact form submission from {name}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>New Contact Form Submission</Heading>
        
        <Section style={section}>
          <Text style={label}>From:</Text>
          <Text style={value}>{name}</Text>
        </Section>

        <Section style={section}>
          <Text style={label}>Email:</Text>
          <Text style={value}>{email}</Text>
        </Section>

        {phone && (
          <Section style={section}>
            <Text style={label}>Phone:</Text>
            <Text style={value}>{phone}</Text>
          </Section>
        )}

        <Section style={section}>
          <Text style={label}>Subject:</Text>
          <Text style={value}>{subject}</Text>
        </Section>

        <Hr style={hr} />

        <Section style={section}>
          <Text style={label}>Message:</Text>
          <Text style={messageText}>{message}</Text>
        </Section>

        <Hr style={hr} />

        <Text style={footer}>
          This message was sent from the Podium Zagreb website contact form.
          <br />
          Reply directly to <Link href={`mailto:${email}`} style={link}>{email}</Link> to respond to the customer.
        </Text>

        <Text style={signature}>
          Best regards,<br />
          Podium Zagreb Website System
        </Text>
      </Container>
    </Body>
  </Html>
)

export default ContactEmail

const main = {
  backgroundColor: '#f6f9fc',
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
}

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '20px 0 48px',
  marginBottom: '64px',
}

const h1 = {
  color: '#333',
  fontSize: '24px',
  fontWeight: 'bold',
  margin: '40px 0 20px',
  padding: '0 40px',
}

const section = {
  padding: '0 40px',
  marginBottom: '16px',
}

const label = {
  color: '#666',
  fontSize: '14px',
  fontWeight: 'bold',
  margin: '0 0 4px',
}

const value = {
  color: '#333',
  fontSize: '16px',
  margin: '0 0 16px',
}

const messageText = {
  color: '#333',
  fontSize: '16px',
  lineHeight: '24px',
  margin: '0',
  padding: '16px',
  backgroundColor: '#f8f9fa',
  borderLeft: '4px solid #007bff',
}

const hr = {
  borderColor: '#e6ebf1',
  margin: '20px 40px',
}

const footer = {
  color: '#666',
  fontSize: '14px',
  padding: '0 40px',
  margin: '20px 0',
}

const signature = {
  color: '#333',
  fontSize: '14px',
  padding: '0 40px',
  margin: '20px 0',
}

const link = {
  color: '#007bff',
  textDecoration: 'underline',
}