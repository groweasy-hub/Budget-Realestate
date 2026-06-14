import {
  Avatar,
  Donut,
  DonutCenter,
  DonutLegend,
  DonutLegendItem,
  StatIcon,
} from "./ReportsStyles";

export function Icon({ name, size = 22 }) {
  const common = { stroke: "currentColor", strokeWidth: 1.9, strokeLinecap: "round", strokeLinejoin: "round" };
  const icons = {
    home: <><path d="M4 11.2 12 4l8 7.2" {...common} /><path d="M6.2 10.2V20h11.6v-9.8M10 20v-5.6h4V20" {...common} /></>,
    eye: <><path d="M3 12s3.3-5.2 9-5.2 9 5.2 9 5.2-3.3 5.2-9 5.2S3 12 3 12Z" {...common} /><circle cx="12" cy="12" r="2.4" {...common} /></>,
    users: <><circle cx="9" cy="8.3" r="3" {...common} /><path d="M3.8 19c1-3.1 3.3-4.6 5.2-4.6s4.2 1.5 5.2 4.6M16.2 10.5a2.4 2.4 0 1 0-1-4.7M16.2 14.2c1.8.5 3.2 2 4 4.8" {...common} /></>,
    calendar: <><rect x="4" y="5" width="16" height="15" rx="2" {...common} /><path d="M8 3v4M16 3v4M4 9h16M8.5 14l2 2 4.8-5" {...common} /></>,
    trend: <><path d="M4 17 9 12l4 3 7-8" {...common} /><path d="M16 7h4v4" {...common} /></>,
    rupee: <path d="M7 5h10M7 9h10M7 5c5.6 0 7.4 4.4 2.4 7.2L15 19" {...common} />,
    wallet: <><rect x="4" y="6" width="16" height="13" rx="2" {...common} /><path d="M16 11h4v4h-4a2 2 0 0 1 0-4Z" {...common} /></>,
    chart: <><path d="M5 19V9M11 19V5M17 19v-7M4 19h16M8 11l3-3 3 3 4-5" {...common} /></>,
    receipt: <path d="M7 4h10v16l-2-1.2-2 1.2-2-1.2-2 1.2-2-1.2V4ZM10 8h4M10 12h4M10 16h3" {...common} />,
    building: <><rect x="5" y="4" width="10" height="16" rx="1.5" {...common} /><path d="M15 9h4v11h-4M8 8h1M11 8h1M8 12h1M11 12h1M8 16h1M11 16h1" {...common} /></>,
    message: <path d="M5 15.5H4a2 2 0 0 1-2-2V6.8a2 2 0 0 1 2-2h13a2 2 0 0 1 2 2v6.7a2 2 0 0 1-2 2H9l-4 3v-3ZM8 9h7M8 12h4" {...common} />,
    star: <path d="m12 3.8 2.5 5.1 5.6.8-4 3.9.9 5.5-5-2.6-5 2.6.9-5.5-4-3.9 5.6-.8L12 3.8Z" {...common} />,
    check: <><circle cx="12" cy="12" r="8" {...common} /><path d="m8.5 12.2 2.3 2.3 4.8-5" {...common} /></>,
    percent: <><path d="m6 18 12-12" {...common} /><circle cx="7.5" cy="7.5" r="2" {...common} /><circle cx="16.5" cy="16.5" r="2" {...common} /></>,
    filter: <path d="M4.5 6.5h15l-5.7 6.4v4.7l-3.6 1.9v-6.6L4.5 6.5Z" {...common} />,
    reset: <path d="M6.2 8.2A7 7 0 1 1 5.1 14M6.2 8.2H3.4V5.4" {...common} />,
    download: <path d="M12 3.5v10M7.8 9.7l4.2 4.2 4.2-4.2M5.2 17.2v1.4a2 2 0 0 0 2 2h9.6a2 2 0 0 0 2-2v-1.4" {...common} />,
    info: <><circle cx="12" cy="12" r="8" {...common} /><path d="M12 11v5M12 8h.01" {...common} /></>,
    cup: <><path d="M7 5h10v4a5 5 0 0 1-10 0V5ZM17 7h2a2 2 0 0 1 0 4h-2M9 19h6M10 15v4M14 15v4" {...common} /></>,
    up: <><circle cx="12" cy="12" r="8" {...common} /><path d="M12 16V8M8.5 11.5 12 8l3.5 3.5" {...common} /></>,
  };
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">{icons[name]}</svg>;
}

export function Stat({ item }) {
  return (
    <>
      <StatIcon $color={item.color} $bg={item.bg}><Icon name={item.icon} size={23} /></StatIcon>
      <div>
        <div style={{ color: "#08112f", fontSize: 11, fontWeight: 800 }}>{item.label}</div>
        <div style={{ marginTop: 7, color: "#08112f", fontSize: 20, fontWeight: 800, letterSpacing: "-0.03em" }}>{item.value}</div>
        <div style={{ marginTop: 8, color: "#07833e", fontSize: 9, fontWeight: 800 }}>↑ {item.meta}</div>
      </div>
    </>
  );
}

export function PersonAvatar({ type, small }) {
  return <Avatar $type={type} $small={small} />;
}

export function DonutChart({ total, items, gradient }) {
  return (
    <>
      <Donut $gradient={gradient}>
        <DonutCenter><strong>{total}</strong><span>Total</span></DonutCenter>
      </Donut>
      <DonutLegend>
        {items.map((item) => (
          <DonutLegendItem key={item.label} $color={item.color}>
            <span />
            <span>{item.label}</span>
            <strong>{item.value}</strong>
          </DonutLegendItem>
        ))}
      </DonutLegend>
    </>
  );
}

export function LineChart({ multi = false, revenue = false, property = false }) {
  const labels = property ? ["18 May", "19 May", "20 May", "21 May", "22 May", "23 May", "24 May", "25 May"] : ["18 May", "19 May", "20 May", "21 May", "22 May", "23 May", "24 May", "25 May"];
  return (
    <svg width="100%" height="210" viewBox="0 0 690 210" fill="none" aria-hidden="true">
      {[34, 68, 102, 136, 170].map((y) => <path key={y} d={`M34 ${y}H670`} stroke="#edf1f5" />)}
      <path d="M34 22V174H670" stroke="#dfe5ee" />
      {(revenue ? ["1Cr", "80L", "60L", "40L", "20L", "0"] : property ? ["50K", "40K", "30K", "20K", "10K", "0"] : ["2.5K", "2K", "1.5K", "1K", "500", "0"]).map((v, i) => <text key={v} x="0" y={28 + i * 29} fill="#4f5a73" fontSize="10">{v}</text>)}
      {labels.map((v, i) => <text key={v} x={62 + i * 84} y="202" fill="#24304b" fontSize="10">{v}</text>)}
      <polyline points={property ? "62,56 146,116 230,82 314,104 398,68 482,96 566,44 650,96" : revenue ? "62,58 146,94 230,42 314,58 398,82 482,70 566,52 650,82" : "62,52 146,92 230,66 314,84 398,60 482,84 566,40 650,74"} stroke="#07833e" strokeWidth="2" fill="none" />
      <polyline points={property ? "62,92 146,126 230,100 314,118 398,88 482,118 566,74 650,112" : revenue ? "62,92 146,100 230,72 314,84 398,96 482,80 566,74 650,96" : "62,86 146,106 230,92 314,112 398,86 482,100 566,58 650,94"} stroke="#176cf0" strokeWidth="2" fill="none" />
      {multi ? (
        <>
          <polyline points="62,124 146,136 230,118 314,130 398,116 482,124 566,94 650,116" stroke="#8b4de8" strokeWidth="2" fill="none" />
          <polyline points="62,144 146,154 230,142 314,154 398,144 482,150 566,132 650,144" stroke="#ff7b17" strokeWidth="2" fill="none" />
        </>
      ) : null}
      {"62,52 146,92 230,66 314,84 398,60 482,84 566,40 650,74".split(" ").map((p) => { const [x, y] = p.split(","); return <circle key={p} cx={x} cy={y} r="3" fill="#07833e" />; })}
    </svg>
  );
}

export function BarChart({ grouped = false }) {
  const bars = [31, 35, 38, 37, 42, 39];
  return (
    <svg width="100%" height="205" viewBox="0 0 560 205" fill="none" aria-hidden="true">
      {[30, 64, 98, 132, 166].map((y) => <path key={y} d={`M34 ${y}H540`} stroke="#edf1f5" />)}
      <path d="M34 24V170H540" stroke="#dfe5ee" />
      {(grouped ? ["50K", "40K", "30K", "20K", "10K", "0"] : ["2Cr", "1.5Cr", "1Cr", "50L", "0"]).map((v, i) => <text key={v} x="0" y={31 + i * 29} fill="#4f5a73" fontSize="10">{v}</text>)}
      {["Dec 2024", "Jan 2025", "Feb 2025", "Mar 2025", "Apr 2025", "May 2025"].map((v, i) => <text key={v} x={60 + i * 78} y="198" fill="#24304b" fontSize="10">{v}</text>)}
      {bars.map((h, i) => (
        <g key={i}>
          <rect x={70 + i * 78} y={170 - h * 3} width="13" height={h * 3} rx="2" fill="#07833e" />
          <rect x={92 + i * 78} y={170 - (h - 10) * 3} width="13" height={(h - 10) * 3} rx="2" fill="#176cf0" />
          {grouped ? <rect x={114 + i * 78} y={170 - (h - 22) * 3} width="13" height={(h - 22) * 3} rx="2" fill="#9a54ed" /> : null}
        </g>
      ))}
    </svg>
  );
}

export function Sparkline({ color = "#07833e" }) {
  return (
    <svg width="100%" height="42" viewBox="0 0 180 42" fill="none" aria-hidden="true">
      <polyline points="0,30 22,12 44,28 66,24 88,18 110,32 132,22 154,8 180,26" stroke={color} strokeWidth="2" fill="none" />
      {"0,30 22,12 44,28 66,24 88,18 110,32 132,22 154,8 180,26".split(" ").map((p) => { const [x, y] = p.split(","); return <circle key={p} cx={x} cy={y} r="2.5" fill={color} />; })}
    </svg>
  );
}
