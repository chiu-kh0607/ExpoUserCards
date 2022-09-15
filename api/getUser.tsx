import axios from "axios";
import { Response, Result } from "../type/types";

export const getUser = () => {
  const baseString:string = "";
  const urlStr={
    base:"https://randomuser.me/api",
    resultParam:"results",
    questionMark:"?",
    equalMark:"=",
  }
  //abandoned function
  const getUsers = async (
    setResult: React.Dispatch<React.SetStateAction<Result[]>>
  ): Promise<Response> => {
    console.log("start");
    const response = await axios.get("https://randomuser.me/api?result=2");
    console.log(response);
    const userList: Result[] = (response.data as Response).results;
    setResult(userList);
    return response.data;
  };
  const pushUsers = async (
    result: Result[],
    setResult: React.Dispatch<React.SetStateAction<Result[]>>,
    count:number = 5,
  ): Promise<Response> => {
    console.log("start");
    const response = await axios.get(urlStr.base+urlStr.questionMark+urlStr.resultParam+urlStr.equalMark+String(count));
    console.log(response);
    const userList: Result[] = (response.data as Response).results;
    const newResult = [...result, ...userList];
    setResult(newResult);
    return response.data;
  };
  return {getUsers,pushUsers};
};

// export const getUsers=async (
//     setResult:React.Dispatch<React.SetStateAction<Result[]>>,
//     setLength:React.Dispatch<React.SetStateAction<number | undefined>>,
//   ): Promise<Response> =>{
//     const response = await axios.get('https://randomuser.me/api?result=2');
//     const userList:Result[] = (response.data as Response).results;
//     setResult(userList);
//     return response.data;
//   }
