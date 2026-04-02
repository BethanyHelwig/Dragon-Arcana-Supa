import { useState, useRef } from 'react'

export const Collapsible = (props) => {
    const [open, setOpen] = useState(false);

    const contentRef = useRef(null);

    function toggle(){
        setOpen(!open);
    }

    return (
        <div>
            <div className="collapsible-title font-Roboto" onClick={toggle}>
                <span>{props.label}</span>
                <span>{open ? <i class="fa-solid fa-angle-down"></i> : <i className="fa-solid fa-angle-left"></i>}</span>
            </div>
            <div className="collapsible"
                style={{
                    height: open 
                        ? contentRef.current?.scrollHeight + "px"
                        : "0px"
                }}
            >
                <div ref={contentRef} className="collapsible-content">{props.children}</div>
            </div>
        </div>
    )
}