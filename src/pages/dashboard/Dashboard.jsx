import LayoutDashboard from "../../layouts/LayoutDashboard";
import Stats from '../../components/pages/dashboard/stats/Stats';
import LineGraph from '../../components/pages/dashboard/charts/LineGraph';
import PageTitle from "../../widgets/PageTitle";
import PieChart from "../../components/pages/dashboard/charts/PieChart";
import DoughnutChart from "../../components/pages/dashboard/charts/DoughnutChart";

export default function Dashboard() {
    return (
        <LayoutDashboard>
            <PageTitle title="Dashboard" />
            <Stats />
            <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-6">
                    <PieChart />
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6">
                    <DoughnutChart />
                </div>
            </div>
            <LineGraph />
        </LayoutDashboard>
    )
}