# SnipShelf

![banner](./public/images/banner.png)

A simple web application for creating, showcasing, and sharing code snippets.

## Prerequisites

- Node.js (v18 or higher)
- pnpm

## Installation

```bash
# Install dependencies
pnpm install
```

## Development

```bash
pnpm run dev
```

## Testing

```bash
# run all tests
pnpm test

# run tests in watch mode
pnpm test:watch

# run cypress E2E tests
pnpm cypress:open
```

## Linting and Formatting

```bash
# run esLlnt
pnpm lint

# format code with prettier
pnpm format
```

## Buid

```bash
# create production build
pnpm build

# start production server
pnpm start
```

## Project Structure

```bash
snipshelf/
├── app/              # Next.js app directory
├── components/       # React components
├── __test__/        # Test files
└── public/          # Static assets
```
