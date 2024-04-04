call rimraf .docs/api
cd ../bpmn-server
call rimraf ./docs/api
call npx typedoc --options typedoc.json
cd ../docs
xcopy ..\bpmn-server\docs\api\*.* .\docs\api\ /s

