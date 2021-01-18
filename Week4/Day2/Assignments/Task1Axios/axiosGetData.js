import axios from "axios";

const func = async function(url) {
    // Get url data to resp
    const resp = await axios.get(url);

    // The !Array.isArray(resp.data) method determines whether resp.data is NOT an array.
    if (!Array.isArray(resp.data)) {
        // If it's not an array, make it array
        resp.data = [resp.data];
    }

    // Get users data to user
    const users = await axios.get("https://jsonplaceholder.typicode.com/users/");

    // Map through resp.data
    const modifiedData = resp.data.map((respElement) => {
        if (respElement.userId) {
            const userData = idCompare(users, respElement);

            const todoObject = {
                id: respElement.id,
                title: respElement.title,
                completed: respElement.completed,
                user: {
                    // Modify user to only show name, username and email
                    name: userData.name,
                    username: userData.username,
                    email: userData.email,
                },
            };
            return todoObject;
        }
        return respElement;
    });

    console.log(modifiedData);
};

func("https://jsonplaceholder.typicode.com/todos/");

function idCompare(users, respElement) {
    return users.data.find((usersElement) => respElement.userId === usersElement.id);
}
