const moodTableService = require('./moodTable.js');

const analyzeBeyondVerbal = (analysis) => {
    console.log(analysis);
    console.log('===Parsing Results===');
    
    var responseJSON = {
        moodID: 0,
    }
    
    var arousal = analysis.result.analysisSegments[0].analysis.Arousal;
    var temper = analysis.result.analysisSegments[0].analysis.Temper;
    var valence = analysis.result.analysisSegments[0].analysis.Valence;
    
    console.log(`Arousal: ${arousal.Group} Temper: ${temper.Group} Valence: ${valence.Group}`);
    
    var parsedResult = moodTableService.analyzeATV(arousal, temper, valence)
    
    console.log(`${parsedResult.code}: ${parsedResult.code}`);
    
    responseJSON.moodID = parsedResult.value;
    
    /*
    test = {
        Group: "medium",
        Summary: {
            Mean: "34.77",
            Mode: "medium",
            ModePct: 100
        },
        Value: "34.77"
    }
    
    */
    
    
    return responseJSON;
}

module.exports = {
    analyzeBeyondVerbal: analyzeBeyondVerbal,
}