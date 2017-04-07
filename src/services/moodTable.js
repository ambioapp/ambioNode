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
          value: 'relaxed',
        };
      } else if (valence.Group === 'positive') {
        return {
          code: 113,
          value: 'content',
        };
      }
      return {
        code: 110,
        value: 'err: 110',
      };
    } else if (temper.Group === 'medium') {
      if (valence.Group === 'negative') {
        return {
          code: 121,
          value: 'depressed',
        };
      } else if (valence.Group === 'neutral') {
        return {
          code: 122,
          value: 'relaxed',
        };
      } else if (valence.Group === 'positive') {
        return {
          code: 123,
          value: 'content',
        };
      }
      return {
        code: 120,
        value: 'err: 120',
      };
    } else if (temper.Group === 'high') {
      if (valence.Group === 'negative') {
        return {
          code: 131,
          value: 'inconsolable',
        };
      } else if (valence.Group === 'neutral') {
        return {
          code: 132,
          value: 'restless',
        };
      } else if (valence.Group === 'positive') {
        return {
          code: 133,
          value: 'restless',
        };
      }
      return {
        code: 130,
        value: 'err: 130',
      };
    }
    return {
      code: 100,
      value: 'err: 100',
    };
  } else if (arousal.Group === 'neutral') {
    if (temper.Group === 'low') {
      if (valence.Group === 'negative') {
        return {
          code: 211,
          value: 'depressed',
        };
      } else if (valence.Group === 'neutral') {
        return {
          code: 212,
          value: 'relaxed',
        };
      } else if (valence.Group === 'positive') {
        return {
          code: 213,
          value: 'content',
        };
      }
      return {
        code: 210,
        value: 'err: 210',
      };
    } else if (temper.Group === 'medium') {
      if (valence.Group === 'negative') {
        return {
          code: 221,
          value: 'restless',
        };
      } else if (valence.Group === 'neutral') {
        return {
          code: 222,
          value: 'relaxed',
        };
      } else if (valence.Group === 'positive') {
        return {
            code: 223,
            value: 'content',
          };
      }
      return {
        code: 220,
        value: 'err: 220',
      };
    } else if (temper.Group === 'high') {
      if (valence.Group === 'negative') {
        return {
          code: 231,
          value: 'frustrated',
        };
      } else if (valence.Group === 'neutral') {
        return {
            code: 232,
            value: 'restless',
          };
      } else if (valence.Group === 'positive') {
          return {
            code: 233,
            value: 'joyful',
          };
        }
      return {
        code: 230,
        value: 'err: 230',
      };
    }
    return {
      code: 200,
      value: 'err: 200',
    };
  } else if (arousal.Group === 'high') {
    if (temper.Group === 'low') {
      if (valence.Group === 'negative') {
        return {
          code: 311,
          value: 'frustrated',
        };
      } else if (valence.Group === 'neutral') {
        return {
          code: 312,
          value: 'restless',
        };
      } else if (valence.Group === 'positive') {
        return {
            code: 313,
            value: 'focused',
          };
      }
      return {
        code: 310,
        value: 'err: 310',
      };
    } else if (temper.Group === 'medium') {
      if (valence.Group === 'negative') {
        return {
          code: 321,
          value: 'angry',
        };
      } else if (valence.Group === 'neutral') {
        return {
            code: 322,
            value: 'stressed',
          };
      } else if (valence.Group === 'positive') {
          return {
            code: 323,
            value: 'focused',
          };
        }
      return {
        code: 320,
        value: 'err: 320',
      };
    } else if (temper.Group === 'high') {
      if (valence.Group === 'negative') {
        return {
            code: 331,
            value: 'angry',
          };
      } else if (valence.Group === 'neutral') {
          return {
            code: 332,
            value: 'stressed',
          };
        } else if (valence.Group === 'positive') {
          return {
            code: 333,
            value: 'joyful',
          };
        }
      return {
        code: 330,
        value: 'err: 330',
      };
    }
    return {
      code: 300,
      value: 'err: 300',
    };
  }
  return {
    code: 0,
    value: 'err: 0',
  };
};

module.exports = {
  analyzeATV,
};
