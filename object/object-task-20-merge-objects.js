const student = {
  name: "aminul islam"
};

const skill = {
  language: "HTML , JAVASCRIPT"
};

const merge = { ...student, ...skill };
console.log(merge);

const merge2 = Object.assign({}, student, skill);
console.log(merge2);
