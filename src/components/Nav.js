import {Link} from "react-router-dom";

export function Nav()
{
    return(
        <nav class="navbar bg-warning mb-3">
            <Link to="/" class="navbar-brand">CRUD operations</Link>
            <div class="nav">
                <Link to="/create-student" class="nav-link">Create student</Link>
                <Link to="/student-list" class="nav-link">Student List</Link>
            </div>
        </nav>
    )
}