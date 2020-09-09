import React from 'react'
import { Avatar, List } from 'antd'

import './ListView.scss'
import { API } from '../../api/api'

class ListView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      events: [],
    }
  }
  componentDidMount() {
    API.getEvents().then((response) => {
      this.setState({ events: response.data })
      console.log(this.state.events)
    })
  }
  render() {
    return (
      <div className="list-view">
        <h3>List view</h3>

        <List
          itemLayout="horizontal"
          dataSource={this.state.events.map((item, i) => ({
            key: i,
            title: item.name,
            date: item.dateTime ? item.dateTime.slice(6) : '',
            time: item.dateTime ? item.dateTime.slice(0, 5) : '',
            type: item.type,
            organizer: item.organizer ? item.organizer : 'Not assigned',
            place: item.place ? item.place : '',
            descriptionUrl: item.descriptionUrl ? item.descriptionUrl : '',
            comment: item.comment ? item.comment : 'No comments yet',
          }))}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src="https://picsum.photos/128" />}
                title={item.title}
                description={item.type}
              />
            </List.Item>
          )}
        />
      </div>
    )
  }
}

export default ListView
