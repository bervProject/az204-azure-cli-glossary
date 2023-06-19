---
sidebar: auto
footer: MIT Licensed and CC BY 4.0 | Copyright © 2020-present Bervianto Leo Pratama
---

# Azure Event Hub

## Create Event Hub

```bash
az eventhubs eventhub create --name <event hub name> --namespace-name <event hub namespace name>
```

## Create Event Hub Namespace

```bash
az eventhubs namespace create \
  --name <eventhub namespace name>
  --resource-group <resource group name>
  --l <location>
  --sku <basic/standard>
```

## Get Connection String

```bash
az eventhubs namespace authorization-rule keys list \
    --name RootManageSharedAccessKey \
    --resource-group <resource group name> \
    --namespace-name <eventhub namespace name>
```