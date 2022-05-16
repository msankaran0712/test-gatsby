import * as React from 'react'
import { Link } from 'gatsby'
import { Button } from 'antd'
import { GithubOutlined, TwitterOutlined } from '@ant-design/icons'
import { PostCard } from '../PostCard'

const IndexPage = () => {
  return (
    <div align="center" style={{ padding: 80 }}>
     <PostCard ></PostCard>
    </div>
  )
}

export default IndexPage
