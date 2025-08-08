import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

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

const generateEmailHTML = (data: ContactFormData) => {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Contact Form Submission</title>
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Ubuntu, sans-serif; background-color: #f6f9fc; margin: 0; padding: 20px;">
  <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
    <div style="background-color: #333; color: white; padding: 20px;">
      <h1 style="margin: 0; font-size: 24px;">New Contact Form Submission</h1>
      <p style="margin: 5px 0 0; opacity: 0.9;">Podium Zagreb Website</p>
    </div>
    
    <div style="padding: 30px;">
      <div style="margin-bottom: 20px;">
        <strong style="color: #666; display: block; margin-bottom: 5px;">From:</strong>
        <div style="font-size: 16px; color: #333;">${data.name}</div>
      </div>
      
      <div style="margin-bottom: 20px;">
        <strong style="color: #666; display: block; margin-bottom: 5px;">Email:</strong>
        <div style="font-size: 16px; color: #333;">
          <a href="mailto:${data.email}" style="color: #007bff; text-decoration: none;">${data.email}</a>
        </div>
      </div>
      
      ${data.phone ? `
      <div style="margin-bottom: 20px;">
        <strong style="color: #666; display: block; margin-bottom: 5px;">Phone:</strong>
        <div style="font-size: 16px; color: #333;">${data.phone}</div>
      </div>
      ` : ''}
      
      <div style="margin-bottom: 20px;">
        <strong style="color: #666; display: block; margin-bottom: 5px;">Subject:</strong>
        <div style="font-size: 16px; color: #333;">${data.subject}</div>
      </div>
      
      <hr style="border: none; border-top: 1px solid #e6ebf1; margin: 25px 0;">
      
      <div style="margin-bottom: 20px;">
        <strong style="color: #666; display: block; margin-bottom: 10px;">Message:</strong>
        <div style="background-color: #f8f9fa; border-left: 4px solid #007bff; padding: 15px; border-radius: 4px; line-height: 1.6; color: #333;">
          ${data.message.replace(/\n/g, '<br>')}
        </div>
      </div>
      
      <hr style="border: none; border-top: 1px solid #e6ebf1; margin: 25px 0;">
      
      <p style="color: #666; font-size: 14px; margin-bottom: 15px;">
        This message was sent from the Podium Zagreb website contact form.
        <br>
        Reply directly to <a href="mailto:${data.email}" style="color: #007bff;">${data.email}</a> to respond to the customer.
      </p>
      
      <p style="color: #333; font-size: 14px; margin: 0;">
        Best regards,<br>
        <strong>Podium Zagreb Website System</strong>
      </p>
    </div>
  </div>
</body>
</html>
  `.trim();
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log("Received request to send contact email");
    const { name, email, phone, subject, message }: ContactFormData = await req.json();
    console.log("Form data:", { name, email, phone: phone || 'N/A', subject });

    // Validate required fields
    if (!name || !email || !subject || !message) {
      console.error("Missing required fields");
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { 
          status: 400, 
          headers: { ...corsHeaders, "Content-Type": "application/json" } 
        }
      );
    }

    if (!RESEND_API_KEY) {
      console.error("RESEND_API_KEY not found");
      return new Response(
        JSON.stringify({ error: "Email service not configured" }),
        { 
          status: 500, 
          headers: { ...corsHeaders, "Content-Type": "application/json" } 
        }
      );
    }

    console.log("Generating email HTML");
    const html = generateEmailHTML({ name, email, phone, subject, message });

    console.log("Sending email via Resend API");
    
    // Send email using Resend API
    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Podium Zagreb <onboarding@resend.dev>",
        to: ["skincare.podium@gmail.com"],
        reply_to: email,
        subject: `Contact Form: ${subject}`,
        html,
      }),
    });

    const responseData = await emailResponse.json();
    console.log("Resend API response status:", emailResponse.status);
    console.log("Resend API response data:", JSON.stringify(responseData, null, 2));

    if (!emailResponse.ok) {
      console.error("Resend API error:", emailResponse.status, JSON.stringify(responseData, null, 2));
      throw new Error(`Resend API error: ${responseData.message || JSON.stringify(responseData)}`);
    }

    console.log("Email sent successfully:", responseData.id);

    return new Response(
      JSON.stringify({ message: "Email sent successfully", id: responseData.id }),
      { 
        status: 200, 
        headers: { ...corsHeaders, "Content-Type": "application/json" } 
      }
    );

  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({ error: error.message || "Failed to send email" }),
      { 
        status: 500, 
        headers: { ...corsHeaders, "Content-Type": "application/json" } 
      }
    );
  }
});