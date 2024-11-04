"use strict";
{
    // spreed operator for array
    const bros1 = ["Hafsa", "Mou", "Rafat"];
    const bros2 = ["Hafsa1", "Mou1", "Rafat1"];
    bros1.push(...bros2);
    // spreed operator for object
    const mentor1 = {
        person1: "fdg",
        person2: "dfg",
    };
    const mentor2 = {
        person1: "regtrf",
        person2: "gbf",
    };
    const mentors = Object.assign(Object.assign({}, mentor1), mentor2);
    // rest operator
    const greetFriends = (...friends) => {
        friends.forEach((friend) => console.log(`Hi ${friend}`));
    };
    greetFriends("sdfvd", "wqedw", "efdf");
}
