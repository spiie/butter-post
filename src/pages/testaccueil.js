import { useState, useEffect } from "react"
import * as R from 'ramda'
import Post from "../components/Post"

const Testaccueil = () => {
  const [posts, setPosts] = useState([])

  const fetchdata = async () => {
    const request = await fetch('/api/post/getAll')
    const responseJson = await request.json()

    setPosts(responseJson)
  }

  useEffect(() => {
    fetchdata()
  }, [])
  return (
    <>
      {posts.length === 0 ? null : R.map((post) => {
        return <Post key={post._id} post={post} />
      }, posts)}
    </>
  )
}

export default Testaccueil