import "./Log.css"

function Log() {
    return (
        <>
        <div className="log">
            <h1>Slackerr</h1>
            <div className="wrapper">
                <div className="boxes">
                    <input className="myInput"/>
                    <input className="myInput"/>
                    <input className="myInput"/>
                    <input className="myInput"/>
                    <input className="myInput"/>
                    <input className="myInput"/>
                    <input className="myInput"/>
                    <button className="add">Add</button>
                </div>
                <div className="applications-box">
                    <ul>
                        <li>list</li>
                        <li>another item</li>
                    </ul>
                </div>
            </div>
        </div>
        </>
    );
}

export default Log;