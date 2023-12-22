import { Link } from "react-router-dom";
import DashboardComponents from "../../DashboardComponetnts/DashboardComponents";
import { useContext, useState } from "react";
import AddATaskModal from "./AddATaskModal/AddATaskModal";
import useTasks from "../../hookes/useTasks";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { FaHome } from "react-icons/fa";


const Dashboard = () => {
    const [showModal, setShowModal] = useState(false)
    const [, refetch] = useTasks()
    const { user } = useContext(AuthContext)
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* Page content here */}
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                <DashboardComponents></DashboardComponents>


            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                    {/* Sidebar content here */}
                    <div className="avatar flex-col justify-center items-center mt-12">
                        <div className="w-24 rounded">
                            <img src={user?.photoURL} />
                        </div>
                        <p className="text-2xl font-bold p-2">{user?.displayName}</p>
                    </div>
                    <div className="mt-12">
                        <li><a onClick={() => setShowModal(true)} className="font-bold text-lg bg-[#12E71D] text-white">Add a task</a></li>
                    </div>
                    <div className="divider">OR</div>
                    <Link to="/">
                        <li><a className="font-bold text-lg"><FaHome></FaHome> Home</a></li>
                    </Link>
                </ul>



            </div>

            <AddATaskModal setShowModal={setShowModal} showModal={showModal} refetch={refetch}></AddATaskModal>
        </div>
    );
};

export default Dashboard;