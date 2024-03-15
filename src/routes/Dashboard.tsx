import Template from "../Template";
import "./Routes.css";
function container() {
  return (
    <div className="text">
      Welcome to my portfolio. You will be able to find all projects made by me
      here. You will also be able to find my contact info and LinkedIn page.
    </div>
  );
}

function Dashboard() {
  return (
    <Template children={null} page="Dashboard" body={container()}></Template>
  );
}

export default Dashboard;
