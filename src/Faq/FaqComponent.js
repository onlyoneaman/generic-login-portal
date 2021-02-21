import React, { useEffect, useState } from "react"
import './faq.sass'
import {Col, Collapse, Spin} from 'antd'
import GetFaqItemsSite from "./GetFaqItems"
import { CaretRightOutlined } from '@ant-design/icons';

const {Panel} = Collapse

const FaqComponent = ({siteAddress, grouped = true, columns = 2}) => {
    const [items, setItems] = useState([])
    const [groups, setGroups] = useState([])
    const [init, setInit] = useState(true)

    useEffect(()=>{
        GetFaqItemsSite({siteAddress, grouped})
            .then(r => {
                setItems(r.data.faq_items)
                setGroups(r.data.faq_groups)
                setInit(false)
            })
    }, [])

    if(init) {
        return <Spin />
    }

    return(
        <div className="columns">
            <div className="column is-12">
                <FaqColumns 
                  grouped={grouped}
                  groups={groups}
                  faqItems={items}
                  columns={columns}
                />
            </div>
        </div>
    )
}

const FaqColumns = ({faqItems = [], columns, groups = [], grouped}) => {
    const [faqCols,setFaqCols] = useState([])
    const [load, setLoad] = useState(true)

    useEffect(()=>{
      if(columns > 1 && grouped) {
        let cols = []
        let f = true
        let g = groups;
        for(let i=0;i<g.length;i++) {
          g[i].its = []
        }
        for(let i=0;i<faqItems.length;i++) {
          for(let j=0;j<g.length;j++) {
            f = true
            if(faqItems[i].faq_group_id === g[j].id) {
              g[j].its.push(faqItems[i])
              f = false
              break;
            }
            if(!f) break;
          }
        }
        for(let i=0;i<g.length;i++) {
          cols[i] = g[i].its
        }
        setFaqCols(cols)
      } else {
          setFaqCols([faqItems])
      }
      setLoad(false)
    }, [])

    if(load) {
      return <Spin />
    }

    return(
      <div className="columns">
      <div className="column is-12">
        {grouped ? (
          groups.map((item, index) => (
            <FaqGroup 
              key={index}
              faqItems={faqCols[index]}
              groupTitle={item.name}
              columns={columns}
            />
          ))) : (
            <FaqGroup
              columns={columns}
              faqItems={faqItems}
            />
          )}
      </div>
    </div>
    )
}

const FaqGroup = ({faqItems = [], groupTitle, columns}) => {

  return(
    <>
      <div className="title has-text-black">
        {groupTitle}
      </div>
      {columns===1 ? (
              <div className="columns">
              <div className="column is-12">
                <Collapse 
                  accordion 
                  ghost
                  className="faq-head"
                  expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
                >
                  {faqItems.map((child, secondIndex) => (
                    <Panel header={child.title} className="faq-child" >
                      <p>{child.answer}</p>
                    </Panel>
                  ))}
              </Collapse>
             </div>
           </div>
      ) : (
        <FaqCols2 
          faqItems={faqItems}
        />
      )}
    </>
  )
}

const FaqCols2 = ({faqItems = []}) => {
  const column1 = []
  const column2 = []
  let col1 = true
  faqItems.forEach((item) => {
    col1 ? column1.push(item) : column2.push(item)
    col1 = !col1
  })

  return(
    <div className="columns">
     <div className="column is-half-tablet">
     <Collapse 
      accordion 
      ghost
      className="faq-head"
      expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
      >
      {column1.map((child, secondIndex) => (
        <Panel header={child.title} className="faq-child" >
          <p>{child.answer}</p>
        </Panel>
      ))}
    </Collapse>
    </div>
    <div className="column is-half-tablet">
     <Collapse 
        accordion 
        ghost
        className="faq-head"
        expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
      >
      {column2.map((child, secondIndex) => (
        <Panel header={child.title} className="faq-child" >
          <p>{child.answer}</p>
        </Panel>
      ))}
    </Collapse>
    </div>
  </div>
  )
}

export default FaqComponent