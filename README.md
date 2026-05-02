# Welcome to your Lovable project

TODO: Document your project here

## Gmail SMTP Setup (TDS Form Emails)

1. Create a `.env` file in project root using `.env.example`.
2. Set `SMTP_USER` to your Gmail address.
3. Set `SMTP_PASS` to your 16-character Gmail App Password.
4. `ADMIN_EMAIL` is optional. If not set, admin lead emails go to `SMTP_USER`.

The app now sends:
- Admin email with submitted user details.
- Thank-you confirmation email to the user.

### Run locally

```bash
npm run dev:full
```

This starts:
- Frontend on `http://localhost:8080`
- Mail API on `http://127.0.0.1:8787`
