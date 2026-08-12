"use client";

/**
 * İşletme dünyası: gece tesisi — cephe + resepsiyon + ofis + soyunma odası +
 * kiralama köşesi + dış oturma alanı; kuzeyde tesise ait ışıklı saha manzarası
 * (PitchField %55 ölçekle yeniden kullanılır).
 */

import type { MotionValue } from "framer-motion";
import Atmosphere from "../fx/Atmosphere";
import FacilityShell from "../models/facility/FacilityShell";
import FrontDesk from "../models/facility/FrontDesk";
import OfficeCorner from "../models/facility/OfficeCorner";
import LockerRoom from "../models/facility/LockerRoom";
import RentalRoom from "../models/facility/RentalRoom";
import Patio from "../models/facility/Patio";
import PitchField from "../models/pitch/PitchField";
import Goal from "../models/pitch/Goal";
import Floodlight from "../models/pitch/Floodlight";
import Fence from "../models/pitch/Fence";
import { CALENDAR_WINDOW, BARS_WINDOW, STARS_WINDOW } from "./businessTimeline";
import type { QualityTier } from "../core/useQuality";

interface BusinessSceneProps {
  progress: MotionValue<number>;
  quality: Exclude<QualityTier, "off">;
}

export default function BusinessScene({ progress, quality }: BusinessSceneProps) {
  return (
    <>
      <Atmosphere quality={quality} fogRange={[40, 150]} />

      <FacilityShell progress={progress} />
      <FrontDesk progress={progress} window={CALENDAR_WINDOW} />
      <OfficeCorner progress={progress} window={BARS_WINDOW} />
      <LockerRoom progress={progress} window={STARS_WINDOW} />
      <RentalRoom />
      <Patio />

      {/* Tesisin sahası — kuzeyde, teras manzarası */}
      <group position={[0, 0, -34]} scale={0.55}>
        <PitchField />
        <Goal position={[0, 0, -21]} />
        <Goal position={[0, 0, 21]} flip />
        <Fence />
        <Floodlight position={[-15.5, 0, -24.5]} />
        <Floodlight position={[15.5, 0, -24.5]} />
        <Floodlight position={[-15.5, 0, 24.5]} />
        <Floodlight position={[15.5, 0, 24.5]} />
      </group>
    </>
  );
}
