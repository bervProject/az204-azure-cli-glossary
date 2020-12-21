---
sidebar: auto
footer: MIT Licensed and CC BY 4.0 | Copyright © 2020-present Bervianto Leo Pratama
---

# Web App

## App Service Plan

### Create App Service Plan

```bash
az appservice plan create \
  --name <app service plan name> \
  --resource-group <resource group name> \
  --location <location> \
  --sku FREE
```

## Web App List

### List All Web App from a Resource Group

```bash
az webapp list --resource-group <resource-group-name>
```

### Search Web App from a Resource Group

```bash
az webapp list --resource-group <resource-group-name> --query "[?starts_with(name, 'api')]"
```

::: tip
This search query not limited starts_with only
:::


## Deployment

## Deployment from URL

```bash
az webapp deployment source config \
  --name <web app name> \
  --resource-group <resource group> \
  --repo-url <url> \
  --branch <branch name> \
  --manual-integration
```

### Deploy from .zip

```bash
az webapp deployment source config-zip \
  --resource-group <resource-group-name> \
  --src <api location> \
  --name <name-of-your-api-app>
```