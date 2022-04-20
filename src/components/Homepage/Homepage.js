import React, {useState, useEffect} from 'react'
import Alliances from '../AlliancesCard/AlliancesCard'
import fetchJsonp from 'fetch-jsonp'
import FilteredAlliances from '../FilteredAlliances/FilteredAlliances'
import { motion } from 'framer-motion'


const Homepage = () => {
const [alliances, setGetAlliances] = useState([])
const [filteredAlliances, setFilteredAlliances] = useState([])
const [activeAlliances, setActiveAlliances] = useState('')


const fetchData = () => {
 fetchJsonp(`https://kayak.com/h/mobileapis/directory/airlines/homework`, {
    jsonpCallback: 'jsonp',
  })
  .then(response => response.json())
  .then(data => {

    setGetAlliances(data)
    setFilteredAlliances(data)
  })

}
useEffect(() => {
    fetchData()
}, [])

    return (
        <React.Fragment>
        <div className="container-holder">
           <h1>Airlines</h1>
            <div className="wrapper">
            <h4>Filter by Airlines</h4>
            </div>
        
           <FilteredAlliances alliances={alliances} 
           setFilteredAlliances={setFilteredAlliances}
           activeAlliances={activeAlliances} 
           setActiveAlliances={setActiveAlliances}
           
           />
         <motion.div layout>
          <ul className="box-wrapper">
              {filteredAlliances.map((alliance, index) => {
                 return (
                     <div className="box" key={index}>
                      <Alliances alliance={alliance} />
                     </div>
                 )
              })}
          </ul>
         </motion.div>
          

        </div>
        
            
        </React.Fragment>
    )
}

export default Homepage
