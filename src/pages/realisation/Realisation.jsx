import React from "react";
import LinksOverview from "../../components/links-overview/LinksOverview";

const Realisation = () => {
  const title = "RÉALISATION";

  return (
    <div className="realisation">
      <LinksOverview
        title={title}
        description={"Projets architecturaux"}
        type={"realisations"}
      />
    </div>
  );
};

export default Realisation;
