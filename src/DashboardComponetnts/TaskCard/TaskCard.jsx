/* eslint-disable react/prop-types */

import axios from "axios";
import { useState } from "react";
import { useDrag } from "react-dnd";
import toast from "react-hot-toast";
import { FaRegCircleCheck, FaTrash } from "react-icons/fa6";

const TaskCard = ({ task, refetch }) => {
    const [showModal, setShowModal] = useState(false)
    const [modal, setModal] = useState(false)
    const [clickedTask, setClickedTask] = useState({})
    const { title, backgroundColor, _id, status } = task

    const cardStyle = {
        backgroundColor: backgroundColor,
    };
    const handleTaskModal = (task) => {
        console.log(task);
        setClickedTask(task)
        setShowModal(true)
    }
    const [{ isDragging }, drag] = useDrag(() => ({
        type: "task",
        item: { id: _id },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    }))

    const handleDeleteTask = (id) => {
        console.log(id);
        axios.delete(`http://localhost:5000/tasks/${id}`)
        .then(data => {
            console.log(data.data);
            refetch()
            if(data.data.deletedCount > 0){
                toast.error("Task has been deleted")
            }
        })
    }
    // console.log(isDragging);
    // console.log(clickedTask);
    return (
        <div>
            <div className="flex items-center gap-2">
                <h1 ref={drag} onClick={() => handleTaskModal(task)} className={`p-3 flex-[11] flex justify-between cursor-pointer transform transition-transform duration-300 hover:scale-95 text-white rounded-3xl mb-1 ${isDragging ? "opacity-25" : "opacity-100"}`} style={cardStyle}>
                    <span>{title}</span>
                    {status === "on-going" && <span className="loading loading-spinner text-black"></span>
                    }
                    {
                        status === "complete" && <span><FaRegCircleCheck className="text-xl text-[#12e71d] font-bold"></FaRegCircleCheck></span>
                    }
                </h1>
                <button onClick={()=> handleDeleteTask(_id)} className="btn btn-xs flex-1"><FaTrash className="text-red-600"></FaTrash></button>
            </div>

            {
                showModal &&
                <dialog id="my_modal_1" className="modal" open >
                    <div className="modal-box text-white" style={{ backgroundColor: clickedTask.backgroundColor }}>
                        <h3 className="font-bold text-lg">{clickedTask.title}</h3>
                        <p className="py-1">{clickedTask.description}</p>
                        <div className="flex justify-between items-center">
                            <p className="py-1"> Deadline: {clickedTask.deadline}</p>
                            <p>Priority: {clickedTask.priority}</p>
                        </div>
                        <p>Status: {clickedTask.status}</p>
                        <div className="modal-action">
                            <div method="dialog" className="space-x-5">
                                <button onClick={() => setModal(true)} className="btn">Edit</button>
                                <button onClick={() => setShowModal(false)} className="btn">Close</button>
                            </div>
                        </div>
                    </div>
                </dialog>
            }
            {
                modal &&
                <dialog id="my_modal_1" className="modal" open>
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Hello!</h3>
                        <p className="py-4">Press ESC key or click the button below to close</p>
                        <div className="modal-action">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button onClick={() => setModal(false)} className="btn">Close</button>
                            </form>
                        </div>
                    </div>
                </dialog>
            }
        </div>
    );
};

export default TaskCard;