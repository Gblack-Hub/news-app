import { stats } from "../../../../utils"
import StatCard from './StatCard';

export default function Stats(){
    return (
        <div className="row">
            {stats.map((stat, index) => (
                <StatCard stat={stat} key={index} />
            ))}
        </div>
    )
}