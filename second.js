const secretMessage = () => {
    let randomActivity = Math.ceil(Math.random() * 4);
    let randomCompanion = Math.ceil(Math.random() * 4);
    let randomOutcome = Math.ceil(Math.random() * 9);

    let activityChoices = ['watch TV', 'play', 'do housework', 'go shopping'];
    let companionChoices = ['no one', 'friends', 'kids', 'family'];
    let outcomeChoices = ['You may rely on completion.', 'It will certainly work out.', 'It will definitely be fun!', 'I better not tell you how it turns out.', "You'll find out how it turns out yourself.", 'It will suck!', "You won't have fun.", "You won't complete this.", 'I cannot predict the outcome.'];

    let activity = activityChoices[randomActivity];
    let companion = companionChoices[randomCompanion];
    let outcome = outcomeChoices[randomOutcome];

    return `I suggest you ${activity} with ${companion} tomorrow. ${outcome}`;
}
console.log(secretMessage());