import React from "react";
import { Route, Routes} from "react-router-dom";
import withRouter from "../hooks/withRouter"
import { Home } from "../pages/home";
import { Portfolio } from "../pages/portfolio";
import { ContactUs } from "../pages/contact";
import { About } from "../pages/about";
import { VacQLock } from "../pages/Project_Pages/VacQLock";
import { FR3YA } from "../pages/Project_Pages/FR3YA";
import { LOKI } from "../pages/Project_Pages/LOKI";
import { SchematicDetail as FR3YASchematicDetail } from "../pages/Project_Pages/FR3YA/SchematicDetail";
import { SchematicDetail as LOKISchematicDetail } from "../pages/Project_Pages/LOKI/SchematicDetail";
import { SchematicDetail } from "../pages/Project_Pages/VacQLock/SchematicDetail";
import { Socialicons } from "../components/socialicons";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const AnimatedRoutes = withRouter(({ location }) => (
  <TransitionGroup>
    <CSSTransition
      key={location.key}
      timeout={{
        enter: 400,
        exit: 400,
      }}
      classNames="page"
      unmountOnExit
    >
      <Routes location={location}>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/project/vacqlock" element={<VacQLock />} />
        <Route path="/project/fr3ya" element={<FR3YA />} />
        <Route path="/project/loki" element={<LOKI />} />
        <Route path="/project/fr3ya/schematic/:id" element={<FR3YASchematicDetail />} />
        <Route path="/project/fr3ya/schematic/:id/subsystem/:subsystemId" element={<FR3YASchematicDetail />} />
        <Route path="/project/fr3ya/schematic/:id/subsystem/:subsystemId/subsystem/:subsystemId2" element={<FR3YASchematicDetail />} />
        <Route path="/project/loki/schematic/:id" element={<LOKISchematicDetail />} />
        <Route path="/project/loki/schematic/:id/subsystem/:subsystemId" element={<LOKISchematicDetail />} />
        <Route path="/project/loki/schematic/:id/subsystem/:subsystemId/subsystem/:subsystemId2" element={<LOKISchematicDetail />} />
        <Route path="/project/vacqlock/schematic/:id" element={<SchematicDetail />} />
        <Route path="/project/vacqlock/schematic/:id/subsystem/:subsystemId" element={<SchematicDetail />} />
        <Route path="/project/vacqlock/schematic/:id/subsystem/:subsystemId/subsystem/:subsystemId2" element={<SchematicDetail />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </CSSTransition>
  </TransitionGroup>
));

function AppRoutes() {
  return (
    <div className="s_c">
      <AnimatedRoutes />
      <Socialicons />
    </div>
  );
}

export default AppRoutes;
