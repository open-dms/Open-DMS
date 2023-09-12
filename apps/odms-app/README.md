## ODMS Frontend

A [NextJS](https://nextjs.org) app for ODMS account owner to administer and maintain their Open-DMS event and location data. Authentication and user session management is done with `next-auth` using an `EmailProvider` to allow users to onboard and sign onto the ODMS platform by email.

**Note:** For the time being this repo is considered `WIP`.

#### Current status

Clone from `dev`, run `npm install` and `npm run dev` then open your browser at `http://localhost:3000`.

### ENV vars

Note that you will need to create a `~/.env` file with a few mandatory env vars to connect to a database, ensure user authentication works, etc.

```INI

# data
DATABASE_URL=

# authentication
NEXTAUTH_SECRET=
NEXTAUTH_URL=http://localhost:3000
NEXT_PUBLIC_URL=http://localhost:3000

# authentication emails
SMTP_USER=
SMTP_PASSWORD=
SMTP_HOST=
SMTP_PORT=
EMAIL_FROM=

```

> ☝️ NOTE: App is configured to use mongodb in `~/prisma/schema.prisma` for now.

#### Sign In to the app

Use the `next-auth`'s default signIn at [http://localhost:3000/api/auth/signin?provider=email](http://localhost:3000/api/auth/signin?provider=email)

> ☝️ NOTE: for now the magic-link that will allow account signIn is only availbale in the apps console.

#### Useful links

- [Next.js documentation](https://nextjs.org/docs)
- [Next-Auth documentation](https://next-auth.js.org/getting-started/introduction)
- [Next-Auth EmailProvider](https://next-auth.js.org/providers/email)
