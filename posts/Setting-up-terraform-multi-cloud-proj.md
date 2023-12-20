---
title: "Data Platform: Setting up Multi-cloud Data platform(S3 and BigQuery)"
subtitle: "Setting up terraform multi-cloud proj"
date: "2023-12-27"
---

## The Set up 
I was reading an interesting book on setting data platform and though why not try so this is me trying to build it. First step is the data is the data mart but i prefer the term of data lake. It seems like to industry standards cloud service are in aws and azure. So here my attempt at building a s3 data lake as well as standing up a warehouse using GCP big query using terraform and other tools along way(the friends we make along the way!!!)

1. The providers and initialize the project

    versions.tf
    - I will be using a s3 backend for the overall backend

    providers.tf

    main.tf

## Directory structure

platform
modules
    aws
    - providers.tf
    - versions.tf
    - variables.tf
    azure
    - providers.tf
    - versions.tf
    - variables.tf
    google
    - providers.tf
    - versions.tf
    - variables.tf
main.tf
providers.tf
versions.tf
variables.tf
terrraform.tfvars

## AWS Data Lake

keep in mind this is ongoing project so I will be updating this as I go along it just seemed interesting that's why i wanted to try this. I am not a Data Engineer therefore may be missing some best practices

### Setting the project and initialing our s3 data lake
 
### Creating our S3 data lake
