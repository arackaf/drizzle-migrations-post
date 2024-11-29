#!/bin/sh

PGPASSWORD=docker psql -h localhost -p 5432 -U docker -f database-edit-script_1.sql