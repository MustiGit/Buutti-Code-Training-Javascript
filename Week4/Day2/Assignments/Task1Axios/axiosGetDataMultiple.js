import axios from "axios";

const func = async function(url) {
    const resp = await axios.get(url);

    const modifiedData = await Promise.all(resp.data.map(async (element) => {
        if (element.userId) {
            const resp = await axios.get(`https://jsonplaceholder.typicode.com/users/${element.userId}`);
            return {...element, user: resp.data};
        }
        return element;
    }));

    console.log(modifiedData);
};
func("https://jsonplaceholder.typicode.com/todos/");
