#!/bin/sh

PGPASSWORD=docker psql -h localhost -p 5432 -U docker -f 0000_breezy_gravity.sql