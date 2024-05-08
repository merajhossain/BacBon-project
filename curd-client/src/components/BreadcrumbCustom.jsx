import React from 'react'
import Breadcrumb from 'react-bootstrap/Breadcrumb';

const BreadcrumbCustom = (props) => {
  return (
    <>
        <Breadcrumb>
            <Breadcrumb.Item href={props.url}>{props?.title}</Breadcrumb.Item>
        </Breadcrumb>
    </>
  )
}

export default BreadcrumbCustom
