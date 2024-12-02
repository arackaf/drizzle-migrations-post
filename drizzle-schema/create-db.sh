#!/bin/sh

PGPASSWORD=docker psql -h localhost -p 5432 -U docker -f 0000_warm_eddie_brock.sql