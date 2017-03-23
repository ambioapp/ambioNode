const analyzeATV = (arousal, temper, valence) => {
    if (arousal.group === 'low') {
        if (temper.group === 'low') {
            if (valence.group === 'low') {
                return 111;
            } else if (valence.group === 'medium') {
                return 112;
            } else if (valence.group === 'high') {
                return 113;
            } else {
                return 110;
            }
        } else if (temper.group === 'medium') {
            if (valence.group === 'low') {
                return 121;
            } else if (valence.group === 'medium') {
                return 122;
            } else if (valence.group === 'high') {
                return 123;
            } else {
                return 120;
            }
        } else if (temper.group === 'high') {
            if (valence.group === 'low') {
                return 131;
            }
            else if (valence.group === 'medium') {
                return 132;
            }
            else if (valence.group === 'high') {
                return 133;
            } else {
                return 130;
            }
        } else {
            return 100;
        }
    } else if (arousal.group === 'medium') {
        if (temper.group === 'low') {
            if (valence.group === 'low') {
                return 211;
            } else if (valence.group === 'medium') {
                return 212;
            } else if (valence.group === 'high') {
                return 213;
            } else {
                return 210;
            }
        } else if (temper.group === 'medium') {
            if (valence.group === 'low') {
                return 221;
            } else if (valence.group === 'medium') {
                return 222;
            } else if (valence.group === 'high') {
                return 223;
            } else {
                return 220;
            }
        } else if (temper.group === 'high') {
            if (valence.group === 'low') {
                return 231;
            }
            else if (valence.group === 'medium') {
                return 232;
            }
            else if (valence.group === 'high') {
                return 233;
            } else {
                return 230;
            }
        } else {
            return 200;
        }
    } else if (arousal.group === 'high') {
        if (temper.group === 'low') {
            if (valence.group === 'low') {
                return 311;
            } else if (valence.group === 'medium') {
                return 312;
            } else if (valence.group === 'high') {
                return 313;
            } else {
                return 310;
            }
        } else if (temper.group === 'medium') {
            if (valence.group === 'low') {
                return 321;
            } else if (valence.group === 'medium') {
                return 322;
            } else if (valence.group === 'high') {
                return 323;
            } else {
                return 320;
            }
        } else if (temper.group === 'high') {
            if (valence.group === 'low') {
                return 331;
            }
            else if (valence.group === 'medium') {
                return 332;
            }
            else if (valence.group === 'high') {
                return 333;
            } else {
                return 330;
            }
        } else {
            return 300;
        }
    } else {
       return 0; 
    }
}

module.exports = {
    analyzeATV: analyzeATV,
}