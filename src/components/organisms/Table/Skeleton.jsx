import React, { useState } from 'react'
import { Skeleton, List} from 'antd';
import PropTypes from 'prop-types'

function SkeletonTable({rows}) {
    let data = new Array(rows)

    for (let index = 0; index < data.length; index++) {
        data[index] = index;
    }

    return (
        <List
          itemLayout="vertical"
          size="large"
          dataSource={data}
          renderItem={(item, index) => (
            <List.Item
              key={index}
            >
              <Skeleton.Button active size="small" shape="round" block={true} />
            </List.Item>
          )}
        />
    )
}

SkeletonTable.propTypes = {
    rows: PropTypes.number
}

SkeletonTable.defaultProps = {
    rows: 10
}

export default SkeletonTable
