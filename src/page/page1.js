import React from 'react';
import { Link } from 'react-router-dom';

const Page1 = () => {
    return <>
        <div>Home</div>
        <Link to="/page2/25/sub/ces">go to search page</Link>
    </>
}

export default Page1;