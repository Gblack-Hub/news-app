import LayoutDashboard from "../../layouts/LayoutDashboard";
import Stats from '../../components/pages/dashboard/stats/Stats';
import LineGraph from '../../components/pages/dashboard/charts/LineGraph';
import PageTitle from "../../widgets/PageTitle";

export default function Dashboard() {
    return (
        <LayoutDashboard>
            <PageTitle title="Dashboard" />
            <Stats />
            <LineGraph />
        </LayoutDashboard>
    )
}