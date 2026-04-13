export async function onRequest(context) {
  const { request } = context;
  const method = request.method;
  const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxpEDk7a_ZX0TnRjAfyQVIPdclPOOUkB4oNMJeZSKfVCyn5-Suabio7EB9-JdMi3B_C/exec";

  try {
    if (method === 'POST') {
      const data = await request.json();
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify(data)
      });
      const result = await response.json();
      return new Response(JSON.stringify(result), {
        headers: { "Content-Type": "application/json" }
      });
    } else {
      // Handle GET for stats (forwarding query params)
      const url = new URL(request.url);
      const response = await fetch(GOOGLE_SCRIPT_URL + url.search);
      const result = await response.json();
      return new Response(JSON.stringify(result), {
        headers: { "Content-Type": "application/json" }
      });
    }
  } catch (error) {
    return new Response(JSON.stringify({ status: "error", message: error.toString() }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}

