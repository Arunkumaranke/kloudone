import React, { useEffect } from 'react';
import { Row, Col, Skeleton } from 'antd';
const DataTable = (props) => {
  const [loading, setLoading] = React.useState(false);
  const [data, setData] = React.useState([]);
  const fetchData = () => {
    setLoading(true);
    fetch("https://5d451f2ed823c30014771b95.mockapi.io/data").then(res => res.json())
      .then(res => setData(res))
    setLoading(false);
  };
  useEffect(() => fetchData(),[])
  return (
    <Skeleton loading={loading} active>
      {data && data.map((item, key) =>
        <Row key={key} className="table">
          <Col span={4} className={key=== 0 || key===1 || key ===2 ?"table-item" : "table-item1"}><p className="name-size">{item.id}</p></Col>
          <Col span={10} className={key=== 0 || key===1 || key ===2 ?"table-item" : "table-item1"}><p className="name-size">{item.name}</p></Col>
          <Col span={10} className={key=== 0 || key===1 || key ===2 ?"table-item" : "table-item1"}><p className="name-size">{item.count}</p></Col>
        </Row>
      )}
    </Skeleton>
  )
}
export default DataTable;