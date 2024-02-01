import React from 'react'
import { useEffect, useState } from 'react';
import ShowList from '../ShowList';
import axios from "axios"

const HomeScreen = () => {

  const getShows = async () => {
    const showData = await axios.get('https://api.tvmaze.com/search/shows?q=all')
    if (showData.data) {
      return showData.data;
    } else {
      return []
    }
  }

  const [shows, setShows] = useState([])
  useEffect(() => {
    const apicall = async () => {
      let shows = await getShows()
      setShows(shows)
    }
    apicall()
  }, [])

  return (
    <div>
      <ShowList shows={shows} />
    </div>
  )
}

export default HomeScreen
