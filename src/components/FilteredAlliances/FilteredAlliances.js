import React, { useEffect, useRef } from "react"



const FilteredAlliances = ({ activeAlliances, setFilteredAlliances, alliances, setActiveAlliances}) => {
  const oneWorldRef = useRef()
  const skyTeamRef = useRef()
  const starAllianceRef = useRef()

  const handleCheck = (e, alliance) => {
    oneWorldRef.current.checked = false
    skyTeamRef.current.checked = false
    starAllianceRef.current.checked = false

    e.target.checked = true
    setActiveAlliances(alliance)
  }


  useEffect(() => {
    const filtered = alliances.filter((eachAlliance) =>
      eachAlliance.alliance.includes(activeAlliances)
    )
    setFilteredAlliances(filtered)
  }, [activeAlliances, alliances, setFilteredAlliances])

  return (
    <form className="form">
      <div className="one_world_container">
        <input
          type="checkbox"
          ref={oneWorldRef}
          onChange={(e) => {
            handleCheck(e, "OW")
          }}
        />
        <label className="one_world_label">One world</label>
      </div>
      <div className="sky_team_container">
        <input
          type="checkbox"
          onChange={(e) => {
            handleCheck(e, "ST")
          }}
          ref={skyTeamRef}
        />
        <label className="sky_team_label">Sky Team</label>
      </div>
      <div className="star_alliance_container">
        <input
          type="checkbox"
          onChange={(e) => {
            handleCheck(e, "SA")
          }}
          ref={starAllianceRef}
        />
        <label className="star_alliance_label">Star Alliance</label>
      </div>
    </form>
  )
}
export default FilteredAlliances