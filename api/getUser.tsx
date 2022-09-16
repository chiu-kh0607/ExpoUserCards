import axios from "axios";
import { Response, Result } from "../type/types";

export const getUser = () => {
  const baseString: string = "";
  const urlStr = {
    base: "https://randomuser.me/api",
    resultParam: "results",
    questionMark: "?",
    equalMark: "=",
  };
  const fetchUsers = async (
    result: Result[],
    setResult: React.Dispatch<React.SetStateAction<Result[]>>,
    count: number = 5
  ): Promise<Response> => {
    const response = await axios.get(
      urlStr.base +
        urlStr.questionMark +
        urlStr.resultParam +
        urlStr.equalMark +
        String(count)
    );
    const userList: Result[] = (response.data as Response).results;
    setResult(userList);
    return response.data;
  };
  return { fetchUsers };
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
