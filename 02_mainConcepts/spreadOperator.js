const oldState = { name: "John", age: 30 };
const newState = { ...oldState, age: 31, location: "India" };

const frontend = ["HTML", "React"];
const backend = ["Node", "MongoDB"];
const fullstack = [...frontend, ...backend];