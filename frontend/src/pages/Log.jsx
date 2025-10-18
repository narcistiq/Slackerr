import "./Log.css"
import ApplicationList from "../components/ApplicationList"
import ApplicationInput from "../components/ApplicationInput"

function Log() {
    return (
        <>
        <div className="log">
            <ApplicationInput />
            <ApplicationList />
        </div>
        </>
    );
}

export default Log;