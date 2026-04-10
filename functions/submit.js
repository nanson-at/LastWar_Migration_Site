export async function onRequest(context) {
  try {
    const data = await context.request.json();
    
    // The Google Apps Script Web App URL
    const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxpEDk7a_ZX0TnRjAfyQVIPdclPOOUkB4oNMJeZSKfVCyn5-Suabio7EB9-JdMi3B_C/exec";

    // Forward the data to Google Apps Script from the Cloudflare server side
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain;charset=utf-8',
      },
      body: JSON.stringify(data)
    });

    const resultText = await response.text();

    return new Response(JSON.stringify({ status: "success", info: resultText }), {
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    return new Response(JSON.stringify({ status: "error", message: error.toString() }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
