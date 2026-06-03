@echo off
cd /d "%~dp0"

set "NODE=C:\Users\PC\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe"
if not exist "%NODE%" set "NODE=node"

start "" "http://127.0.0.1:4173/traffic-police-style-test/"
"%NODE%" "scripts\local-preview.cjs"
pause
