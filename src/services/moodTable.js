const analyzeATV = (arousal, temper, valence) => {
    if (arousal.Group === 'low') {
        if (temper.Group === 'low') {
            if (valence.Group === 'negative') {
                return {
                    code: 111,
                    value: 'depressed',
                };
            } else if (valence.Group === 'neutral') {
                return {
                    code: 112,
                    value: 'calm',
                };
            } else if (valence.Group === 'positive') {
                return {
                    code: 113,
                    value: 'content',
                };
            } else {
                return {
                    code: 110,
                    value: 'err: 110',
                };
            }
        } else if (temper.Group === 'medium') {
            if (valence.Group === 'negative') {
                return {
                    code: 121,
                    value: 'sad',
                };
            } else if (valence.Group === 'neutral') {
                return {
                    code: 122,
                    value: 'neutral',
                };
            } else if (valence.Group === 'positive') {
                return {
                    code: 123,
                    value: 'happy'
                };
            } else {
                return {
                    code: 120,
                    value: 'err: 120',
                };
            }
        } else if (temper.Group === 'high') {
            if (valence.Group === 'negative') {
                return {
                    code: 131,
                    value: 'angry',
                };
            }
            else if (valence.Group === 'neutral') {
                return {
                    code: 132,
                    value: 'excited',
                };
            }
            else if (valence.Group === 'positive') {
                return {
                    code: 133,
                    value: 'joyful',
                };
            } else {
                return {
                    code: 130,
                    value: 'err: 130',
                };
            }
        } else {
            return {
                code: 100,
                value: 'err: 100',
            };
        }
    } else if (arousal.Group === 'mid') {
        if (temper.Group === 'low') {
            if (valence.Group === 'negative') {
                return {
                    code: 211,
                    value: 'depressed',
                };
            } else if (valence.Group === 'neutral') {
                return {
                    code: 212,
                    value: 'calm',
                };
            } else if (valence.Group === 'positive') {
                return {
                    code: 213,
                    value: 'content',
                };
            } else {
                return {
                    code: 210,
                    value: 'err: 210',
                };
            }
        } else if (temper.Group === 'medium') {
            if (valence.Group === 'negative') {
                return {
                    code: 221,
                    value: 'sad',
                };
            } else if (valence.Group === 'neutral') {
                return {
                    code: 222,
                    value: 'neutral',
                };
            } else if (valence.Group === 'positive') {
                return {
                    code: 223,
                    value: 'happy',
                };
            } else {
                return {
                    code: 220,
                    value: 'err: 220',
                };
            }
        } else if (temper.Group === 'high') {
            if (valence.Group === 'negative') {
                return {
                    code: 231,
                    value: 'angry',
                };
            }
            else if (valence.Group === 'neutral') {
                return {
                    code: 232,
                    value: 'excited',
                };
            }
            else if (valence.Group === 'positive') {
                return {
                    code: 233,
                    value: 'joyful',
                };
            } else {
                return {
                    code: 230,
                    value: 'err: 230',
                };
            }
        } else {
            return {
                code: 200,
                value: 'err: 200',
            };
        }
    } else if (arousal.Group === 'high') {
        if (temper.Group === 'low') {
            if (valence.Group === 'negative') {
                return {
                    code: 311,
                    value: 'depressed',
                };
            } else if (valence.Group === 'neutral') {
                return {
                    code: 312,
                    value: 'calm',
                };
            } else if (valence.Group === 'positive') {
                return {
                    code: 313,
                    value: 'content',
                };
            } else {
                return {
                    code: 310,
                    value: 'err: 310',
                };
            }
        } else if (temper.Group === 'medium') {
            if (valence.Group === 'negative') {
                return {
                    code: 321,
                    value: 'sad',
                };
            } else if (valence.Group === 'neutral') {
                return {
                    code: 322,
                    value: 'neutral',
                };
            } else if (valence.Group === 'positive') {
                return {
                    code: 323,
                    value: 'happy',
                };
            } else {
                return {
                    code: 320,
                    value: 'err: 320',
                };
            }
        } else if (temper.Group === 'high') {
            if (valence.Group === 'negative') {
                return {
                    code: 331,
                    value: 'angry',
                };
            }
            else if (valence.Group === 'neutral') {
                return {
                    code: 332,
                    value: 'excited',
                };
            }
            else if (valence.Group === 'positive') {
                return {
                    code: 333,
                    value: 'joyful',
                };
            } else {
                return {
                    code: 330,
                    value: 'err: 330',
                };
            }
        } else {
            return {
                code: 300,
                value: 'err: 300',
            };
        }
    } else {
        return {
            code: 0,
            value: 'err: 0',
        };
    }
}

module.exports = {
    analyzeATV: analyzeATV,
}