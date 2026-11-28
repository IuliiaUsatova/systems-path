#!/bin/bash
DISK=$(df --output=pcent / | tail -1 | tr -d ' %')
if [ $DISK -gt 80 ]
then
  echo "Мало места"
else
  echo "Места хватает,занято $DISK"
fi
