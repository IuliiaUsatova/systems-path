#!/bin/bash
echo "=== Дата  ==="
date
echo "=== сколько работает  ==="
uptime
echo "=== Оперативная память  ==="
free -h
echo "=== Место на диске  ==="
df -h /
echo "=== Службы ==="
for S in nginx fail2ban ssh
do
  echo $S
  systemctl is-active $S
done

