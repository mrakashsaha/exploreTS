"use strict";
// Exploring about Asynchronous TypeScript
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const createPromise = () => {
    return new Promise((resolve, reject) => {
        // const data: null = null;
        const data = { sucess: true };
        if (data.sucess) {
            resolve(data);
        }
        else {
            reject("failed to load data");
        }
    });
};
// calling createPromise function
const showdata = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield createPromise();
    console.log(data);
    return data;
});
showdata();
const getToDo = () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch("https://jsonplaceholder.typicode.com/todos/1");
    const result = yield response.json();
    console.log(result);
    return result;
});
getToDo();
//# sourceMappingURL=asynchronous.js.map