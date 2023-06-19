---
sidebar: auto
footer: MIT Licensed and CC BY 4.0 | Copyright © 2020-present Bervianto Leo Pratama
---

# Logic Apps

## Create/Update Logic Apps

```bash
az logic workflow create --definition <json file location> \
                         --location <location> \
                         --name <logic app name> \
                         --resource-group <resource group name>
                         [--access-control]
                         [--endpoints-configuration]
                         [--integration-account]
                         [--integration-service-environment]
                         [--state {Completed, Deleted, Disabled, Enabled, NotSpecified, Suspended}]
                         [--tags]
```

## Delete Logic Apps

```bash
az logic workflow delete --name
                         --resource-group
                         [--yes]
```

## Show a Logic Apps

```bash
az logic workflow show --name
                       --resource-group
```

## Show List of Logic Apps

```bash
az logic workflow list [--filter]
                       [--resource-group]
                       [--top]
```