import StatsChart from "../../components/Chart";
import { data, options } from "./chartData";
import "./index.css";

const Dashboard = () => {
  return (
    <section className="dashboard-section">
      <StatsChart width="65%" height="50%" data={data} options={options} />
    </section>
  );
};

export default Dashboard;
