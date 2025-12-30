import studentList from "../data/studentlist.json"
export const getUserbyId = (userid)=>{
    return studentList.find((user) => user.id === userid)|| "No Id Found"
}