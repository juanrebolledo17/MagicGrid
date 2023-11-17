const nodes = document.querySelectorAll('.box');
const elements = Array.from(nodes);
const animations = {
  flipDown: {
    keyframes: [
      {
        transform: `perspective(1000px) rotateX(0deg)`,
        transformOrigin: 'bottom'
      },
      {
        transform: `perspective(1000px) rotateX(-180deg)`,
        transformOrigin: 'bottom'
      }
    ],
    options: {
      duration: 1000, 
      fill: 'forwards'
    }
  },
  reverseFlipDown: {
    keyframes: [
      {
        transform: 'translateY(0px)',
        opacity: 0
      },
      {
        opacity: 0,
        offset: 0.90
      },
      {
        transform: 'translateY(-100px)',
        opacity: 1
      }
    ],
    options: {
      duration: 1000, 
      fill: 'forwards'
    }
  },
  flipUp: {
    keyframes: [
      {
        transform: `perspective(1000px) rotateX(0deg)`,
        transformOrigin: 'top'
      },
      {
        transform: `perspective(1000px) rotateX(180deg)`,
        transformOrigin: 'top'
      }
    ],
    options: {
      duration: 1000,
      fill: 'forwards'
    }
  },
  reverseFlipUp: {
    keyframes: [
      {
        transform: 'translateY(0px)',
        opacity: 0
      },
      {
        opacity: 0,
        offset: 0.90
      },
      {
        transform: 'translateY(100px)',
        opacity: 1
      }
    ],
    options: {
      duration: 1000,
      fill: 'forwards'
    }
  },
  flipLeft: {
    keyframes: [
      {
        transform: 'perspective(1000px) rotateY(0deg)',
        transformOrigin: 'left'
      },
      {
        transform: 'perspective(1000px) rotateY(-180deg)',
        transformOrigin: 'left'
      }
    ],
    options: {
      duration: 1000, 
      fill: 'forwards'
    }
  },
  reverseFlipLeft: {
    keyframes: [
      {
        transform: 'translateX(0px)',
        opacity: 0
      },
      {
        opacity: 0,
        offset: 0.90
      },
      {
        transform: 'translateX(100px)',
        opacity: 1
      }
    ],
    options: {
      duration: 1000, 
      fill: 'forwards'
    }
  },
  flipRight: {
    keyframes: [
      {
        transform: 'perspective(1000px) rotateY(0deg)',
        transformOrigin: 'right'
      },
      {
        transform: 'perspective(1000px) rotateY(180deg)',
        transformOrigin: 'right'
      }
    ],
    options: {
      duration: 1000,
      fill: 'forwards'
    }
  },
  reverseFlipRight: {
    keyframes: [
      {
        transform: 'translateX(0px)',
        opacity: 0
      },
      {
        opacity: 0,
        offset: 0.90
      },
      {
        transform: 'translateX(-100px)',
        opacity: 1
      }
    ],
    options: {
      duration: 1000,
      fill: 'forwards'
    }
  },
  moveRight: {
    keyframes: [
      {
        transform: 'translateX(0px)'
      },
      {
        transform: 'translateX(100px)'
      }
    ],
    options: {
      duration: 500, 
      fill: 'forwards'
    }
  },
  reverseMoveRight: {
    keyframes: [
      {
        transform: 'translateX(0px)',
        opacity: 0
      },
      {
        opacity: 0,
        offset: 0.96
      },
      {
        transform: 'translateX(-300px)',
        opacity: 1
      }
    ],
    options: {
      duration: 500, 
      fill: 'forwards'
    }
  },
  moveDown: {
    keyframes: [
      {
        transform: 'translateY(0px)'
      },
      {
        transform: 'translateY(100px)'
      }
    ],
    options: {
      duration: 500, 
      fill: 'forwards'
    }
  },
  reverseMoveDown: {
    keyframes: [
      {
        transform: 'translateY(0px)',
        opacity: 0
      },
      {
        opacity: 0,
        offset: 0.96
      },
      {
        transform: 'translateY(-300px)',
        opacity: 1
      }
    ],
    options: {
      duration: 500, 
      fill: 'forwards'
    }
  },
  moveLeft: {
    keyframes: [
      {
        transform: 'translateX(0px)'
      },
      {
        transform: 'translateX(-100px)'
      }
    ],
    options: {
      duration: 500, 
      fill: 'forwards'
    }
  },
  reverseMoveLeft: {
    keyframes: [
      {
        transform: 'translateX(0px)',
        opacity: 0
      },
      {
        opacity: 0,
        offset: 0.96
      },
      {
        transform: 'translateX(300px)',
        opacity: 1
      }
    ],
    options: {
      duration: 500, 
      fill: 'forwards'
    }
  },
  moveUp: {
    keyframes: [
      {
        transform: 'translateY(0px)'
      },
      {
        transform: 'translateY(-100px)'
      }
    ],
    options: {
      duration: 500, 
      fill: 'forwards'
    }
  },
  reverseMoveUp: {
    keyframes: [
      {
        transform: 'translateY(0px)',
        opacity: 0
      },
      {
        opacity: 0,
        offset: 0.96
      },
      {
        transform: 'translateY(300px)',
        opacity: 1
      }
    ],
    options: {
      duration: 500, 
      fill: 'forwards'
    }
  },
  spinX: {
    keyframes: [
      {
        transform: 'perspective(1000px) rotateX(0deg)',
        transformOrigin: 'center'
      },
      {
        transform: 'perspective(1000px) rotateX(-360deg)',
        transformOrigin: 'center'
      },
    ],
    options: {
      duration: 1000,
      fill: 'both'
    }
  },
  spinY: {
    keyframes: [
      {
        transform: 'perspective(1000px) rotateY(0deg)',
        transformOrigin: 'center'
      },
      {
        transform: 'perspective(1000px) rotateY(-360deg)',
        transformOrigin: 'center'
      },
    ],
    options: {
      duration: 1000,
      fill: 'both'
    }
  }
}
const flippingAnimations = ['flipDown', 'flipUp', 'flipLeft', 'flipRight', 'spinX', 'spinY'];
const movingAnimations = [
  [0, 'moveRight'],
  [4, 'moveRight'],
  [8, 'moveRight'],
  [12, 'moveRight'],
  [0, 'moveDown'],
  [1, 'moveDown'],
  [2, 'moveDown'],
  [3, 'moveDown'],
  [3, 'moveLeft'],
  [7, 'moveLeft'],
  [11, 'moveLeft'],
  [15, 'moveLeft'],
  [12, 'moveUp'],
  [13, 'moveUp'],
  [14, 'moveUp'],
  [15, 'moveUp'],
];
const flipOrMove = ['flip', 'move'];

async function animateElement(element, animationFrames, animationOptions) {
  const animation = element.animate(animationFrames, animationOptions);
}

function swapIndexes(element, elementIndex, reverseElement, reverseElementIndex) {
  const currentElementIndex = elementIndex;
  const currentReverseElementIndex = reverseElementIndex;

  elements.splice(currentElementIndex, 1, reverseElement);
  elements.splice(currentReverseElementIndex, 1, element);
}

function swapAxes(element, reverseElement) {
  const elementI = element.dataset.iAxis;
  const elementJ = element.dataset.jAxis;
  element.dataset.iAxis = reverseElement.dataset.iAxis;
  element.dataset.jAxis = reverseElement.dataset.jAxis;
  reverseElement.dataset.iAxis = elementI;
  reverseElement.dataset.jAxis = elementJ;
}

function canAnimateDown(i) {
  let answer;
  switch (i) {
    case '1':
      answer = true;
      break;
    case '2':
      answer = true;
      break;
    case '3':
      answer = true;
      break;
    case '4':
      answer = false;
      break;
    default:
      break;
  }
  return answer;
}

function canAnimateUp(i) {
  let answer;
  switch (i) {
    case '1':
      answer = false;
      break;
    case '2':
      answer = true;
      break;
    case '3':
      answer = true;
      break;
    case '4':
      answer = true;
      break;
    default:
      break;
  }
  return answer;
}

function canAnimateLeft(j) {
  let answer;
  switch (j) {
    case '1':
      answer = false;
      break;
    case '2':
      answer = true;
      break;
    case '3':
      answer = true;
      break;
    case '4':
      answer = true;
      break;
    default:
      break;
  }
  return answer;
}

function canAnimateRight(j) {
  let answer;
  switch (j) {
    case '1':
      answer = true;
      break;
    case '2':
      answer = true;
      break;
    case '3':
      answer = true;
      break;
    case '4':
      answer = false;
      break;
    default:
      break;
  }
  return answer;
}

function canMoveRight(elementIndex) {
  let answer;
  switch (elementIndex) {
    case 0:
      answer = true;
      break;
    case 4:
      answer = true;
      break;
    case 8:
      answer = true;
      break;
    case 12:
      answer = true;
      break;
    default:
      answer = false;
      break;
  }
  return answer;
}

function canMoveDown(elementIndex) {
  let answer;
  switch (elementIndex) {
    case 0:
      answer = true;
      break;
    case 1:
      answer = true;
      break;
    case 2:
      answer = true;
      break;
    case 3:
      answer = true;
      break;
    default:
      answer = false;
      break;
  }
  return answer;
}

function canMoveLeft(elementIndex) {
  let answer;
  switch (elementIndex) {
    case 3:
      answer = true;
      break;
    case 7:
      answer = true;
      break;
    case 11:
      answer = true;
      break;
    case 15:
      answer = true;
      break;
    default:
      answer = false;
      break;
  }
  return answer;
}

function canMoveUp(elementIndex) {
  let answer;
  switch (elementIndex) {
    case 12:
      answer = true;
      break;
    case 13:
      answer = true;
      break;
    case 14:
      answer = true;
      break;
    case 15:
      answer = true;
      break;
    default:
      answer = false;
      break;
  }
  return answer;
}

function startAnimation(element, animationName, elementIndex) {
  let animation, 
      reverseAnimation, 
      reverseElement, 
      reverseElementIndex, 
      elementDisplacementX, 
      reverseElementDisplacementX,
      elementDisplacementY,
      reverseElementDisplacementY,
      canAnimate,
      i,
      j;

    let secondElement,
        thirdElement,
        secondElementDisplacementX,
        thirdElementDisplacementX,
        secondElementDisplacementY,
        thirdElementDisplacementY;
    
  switch (animationName) {
    case 'flipDown':
      animation = animations[animationName];
      reverseAnimation = animations['reverseFlipDown'];
      reverseElement = elements[elementIndex + 4];
      reverseElementIndex = elementIndex + 4;
      elementDisplacementX = Number(element.dataset.displacementX);
      reverseElementDisplacementX = Number(reverseElement.dataset.displacementX);
      elementDisplacementY = Number(element.dataset.displacementY);
      reverseElementDisplacementY = Number(reverseElement.dataset.displacementY);
      i = element.dataset.iAxis;
      j = element.dataset.jAxis;
      canAnimate = canAnimateDown(i);

      if (canAnimate) {
        animations['flipDown'].keyframes = [
          {
            transform: `perspective(1000px) translateX(${elementDisplacementY}px) translateY(${elementDisplacementX}px) rotateX(0deg)`,
            transformOrigin: 'bottom'
          },
          {
            transform: `perspective(1000px) translateX(${elementDisplacementY}px) translateY(${elementDisplacementX}px) rotateX(-180deg)`,
            transformOrigin: 'bottom'
          }
        ];
        animateElement(element, animation.keyframes, animation.options);
  
        animations['reverseFlipDown'].keyframes = [
          {
            transform: `translateX(${reverseElementDisplacementY}px) translateY(${reverseElementDisplacementX}px)`,
            opacity: 0
          },
          {
            opacity: 0,
            offset: 0.90
          },
          {
            transform: `translateX(${reverseElementDisplacementY}px) translateY(${reverseElementDisplacementX - 100}px)`,
            opacity: 1
          }
        ];
        animateElement(reverseElement, reverseAnimation.keyframes, reverseAnimation.options);
  
        swapIndexes(element, elementIndex, reverseElement, reverseElementIndex);
        swapAxes(element, reverseElement);
  
        element.dataset.displacementX = elementDisplacementX + 100;
        reverseElement.dataset.displacementX = reverseElementDisplacementX - 100;
      }
      break;
    case 'flipUp':
      animation = animations[animationName];
      reverseAnimation = animations['reverseFlipUp'];
      reverseElement = elements[elementIndex - 4];
      reverseElementIndex = elementIndex - 4;
      elementDisplacementX = Number(element.dataset.displacementX);
      reverseElementDisplacementX = Number(reverseElement.dataset.displacementX);
      elementDisplacementY = Number(element.dataset.displacementY);
      reverseElementDisplacementY = Number(reverseElement.dataset.displacementY);
      i = element.dataset.iAxis;
      j = element.dataset.jAxis;
      canAnimate = canAnimateUp(i);

      if (canAnimate) {
        animations['flipUp'].keyframes = [
          {
            transform: `perspective(1000px) translateX(${elementDisplacementY}px) translateY(${elementDisplacementX}px) rotateX(0deg)`,
            transformOrigin: 'top'
          },
          {
            transform: `perspective(1000px) translateX(${elementDisplacementY}px) translateY(${elementDisplacementX}px) rotateX(180deg)`,
            transformOrigin: 'top'
          }
        ];
        animateElement(element, animation.keyframes, animation.options);
  
        animations['reverseFlipUp'].keyframes = [
          {
            transform: `translateX(${reverseElementDisplacementY}px) translateY(${reverseElementDisplacementX}px)`,
            opacity: 0
          },
          {
            opacity: 0,
            offset: 0.90
          },
          {
            transform: `translateX(${reverseElementDisplacementY}px) translateY(${reverseElementDisplacementX + 100}px)`,
            opacity: 1
          }
        ];
        animateElement(reverseElement, reverseAnimation.keyframes, reverseAnimation.options);
  
        swapIndexes(element, elementIndex, reverseElement, reverseElementIndex);
        swapAxes(element, reverseElement);
  
        element.dataset.displacementX = elementDisplacementX - 100;
        reverseElement.dataset.displacementX = reverseElementDisplacementX + 100;
      }
      break;
    case 'flipLeft':
      animation = animations[animationName];
      reverseAnimation = animations['reverseFlipLeft'];
      reverseElement = elements[elementIndex - 1];
      reverseElementIndex = elementIndex - 1;
      elementDisplacementY = Number(element.dataset.displacementY);
      reverseElementDisplacementY = Number(reverseElement.dataset.displacementY);
      elementDisplacementX = Number(element.dataset.displacementX);
      reverseElementDisplacementX = Number(reverseElement.dataset.displacementX);
      i = element.dataset.iAxis;
      j = element.dataset.jAxis;
      canAnimate = canAnimateLeft(j);

      if (canAnimate) {
        animations['flipLeft'].keyframes = [
          {
            transform: `perspective(1000px) translateY(${elementDisplacementX}px) translateX(${elementDisplacementY}px) rotateY(0deg)`,
            transformOrigin: 'left'
          },
          {
            transform: `perspective(1000px) translateY(${elementDisplacementX}px) translateX(${elementDisplacementY}px) rotateY(-180deg)`,
            transformOrigin: 'left'
          }
        ];
        animateElement(element, animation.keyframes, animation.options);
  
        animations['reverseFlipLeft'].keyframes = [
          {
            transform: `translateY(${reverseElementDisplacementX}px) translateX(${reverseElementDisplacementY}px)`,
            opacity: 0
          },
          {
            opacity: 0,
            offset: 0.90
          },
          {
            transform: `translateY(${reverseElementDisplacementX}px) translateX(${reverseElementDisplacementY + 100}px)`,
            opacity: 1
          }
        ];
        animateElement(reverseElement, reverseAnimation.keyframes, reverseAnimation.options);
  
        swapIndexes(element, elementIndex, reverseElement, reverseElementIndex);
        swapAxes(element, reverseElement);
  
        element.dataset.displacementY = elementDisplacementY - 100;
        reverseElement.dataset.displacementY = reverseElementDisplacementY + 100;
      }
      break;
    case 'flipRight':
      animation = animations[animationName];
      reverseAnimation = animations['reverseFlipRight'];
      reverseElement = elements[elementIndex + 1];
      reverseElementIndex = elementIndex + 1;
      elementDisplacementY = Number(element.dataset.displacementY);
      reverseElementDisplacementY = Number(reverseElement.dataset.displacementY);
      elementDisplacementX = Number(element.dataset.displacementX);
      reverseElementDisplacementX = Number(reverseElement.dataset.displacementX);
      i = element.dataset.iAxis;
      j = element.dataset.jAxis;
      canAnimate = canAnimateRight(j);

      if (canAnimate) {
        animations['flipRight'].keyframes = [
          {
            transform: `perspective(1000px) translateY(${elementDisplacementX}px) translateX(${elementDisplacementY}px) rotateY(0deg)`,
            transformOrigin: 'right'
          },
          {
            transform: `perspective(1000px) translateY(${elementDisplacementX}px) translateX(${elementDisplacementY}px) rotateY(180deg)`,
            transformOrigin: 'right'
          }
        ];
        animateElement(element, animation.keyframes, animation.options);
        
        animations['reverseFlipRight'].keyframes = [
          {
            transform: `translateY(${reverseElementDisplacementX}px) translateX(${reverseElementDisplacementY}px)`,
            opacity: 0
          },
          {
            opacity: 0,
            offset: 0.90
          },
          {
            transform: `translateY(${reverseElementDisplacementX}px) translateX(${reverseElementDisplacementY - 100}px)`,
            opacity: 1
          }
        ];
        animateElement(reverseElement, reverseAnimation.keyframes, reverseAnimation.options);
  
        swapIndexes(element, elementIndex, reverseElement, reverseElementIndex);
        swapAxes(element, reverseElement);
  
        element.dataset.displacementY = elementDisplacementY + 100;
        reverseElement.dataset.displacementY = reverseElementDisplacementY - 100;
      }
      break;
    case 'moveRight':
      animation = animations[animationName];
      reverseAnimation = animations['reverseMoveRight'];
      elementOriginalIndex = elementIndex;
      secondElement = elements[elementIndex + 1];
      thirdElement = elements[elementIndex + 2];
      reverseElement = elements[elementIndex + 3];
      canAnimate = canMoveRight(elementIndex);
      elementDisplacementX = Number(element.dataset.displacementX);
      secondElementDisplacementX = Number(secondElement.dataset.displacementX);
      thirdElementDisplacementX = Number(thirdElement.dataset.displacementX);
      reverseElementDisplacementX = Number(reverseElement.dataset.displacementX);
      elementDisplacementY = Number(element.dataset.displacementY);
      secondElementDisplacementY = Number(secondElement.dataset.displacementY);
      thirdElementDisplacementY = Number(thirdElement.dataset.displacementY);
      reverseElementDisplacementY = Number(reverseElement.dataset.displacementY);
      
      if (canAnimate) {
        animations['moveRight'].keyframes = [
          {
            transform: `translateY(${elementDisplacementX}px) translateX(${elementDisplacementY}px)`
          },
          {
            transform: `translateY(${elementDisplacementX}px) translateX(${elementDisplacementY + 100}px)`
          }
        ];
        animateElement(element, animation.keyframes, animation.options);
        element.dataset.jAxis = Number(element.dataset.jAxis) + 1;
        elements.splice(elementIndex + 1, 1, element);
        element.dataset.displacementY = Number(element.dataset.displacementY) + 100;

        animations['moveRight'].keyframes = [
          {
            transform: `translateY(${secondElementDisplacementX}px) translateX(${secondElementDisplacementY}px)`
          },
          {
            transform: `translateY(${secondElementDisplacementX}px) translateX(${secondElementDisplacementY + 100}px)`
          }
        ];
        animateElement(secondElement, animation.keyframes, animation.options);
        secondElement.dataset.jAxis = Number(secondElement.dataset.jAxis) + 1;
        elements.splice(elementIndex + 2, 1, secondElement);
        secondElement.dataset.displacementY = Number(secondElement.dataset.displacementY) + 100;

        animations['moveRight'].keyframes = [
          {
            transform: `translateY(${thirdElementDisplacementX}px) translateX(${thirdElementDisplacementY}px)`
          },
          {
            transform: `translateY(${thirdElementDisplacementX}px) translateX(${thirdElementDisplacementY + 100}px)`
          }
        ];
        animateElement(thirdElement, animation.keyframes, animation.options);
        thirdElement.dataset.jAxis = Number(thirdElement.dataset.jAxis) + 1;
        elements.splice(elementIndex + 3, 1, thirdElement);
        thirdElement.dataset.displacementY = Number(thirdElement.dataset.displacementY) + 100;
        // x 0 y 300
        animations['reverseMoveRight'].keyframes = [
          {
            transform: `translateY(${reverseElementDisplacementX}px) translateX(${reverseElementDisplacementY}px)`,
            opacity: 0
          },
          {
            opacity: 0,
            offset: 0.96
          },
          {
            transform: `translateY(${reverseElementDisplacementX}px) translateX(${reverseElementDisplacementY - 300}px)`,
            opacity: 1
          }
        ];
        animateElement(reverseElement, reverseAnimation.keyframes, reverseAnimation.options);
        reverseElement.dataset.jAxis = Number(reverseElement.dataset.jAxis) - 3;
        elements.splice(elementIndex, 1, reverseElement);
        reverseElement.dataset.displacementY = Number(reverseElement.dataset.displacementY) - 300;
      }
      break;
    case 'moveLeft':
      animation = animations[animationName];
      reverseAnimation = animations['reverseMoveLeft'];
      elementOriginalIndex = elementIndex;
      secondElement = elements[elementIndex - 1];
      thirdElement = elements[elementIndex - 2];
      reverseElement = elements[elementIndex - 3];
      canAnimate = canMoveLeft(elementIndex);
      elementDisplacementX = Number(element.dataset.displacementX);
      secondElementDisplacementX = Number(secondElement.dataset.displacementX);
      thirdElementDisplacementX = Number(thirdElement.dataset.displacementX);
      reverseElementDisplacementX = Number(reverseElement.dataset.displacementX);
      elementDisplacementY = Number(element.dataset.displacementY);
      secondElementDisplacementY = Number(secondElement.dataset.displacementY);
      thirdElementDisplacementY = Number(thirdElement.dataset.displacementY);
      reverseElementDisplacementY = Number(reverseElement.dataset.displacementY);
      
      if (canAnimate) {
        animations['moveLeft'].keyframes = [
          {
            transform: `translateY(${elementDisplacementX}px) translateX(${elementDisplacementY}px)`
          },
          {
            transform: `translateY(${elementDisplacementX}px) translateX(${elementDisplacementY - 100}px)`
          }
        ];
        animateElement(element, animation.keyframes, animation.options);
        element.dataset.jAxis = Number(element.dataset.jAxis) - 1;
        elements.splice(elementIndex - 1, 1, element);
        element.dataset.displacementY = Number(element.dataset.displacementY) - 100;

        animations['moveLeft'].keyframes = [
          {
            transform: `translateY(${secondElementDisplacementX}px) translateX(${secondElementDisplacementY}px)`
          },
          {
            transform: `translateY(${secondElementDisplacementX}px) translateX(${secondElementDisplacementY - 100}px)`
          }
        ];
        animateElement(secondElement, animation.keyframes, animation.options);
        secondElement.dataset.jAxis = Number(secondElement.dataset.jAxis) - 1;
        elements.splice(elementIndex - 2, 1, secondElement);
        secondElement.dataset.displacementY = Number(secondElement.dataset.displacementY) - 100;

        animations['moveLeft'].keyframes = [
          {
            transform: `translateY(${thirdElementDisplacementX}px) translateX(${thirdElementDisplacementY}px)`
          },
          {
            transform: `translateY(${thirdElementDisplacementX}px) translateX(${thirdElementDisplacementY - 100}px)`
          }
        ];
        animateElement(thirdElement, animation.keyframes, animation.options);
        thirdElement.dataset.jAxis = Number(thirdElement.dataset.jAxis) - 1;
        elements.splice(elementIndex - 3, 1, thirdElement);
        thirdElement.dataset.displacementY = Number(thirdElement.dataset.displacementY) - 100;

        animations['reverseMoveLeft'].keyframes = [
          {
            transform: `translateY(${reverseElementDisplacementX}px) translateX(${reverseElementDisplacementY}px)`,
            opacity: 0
          },
          {
            opacity: 0,
            offset: 0.96
          },
          {
            transform: `translateY(${reverseElementDisplacementX}px) translateX(${reverseElementDisplacementY + 300}px)`,
            opacity: 1
          }
        ];
        animateElement(reverseElement, reverseAnimation.keyframes, reverseAnimation.options);
        reverseElement.dataset.jAxis = Number(reverseElement.dataset.jAxis) + 3;
        elements.splice(elementIndex, 1, reverseElement);
        reverseElement.dataset.displacementY = Number(reverseElement.dataset.displacementY) + 300;
      }
      break;
    case 'moveDown':
      animation = animations[animationName];
      reverseAnimation = animations['reverseMoveDown'];
      elementOriginalIndex = elementIndex;
      secondElement = elements[elementIndex + 4];
      thirdElement = elements[elementIndex + 8];
      reverseElement = elements[elementIndex + 12];
      canAnimate = canMoveDown(elementIndex);
      elementDisplacementY = Number(element.dataset.displacementY);
      secondElementDisplacementY = Number(secondElement.dataset.displacementY);
      thirdElementDisplacementY = Number(thirdElement.dataset.displacementY);
      reverseElementDisplacementY = Number(reverseElement.dataset.displacementY);
      elementDisplacementX = Number(element.dataset.displacementX);
      secondElementDisplacementX = Number(secondElement.dataset.displacementX);
      thirdElementDisplacementX = Number(thirdElement.dataset.displacementX);
      reverseElementDisplacementX = Number(reverseElement.dataset.displacementX);

      if (canAnimate) {
        animations['moveDown'].keyframes = [
          {
            transform: `translateX(${elementDisplacementY}px) translateY(${elementDisplacementX}px)`
          },
          {
            transform: `translateX(${elementDisplacementY}px) translateY(${elementDisplacementX + 100}px)`
          }
        ];
        animateElement(element, animation.keyframes, animation.options);
        element.dataset.iAxis = Number(element.dataset.iAxis) + 1;
        elements.splice(elementIndex + 4, 1, element);
        element.dataset.displacementX = Number(element.dataset.displacementX) + 100;

        animations['moveDown'].keyframes = [
          {
            transform: `translateX(${secondElementDisplacementY}px) translateY(${secondElementDisplacementX}px)`
          },
          {
            transform: `translateX(${secondElementDisplacementY}px) translateY(${secondElementDisplacementX + 100}px)`
          }
        ];
        animateElement(secondElement, animation.keyframes, animation.options);
        secondElement.dataset.iAxis = Number(secondElement.dataset.iAxis) + 1;
        elements.splice(elementIndex + 8, 1, secondElement);
        secondElement.dataset.displacementX = Number(secondElement.dataset.displacementX) + 100;

        animations['moveDown'].keyframes = [
          {
            transform: `translateX(${thirdElementDisplacementY}px) translateY(${thirdElementDisplacementX}px)`
          },
          {
            transform: `translateX(${thirdElementDisplacementY}px) translateY(${thirdElementDisplacementX + 100}px)`
          }
        ];
        animateElement(thirdElement, animation.keyframes, animation.options);
        thirdElement.dataset.iAxis = Number(thirdElement.dataset.iAxis) + 1;
        elements.splice(elementIndex + 12, 1, thirdElement);
        thirdElement.dataset.displacementX = Number(thirdElement.dataset.displacementX) + 100;

        animations['reverseMoveDown'].keyframes = [
          {
            transform: `translateX(${reverseElementDisplacementY}px) translateY(${reverseElementDisplacementX}px)`,
            opacity: 0
          },
          {
            opacity: 0,
            offset: 0.96
          },
          {
            transform: `translateX(${reverseElementDisplacementY}px) translateY(${reverseElementDisplacementX - 300}px)`,
            opacity: 1
          }
        ];
        animateElement(reverseElement, reverseAnimation.keyframes, reverseAnimation.options);
        reverseElement.dataset.iAxis = Number(reverseElement.dataset.iAxis) - 3;
        elements.splice(elementIndex, 1, reverseElement);
        reverseElement.dataset.displacementX = Number(reverseElement.dataset.displacementX) - 300;
      }
      break;
    case 'moveUp':
      animation = animations[animationName];
      reverseAnimation = animations['reverseMoveUp'];
      elementOriginalIndex = elementIndex;
      secondElement = elements[elementIndex - 4];
      thirdElement = elements[elementIndex - 8];
      reverseElement = elements[elementIndex - 12];
      canAnimate = canMoveUp(elementIndex);
      elementDisplacementY = Number(element.dataset.displacementY);
      secondElementDisplacementY = Number(secondElement.dataset.displacementY);
      thirdElementDisplacementY = Number(thirdElement.dataset.displacementY);
      reverseElementDisplacementY = Number(reverseElement.dataset.displacementY);
      elementDisplacementX = Number(element.dataset.displacementX);
      secondElementDisplacementX = Number(secondElement.dataset.displacementX);
      thirdElementDisplacementX = Number(thirdElement.dataset.displacementX);
      reverseElementDisplacementX = Number(reverseElement.dataset.displacementX);
      
      if (canAnimate) {
        animations['moveUp'].keyframes = [
          {
            transform: `translateX(${elementDisplacementY}px) translateY(${elementDisplacementX}px)`
          },
          {
            transform: `translateX(${elementDisplacementY}px) translateY(${elementDisplacementX - 100}px)`
          }
        ];
        animateElement(element, animation.keyframes, animation.options);
        element.dataset.iAxis = Number(element.dataset.iAxis) - 1;
        elements.splice(elementIndex - 4, 1, element);
        element.dataset.displacementX = Number(element.dataset.displacementX) - 100;

        animations['moveUp'].keyframes = [
          {
            transform: `translateX(${secondElementDisplacementY}px) translateY(${secondElementDisplacementX}px)`
          },
          {
            transform: `translateX(${secondElementDisplacementY}px) translateY(${secondElementDisplacementX - 100}px)`
          }
        ];
        animateElement(secondElement, animation.keyframes, animation.options);
        secondElement.dataset.iAxis = Number(secondElement.dataset.iAxis) - 1;
        elements.splice(elementIndex - 8, 1, secondElement);
        secondElement.dataset.displacementX = Number(secondElement.dataset.displacementX) - 100;

        animations['moveUp'].keyframes = [
          {
            transform: `translateX(${thirdElementDisplacementY}px) translateY(${thirdElementDisplacementX}px)`
          },
          {
            transform: `translateX(${thirdElementDisplacementY}px) translateY(${thirdElementDisplacementX - 100}px)`
          }
        ];
        animateElement(thirdElement, animation.keyframes, animation.options);
        thirdElement.dataset.iAxis = Number(thirdElement.dataset.iAxis) - 1;
        elements.splice(elementIndex - 12, 1, thirdElement);
        thirdElement.dataset.displacementX = Number(thirdElement.dataset.displacementX) - 100;

        animations['reverseMoveUp'].keyframes = [
          {
            transform: `translateX(${reverseElementDisplacementY}px) translateY(${reverseElementDisplacementX}px)`,
            opacity: 0
          },
          {
            opacity: 0,
            offset: 0.96
          },
          {
            transform: `translateX(${reverseElementDisplacementY}px) translateY(${reverseElementDisplacementX + 300}px)`,
            opacity: 1
          }
        ];
        animateElement(reverseElement, reverseAnimation.keyframes, reverseAnimation.options);
        reverseElement.dataset.iAxis = Number(reverseElement.dataset.iAxis) + 3;
        elements.splice(elementIndex, 1, reverseElement);
        reverseElement.dataset.displacementX = Number(reverseElement.dataset.displacementX) + 300;
      }
      break;
    case 'spinX':
      animation = animations[animationName];
      elementDisplacementX = Number(element.dataset.displacementX);
      elementDisplacementY = Number(element.dataset.displacementY);
      animations['spinX'].keyframes = [
        {
          transform: `perspective(1000px) translateY(${elementDisplacementX}px) translateX(${elementDisplacementY}px) rotateX(0deg)`,
          transformOrigin: 'center'
        },
        {
          transform: `perspective(1000px) translateY(${elementDisplacementX}px) translateX(${elementDisplacementY}px) rotateX(-360deg)`,
          transformOrigin: 'center'
        }
      ];
      animateElement(element, animation.keyframes, animation.options);
      break;
    case 'spinY':
      animation = animations[animationName];
      elementDisplacementX = Number(element.dataset.displacementX);
      elementDisplacementY = Number(element.dataset.displacementY);
      animations['spinY'].keyframes = [
        {
          transform: `perspective(1000px) translateY(${elementDisplacementX}px) translateX(${elementDisplacementY}px) rotateX(0deg)`,
          transformOrigin: 'center'
        },
        {
          transform: `perspective(1000px) translateY(${elementDisplacementX}px) translateX(${elementDisplacementY}px) rotateX(-360deg)`,
          transformOrigin: 'center'
        }
      ];
      animateElement(element, animation.keyframes, animation.options);
      break;
    default:
      break;
  }
}

// Creating a loop of animations
setInterval(() => {
  const randomNumber1 = Math.floor(Math.random() * flippingAnimations.length);
  const randomNumber2 = Math.floor(Math.random() * elements.length);
  const randomNumber3 = Math.floor(Math.random() * movingAnimations.length);
  const randomNumber4 = Math.floor(Math.random() * flipOrMove.length);
  const flipAnimation = flippingAnimations[randomNumber1];
  const movementAnimation = movingAnimations[randomNumber3];
  const movementAnimationIndex = movementAnimation[0];
  const movementAnimationName = movementAnimation[1];
  const flipElement = elements[randomNumber2];
  const movementElement = elements[movementAnimationIndex];
  const isFlipOrMove = flipOrMove[randomNumber4];

  if (isFlipOrMove === 'flip') {
    startAnimation(flipElement, flipAnimation, randomNumber2);
  } else if (isFlipOrMove === 'move') {
    startAnimation(movementElement, movementAnimationName, movementAnimationIndex);
  }
}, 3000);

