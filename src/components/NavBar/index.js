import React from 'react';
import { NavLink } from 'react-router-dom';

import './navbar.css';

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

const NavBar = () => {
    return (
        <div className="nav-outer">
            <h3 className="logo">The CS Project</h3>
            <Accordion >
                <AccordionItem>
                    <div className="dropdown-nav">
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                <div className="link-header">Sorting Algorithms </div>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel className="top-link">
                            <NavLink className="nav-link bubble-sort" to="/bubble-sort">Bubble Sort Visualizer</NavLink>
                        </AccordionItemPanel>
                        <AccordionItemPanel className="link">
                            <NavLink className="nav-link insertion-sort" to="/insertion-sort">Insertion Sort Visualizer</NavLink>
                        </AccordionItemPanel>
                        <AccordionItemPanel className="link">
                            <NavLink className="nav-link selection-sort" to="/selection-sort">Selection Sort Visualizer</NavLink>
                        </AccordionItemPanel>
                        <AccordionItemPanel className="link">
                            <NavLink className="nav-link quick-sort" to="/quick-sort">Quick Sort Visualizer</NavLink>
                        </AccordionItemPanel>
                        <AccordionItemPanel className="link">
                            <NavLink className="nav-link merge-sort" to="/merge-sort">Merge Sort Visualizer</NavLink>
                        </AccordionItemPanel>
                    </div>
                </AccordionItem>
            </Accordion>
        </div>
    )
}

export default NavBar;
