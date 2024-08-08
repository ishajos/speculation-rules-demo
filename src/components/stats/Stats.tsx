import { onLCP } from "web-vitals";
import { type ReactNode, useEffect, useState } from "react";

interface StatsProperties {
  children?: ReactNode;
}

export const Stats = ({ children }: StatsProperties) => {

  const isSupported = HTMLScriptElement.supports("speculationrules") || false;
  const [lcp, setLcp] = useState<number>();

  useEffect(() => {
    onLCP((metric) => {
      setLcp(Math.round(metric?.delta));
    }, {
      reportAllChanges: true,
      durationThreshold: 500
    });
  }, []);

  return (<>
      <div className={"flex flex-col max-w-md"}>
        <h2 className={"text-2xl"}>Predictive Prerendering Stats</h2>

        <table className={"table"}>
          <tbody>
          <tr>
            <td>speculationrules supported by Browser</td>
            <td>{isSupported.toString()}</td>
          </tr>
          <tr>
            <td>LCP (Largest Contentful Paint) time</td>
            <td>{lcp ? `${lcp} ms` : "Calculating..."}</td>
          </tr>
          </tbody>
        </table>
      </div>
      {children}
    </>
  );
};
