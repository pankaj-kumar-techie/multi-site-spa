# Contributing to Techie Loonds SPA Architecture

First off, thanks for taking the time to contribute! 🎉

## How to Contribute

1.  **Fork the Repository**: Start by forking this repository to your own GitHub account.
2.  **Clone the Repo**: Clone your fork to your local machine.
3.  **Create a Branch**: Create a new branch for your feature or bug fix (`git checkout -b feature/amazing-feature`).
4.  **Make Changes**: Implement your changes. Ensure you follow the project's coding standards.
5.  **Test**: Run existing tests and add new ones if applicable (`npm test`).
6.  **Commit**: Commit your changes with clear, descriptive messages.
7.  **Push**: Push your branch to your fork.
8.  **Pull Request**: Open a Pull Request on the main repository.

## Coding Standards

*   **TypeScript**: Use strict typing. Avoid `any` wherever possible.
*   **Components**: Use functional components with hooks.
*   **Styling**: We use Tailwind CSS. Avoid custom CSS files unless absolutely necessary.
*   **JSON Configuration**: All website data is driven by JSON files in `src/@local-db`. Do not hardcode content in TSX files.

## Adding a New Domain

To add a new client website:
1.  Duplicate `src/@local-db/base.json`.
2.  Rename it to your domain name (e.g., `clientname.json`).
3.  Fill in the robust content for sections (Hero, Services, Contact, etc.).
4.  Add the domain mapping in `src/hooks/useWebsiteData.ts`.

## Reporting Bugs

Please use the GitHub Issues tab to report any bugs or suggest enhancements. Provide as much detail as possible, including steps to reproduce.
