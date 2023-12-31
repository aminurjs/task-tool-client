import useCreateTask from "../../hooks/useCreateTask";
import ManageTaskCard from "./ManageTaskCard";

const ManageTask = () => {
  const [tasks] = useCreateTask();
  return (
    <div>
      <div className="bg-blue-600 flex justify-around text-white py-1">
        <h2 className="font-bold">To do list</h2>
        <h2 className="font-bold">On Going</h2>
        <h2 className="font-bold">Completed</h2>
        {/* className="grid grid-cols-1 w-64 gap-5  mt-2" */}
      </div>

      <div className="grid grid-cols-1 w-64 gap-5  mt-2">
        {tasks.map((item, index) => (
          <ManageTaskCard key={index} data={item}></ManageTaskCard>
        ))}
      </div>
    </div>
  );
};

export default ManageTask;
