import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const useTasks = () => {

    const { data: tasks = [], refetch } = useQuery({
        queryKey: ["tasks"],
        queryFn: async () => {
            const res = await axios.get("http://localhost:5000/tasks");
            const data = await res.data;
            return data;
        }
    });
    return [tasks, refetch]
};

export default useTasks;