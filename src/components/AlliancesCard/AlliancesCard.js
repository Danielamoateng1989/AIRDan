import React from 'react'

const Alliances = ({ alliance }) => {
  
  return (
  <React.Fragment>
  <div className="box-item">
    <div className="img"><img src={"https://kayak.com" + alliance.logoURL} alt="alliance logo" /></div> 
    <div className="content">
      <div className="alliance_name">{alliance.name}</div>
      <div className="more-info">
        <a href="kayak.com">{alliance.phone}</a>
        <div className="alliance_site">
        <a href={`kayak.com` + alliance.logoURL}>{alliance.site}</a>
        </div>
      </div>
    </div>
  </div>
  </React.Fragment>
        
    )
}

export default Alliances
