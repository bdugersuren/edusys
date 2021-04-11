import React from 'react'
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';


function HomePage() {
    const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

    return(
<div  className="flex flex-row">
<Spin indicator={antIcon} />
</div>
    )
}

export default HomePage;
