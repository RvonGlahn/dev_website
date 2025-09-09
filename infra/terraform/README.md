# Terraform Infrastructure

This directory contains Terraform configuration for the project environments.

Structure:
- modules/: reusable modules
- envs/
  - dev/
  - prd/

Use: terraform -chdir=infra/terraform/envs/<env> init/plan/apply

