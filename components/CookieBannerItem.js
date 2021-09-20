const Cookie = ({ name, use, duration, domains }) => {
  return (
    <div className="py-1">
      <div className="">{`${name} - ${duration} - ${use} - ${domains}`}</div>
    </div>
  );
};

export default function CookieBannerItem({
  classification,
  intro,
  cookies,
  label,
}) {
  return (
    <div className="" id={`${classification}`}>
      <div className="py-2">
        <div className="flex items-baseline py-2 text-xl font-semibold">
          <input
            id={`${classification}-checkbox`}
            type="checkbox"
            className="mr-4 rounded-sm"
          />
          <label htmlFor={`${classification}-checkbox`}>{label}</label>
        </div>
        <div className="max-w-3xl">{intro}</div>
      </div>
      <div className="">
        {cookies.map((cookie) => (
          <Cookie
            key={cookie.name}
            name={cookie.name}
            use={cookie.use}
            duration={cookie.duration}
            domains={cookie.domains}
          />
        ))}
      </div>
    </div>
  );
}
