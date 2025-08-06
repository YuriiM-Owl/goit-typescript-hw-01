import axios from "axios";

async function fetchData<T>(url: string): Promise<T> {
  try {
    const response = await axios.get<T>(url);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching from ${url}: ${error}`);
  }
}

console.log("---------------------1 task generics------------------");
console.log(fetchData("https://jsonplaceholder.typicode.com/todos/1"));
console.log(fetchData("https://jsonplaceholder.typicode.com/todos/"));
fetchData("https://jsonplaceholder.typicode.com/todos/10");
