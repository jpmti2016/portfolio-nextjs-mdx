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
  setAdvertising,
  advertising,
  setAnalytics,
  analytics,
  setFunctional,
  functional,
  necessary,
}) {
  const handleChangeCheckbox = (event) => {
    const target = event.target;
    const value = target.checked;

    if (classification === "functional") {
      setFunctional(value);
    }

    if (classification === "necessary") {
      // it should not be updated
    }

    if (classification === "advertising") {
      setAdvertising(value);
    }

    if (classification === "analytics") {
      setAnalytics(value);
    }
  };

  const isChecked = (classification) => {
    if (classification === "necessary") {
      return necessary;
    }
    if (classification === "functional") {
      return functional;
    }

    if (classification === "advertising") {
      return advertising;
    }

    if (classification === "analytics") {
      return analytics;
    }
    return false;
  };

  return (
    <div className="" id={`${classification}`}>
      <div className="py-2">
        <div className="flex items-baseline py-2  font-semibold">
          <input
            id={`${classification}-checkbox`}
            type="checkbox"
            className="mr-4 rounded-sm"
            checked={isChecked(classification)}
            onChange={(event) => handleChangeCheckbox(event)}
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
