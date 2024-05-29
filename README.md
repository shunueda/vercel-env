# Use Vercel Envs in GitHub Actions

This GitHub Action allows you to use environment variables from your Vercel project in your GitHub Actions workflows.

## Icon and Color

- Icon: 🔺 (triangle)
- Color: Black

## Inputs

| Input Name   | Description                                                                                 | Required | Default      |
|--------------|---------------------------------------------------------------------------------------------|----------|--------------|
| project-id   | Vercel Project ID                                                                           | true     | N/A          |
| token        | Vercel Token                                                                                | true     | N/A          |
| target       | Target environment (production, preview, development). Default is production.              | false    | production   |

## Usage

To use this action in your workflow, add the following step:

```yaml
steps:
  - name: Use Vercel Envs in GitHub Actions
    uses: <your-username>/<your-repo>@<version>
    with:
      project-id: ${{ secrets.VERCEL_PROJECT_ID }}
      token: ${{ secrets.VERCEL_TOKEN }}
      target: production  # Optional, default is 'production'