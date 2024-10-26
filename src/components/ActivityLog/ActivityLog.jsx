import React from "react";
import useProducts from "../../lib/useProducts";

const ActivityLog = () => {
  const { recentActivities } = useProducts();

  return (
    <div>
      <h3 >Recent Activities</h3>
      <ul >
        {recentActivities.map((activity) => (
          <li key={activity.activityId}>
            <p >{activity.description}</p>
            <span >{activity.timestamp}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};


export default ActivityLog;
