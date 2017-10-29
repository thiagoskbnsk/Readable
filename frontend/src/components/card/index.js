import React from 'react'
import './style.sass'

import HeartIcon from 'react-icons/lib/ti/heart-outline'
import MessageIcon from 'react-icons/lib/ti/message'
import UserIcon from 'react-icons/lib/ti/user-outline'
import ArrorRightIcon from 'react-icons/lib/ti/chevron-right'

export default props => (
  <div className="card">
    <div className="card-header ocean">
      <img src="https://s3.amazonaws.com/media-p.slid.es/uploads/alexanderfarennikov/images/1198519/reactjs.png" alt="" />
    </div>
    <div className="card-body">
      <h2 className="title-body">React</h2>
      <p className="intro-body">This category is about react</p>
      <span className="link-hover">
        <a href="#">see more</a>
        <ArrorRightIcon className="icon default-color" size={20} />
      </span>
    </div>
    <div className="card-footer">
      <div className="info-footer">
        <HeartIcon className="default-color" size={30} />
        <p>8</p>
      </div>
      <div className="info-footer">
        <MessageIcon className="default-color" size={30} />
        <p>25</p>
      </div>
      <div className="info-footer">
        <UserIcon className="default-color" size={30} />
        <p>10</p>
      </div>
    </div>
  </div>
)
