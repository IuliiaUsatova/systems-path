#!/bin/bash
TODAY=$(date +%F)
tar -czf /home/iuliia/backups/scripts-$TODAY.tar.gz /home/iuliia/scripts
echo "Копия готова"

