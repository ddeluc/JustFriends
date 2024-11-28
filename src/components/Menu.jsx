import React from "react";

import { styles } from "../styles";
import { demomode } from "../constants";
import MenuItem from "./MenuItem";

const demobox = demomode ? styles.demo.front : {};

const Menu = ({ setHoveredItem, hoveredItem, setSelectedItem }) => {

    return (
        <div className={`absolute inset-0 max-h-172 max-w-5xl mx-auto grid grid-cols-3 gap-5`}>
          <div style={demobox} className={`relative flex flex-col justify-between`}>
            <div style={demobox} className={`relative text-yellow-300 text-center text-[45px] font-shrikhand mt-4`}>
              <MenuItem titleEng={"About"} titleJap={"話"} xMovement={35} setHoveredItem={setHoveredItem} hoveredItem={hoveredItem} setSelectedItem={setSelectedItem}/>
            </div >
            <div style={demobox} className={`relative text-yellow-300 text-center text-[45px] font-shrikhand mb-4`}>
              <MenuItem titleEng={"Contact"} titleJap={"接"} xMovement={35} setHoveredItem={setHoveredItem} hoveredItem={hoveredItem} setSelectedItem={setSelectedItem}/>
            </div >
          </div>

          <div style={demobox} className={`relative h-max text-yellow-300 text-center text-[45px] font-shrikhand mt-4`}>
            <MenuItem titleEng={"Volumes"} titleJap={"章"} xMovement={35} setHoveredItem={setHoveredItem} hoveredItem={hoveredItem} setSelectedItem={setSelectedItem}/>
          </div>

          <div style={demobox} className={`relative flex flex-col justify-between`}>
            <div style={demobox} className={`relative text-yellow-300 text-center text-[45px] font-shrikhand mt-4`}>
              <MenuItem titleEng={"Join"} titleJap={"音楽"} xMovement={30} setHoveredItem={setHoveredItem} hoveredItem={hoveredItem} setSelectedItem={setSelectedItem}/>
            </div>
            <div style={demobox} className={`relative text-yellow-300 text-center text-[45px] font-shrikhand mb-4`}>
              <MenuItem titleEng={"Service"} titleJap={"勤"} xMovement={35} setHoveredItem={setHoveredItem} hoveredItem={hoveredItem} setSelectedItem={setSelectedItem}/>
            </div >
          </div>
        </div>
    );
};

export default Menu;