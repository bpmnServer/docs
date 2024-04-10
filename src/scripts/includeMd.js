const fs = require('fs');
const readline = require('readline');


const {
    glob,
    globSync,
    globStream,
    globStreamSync,
    Glob,
  } = require('glob')



var myArgs = process.argv.slice(2);
console.log('includeMd.js: ', myArgs);

if (myArgs.length<2) {
	console.log("Syntax inputFile outputFile");
	return;
}

const inputFile =myArgs[0];
const outputFile =myArgs[1];

let count=processFile(inputFile,outputFile);
const mdfiles =  globSync('docs/**/*.md', { ignore: 'docs/api/**' })

console.profile();
mdfiles.forEach(file=>{
//        console.log('processing file:',file,processFile(file,outputFile));
});

console.profileEnd();


//console.log('generating '+inputFile +' into '+outputFile, count);

function processFile(input,output){
    const lines=[];
    let mode='copy'; // ignore
    let includeFile;
    let found=0;

    var ilines = fs.readFileSync(input, 'utf-8').split('\n');

    ilines.forEach(line=> {
        
      
        if (line.startsWith('///'))
            line=line.substring(3);
         if (mode=='copy' && line.startsWith('<!--include'))
            {
                let spec=line.substring(11);
                let s1=spec.search('"');
                let s2=spec.substring(s1+1).search('"');
                includeFile=spec.substring(s1+1,s2+2);
                console.log('file ',spec,s1,s2,includeFile);
                lines.push(line);
                mode="ignore";
                found++;
            }
        else if (mode=='ignore' && line.startsWith('<!--include'))
            {
                var clines = getInclude(includeFile);
                clines.forEach(l=>{lines.push(l);});
        
                lines.push(line);
                mode="copy";
            }
        else if (mode=='copy')
            lines.push(line);
        
    });

    if (found>0)
    {
        console.log("Writing" + lines.length);
        var id = fs.openSync(outputFile, 'w', 666);
    
            lines.forEach(line=>{
            fs.writeSync(id, line + "\n", null, 'utf8');
                
            });
    
        fs.closeSync(id );
                
    
    }
    return found;
    
}
function getInclude(fileReference) {
    let p=fileReference.search('#');

    let file=fileReference;
    let sect;
    let endMarker;
    console.log('fr:',fileReference,p);
    if (p > -1)
    {
        file=fileReference.substring(0,p);
        sect=fileReference.substring(p+1);
        console.log('sect:',sect);
    }
    var lines= fs.readFileSync(file, 'utf-8').split('\n');

    var rlines=[];
    if (p===-1)
    {
        return lines;
    }

    let mode='ignore'; // ignore
    lines.forEach(line=>{
        
        if (mode=='ignore') {

            if (line.startsWith('## '+sect)) {
                endMarker='##';
                mode='copy';
            }
            else if (line.startsWith('### '+sect)) {
                endMarker='###';
                mode='copy';
            }
            else if (line.startsWith('#### '+sect)) {
                endMarker='####';
                mode='copy';
            }
        }
        else if(line.startsWith(endMarker))
            mode='ignore';
        
        if (mode=='copy')
            rlines.push(line);
    });

    console.log(rlines);
    return rlines;

}    
