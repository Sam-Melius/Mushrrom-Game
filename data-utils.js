export default function findFriendByName(name, friends) {
    // iterate through the friends
    for (let friend of friends) {
        if (friend.name === name) {
            return friend;
        }
    }
}
