# Use Vercel Envs in GitHub Actions

Use environment variables from your Vercel project in your GitHub Actions workflows.

## Inputs

| Input Name | Description                                                                   | Required | Default    |
|------------|-------------------------------------------------------------------------------|----------|------------|
| project-id | Vercel Project ID                                                             | true     | N/A        |
| token      | Vercel Token                                                                  | true     | N/A        |
| target     | Target environment (production, preview, development). Default is production. | false    | production |

## Usage

Check out the example:
[example.yaml](https://github.com/shunueda/vercel-env/blob/main/.github/workflows/example.yaml)