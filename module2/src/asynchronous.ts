// Exploring about Asynchronous TypeScript

type Sucess = { sucess: boolean }


const createPromise = (): Promise<Sucess> => {
    return new Promise<Sucess>((resolve, reject) => {
        // const data: null = null;
        const data: { sucess: boolean } = { sucess: true };

        if (data.sucess) {
            resolve(data)
        }

        else {
            reject("failed to load data");
        }
    })
}


// calling createPromise function


const showdata = async (): Promise<Sucess> => {
    const data: Sucess = await createPromise();

    console.log(data);
    return data;
}

showdata();


type ToDo = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}


const getToDo = async () : Promise<ToDo> => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const result = await response.json();

    console.log(result)

    return result;
}

getToDo();