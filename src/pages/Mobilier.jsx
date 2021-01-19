import React from "react";
import LinksOverview from "../components/LinksOverview";
import { data } from "../data/data";

const Mobilier = () => {
  const title = "MOBILIER";

  return (
    <div className="mobilier">
      <LinksOverview
        title={title}
        description={data["mobilier"].description}
        links={data["mobilier"].links}
        type={"mobilier"}
      />
    </div>
  );
};

export default Mobilier;
