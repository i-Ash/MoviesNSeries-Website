import React from "react";

const Dropdown = ({ title, options, func, selected }) => {
    return (
        <div className="select">
            <select value={selected} onChange={func} name="format" id="format">
                <option value="" disabled>
                    {title}
                </option>
                {options.map((o, i) => (
                    <option key={i} value={o}>
                        {o.toUpperCase()}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Dropdown;
