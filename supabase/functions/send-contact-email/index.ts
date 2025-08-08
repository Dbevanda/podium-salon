import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import React from 'npm:react@18.3.1'
import { Resend } from 'npm:resend@4.0.0'
import { renderAsync } from 'npm:@react-email/components@0.0.22'
import { ContactEmail } from './_templates/contact-email.tsx'

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
const resend = new Resend(RESEND_API_KEY);

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, phone, subject, message }: ContactFormData = await req.json();

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { 
          status: 400, 
          headers: { ...corsHeaders, "Content-Type": "application/json" } 
        }
      );
    }

    // Render the React email template
    const html = await renderAsync(
      React.createElement(ContactEmail, {
        name,
        email,
        phone,
        subject,
        message,
      })
    );

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: "Podium Zagreb <website@podium-zagreb.com>",
      to: ["skincare.podium@gmail.com"],
      reply_to: email,
      subject: `Contact Form: ${subject}`,
      html,
    });

    if (error) {
      console.error("Resend API error:", error);
      throw new Error("Failed to send email");
    }

    console.log("Email sent successfully:", data);

    return new Response(
      JSON.stringify({ message: "Email sent successfully", id: data?.id }),
      { 
        status: 200, 
        headers: { ...corsHeaders, "Content-Type": "application/json" } 
      }
    );

  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({ error: "Failed to send email" }),
      { 
        status: 500, 
        headers: { ...corsHeaders, "Content-Type": "application/json" } 
      }
    );
  }
});