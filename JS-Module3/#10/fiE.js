"use strict";

function registerVote(vote){
    for (const candidate of candidates) {
        if (candidate.name == vote) {
            candidate.votes += 1;
        }
    }
}

const candidateCount = parseInt(prompt("How many candidates in vote?"));
let candidates = [];

for (let i = 0; i < candidateCount; i++) {
    const name = prompt(`Give candidate ${(i+1)}'s name:`);
    const candidate = {name: name, votes: 0,};
    candidates.push(candidate);
}

const voters = parseInt(prompt("How many voters are there?"));
for (let i = 0; i < voters; i++) {
    const vote = prompt(`Give voter ${(i+1)}'s candidate:`);
    registerVote(vote);
}

candidates.sort((a, b) =>  {
    return b.votes - a.votes;
})

console.log(`The winner is ${candidates[0].name} with ${candidates[0].votes} votes. 
Results:`);
for(const candidate of candidates){
    console.log(`${candidate.name}: ${candidate.votes} votes`);
}

