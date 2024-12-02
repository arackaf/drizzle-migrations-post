#!/bin/sh

PGPASSWORD=docker psql -h localhost -p 5432 -U docker -f 0001_equal_warstar.sql