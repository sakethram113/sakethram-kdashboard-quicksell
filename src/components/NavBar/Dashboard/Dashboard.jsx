import React from 'react';
import Card from '../../Card/Card';
import './Dashboard.css'
import { useSelector } from "react-redux";
import { BiSignal3 } from "react-icons/bi";
import { BiSignal2 } from "react-icons/bi";
import { BiSignal1 } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import userImg from '../../../userImg/download.png'

const Dashboard = () => {
    const { selectedData, user } = useSelector(
        (state) => state.SelectDataReducer
      );

  return (
    selectedData && (
        <div className="dashContainer" style={{ justifyContent: "space-evenly" }}>
          {selectedData.map((elem, index) => {
            return (
              <>
                <div key={index} className="dashCardContainer">
                  <div className="dashCardHeading flex-sb">
                    <div className="leftView">
                      {!user ? (
                        <BiSignal3 />
                      ) : (
                        <>
                          <div
                            className="imageContainer relative"
                            style={{ width: "15px", height: "15px", display : 'inline-block' }}
                          >
                            <img
                              style={{
                                width: "100%",
                                height: "100%",
                                borderRadius: "50%",
                              }}
                              src={userImg}
                              alt="UserImage"
                            />
                          </div>
                        </>
                      )}
                      <span>
                        {" "}
                        {elem[index]?.title} {elem[index]?.value?.length}
                      </span>
                    </div>
                    <div className="rightView">
                      <AiOutlinePlus />{" "}
                      <span style={{ letterSpacing: "2px" }}>...</span>
                    </div>
                  </div>
                  <div className="dashList flex-gap-10">
                    {elem[index]?.value?.map((elem, ind) => {
                      return (
                        <Card key={ind} id={elem.id} title={elem.title} tag={elem.tag} icon={getPriorityIcon(elem.priority)} />
                      );
                    })}
                  </div>
                </div>
              </>
            );
          })}
        </div>
      )
  )
  function getPriorityIcon(priority) {
    switch (priority) {
      case 'High':
        return <BiSignal3/>;
      case 'Medium':
        return <BiSignal2/>;
      case 'Low':
        return <BiSignal1/>;
      default:
        return <BiSignal3/>;
    }
  }
}

export default Dashboard