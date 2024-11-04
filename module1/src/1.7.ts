{
  // spreed operator for array

  const bros1: string[] = ["Hafsa", "Mou", "Rafat"];
  const bros2: string[] = ["Hafsa1", "Mou1", "Rafat1"];
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
  const mentors = {
    ...mentor1,
    ...mentor2,
  };

  // rest operator

  const greetFriends = (...friends: string[]) => {
    friends.forEach((friend: string) => console.log(`Hi ${friend}`));
  };

  greetFriends("sdfvd","wqedw","efdf");













}
