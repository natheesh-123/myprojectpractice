import { Link } from "react-router-dom";

const NavComp=()=>{
    return (

        <div>
            {/* <h2>this is nav component</h2> */}
            <Link to="aboutcomp" className="btn btn-primary btm-sm me-3">About</Link>
            <Link to="homecomp" className="btn btn-primary btm-sm me-3">Home</Link>

        </div>
    )
}
export default NavComp;