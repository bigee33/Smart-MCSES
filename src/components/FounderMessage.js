import React from "react";
import "./FounderMessage.css";

const FounderMessage = () => {
  return (
    <div className="founder-message">
      <div className="founder-image">
        <img
          src="https://scontent.fktm3-1.fna.fbcdn.net/v/t39.30808-6/342053989_658086456376170_517243718961357770_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=1SU0K4Rkz8MQ7kNvgEg_EH4&_nc_oc=Adgp6lyQ1QAA_0XGedu7yxpyQC5OoWIKB-Yjjbinit_F1t8Ad_uoveECBivMgVWUiu_tEWgx8itwOjwtkIrtbjt8&_nc_zt=23&_nc_ht=scontent.fktm3-1.fna&_nc_gid=A05wy7i_PQkGV0DRLnpRAuC&oh=00_AYDarsctH7cEXmccCFUWCCWYM1JgfGRFIGIos7_AsmLuRg&oe=6781CC7C"
          alt="Founder"
        />
      </div>
      <div className="founder-text">
        <h2>Message from the Founder</h2>
        <p>
          Welcome to Melamchi Community School! As the founder, I am deeply
          committed to fostering an environment where students can excel
          academically, socially, and morally. We aim to nurture responsible
          individuals who can contribute positively to society.
        </p>
        <h3>- Dinesh Basnet</h3>
      </div>
    </div>
  );
};

export default FounderMessage;
