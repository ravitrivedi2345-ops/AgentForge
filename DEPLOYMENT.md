# Vercel deployment

Set the Vercel project root to the repository root (`AgentForge`). The existing `vercel.json` builds the Vite client and exposes the Express gateway at `/api`.

Required Vercel environment variables:

- `FRONTEND_URL`: the deployed frontend URL, including `https://`
- `AUTH_SERVICE`: public URL for the auth service
- `CHAT_SERVICE`: public URL for the chat service
- `AGENT_SERVICE`: public URL for the agent service
- `BILLING_SERVICE`: public URL for the billing service
- `REDIS_URL`: hosted Redis connection string

The gateway is only the Vercel-hosted API entrypoint. The auth, chat, agent, and billing services must be deployed separately on a platform that supports persistent services, and their URLs must be reachable from Vercel. Configure their database, storage, AI provider, Firebase, and payment secrets in those services' environments.

The frontend uses the Vercel deployment origin automatically when `VITE_SERVER_URL` is omitted. Set `VITE_SERVER_URL` only when the gateway is hosted at a different public URL.