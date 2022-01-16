

function introduction(name){
    let message1 = `Hi, my name is ${name}.`;
    return message1;
}

function introductionWithLanguage (name, language){
    let message2=`Hi, my name is ${name} and I am learning to program in ${language}.`;
    return message2;
}

function introductionWithLanguageOptional (name, language="JavaScript"){
    let message2=`Hi, my name is ${name} and I am learning to program in ${language}.`;
    return message2;
}