const developers = [
    { name: "Alice", skill: "React", experience: 3 },
    { name: "Bob", skill: "Node.js", experience: 1 },
    { name: "Charlie", skill: "React", experience: 5 }
];

const reactDevs = developers.filter(dev => dev.skill === "React");
console.log("React Developers:", reactDevs);

const devNames = developers.map(dev => dev.name);
console.log("Developer Names:", devNames);

const totalExperience = developers.reduce((total, dev) => total + dev.experience, 0);
console.log("Total Years of Experience:", totalExperience);