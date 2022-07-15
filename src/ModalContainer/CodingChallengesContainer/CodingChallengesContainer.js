import React from "react";

import SCCLinkManifest from "../../Utilities/Manifests/SCC-link-manifest.json";

import "./CodingChallengesContainer.css";

function CodingChallengesContainer(props) {
  return (
    <div className="challenge-container">
      <ul >
        {SCCLinkManifest.map((option) => (
          <li className="link">
            <a href={option.linkName}>
              {option.projName}
            </a>
          </li>
        ))}
      </ul>
      <div className="popover-arrow"></div>
    </div>
  );
}

export default CodingChallengesContainer;
