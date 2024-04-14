# Project Description
Layer Gallery

# Getting started

- Clone this repo

- Run app locally:
    - `yarn requirements` to check project requirements
    - `yarn dev` to start local server
      - Create `.env` file in the root with the following environment variables:
        - `SITE_URL=http://localhost:3000`
        - `PUBLIC_URL=/`
        - `API_URL=https://pixabay.com/api/`
        - `API_KEY={your API key}`
    - `yarn test` to run tests (sequential)
    - `yarn build` to build application
    - `yarn format` to format code
    - `yarn validate` to validate code (runs on pre-commit hook)

- Run dockerized app:
    - `source ./commands/build.sh` to build Docker image
    - `source ./commands/run.sh` to run Docker image
    - `source ./commands/push.sh` to push Docker image to GHCR

### Commit and push changes:
- `fix: commit message` for fix release (patch)
- `feat: commit message` for feature release (minor)
- `BREAKING CHANGE: commit message` for breaking release (major)
- `chore: commit message` for configuration contribution
- `docs: commit message` for documentation contribution

# Authors
- [Alen Vlahovljak](https://github.com/alenvlahovljak)
