function KPICard({ title, value, change, icon }) {
  return (
    <div className="kpi-card">
      <div className="kpi-header">
        <span className="kpi-title">{title}</span>
        <span className="kpi-icon">{icon}</span>
      </div>

      <div className="kpi-value">{value}</div>

      <div className="kpi-change">
        {change}
      </div>
    </div>
  );
}

export default KPICard;
