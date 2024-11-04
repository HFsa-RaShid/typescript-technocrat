{

// destructuring

const user ={

    id:234,
    name: {
        firstName: "Hafsa",
        middleName: "djhg",
        lastname: "Rashid",
    },
    contactNo: "32536457",
    address: "gfurtgjh",

};

const {
    contactNo,
    name: {middleName},
} = user;









// array destructuring

const myFriends =["wedf","dsf","efde","wefrew"];
const [a,b,c] = myFriends;

const Friends =["wedf","dsf","efde","wefrew"];
const [,, best] = Friends;

const restFriends =["wedf","dsf","efde","wefrew","wedf","dsf","efde","wefrew"];
const [,, bestFriend,...rest] = restFriends;


}