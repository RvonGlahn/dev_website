terraform {
  required_version = ">= 1.6.0"
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = ">= 3.0"
    }
  }
}

provider "azurerm" {
  features {}
}

variable "location" {
  description = "Azure region"
  type        = string
  default     = "West Europe"
}

variable "resource_group_name" {
  description = "Resource group name"
  type        = string
  default     = "rg-dev"
}

resource "azurerm_resource_group" "main" {
  name     = var.resource_group_name
  location = var.location
}

output "resource_group_name" {
  value = azurerm_resource_group.main.name
}
