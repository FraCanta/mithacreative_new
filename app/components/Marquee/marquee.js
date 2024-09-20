import { Icon } from "@iconify/react";
import React from "react";

const Marquee = () => {
  return (
    <div className="marquee-component 4xl:h-[36rem]">
      <div className="marquee-container bg-primary dark:bg-purple">
        <div className="marquee">
          <div className="flex items-center maarque_logo-layout">
            {/* Prima copia del contenuto */}
            <Icon
              icon="mdi:star-four-points"
              width="2rem"
              height="2rem"
              className="text-white dark:text-primary"
            />
            <p className="text-2xl text-white dark:text-primary">Web design</p>
            <Icon
              icon="mdi:star-four-points"
              width="2rem"
              height="2rem"
              className="text-white dark:text-primary"
            />
            <p className="text-2xl text-white dark:text-primary">
              Illustrations
            </p>
            <Icon
              icon="mdi:star-four-points"
              width="2rem"
              height="2rem"
              className="dark:text-white text-purple"
            />
            <p className="text-2xl dark:text-white text-purple">
              Graphic design
            </p>
            <Icon
              icon="mdi:star-four-points"
              width="2rem"
              height="2rem"
              className="text-white dark:text-primary"
            />
            <p className="text-2xl text-white dark:text-primary">
              UX / UI Design
            </p>
            <Icon
              icon="mdi:star-four-points"
              width="2rem"
              height="2rem"
              className="dark:text-white text-purple"
            />
            <p className="text-2xl dark:text-white text-purple">
              Branding strategy
            </p>
            <Icon
              icon="mdi:star-four-points"
              width="2rem"
              height="2rem"
              className="text-white dark:text-primary"
            />
            <p className="text-2xl text-white dark:text-primary">E-commerce</p>

            {/* Seconda copia del contenuto per evitare gli spazi */}
            <Icon
              icon="mdi:star-four-points"
              width="2rem"
              height="2rem"
              className="dark:text-white text-purple"
            />
            <p className="text-2xl dark:text-white text-purple">Logo Design</p>
            <Icon
              icon="mdi:star-four-points"
              width="2rem"
              height="2rem"
              className="text-white dark:text-primary"
            />
            <p className="text-2xl text-white dark:text-primary">Blog</p>
            <Icon
              icon="mdi:star-four-points"
              width="2rem"
              height="2rem"
              className="dark:text-white text-purple"
            />
            <p className="text-2xl dark:text-white text-purple">
              Social media strategy
            </p>
            <Icon
              icon="mdi:star-four-points"
              width="2rem"
              height="2rem"
              className="text-white dark:text-primary"
            />
            <p className="text-2xl text-white dark:text-primary">Restyling</p>
            <Icon
              icon="mdi:star-four-points"
              width="2rem"
              height="2rem"
              className="dark:text-white text-purple"
            />
            <p className="text-2xl dark:text-white text-purple">
              Label & Packaging
            </p>
            <Icon
              icon="mdi:star-four-points"
              width="2rem"
              height="2rem"
              className="text-white dark:text-primary"
            />
            <p className="text-2xl text-white dark:text-primary">
              Consulenza freelance
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marquee;
