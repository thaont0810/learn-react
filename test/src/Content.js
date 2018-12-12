import React, { Component, Fragment } from "react";
import ActivityItem from "./ActivityItem";

class Content extends Component {
  render() {
    // const { activities } = this.props;
    const activitiesArr = this.props.activities;
    // console.log(activities);

    return (
      <Fragment>
        <div className="content">
          <div className="line" />

          {activitiesArr.map(function(activity) {
            return <ActivityItem activity={activity} />;
          })}
        </div>
      </Fragment>
    );
  }
}
export default Content;
