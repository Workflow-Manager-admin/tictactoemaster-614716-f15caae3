#!/bin/bash
cd /tmp/kavia/workspace/code-generation/tictactoemaster-614716-f15caae3/tictactoe_master
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

