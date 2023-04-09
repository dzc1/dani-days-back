module.exports = ({ env }) => ({
  auth: {
    secret: env("ADMIN_JWT_SECRET"),
  },
  apiToken: {
    salt: env("API_TOKEN_SALT"),
  },
  transfer: {
    token: {
      salt: env("TRANSFER_TOKEN_SALT"),
    },
  },
  auditLogs: {
    // only accessible with an Enterprise plan
    enabled: env.bool("AUDIT_LOGS_ENABLED", true),
    retentionDays: 120,
  },
  url: env("PUBLIC_ADMIN_URL", "/dashboard"),
});
