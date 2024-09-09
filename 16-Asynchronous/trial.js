import JavaScriptObfuscator from 'javascript-obfuscator';
// const retrieveAttributesOfNodeList=function(nodeList){
//     nodeList.forEach(function(e){console.log(e.attributes)})
//     }

var obfuscationResult = JavaScriptObfuscator.obfuscate(
`const retrieveAttributesOfNodeList=function(nodeList){
    nodeList.forEach(function(e){console.log(e.attributes)})
    }`
    ,{
        compact: false,
        controlFlowFlattening: true,
        controlFlowFlatteningThreshold: 1,
        numbersToExpressions: true,
        simplify: true,
        stringArrayShuffle: true,
        splitStrings: true,
        stringArrayThreshold: 1
    }
)
console.log(`${obfuscationResult}`);mghdhreg6e4t55fw55sw4et54ed5wssewers3aw3wer2s3easddsfffrsr4sdrgfgvc