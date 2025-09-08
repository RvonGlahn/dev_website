## AI Tool Rules for This Project

### 1. **Project Structure & Conventions**

* Use **Next.js App Router** (`app/` directory) unless otherwise specified.
* Follow **pnpm workspace** standards:
  * Use `pnpm install` for dependencies.
  * Never suggest `npm` or `yarn`.
* Keep file and folder names **lowercase, kebab-case**.
* Organize code into **modules/components/hooks/lib** consistently.
* Use conventional branching https://conventional-branch.github.io/ and conventional commits https://conventional-branch.github.io/ for git operations 

### 2. **Styling with Tailwind**

* Always prefer **Tailwind utility classes** over inline CSS or separate stylesheets.
* Use `@apply` sparingly; only for repeated class groups.
* Stick to **theme colors, spacing, typography** (extend in `tailwind.config.js` if needed).
* Respect **dark mode** support if enabled.

### 3. **Code Quality**

* Use **TypeScript strictly** (`.tsx`/`.ts` files).
* Enforce ESLint + Prettier conventions.
* Avoid introducing unused imports, variables, or dependencies.
* Write **React Server Components** by default; only use Client Components when state, effects, or browser APIs are required.
* Always document props with JSDoc or TypeScript interfaces.
* Keep maintainability and testability of the code in mind

### 4. **GitHub Actions (CI/CD)**

* Use workflows with **pnpm caching** (`actions/setup-node` + `pnpm/action-setup`).
* Run steps in this order:

  1. Install dependencies
  2. Lint & type check
  3. Run tests
  4. Build Next.js
  5. Build Docker image (if applicable)
* Fail fast: workflows should stop on first error.
* Always pin GitHub Action versions (no `@latest`).

### 5. **Dockerization**

* Base image: `node:20-alpine`.
* Use **multi-stage builds** (builder + production).
* Always run `pnpm install --frozen-lockfile` in Docker builds.
* Only copy necessary files into the image (no `.git`, no local configs).
* Run as non-root user in production container.
* Expose port `3000` by default.

### 6. **Security & Dependencies**

* Never commit `.env` files. Use **GitHub Secrets** for Actions.
* Always prefer **pnpm add <pkg> -D** (or `--save-dev`) with correct flags.
* Avoid outdated or deprecated packages. Suggest alternatives with maintenance status.
* Ensure Docker images are kept small, pinned, and frequently rebuilt for security updates.

### 7. **Collaboration & Output Style**

* When generating code:
  * Show **only the changed files** (not the whole repo).
  * Include **exact pnpm commands** when adding dependencies.
  * Keep commits small and purposeful.
* When unsure: **ask for clarification** instead of guessing.
* Always explain reasoning briefly before showing code.
