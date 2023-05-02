

To enable deployment, you will need to:

- Setup NPM_TOKEN secret in GitHub actions (Settings > Secrets > Actions)
- Give GITHUB_TOKEN write permissions for GitHub releases (Settings > Actions > General > Workflow permissions)

Commands

- build: runs typechecking then ESM and d.ts files in the build/ directory
- clean: removes the build/ directory
- type:dts: only generates d.ts
- type:check: only run typechecking
- type:build: only generates ESM

Tests

- test: runs vitest test runner
- test:watch: runs vitest test runner in watch mode
- test:coverage: runs vitest test runner and generates coverage reports

Lint

- format: runs prettier with automatic fixing
- format:check: runs prettier without automatic fixing (used in CI)
- lint: runs eslint with automatic fixing
- lint:check: runs eslint without automatic fixing (used in CI)
- spell:check: runs spellchecking

Releasing

Under the hood, this library uses semantic-release and commitizen. The goal is to avoid manual release process. Using semantic-release will automatically create a github release (hence tags) as well as an npm release. Based on your commit history, semantic-release will automatically create a patch, feature or breaking release.

Commands:

- cz: interactive CLI that helps you generate a proper git commit message, using commitizen
- semantic-release: triggers a release (used in CI)