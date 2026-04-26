# Note Sharing App Frontend

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Create a `.env.local` file and add your Clerk keys:

```bash
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_publishable_key
CLERK_SECRET_KEY=your_secret_key
```

3. Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Routes

- `/` Landing page
- `/sign-up` Clerk sign up
- `/sign-in` Clerk sign in
- `/dashboard` Protected dashboard

After successful sign up/sign in, users are redirected to `/dashboard`.

## Tech

- Next.js (App Router)
- Clerk authentication
- Tailwind CSS

Make sure social login providers are enabled in your Clerk dashboard if you want social authentication options in Sign In/Sign Up.
