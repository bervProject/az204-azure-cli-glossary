---
sidebar: auto
footer: MIT Licensed and CC BY 4.0 | Copyright © 2020-present Bervianto Leo Pratama
---

# Virtual Machine

## Create Virtual Machine

```bash
az vm create \
    --resource-group <resource group> \
    --name <vm name> \
    --image <image name> \
    --admin-username <username> \
    --admin-password <password>
```

## Open Port VM

```bash
az vm open-port \
  --port <port> \
  --resource-group <resource group> \
  --name <vm name>
```

## VM Public IP Address

```bash
ipaddress=$(az vm show \
  --name <vm name> \
  --resource-group <resource group> \
  --show-details \
  --query [publicIps] \
  --output tsv)
```