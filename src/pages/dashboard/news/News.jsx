import LayoutDashboard from '../../../layouts/LayoutDashboard';
import PageTitle from '../../../widgets/PageTitle';
import { NewsList } from '../../../components/pages/news/NewsList';

export default function News() {
    return (
        <LayoutDashboard>
            <PageTitle title="News" />
            <NewsList />
        </LayoutDashboard>
    )
}