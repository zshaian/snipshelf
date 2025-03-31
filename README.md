# SnipShelf

![banner](./public/images/banner.png)

A simple web application for creating, showcasing, and sharing code snippets.

```
This project is under development, if you want to contribute, or collaborate on building
the project, feel free to view the design file, and join us in discord.
```

[Design File](https://www.figma.com/design/9TDf4WILFZgTLE8QnjzReO/snippets?node-id=4-71&t=CLPFJOFxpduuhV9t-1)


[Discord Server](https://discord.gg/Tm76EqwJQB)

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

## Build

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
