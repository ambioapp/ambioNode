const moodTableService = require('./moodTable.js');

const analyzeBeyondVerbal = (analysis) => {
    console.log(analysis);
    console.log('===Doing Magic===');
    
    var responseJSON = {
        moodID: 0,
    }
    
    var arousal = analysis.analysisSegments[0].analysis.Arousal;
    var temper = analysis.analysisSegments[0].analysis.Temper;
    var valence = analysis.analysisSegments[0].analysis.Valence;
    
    responseJSON.moodID = moodTableService.moodTable[arousal][temper][valence].moodID;
    
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