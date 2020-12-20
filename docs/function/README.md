---
sidebar: auto
footer: MIT Licensed and CC BY 4.0 | Copyright © 2020-present Bervianto Leo Pratama
---

# Azure Function

## Local Development

### Create New Functions Project

```bash
func init
```

**Result**

![Function Init](../images/function/func-init.png)

![Function Init](../images/function/func-init-1.png)

::: tip
This result from version 3 of Azure Function Core Tools. Sometimes will different result, please find another reference for your installed CLI if have difference.
:::

### Create New Function

```bash
func new
```

**Result**

![Function New](../images/function/func-new.png)

![Function New](../images/function/func-new-1.png)

![Function New](../images/function/func-new-2.png)

::: tip
This result from version 3 of Azure Function Core Tools. Sometimes will different result, please find another reference for your installed CLI if have difference.
:::

### Running Functions Locally

```bash
func start
```

**Result**

![Function New](../images/function/func-start.png)

::: tip
This result from version 3 of Azure Function Core Tools. Sometimes will different result, please find another reference for your installed CLI if have difference. Also keep in mind, this result maybe different for another language. The current project use dotnet.
:::

### Publish to Azure

```bash
func azure functionapp publish <app_name>
```

::: tip
`<app_name>` is the name of the target function app in Azure, not the name of your project folder, which can be different.
:::

## Deployment

### Create Function App

```bash
az functionapp create \
  --resource-group "$RESOURCEGROUP" \
  --name "$FUNCTIONAPP" \
  --storage-account "$STORAGEACCT" \
  --runtime node \
  --consumption-plan-location centralus \
  --functions-version 2
```
