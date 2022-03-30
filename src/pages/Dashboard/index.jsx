import StatsChart from "../../components/Chart";
import { data, options } from "./chartData";
import "./index.css";

const Dashboard = () => {
  return (
    <section className="dashboard-section">
      <div className="dashboard__welcome">
        <h1 className="dashboard__welcome-title">Olá, Kevin!</h1>
        <p className="dashboard__welcome-info">
          Hoje, a efeciência geral é de <span>153%</span>. Fora isso, nenhuma
          novidade hoje.
        </p>
      </div>
      <div className="dashboard__component">
        <div className="dashboard__chart-sales">
          <div className="dashboard__chart-sales__menu">
            <h3 className="chart-sales__label">Número de vendas</h3>
            <select className="chart-sales__select">
              <option>Anual</option>
              <option>Mensal</option>
              <option>Diário</option>
            </select>
          </div>
          <StatsChart width="100%" data={data} options={options} />
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
