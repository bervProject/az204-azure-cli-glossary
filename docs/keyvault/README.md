---
sidebar: auto
footer: MIT Licensed and CC BY 4.0 | Copyright © 2020-present Bervianto Leo Pratama
---

# Key Vault

## Create Key Vault

```bash
az keyvault create \
    --resource-group <resource-group> \
    --name <your-unique-vault-name>
```

## Show a Secret from a Key Vault

```bash
az keyvault show \
  --name <secret name> \
  --vault-name <key vault>
```