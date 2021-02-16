import React from "react";
import LinksOverview from "../../components/links-overview/LinksOverview";

const Mobilier = () => {
  const title = "MOBILIER";

  return (
    <div className="mobilier">
      <LinksOverview
        title={title}
        description={"Collection d'éléments mobiliers"}
        type={"collections"}
      />
    </div>
  );
};

export default Mobilier;
