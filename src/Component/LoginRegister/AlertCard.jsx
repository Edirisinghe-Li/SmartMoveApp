import React from 'react';
import './AlertCard.css';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';

const AlertCard = ({
  icon = <WarningAmberIcon fontSize="large" />,
  title = "Route 138 Delayed",
  message = "Heavy traffic near Borella. Expect a 20–30 min delay.",
  affectedRoutes = ["Route 138", "Route 122"],
  timestamp = "Updated: 7:30 AM | May 27",
  severity = "high",
}) => {
  const severityClass = `alert-card ${severity}`;

  return (
    <div className={severityClass}>
      <div className="alert-card-inner">
        <div className="alert-icon">{icon}</div>
        <h1 className="alert-title">{title}</h1>
        <p className="alert-message">{message}</p>
        <p className="alert-routes"><strong>Affected:</strong> {affectedRoutes.join(', ')}</p>
        <p className="alert-timestamp">{timestamp}</p>
        <button className="alert-button">View Alternatives</button>
      </div>
    </div>
  );
};

export default AlertCard;
