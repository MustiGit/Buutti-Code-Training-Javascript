import axios from "axios";


const func = async () => {
    const resp = await axios.get("https://jsonplaceholder.typicode.com/todos/1");

    const respUser = await axios.get(`https://jsonplaceholder.typicode.com/users/${resp.data.userId}`);

    const todoObject = {
        id: resp.data.id,
        title: resp.data.title,
        completed: resp.data.completed,
        user: respUser.data,
    };
    console.log(todoObject);
};

func();


/*
const url1 = "https://jsonplaceholder.typicode.com/todos/";
const url2 = "https://jsonplaceholder.typicode.com/todos/1";

const func = async (url) => {
    const resp = await axios.get(url2);

    const respUser = await axios.get(url1);

    const todoObject = {
        name: resp.data.name,
        username: resp.data.username,
        email: resp.data.email,
        user: respUser.data,
    };
    console.log(todoObject);
};

func();
*/
