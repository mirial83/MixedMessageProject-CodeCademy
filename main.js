//Activity outcome generator
//Random activity possibilites: Watching TV, Playing, Housework, Shopping
//Random companion possilbities: No one, Friends, Kids, Family
//Random outcome possiblities: It will certainly work out, It will definitely be fun, You may rely on completion, 
//Better not tell you how it turns out, Ask how it turns out later, Cannot predict how it will turn out,
//It will suck, You won't have fun, You won't complete this

//three random numbers
//first random number for activities
//second random number for companion
//third random number for outcome

//log to console a concatenated string of all three random selections

const secretMessage = () => {
    let randomActivity = Math.ceil(Math.random() * 4);
    let randomCompanion = Math.ceil(Math.random() * 4);
    let randomOutcome = Math.ceil(Math.random() * 9);
    let activity = '';
    let companion = '';
    let outcome = '';

    if (randomActivity === 1) {
        activity = 'watch TV';
    } else if (randomActivity === 2) {
        activity = 'play';
    } else if (randomActivity === 3) {
        activity = 'do housework';
    } else if (randomActivity === 4) {
        activity = 'go shopping';
    }

    if (randomCompanion === 1) {
        companion = 'no one';
    } else if (randomCompanion === 2) {
        companion = 'friends';
    } else if (randomCompanion === 3) {
        companion = 'kids';
    } else if (randomCompanion === 4) {
        companion = 'family';
    }

    if (randomOutcome === 1) {
        outcome = 'You may rely on completion.';
    } else if (randomOutcome === 2) {
        outcome = 'It will certainly work out.';
    } else if (randomOutcome === 3) {
        outcome = 'It will definitely be fun!';
    } else if (randomOutcome === 4) {
        outcome = 'I better not tell you how it turns out.';
    } else if (randomOutcome === 5) {
        outcome = "You'll find out how it turns out yourself!";
    } else if (randomOutcome === 6) {
        outcome = 'It will suck!';
    } else if (randomOutcome === 7) {
        outcome = "You won't have fun.";
    } else if (randomOutcome === 8) {
        outcome = "You won't complete this."
    } else if (randomOutcome === 9) {
        outcome = "I cannot predict the outcome."
    }

    return `I suggest you ${activity} with ${companion} tomorrow. ${outcome}`;
}
console.log(secretMessage());