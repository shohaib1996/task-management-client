/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import TaskCard from "./TaskCard/TaskCard";
import { useDrop } from "react-dnd";
import toast from "react-hot-toast";

const DashboardComponents = () => {
    const { data: tasks = [], refetch } = useQuery({
        queryKey: ["tasks"],
        queryFn: async () => {
            const res = await axios.get("http://localhost:5000/tasks");
            const data = await res.data;
            return data;
        }
    });

    const fToDo = tasks.filter(task => task.status === "to-do");
    const fOnGoing = tasks.filter(task => task.status === "on-going");
    const fComplete = tasks.filter(task => task.status === "complete");

    const addItemToSection = (id, newStatus) => {
        axios.put(`http://localhost:5000/tasks/${id}`, { status: newStatus })
            .then((data) => {
                refetch();
                console.log(data.data);
                if (data.data.modifiedCount > 0) {
                    toast.success("Task status changed", { duration: 2000 });
                }
            })
            .catch(error => {
                console.error("Error updating task:", error);
            });
    };

    // Setup unique drop targets for each section
    const [{ isOverToDo }, dropToDo] = useDrop(() => ({
        accept: "task",
        drop: (item) => addItemToSection(item.id, "to-do"),
        collect: monitor => ({ isOver: !!monitor.isOver() }),
    }));

    const [{ isOverOnGoing }, dropOnGoing] = useDrop(() => ({
        accept: "task",
        drop: (item) => addItemToSection(item.id, "on-going"),
        collect: monitor => ({ isOver: !!monitor.isOver() }),
    }));

    const [{ isOverCompleted }, dropCompleted] = useDrop(() => ({
        accept: "task",
        drop: (item) => addItemToSection(item.id, "complete"),
        collect: monitor => ({ isOver: !!monitor.isOver() }),
    }));

    return (
        <div>
            <h1 className="text-center my-5 text-3xl font-bold">Your Tasks</h1>
            <div className="flex gap-5 justify-between p-2">
                <div ref={dropToDo} className="flex-1 min-h-screen">
                    <h1 className="text-center py-3 bg-[#008844] rounded-2xl mb-5 text-xl font-bold text-white">To Do</h1>
                    <div>
                        {fToDo.map(task => <TaskCard key={task._id} task={task}></TaskCard>)}
                    </div>
                </div>
                <div ref={dropOnGoing} className="flex-1 min-h-screen">
                    <h1 className="text-center py-3 bg-[#12e71d] rounded-2xl mb-5 text-xl font-bold text-white">On Going</h1>
                    <div>
                        {fOnGoing.map(task => <TaskCard key={task._id} task={task}></TaskCard>)}
                    </div>
                </div>
                <div ref={dropCompleted} className="flex-1 min-h-screen">
                    <h1 className="text-center py-3 bg-[#12e71dc4] rounded-2xl mb-5 text-xl font-bold text-white">Completed</h1>
                    <div>
                        {fComplete.map(task => <TaskCard key={task._id} task={task}></TaskCard>)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardComponents;
