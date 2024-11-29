#!/bin/sh

PGPASSWORD=docker psql -h localhost -p 5432 -U docker -f database-creation-script.sql