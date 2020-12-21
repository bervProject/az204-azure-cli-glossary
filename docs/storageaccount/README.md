---
sidebar: auto
footer: MIT Licensed and CC BY 4.0 | Copyright © 2020-present Bervianto Leo Pratama
---

# Storage Account

## Create

```bash
az storage account create \
  --resource-group "$RESOURCEGROUP" \
  --name "$STORAGEACCT" \
  --kind StorageV2 \
  --location centralus \
  --sku Standard_LRS
```

::: tip
More information click [here](https://docs.microsoft.com/en-us/cli/azure/storage/account?view=azure-cli-latest#az_storage_account_create)
:::
## Get Key List

```bash
az storage account keys list \
  --account-name <storage name> \
  --resource-group <resource group name>
```

## Get Connection String by Name

```bash
az storage account show-connection-string \
  --name <storage name> \
  --resource-group <resource group name>
```

## Get First Storage Account Connection String

```bash
STORAGE_CONNECTION_STRING=$(az storage account show-connection-string \
  --name $(az storage account list \
    --resource-group <resource group name> \
    --query [0].name -o tsv) \
  --resource-group <resource group name> \
  --query "connectionString" -o tsv)
```

## Blob Storage

### Blob List (name only)

```bash
az storage blob list \
  --account-name <storage name> \
  --container-name <container name> \
  --query '[].{Name:name}' \
  --output table
```

## Queue Storage

### Delete Storage Queue

```bash
az storage queue delete --name <storage name> --connection-string <connection-string>
```