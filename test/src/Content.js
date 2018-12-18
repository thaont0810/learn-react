import React, { Component } from "react";
import ActivityItem from "./components/ActivityItem";
// import ActivityItem from "./components/GithubActivityItem";

class Content extends Component {
  render() {
    const { activities } = this.props;
    // const activitiesArr = this.props.activities;
    // console.log(activities);

    return (
      <div className="content">
        <div className="line" />
        {activities.map(activity => {
          return <ActivityItem key={activity.user.id} activity={activity} />;
        })}
      </div>
    );
  }
}
export default Content;
