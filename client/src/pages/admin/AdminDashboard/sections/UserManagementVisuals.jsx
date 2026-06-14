import {
  Avatar,
  Donut,
  DonutCenter,
  IconButton,
  StatIcon,
} from "./UserManagementStyles";

export function UserIcon({ type, size = 25 }) {
  const common = { stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" };
  const icons = {
    users: (
      <>
        <circle cx="9" cy="8.2" r="3" {...common} />
        <path d="M3.8 19c1-3.1 3.4-4.6 5.2-4.6s4.2 1.5 5.2 4.6M16 10.3a2.4 2.4 0 1 0-1.2-4.5M16.2 14.2c1.8.4 3.2 2 4 4.8" {...common} />
      </>
    ),
    shield: (
      <>
        <path d="M12 3.4c2.3 1.9 5.4 2.6 7 2.9v5.2c0 4.6-3.4 7.5-7 8.7-3.6-1.2-7-4.1-7-8.7V6.3c1.6-.3 4.7-1 7-2.9Z" {...common} />
        <path d="m9.1 12 2 2 4-4.4" {...common} />
      </>
    ),
    agent: (
      <>
        <circle cx="12" cy="8.2" r="3.2" {...common} />
        <path d="M5 19c1.2-3.2 4-4.8 7-4.8s5.8 1.6 7 4.8" {...common} />
        <path d="M17.5 6.5h3M19 5v3" {...common} />
      </>
    ),
    userPlus: (
      <>
        <circle cx="9.3" cy="8.6" r="3.1" {...common} />
        <path d="M3.9 19c1-3.1 3.4-4.7 5.4-4.7 1.5 0 3.2.9 4.4 2.6M17.5 10.5h4M19.5 8.5v4" {...common} />
      </>
    ),
    lock: (
      <>
        <rect x="7" y="10.2" width="10" height="8.6" rx="1.8" {...common} />
        <path d="M9.2 10.2V8.3a2.8 2.8 0 0 1 5.6 0v1.9" {...common} />
      </>
    ),
    check: (
      <>
        <circle cx="12" cy="12" r="8" {...common} />
        <path d="m8.4 12.1 2.4 2.4 5-5.1" {...common} />
      </>
    ),
    star: <path d="m12 3.8 2.5 5.1 5.6.8-4 3.9.9 5.5-5-2.6-5 2.6.9-5.5-4-3.9 5.6-.8L12 3.8Z" {...common} />,
    rupee: (
      <>
        <path d="M7 5h10M7 9h10M7 5c5.6 0 7.4 4.4 2.4 7.2L15 19" {...common} />
      </>
    ),
  };

  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      {icons[type] || icons.users}
    </svg>
  );
}

export function StatGlyph({ item }) {
  return (
    <StatIcon $bg={item.bg} $color={item.color}>
      <UserIcon type={item.icon} size={28} />
    </StatIcon>
  );
}

export function PersonAvatar({ type, small }) {
  return <Avatar $type={type} $small={small} />;
}

export function SearchIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="10.8" cy="10.8" r="6.2" stroke="currentColor" strokeWidth="1.8" />
      <path d="m15.4 15.4 4.1 4.1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function FilterIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 5h16l-6.1 7v5.2l-3.8 1.9V12L4 5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  );
}

export function ResetIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6.2 8.2A7 7 0 1 1 5.1 14M6.2 8.2H3.4V5.4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ActionIcon({ type }) {
  const common = { stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round" };
  const map = {
    eye: <><path d="M3 12s3.3-5.2 9-5.2 9 5.2 9 5.2-3.3 5.2-9 5.2S3 12 3 12Z" {...common} /><circle cx="12" cy="12" r="2.4" {...common} /></>,
    edit: <path d="m5 16.5-.7 3.2 3.2-.7L18.2 8.3l-2.5-2.5L5 16.5ZM14.8 6.8l2.4 2.4" {...common} />,
    more: <><circle cx="12" cy="5.8" r="1" fill="currentColor" /><circle cx="12" cy="12" r="1" fill="currentColor" /><circle cx="12" cy="18.2" r="1" fill="currentColor" /></>,
    plusUser: <><circle cx="9" cy="8" r="3" {...common} /><path d="M3.7 19c.9-3 3.2-4.5 5.3-4.5s4.4 1.5 5.3 4.5M17.2 9.4h4M19.2 7.4v4" {...common} /></>,
    upload: <><path d="M12 15V4M8 8l4-4 4 4M5 14v4.5h14V14" {...common} /></>,
    shield: <><path d="M12 3.4c2.2 1.8 5.2 2.5 6.8 2.8v5c0 4.5-3.3 7.2-6.8 8.5-3.5-1.3-6.8-4-6.8-8.5v-5c1.6-.3 4.6-1 6.8-2.8Z" {...common} /><path d="m9.4 12 1.8 1.8 3.4-3.8" {...common} /></>,
    clock: <><circle cx="12" cy="12" r="8" {...common} /><path d="M12 7.5v5l3.5 2" {...common} /></>,
    bars: <><path d="M5 19v-6M12 19V5M19 19v-9" {...common} /><rect x="3.7" y="13" width="2.6" height="6" rx="1" {...common} /><rect x="10.7" y="5" width="2.6" height="14" rx="1" {...common} /><rect x="17.7" y="10" width="2.6" height="9" rx="1" {...common} /></>,
    send: <path d="M21 4 9.5 15.5M21 4l-6.4 17-3.6-7.4L3.5 10 21 4Z" {...common} />,
  };
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">{map[type] || map.eye}</svg>;
}

export function TableActions() {
  return (
    <>
      <IconButton type="button" aria-label="View"><ActionIcon type="eye" /></IconButton>
      <IconButton type="button" aria-label="Edit"><ActionIcon type="edit" /></IconButton>
      <IconButton type="button" aria-label="More"><ActionIcon type="more" /></IconButton>
    </>
  );
}

export function DonutChart({ total, label = "Total", gradient, size }) {
  return (
    <Donut $gradient={gradient} $size={size}>
      <DonutCenter>
        <strong>{total}</strong>
        <span>{label}</span>
      </DonutCenter>
    </Donut>
  );
}

export function ActivityChart() {
  return (
    <svg width="100%" height="142" viewBox="0 0 430 142" fill="none" aria-hidden="true">
      {[18, 46, 74, 102, 130].map((y) => <path key={y} d={`M34 ${y}H420`} stroke="#edf1f5" />)}
      <path d="M34 18V130H420" stroke="#dfe5ee" />
      {["100", "80", "60", "40", "20", "0"].map((v, i) => <text key={v} x="3" y={19 + i * 22} fill="#4f5a73" fontSize="10">{v}</text>)}
      {["19 May", "20 May", "21 May", "22 May", "23 May", "24 May", "25 May"].map((v, i) => <text key={v} x={56 + i * 54} y="140" fill="#24304b" fontSize="10">{v}</text>)}
      <polyline points="62,84 118,64 174,80 230,70 286,42 342,66 398,60" stroke="#07833e" strokeWidth="2" fill="none" />
      <polyline points="62,108 118,92 174,96 230,76 286,94 342,94 398,114" stroke="#b9c2d0" strokeWidth="2" fill="none" />
      {"62,84 118,64 174,80 230,70 286,42 342,66 398,60".split(" ").map((p) => { const [x, y] = p.split(","); return <circle key={p} cx={x} cy={y} r="4" fill="#07833e" />; })}
      {"62,108 118,92 174,96 230,76 286,94 342,94 398,114".split(" ").map((p) => { const [x, y] = p.split(","); return <circle key={p} cx={x} cy={y} r="3.5" fill="#b9c2d0" />; })}
    </svg>
  );
}

export function AgentPerformanceChart() {
  const bars = [80, 52, 72, 62, 44, 76, 69];
  return (
    <svg width="100%" height="145" viewBox="0 0 560 145" fill="none" aria-hidden="true">
      {[18, 46, 74, 102, 130].map((y) => <path key={y} d={`M34 ${y}H532`} stroke="#edf1f5" />)}
      <path d="M34 18V130H532" stroke="#dfe5ee" />
      {["100", "80", "60", "40", "20", "0"].map((v, i) => <text key={v} x="3" y={19 + i * 22} fill="#4f5a73" fontSize="10">{v}</text>)}
      {bars.map((h, i) => <rect key={i} x={64 + i * 68} y={130 - h} width="17" height={h} fill="#11a052" />)}
      <polyline points="72,80 140,64 208,82 276,48 344,68 412,92 480,78" stroke="#07833e" strokeWidth="2" fill="none" />
      {"72,80 140,64 208,82 276,48 344,68 412,92 480,78".split(" ").map((p) => { const [x, y] = p.split(","); return <circle key={p} cx={x} cy={y} r="4" fill="#fff" stroke="#07833e" strokeWidth="2" />; })}
      {["19 May", "20 May", "21 May", "22 May", "23 May", "24 May", "25 May"].map((v, i) => <text key={v} x={54 + i * 68} y="142" fill="#24304b" fontSize="10">{v}</text>)}
    </svg>
  );
}
