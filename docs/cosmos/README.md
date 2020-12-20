---
sidebar: auto
footer: MIT Licensed and CC BY 4.0 | Copyright © 2020-present Bervianto Leo Pratama
---

# Azure Cosmos DB

## Create

```bash
az cosmosdb create  \
  --name msl-sigr-cosmos-$(openssl rand -hex 5) \
  --resource-group <resource group name>
```

## Get Cosmos DB List

```bash
az cosmosdb list \
  --resource-group <resource group name>
```

## Get First Cosmos DB Account Name

```bash
COSMOSDB_ACCOUNT_NAME=$(az cosmosdb list \
  --resource-group <resource group name> \
  --query [0].name -o tsv)
```

## Get Cosmos DB Connection String

```bash
COSMOSDB_CONNECTION_STRING=$(az cosmosdb list-connection-strings  \
  --name <cosmos db account name> \
  --resource-group <resource group name> \
  --query "connectionStrings[?description=='Primary SQL Connection String'].connectionString" -o tsv)
```

## Get Cosmos DB Master Key

```bash
COSMOSDB_MASTER_KEY=$(az cosmosdb list-keys \
  --name <cosmos db account name> \
  --resource-group <resource group name> \
  --query primaryMasterKey -o tsv)
```