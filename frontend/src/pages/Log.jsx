import "./Log.css"
import ApplicationList from "../components/ApplicationList"
import ApplicationInput from "../components/ApplicationInput"
import ApplicationTable from "../components/ApplicationTable"
function Log() {
    return (
        <>
        <div className="log">
            <ApplicationInput />
            {/* <ApplicationList /> */}
            <ApplicationTable />
        </div>
        </>
    );
}

export default Log;