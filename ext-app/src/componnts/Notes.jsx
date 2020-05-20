import React from "react";

const NavBar = (props) => {
    return (
        <ul className="list-group">
            {props.notes.map((i) => (
                    <li key={i.id} className="list-group-item note">
                        <div>
                            <strong>{i.title}</strong>
                            <small className='pl-4'>{new Date().toLocaleDateString()}</small>
                        </div>
                        <button type="button" className="btn btn-outline-danger btn-sm">&#10006;</button>
                    </li>
                )
            )}
        </ul>
    )
}
export default NavBar;
