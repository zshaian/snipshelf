# Contributing Guide

Contributions and feedback on your experience of using this web app are welcome. This includes bug reports, feature requests, ideas, pull requests, and examples of how you have used this web app.

Please see the [Code of Conduct](./CODE_OF_CONDUCT.md) and follow any templates configured in GitHub when reporting bugs, requesting enhancements, or contributing code.

Please raise any significant new functionality or breaking change an issue for discussion before raising a Pull Request for it.

## For Contributors

Anyone can be a contributor. Either you found a typo, or you have an awesome feature request you could implement, we encourage you to create a Pull Request.

## Pull Request

- We are following the [Forking Workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/forking-workflow) and we expect you to do the same.
- Pull Request needs an approval of one of person before merging.
- We use ESLint and Prettier for linting and formatting. Additionally, we follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification for creating commit messages. These processes are automatically triggered by `git hooks` when creating a commits. However, you can also manually run linting and formatting using the following commands: `pnpm run lint` and `pnpm run format`.
- We encourage you to test your changes, and if you have the opportunity, please make those tests part of the Pull Request.
- If you add new functionality, please provide the corresponding documentation as well and make it part of the Pull Request. We use JSDoc, which means most of the time, the documentation is in the same file as the source code.

## Setting up Local Environment

We use Turbopack and pnpm for managing our packages.

**Project Structure**

```bash
snipshelf/
├── app/             # Next.js app directory
├── components/      # React components
├── __test__/        # Test files
├── cypress          # End to End Test
└── public/          # Static assets
```

Here is a quick guide on how to setup snipshelf locally to work on it and test out any changes:

1. Clone the repository:

   ```bash
   # Make sure that you forked the repo on github first
   git clone https://github.com/your-username/snipshelf.git
   cd snipshelf
   ```

2. Set up the correct pnpm version, using [Corepack](https://github.com/nodejs/corepack). Run the following command in the project's root:

   ```bash
   corepack enable
   corepack prepare pnpm@10.7.0 --activate
   ```

3. Install dependencies:

   ```bash
   pnpm install
   ```

4. Start the development server:

   ```bash
   pnpm dev
   ```

5. Run tests:
   ```bash
   pnpm test
   ```

### Setting up your Local Environment Variables

If you're planning to work on authorization, databases, or other backend-related tasks, you can find the required environment variables in the [.env.example](./.env.example) file, along with documentation on how to set them up.

You must rename the file called `.env.example` into `.env` after creating your own environment variables.

```
.env.example -> .env
```

## Testing

Unit Test and Integration Test can be run using `pnpm run test`
or if you want to run the test in watch mode use `pnpm run test:watch`

End to End Test can be run using `pnpm run cypress`

Make sure to have all necessary dependencies installed before running the tests.
