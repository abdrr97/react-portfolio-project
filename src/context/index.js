import React, { useState, useEffect, createContext, useContext } from 'react'
import { db } from '../firebase'
import { AuthContext } from './authContext'

const colls = {
  timeline: 'timelines',
  skills: 'skills',
  projects: 'projects',
  users: 'users',
}

const PortfolioContext = createContext()

const PortfolioProvider = ({ children }) => {
  const [loading, setLoading] = useState(false)
  const [skills, setSkills] = useState([])

  //#region Timelines
  const [timelines, setTimelines] = useState([])
  const addTimeline = (data) => {
    if (!data.desc) return

    setLoading(true)
    db.collection(colls.timeline)
      .add(data)
      .then(() => {
        setLoading(false)
      })
  }
  const removeTimeline = (docId) => {
    if (!docId) return

    setLoading(true)
    db.collection(colls.timeline)
      .doc(docId)
      .delete()
      .then(() => {
        setLoading(false)
      })
  }
  const getTimelines = () => {
    setLoading(true)
    db.collection(colls.timeline)
      .orderBy('year', 'desc')
      .onSnapshot((snapshot) => {
        const newList = snapshot.docs.map((doc) => {
          return {
            docId: doc.id,
            ...doc.data(),
          }
        })
        setTimelines(newList)
        setLoading(false)
      })
  }
  //#endregion

  //#region

  //#endregion

  const addSkill = (data) => {
    if (!data.language) return

    setLoading(true)
    db.collection(colls.skills)
      .add(data)
      .then(() => {
        setLoading(false)
      })
  }
  const removeSkill = (docId) => {
    if (!docId) return

    setLoading(true)
    db.collection(colls.skills)
      .doc(docId)
      .delete()
      .then(() => {
        setLoading(false)
      })
  }
  const getSkills = () => {
    setLoading(true)
    db.collection(colls.skills).onSnapshot((snapshot) => {
      const newList = snapshot.docs.map((doc) => {
        return {
          docId: doc.id,
          ...doc.data(),
        }
      })
      setSkills(newList)
      setLoading(false)
    })
  }

  useEffect(() => {
    getTimelines()
    getSkills()

    return () => {
      getSkills()
      getTimelines()
    }
  }, [])

  const values = { addTimeline, removeTimeline, timelines, addSkill, removeSkill, skills, loading }
  return <PortfolioContext.Provider value={values} children={children} />
}

export { PortfolioContext, PortfolioProvider }
