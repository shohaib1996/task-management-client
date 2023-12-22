import { Link } from "react-router-dom";
import DashboardComponents from "../../DashboardComponetnts/DashboardComponents";
import { useState } from "react";
import AddATaskModal from "./AddATaskModal/AddATaskModal";
import useTasks from "../../hookes/useTasks";


const Dashboard = () => {
    const [showModal, setShowModal] = useState(false)
    const [, refetch] = useTasks()
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* Page content here */}
                <DashboardComponents></DashboardComponents>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                    {/* Sidebar content here */}
                    <Link to="/">
                        <button className="btn btn-ghost text-xl">TaskMaster</button>
                    </Link>
                    <div className="mt-12">
                        <li><a onClick={() => setShowModal(true)} className="font-bold text-lg bg-[#12E71D] text-white">Add a task</a></li>
                    </div>
                </ul>

            </div>

            <AddATaskModal setShowModal={setShowModal} showModal={showModal} refetch={refetch}></AddATaskModal>
        </div>
    );
};

export default Dashboard;