import React, { useEffect, useState } from 'react';
import { matchPath, useHistory, useLocation } from "react-router";
import { Breadcrumbs, Link } from '@material-ui/core';

const BreadCrumbs = ({ routeConfigs }) => {
    const history = useHistory();
    let { pathname } = useLocation();
    const [historyRecords, setHistoryRecords] = useState([]);

    useEffect(() => {
        const mathHistoryIndex = historyRecords.findIndex(({ path }) => matchPath(pathname, { path }));
        if (mathHistoryIndex > -1) {
            setHistoryRecords(historyRecords.slice(0, mathHistoryIndex + 1));
            return;
        }

        const routeConfig = routeConfigs.find(({ path }) => matchPath(pathname, { path }));
        if (!routeConfig) return;
        
        const { root, path, breadCrumbText } = routeConfig;
        // if is root route. then empty historyRecords and add root path.
        if (root) {
            setHistoryRecords([{ pathname, path, breadCrumbText }]);
        } else {
            setHistoryRecords((preHistoryRecords) => [...preHistoryRecords, { pathname, path, breadCrumbText }]);
        }
    }, [pathname, routeConfigs]);

    const handleClick = (pathname) => {
        history.push(pathname);
    }

    return (
        <Breadcrumbs aria-label="breadcrumb">
            {historyRecords.map(({ breadCrumbText, pathname }) =>
                <Link color="inherit" onClick={() => handleClick(pathname)}>{breadCrumbText}</Link>)}
        </Breadcrumbs>
    )
}

export default BreadCrumbs;