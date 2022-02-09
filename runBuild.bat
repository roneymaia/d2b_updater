set NODE_ENV=production
set NODE_OPTIONS=--max-old-space-size=4096
call nexe index.js -b -t windows-x64-10.20.1 --ico ./icon.ico -o "dist/D2BUpdater.exe" --verbose