/**
 * Lead capture.
 *
 * Set VITE_LEAD_ENDPOINT in a `.env` file to any endpoint that accepts a JSON POST
 * (Formspree, Web3Forms, Make/Zapier webhook, GoHighLevel inbound webhook, your own API).
 * Example:  VITE_LEAD_ENDPOINT=https://formspree.io/f/xxxxxxx
 *
 * Without it, leads go to the default Formspree form below.
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

/** Formspree form that receives scorecard leads. VITE_LEAD_ENDPOINT overrides it if set. */
const DEFAULT_LEAD_ENDPOINT = "https://formspree.io/f/xkjowllo";

export async function submitLead(lead: Lead): Promise<boolean> {
  const endpoint = (import.meta.env.VITE_LEAD_ENDPOINT as string | undefined) || DEFAULT_LEAD_ENDPOINT;
  // Flat fields so they read cleanly in the Formspree inbox and email notifications
  const payload: Record<string, string | number> = {
    _subject: `New scorecard lead: ${lead.name}${lead.score !== undefined ? ` (score ${lead.score}/100)` : ""}`,
    name: lead.name,
    email: lead.email,
    product_url: lead.company || "",
    score: lead.score ?? "",
    security: lead.pillars?.Security ?? "",
    performance: lead.pillars?.Performance ?? "",
    scalability: lead.pillars?.Scalability ?? "",
    top_risks: (lead.risks || []).join(" | "),
    source: lead.source,
    page: window.location.href,
    submitted_at: new Date().toISOString(),
  };
  try {
    sessionStorage.setItem("ss_lead_captured", "1");
  } catch {
    /* storage unavailable */
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
