/**
 * 함수형 상속
 */

var AnimalKingdom = AnimalKingdom || {};

AnimalKingdom.marsupial = function(name, nocturnal) {
  let instanceName = name;
  let instanceNocturnal = nocturnal;

  return {
    getName: function() {
      return instanceName;
    },
    getIsNocturnal: function() {
      return instanceNocturnal;
    },
  };
};

AnimalKingdom.kangaroo = function(name) {
  let baseMarsupial = AnimalKingdom.marsupial(name, false);

  baseMarsupial.hop = function() {
    return baseMarsupial.getName() + '가 껑충 뛰었어요';
  };

  return baseMarsupial;
};

// --------------------------------------------------------------------------

let gester = AnimalKingdom.kangaroo('제스터');
console.log(gester.getName());
console.log(gester.getIsNocturnal());
console.log(gester.hop());
