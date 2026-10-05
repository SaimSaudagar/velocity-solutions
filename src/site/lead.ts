/**
 * Lead capture.
 *
 * Set VITE_LEAD_ENDPOINT in a `.env` file to any endpoint that accepts a JSON POST
 * (Formspree, Web3Forms, Make/Zapier webhook, GoHighLevel inbound webhook, your own API).
 * Example:  VITE_LEAD_ENDPOINT=https://formspree.io/f/xxxxxxx
 *
 * Without it, leads are only logged to the console so the flow still works locally.
 */
export type Lead = {
  name: string;
  email: string;
  company?: string;
  source: string;
  score?: number;
  pillars?: Record<string, number>;
  risks?: string[];
};

export const CALENDLY_URL = "https://calendly.com/saudagarsaim/30min";
export const VSL_ID = "_1k5fwlWX2Y";
export const CONTACT_EMAIL = "saudagarsaim@gmail.com";

export async function submitLead(lead: Lead): Promise<boolean> {
  const endpoint = import.meta.env.VITE_LEAD_ENDPOINT as string | undefined;
  const payload = { ...lead, page: window.location.href, submittedAt: new Date().toISOString() };
  try {
    sessionStorage.setItem("ss_lead_captured", "1");
  } catch {
    /* storage unavailable */
  }
  if (!endpoint) {
    console.info("[lead] VITE_LEAD_ENDPOINT not set — lead not sent:", payload);
    return true;
  }
  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(payload),
    });
    return res.ok;
  } catch (e) {
    console.error("[lead] submit failed", e);
    return false;
  }
}
