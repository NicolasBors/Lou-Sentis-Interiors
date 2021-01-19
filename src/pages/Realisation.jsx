import React from "react";
import LinksOverview from "../components/LinksOverview";
import { data } from "../data/data";

const Realisation = () => {
  const title = "RÉALISATION";

  return (
    <div className="realisation">
      <LinksOverview
        title={title}
        description={data["realisation"].description}
        links={data["realisation"].links}
        type={"realisation"}
      />
    </div>
  );
};

export default Realisation;
