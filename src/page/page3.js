import React from 'react';
import { Link } from 'react-router-dom';

const Page3 = () => <>
    <div>editor</div>
    <Link to="/page4">go to dashboard page</Link>
    <Link to="/page2/40/sub/hello">go to Search page</Link>
</>

export default Page3;