// Agent Stack MCP — directory data
// Each entry has been checked for: publisher identity, auth model,
// permission scope (read-only vs write), and maintenance activity.
// Replace/expand this array once the live Google Sheet feed is connected.

const LISTINGS = [
  {
    name: "Shopify Admin MCP",
    category: "Store management",
    publisher: "Shopify (official)",
    score: 9,
    verdict: "pass",
    access: "write",
    summary: "Lets an AI assistant read and update product listings, inventory counts, and orders directly in your store admin.",
    auth: "OAuth sign-in through your Shopify account — no separate API key to manage.",
    caution: "Because it can write changes (not just read), only connect it to an assistant you trust with real edits, and review its first few actions closely."
  },
  {
    name: "Stripe MCP",
    category: "Payments",
    publisher: "Stripe (official)",
    score: 9,
    verdict: "pass",
    access: "readonly",
    summary: "Answers questions about payments, payouts, and disputes in plain language, without giving the assistant the ability to move money.",
    auth: "OAuth sign-in, scoped to reporting only by default.",
    caution: "Double-check the permission screen during setup — Stripe does offer an optional write-enabled mode for refunds, which you likely don't need yet."
  },
  {
    name: "Google Analytics 4 MCP",
    category: "Analytics",
    publisher: "Google (official)",
    score: 8,
    verdict: "pass",
    access: "readonly",
    summary: "Pulls traffic and conversion numbers into plain-English answers instead of the GA4 dashboard maze.",
    auth: "OAuth sign-in with your existing Google account.",
    caution: "Read-only — safe to connect with no meaningful downside."
  },
  {
    name: "WooCommerce Community MCP",
    category: "Store management",
    publisher: "Independent (open source)",
    score: 5,
    verdict: "risk",
    access: "write",
    summary: "Community-built connector for WooCommerce stores — can edit products and process refunds.",
    auth: "API key based — you generate and paste in a key rather than signing in through OAuth.",
    caution: "No official vendor backing this one, and API-key auth is easier to leak by accident. Fine for testing on a duplicate/staging store first; be cautious before pointing it at your live store."
  },
  {
    name: "Klaviyo MCP",
    category: "Marketing",
    publisher: "Klaviyo (official, beta)",
    score: 7,
    verdict: "pass",
    access: "write",
    summary: "Drafts and can send email/SMS campaigns and checks list performance from inside your AI assistant.",
    auth: "OAuth sign-in.",
    caution: "It can send campaigns, not just draft them — turn on the confirmation-before-send setting during onboarding."
  },
  {
    name: "Generic Storefront Scraper MCP",
    category: "Store management",
    publisher: "Anonymous / unverified GitHub account",
    score: 2,
    verdict: "risk",
    access: "write",
    summary: "Claims to manage any storefront platform through scraping rather than an official API.",
    auth: "Requests your storefront admin username and password directly.",
    caution: "Avoid. No legitimate MCP server should ever ask for your raw admin password — this is a hard red flag, not a caution."
  },
  {
    name: "QuickBooks MCP",
    category: "Accounting",
    publisher: "Intuit (official)",
    score: 8,
    verdict: "pass",
    access: "readonly",
    summary: "Summarizes cash flow, invoices, and expenses in conversation instead of digging through reports.",
    auth: "OAuth sign-in.",
    caution: "Read-only by default — safe starting point for a first accounting connection."
  },
  {
    name: "PayPal MCP",
    category: "Payments",
    publisher: "PayPal (official, Agent Toolkit)",
    score: 8,
    verdict: "pass",
    access: "write",
    summary: "Handles disputes, invoicing, and shipping admin tasks for PayPal-first stores directly from an AI assistant.",
    auth: "OAuth sign-in through PayPal's official Agent Toolkit.",
    caution: "Can take real write actions (disputes, invoices) — review its first few actions closely, same as any official write-enabled connector."
  },
  {
    name: "WooCommerce MCP (official beta)",
    category: "Store management",
    publisher: "WooCommerce (official, public beta)",
    score: 7,
    verdict: "pass",
    access: "write",
    summary: "First-party WooCommerce connector, still in public beta. Because it's self-hosted inside WordPress, it can see and edit far more than just your storefront — themes, plugins, checkout code included.",
    auth: "OAuth sign-in tied to your WordPress admin.",
    caution: "Broader access than a typical storefront tool by design — it sees your whole site, not just products. Prefer this over community WooCommerce connectors now that an official option exists; performance also depends on your own hosting speed."
  },
  {
    name: "Zendesk MCP (official)",
    category: "Customer support",
    publisher: "Zendesk (official, first-party)",
    score: 8,
    verdict: "pass",
    access: "write",
    summary: "Lets an assistant read and act on support tickets, users, and help center articles for your store's support inbox.",
    auth: "OAuth with dynamic client registration, run per-account rather than a shared vendor server.",
    caution: "Can write to tickets, not just read them — turn on any available confirm-before-action setting. Note this only responds inside a conversation you start; it can't watch your queue or alert you to anything on its own."
  },
  {
    name: "Mailchimp Ecommerce MCP (via Appy Pie Automate)",
    category: "Marketing",
    publisher: "Third-party automation platform, not Mailchimp itself",
    score: 3,
    verdict: "risk",
    access: "write",
    summary: "Connects Mailchimp to AI assistants by routing through a third-party no-code automation platform rather than a direct, official Mailchimp integration.",
    auth: "Routed through the third-party platform's own account system, not a direct OAuth link to Mailchimp.",
    caution: "No official Mailchimp-built MCP server exists yet as of this writing. Adding an extra third-party platform in between means another company has access to your email data. Wait for an official server, or use Klaviyo (already listed, official) if email is a priority today."
  }
];
