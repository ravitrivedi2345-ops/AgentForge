# Deploying AgentForge on Render

The root `render.yaml` defines the gateway, auth, chat, agent, and billing web
services. The Vite frontend is deployed separately on Vercel. To create the
backend services, connect this repository to Render with **New > Blueprint**
and select the repository.

Before deploying, have these external services and credentials ready:

- MongoDB connection strings for the auth, chat, agent, and billing databases.
- A Redis-compatible connection URL for the gateway, auth, and agent services.
  Use the same Redis URL for all three.
- The Firebase Admin service-account JSON. Set `FIREBASE_SERVICE_ACCOUNT` to
  its minified JSON on the auth service; do not commit the key file.
- Agent provider credentials: `GOOGLE_API_KEY`, `GROQ_API_KEY`,
  `TAVILY_API_KEY`, and `OPENROUTER_API_KEY`, as required by enabled features.
- Qdrant `QDRANT_URL` and `QDRANT_API_KEY`, plus AWS S3 credentials and bucket
  settings if file uploads are enabled.
- Razorpay test or live keys. Keep the secret key on billing only; the key ID
  is also needed by the frontend. Set `VITE_RAZORPAY_KEY_ID` in the Vercel
  frontend project if billing is enabled.

The Blueprint prompts for values marked `sync: false` when first created.
Set `FRONTEND_URL` on `agentforge-gateway` to the Vercel frontend's production
URL, without a trailing slash. When adding a new secret later, add it in the
corresponding Render service's Environment settings. Backend service URLs use
Render's internal network on port 10000.

In Vercel, set `VITE_SERVER_URL` to the deployed gateway's public Render URL
(for example, `https://agentforge-gateway.onrender.com`). Redeploy the Vercel
frontend after changing environment variables. The backend's
`FRONTEND_URL` must match the Vercel origin so gateway CORS allows browser
requests.

The included services use Render's free web plans. Free web instances can spin
down while idle; they may have cold-start delays. MongoDB, Redis, Qdrant, and
S3 are external dependencies and are not provisioned by this file.
