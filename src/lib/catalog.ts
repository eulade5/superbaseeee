// Bathroom imagery (existing)
import basinStone from "@/assets/catalog/bath-basin-stone.png";
import basinMarble from "@/assets/catalog/bath-basin-marble.png";
import tapGold from "@/assets/catalog/bath-tap-gold.png";
import tapChrome from "@/assets/catalog/bath-tap-chrome.png";
import showerRain from "@/assets/catalog/bath-shower-rain.png";
import showerHandheld from "@/assets/catalog/bath-shower-handheld.png";
import toilet from "@/assets/catalog/bath-toilet.png";
import bathtub from "@/assets/catalog/bath-bathtub.png";
import showerSet from "@/assets/catalog/acc-shower-set.png";
import towelRail from "@/assets/catalog/acc-towel-rail.png";
// Lighting (existing)
import chandelierCrystal from "@/assets/catalog/light-chandelier-crystal.png";
import chandelierModern from "@/assets/catalog/light-chandelier-modern.png";
import pendantGlobe from "@/assets/catalog/light-pendant-globe.png";
import ceilingFlush from "@/assets/catalog/light-ceiling-flush.png";
import wallSconce from "@/assets/catalog/light-wall-sconce.png";
import floorLamp from "@/assets/catalog/light-floor-lamp.png";
import ledStrip from "@/assets/catalog/light-led-strip.png";
// Kitchen (existing)
import sinkDouble from "@/assets/catalog/kitchen-sink-double.png";
import sinkGranite from "@/assets/catalog/kitchen-sink-granite.png";
import kitchenTapPulldown from "@/assets/catalog/kitchen-tap-pulldown.png";
import kitchenTapGold from "@/assets/catalog/kitchen-tap-gold.png";
// Mirrors / vanity (existing)
import mirrorRound from "@/assets/catalog/mirror-round-led.png";
import mirrorArch from "@/assets/catalog/mirror-arch-gold.png";
import vanityUnit from "@/assets/catalog/decor-vanity-unit.png";
import productShowercabin from "@/assets/product-showercabin.jpg";
// New realistic product imagery
import tilesPorcelain from "@/assets/catalog/tiles-porcelain.jpg";
import tilesCeramic from "@/assets/catalog/tiles-ceramic.jpg";
import tilesMarble from "@/assets/catalog/tiles-marble.jpg";
import tilesStair from "@/assets/catalog/tiles-stair.jpg";
import doorPremium from "@/assets/catalog/door-premium.jpg";
import manholeCover from "@/assets/catalog/manhole-cover.jpg";
import giPipe from "@/assets/catalog/gi-pipe.jpg";
import giElbow from "@/assets/catalog/gi-elbow.jpg";
import giTee from "@/assets/catalog/gi-tee.jpg";
import giSocket from "@/assets/catalog/gi-socket.jpg";
import valveGate from "@/assets/catalog/valve-gate.jpg";
import valveFlange from "@/assets/catalog/valve-flange.jpg";
import valveReducer from "@/assets/catalog/valve-reducer.jpg";
import valveBolts from "@/assets/catalog/valve-bolts.jpg";
import brassFittings from "@/assets/catalog/brass-fittings.jpg";
import waterMeter from "@/assets/catalog/water-meter.jpg";
import washingMachine from "@/assets/catalog/washing-machine.jpg";
import tvLarge from "@/assets/catalog/tv-large.jpg";
import solarHeater from "@/assets/catalog/solar-heater.jpg";
import treadmill from "@/assets/catalog/treadmill.jpg";
import massageChair from "@/assets/catalog/massage-chair.jpg";
import poolInflatable from "@/assets/catalog/pool-inflatable.jpg";
import dustbin from "@/assets/catalog/dustbin.jpg";
import soapDispenser from "@/assets/catalog/soap-dispenser.jpg";
import floorDrain from "@/assets/catalog/floor-drain.jpg";
import pipeClamps from "@/assets/catalog/pipe-clamps.jpg";
import bathCabinet from "@/assets/catalog/bath-cabinet.jpg";
import urinal from "@/assets/catalog/urinal.jpg";
import flexPipe from "@/assets/catalog/flex-pipe.jpg";
import toiletBrush from "@/assets/catalog/toilet-brush.jpg";

export type Category =
  | "Tiles & Marbles"
  | "Bathroom Fixtures"
  | "Lighting"
  | "Kitchen Fixtures"
  | "Mirrors"
  | "Doors"
  | "Accessories"
  | "Manhole Covers"
  | "Industrial & Pipes"
  | "Valves & Fittings"
  | "Water Meters"
  | "Appliances"
  | "Fitness"
  | "Pool & Outdoor";

/**
 * Each product has a single image and one or more variants
 * (size / dimension / color / model) selectable in the UI.
 */
export interface Product {
  id: string;
  name: string;
  category: Category;
  image: string;
  variantLabel: string; // e.g. "Size", "Finish", "Capacity"
  variants: string[];   // selectable options
}

export const PRODUCTS: Product[] = [
  // ─── Tiles & Marbles ───
  { id: "tiles-porcelain", name: "Porcelain Tiles", category: "Tiles & Marbles", image: tilesPorcelain,
    variantLabel: "Size & Finish", variants: ["60×120 Polished White", "60×120 Matte Beige", "60×120 Marble Effect", "75×150 XL"] },
  { id: "tiles-ceramic", name: "Ceramic Tiles", category: "Tiles & Marbles", image: tilesCeramic,
    variantLabel: "Size", variants: ["20×120 Wood Look", "30×60 Matte", "40×40 Glossy", "120×70 XL Format"] },
  { id: "tiles-marble", name: "Marble Tiles", category: "Tiles & Marbles", image: tilesMarble,
    variantLabel: "Finish", variants: ["Carrara White 60×200", "Calacatta Gold 60×200", "Statuario Polished", "Emperador Brown"] },
  { id: "tiles-stair", name: "Anti-Slip Stair Tile", category: "Tiles & Marbles", image: tilesStair,
    variantLabel: "Color", variants: ["120×47 Beige", "120×47 Grey", "120×47 Charcoal"] },

  // ─── Bathroom Fixtures ───
  { id: "shower-cabin", name: "Shower Glass Cabin", category: "Bathroom Fixtures", image: productShowercabin,
    variantLabel: "Model", variants: ["90×90×2000 Square", "Pivot Door 90×90", "120×90×200 Premium", "120×100×200 Hydromassage"] },
  { id: "shower-kit", name: "Complete Shower Kit", category: "Bathroom Fixtures", image: showerSet,
    variantLabel: "Finish", variants: ["Chrome", "Matte Black", "Brushed Gold", "Thermostatic Chrome"] },
  { id: "basin-stone", name: "Stone Vessel Basin", category: "Bathroom Fixtures", image: basinStone,
    variantLabel: "Color", variants: ["Matte Black", "Charcoal Grey", "Sandstone Beige"] },
  { id: "basin-marble", name: "Marble Countertop Basin", category: "Bathroom Fixtures", image: basinMarble,
    variantLabel: "Finish", variants: ["Carrara White", "Calacatta Gold"] },
  { id: "tap-basin-gold", name: "Single-Lever Basin Mixer", category: "Bathroom Fixtures", image: tapGold,
    variantLabel: "Finish", variants: ["Brushed Gold", "Rose Gold", "Champagne Bronze"] },
  { id: "tap-wall-waterfall", name: "Wall-Mounted Waterfall Tap", category: "Bathroom Fixtures", image: tapChrome,
    variantLabel: "Finish", variants: ["Polished Chrome", "Matte Black", "Brushed Nickel"] },
  { id: "shower-rain", name: "Rainfall Shower Head", category: "Bathroom Fixtures", image: showerRain,
    variantLabel: "Size", variants: ["12 inch", "16 inch", "20 inch"] },
  { id: "shower-handheld", name: "Handheld Shower", category: "Bathroom Fixtures", image: showerHandheld,
    variantLabel: "Finish", variants: ["Matte Black", "Polished Chrome", "Brushed Gold"] },
  { id: "wc-toilet", name: "WC Toilet", category: "Bathroom Fixtures", image: toilet,
    variantLabel: "Model", variants: ["Wall Hanger", "Complete Set", "Compact", "Tank Replacement", "Baby Toilet"] },
  { id: "urinal", name: "Wall Urinal", category: "Bathroom Fixtures", image: urinal,
    variantLabel: "Model", variants: ["Standard White", "Sensor-Activated"] },
  { id: "bathtub", name: "Freestanding Bathtub", category: "Bathroom Fixtures", image: bathtub,
    variantLabel: "Size", variants: ["1700×1700×760", "Oval 1800mm", "Slipper Style"] },
  { id: "jacuzzi", name: "Jacuzzi", category: "Bathroom Fixtures", image: bathtub,
    variantLabel: "Configuration", variants: ["Single", "Double", "Double 1500×1500×700", "Mixer System"] },
  { id: "flex-pipe", name: "Flexible Plumbing Pipe", category: "Bathroom Fixtures", image: flexPipe,
    variantLabel: "Length", variants: ["0.6m Stainless", "1.2m Stainless", "1.5m Stainless"] },

  // ─── Lighting ───
  { id: "chandelier-crystal", name: "Crystal Chandelier", category: "Lighting", image: chandelierCrystal,
    variantLabel: "Model", variants: ["Grand Ballroom", "3-Tier Royal", "Imperial Brass", "Cascade Drop"] },
  { id: "chandelier-modern", name: "Modern Linear Pendant", category: "Lighting", image: chandelierModern,
    variantLabel: "Finish", variants: ["Gold 5-Globe", "Black 5-Globe", "Smoked Glass"] },
  { id: "pendant-globe", name: "Globe Pendant Light", category: "Lighting", image: pendantGlobe,
    variantLabel: "Glass", variants: ["Smoked", "Clear", "Amber"] },
  { id: "ceiling-flush", name: "Flush-Mount Ceiling Light", category: "Lighting", image: ceilingFlush,
    variantLabel: "Finish", variants: ["Brushed Gold", "Matte Black", "Polished Chrome"] },
  { id: "wall-sconce", name: "Wall Sconce", category: "Lighting", image: wallSconce,
    variantLabel: "Style", variants: ["Matte Black Fluted", "Brass Fluted", "White Cylinder"] },
  { id: "floor-lamp", name: "Arc Floor Lamp", category: "Lighting", image: floorLamp,
    variantLabel: "Material", variants: ["Marble & Brass", "Black Steel"] },
  { id: "led-strip", name: "LED Strip Lighting", category: "Lighting", image: ledStrip,
    variantLabel: "Type", variants: ["Warm White 5m", "RGB 10m", "Smart WiFi 10m"] },

  // ─── Kitchen Fixtures ───
  { id: "sink-stainless", name: "Stainless Steel Sink", category: "Kitchen Fixtures", image: sinkDouble,
    variantLabel: "Size", variants: ["680×450 Single", "780×430 Double", "1600×600×800 Pro", "Double Bowl Undermount"] },
  { id: "sink-granite", name: "Granite Composite Sink", category: "Kitchen Fixtures", image: sinkGranite,
    variantLabel: "Color", variants: ["Black", "Sand Beige", "Concrete Grey", "Pearl White"] },
  { id: "tap-pulldown", name: "Pull-Down Kitchen Faucet", category: "Kitchen Fixtures", image: kitchenTapPulldown,
    variantLabel: "Finish", variants: ["Brushed Nickel", "Polished Chrome", "Matte Black"] },
  { id: "tap-gooseneck", name: "Gooseneck Kitchen Mixer", category: "Kitchen Fixtures", image: kitchenTapGold,
    variantLabel: "Finish", variants: ["Matte Gold", "Rose Gold", "Champagne Bronze"] },
  { id: "wash-basin", name: "Wash Basin", category: "Kitchen Fixtures", image: basinStone,
    variantLabel: "Type", variants: ["Small", "Hand Wash Medium", "Art Designer", "With Cabinet", "With Mirror"] },

  // ─── Mirrors ───
  { id: "mirror-wall", name: "Wall Mirror", category: "Mirrors", image: mirrorArch,
    variantLabel: "Size", variants: ["60×60", "70×70", "100×70", "800×600", "700×1300"] },
  { id: "mirror-led-round", name: "LED Backlit Round Mirror", category: "Mirrors", image: mirrorRound,
    variantLabel: "Size", variants: ["60cm", "80cm", "100cm"] },
  { id: "mirror-arch", name: "Arched Wall Mirror", category: "Mirrors", image: mirrorArch,
    variantLabel: "Frame", variants: ["Gold", "Black", "Brass"] },
  { id: "vanity-unit", name: "Floating Vanity Unit", category: "Mirrors", image: vanityUnit,
    variantLabel: "Finish & Size", variants: ["Walnut 1000mm", "Oak 1200mm", "White Gloss 1200mm"] },

  // ─── Doors ───
  { id: "door-premium", name: "Premium Entrance Door", category: "Doors", image: doorPremium,
    variantLabel: "Size", variants: ["2.8m × 1.48m Standard", "2.8m × 1.60m Wide", "2.8m × 3.20m Tall", "2.9m × 3.90m Grand"] },

  // ─── Accessories ───
  { id: "bath-cabinet", name: "Bathroom Cabinet", category: "Accessories", image: bathCabinet,
    variantLabel: "Model", variants: ["Wall-Mount", "Tall Storage", "Mirror Cabinet"] },
  { id: "soap-dispenser", name: "Soap Dispenser", category: "Accessories", image: soapDispenser,
    variantLabel: "Finish", variants: ["Chrome Wall", "Black Wall", "Counter Top"] },
  { id: "towel-rack", name: "Towel Rack", category: "Accessories", image: towelRail,
    variantLabel: "Style", variants: ["Single Bar", "Double Bar", "Hotel Style"] },
  { id: "towel-rail-heated", name: "Heated Towel Rail", category: "Accessories", image: towelRail,
    variantLabel: "Finish & Size", variants: ["Chrome 1200mm", "Matte Black 1200mm", "Brushed Gold 1000mm"] },
  { id: "toilet-brush", name: "Toilet Brush & Holder", category: "Accessories", image: toiletBrush,
    variantLabel: "Finish", variants: ["Chrome", "Matte Black"] },
  { id: "dustbin", name: "Pedal Dustbin", category: "Accessories", image: dustbin,
    variantLabel: "Capacity", variants: ["6L", "12L", "20L", "50L"] },
  { id: "floor-drain", name: "Floor Drain", category: "Accessories", image: floorDrain,
    variantLabel: "Type", variants: ["Stainless Square", "Brass Round", "Anti-Odour"] },
  { id: "pipe-clamps", name: "Pipe Clamps", category: "Accessories", image: pipeClamps,
    variantLabel: "Pack", variants: ["Mixed Sizes Pack", "Small Pack", "Large Pack"] },

  // ─── Manhole Covers ───
  { id: "manhole-cover", name: "Manhole Cover", category: "Manhole Covers", image: manholeCover,
    variantLabel: "Size", variants: ["40×40", "50×50", "60×60", "70×70", "80×80"] },

  // ─── Industrial & Pipes ───
  { id: "gi-pipe", name: "GI Pipe", category: "Industrial & Pipes", image: giPipe,
    variantLabel: "Diameter", variants: ["1/2 inch", "3/4 inch", "1 inch", "1.5 inch", "2 inch"] },
  { id: "gi-elbow", name: "GI Elbow", category: "Industrial & Pipes", image: giElbow,
    variantLabel: "Diameter", variants: ["1/2 inch", "3/4 inch", "1 inch"] },
  { id: "gi-tee", name: "GI Tee", category: "Industrial & Pipes", image: giTee,
    variantLabel: "Diameter", variants: ["1/2 inch", "3/4 inch", "1 inch"] },
  { id: "gi-socket", name: "GI Socket & Nipple", category: "Industrial & Pipes", image: giSocket,
    variantLabel: "Type", variants: ["Socket 1/2 inch", "Socket 3/4 inch", "Nipple Short", "Nipple Long", "Mixed Pack"] },

  // ─── Valves & Fittings ───
  { id: "valve-gate", name: "Brass Gate Valve", category: "Valves & Fittings", image: valveGate,
    variantLabel: "DN", variants: ["DN15", "DN20", "DN25", "DN50", "DN80"] },
  { id: "valve-flange", name: "Pipe Flange", category: "Valves & Fittings", image: valveFlange,
    variantLabel: "DN", variants: ["DN50", "DN80", "DN100"] },
  { id: "valve-reducer", name: "Pipe Reducer", category: "Valves & Fittings", image: valveReducer,
    variantLabel: "Pack", variants: ["Mixed Sizes Pack", "Concentric Set", "Eccentric Set"] },
  { id: "valve-bolts", name: "Bolts & Nuts Set", category: "Valves & Fittings", image: valveBolts,
    variantLabel: "Size", variants: ["M8 Pack", "M10 Pack", "M12 Pack"] },
  { id: "brass-fittings", name: "Brass Fittings Kit", category: "Valves & Fittings", image: brassFittings,
    variantLabel: "Size", variants: ["1/2 inch Set", "3/4 inch Set", "Pro Pack"] },

  // ─── Water Meters ───
  { id: "water-meter", name: "Water Meter", category: "Water Meters", image: waterMeter,
    variantLabel: "DN", variants: ["DN50", "DN65", "DN80", "DN100"] },

  // ─── Appliances ───
  { id: "washing-machine", name: "Washing Machine", category: "Appliances", image: washingMachine,
    variantLabel: "Capacity", variants: ["Front-Load 8kg", "Front-Load 10kg", "Top-Load 12kg"] },
  { id: "tv-large", name: "Samsung Smart TV 98\"", category: "Appliances", image: tvLarge,
    variantLabel: "Resolution", variants: ["Neo QLED 4K", "Neo QLED 8K"] },
  { id: "solar-heater", name: "Solar Water Heater", category: "Appliances", image: solarHeater,
    variantLabel: "Capacity", variants: ["150L", "200L", "300L"] },

  // ─── Fitness ───
  { id: "treadmill", name: "Treadmill", category: "Fitness", image: treadmill,
    variantLabel: "Model", variants: ["Compact Home", "Pro Series"] },
  { id: "massage-chair", name: "Massage Chair", category: "Fitness", image: massageChair,
    variantLabel: "Model", variants: ["Luxury Recliner", "Zero-Gravity Pro"] },

  // ─── Pool & Outdoor ───
  { id: "pool-inflatable", name: "Inflatable Swimming Pool", category: "Pool & Outdoor", image: poolInflatable,
    variantLabel: "Size", variants: ["Family 3m", "Large 4.5m", "XL 6m"] },
];

export const CATEGORIES: Category[] = [
  "Tiles & Marbles",
  "Bathroom Fixtures",
  "Lighting",
  "Kitchen Fixtures",
  "Mirrors",
  "Doors",
  "Accessories",
  "Manhole Covers",
  "Industrial & Pipes",
  "Valves & Fittings",
  "Water Meters",
  "Appliances",
  "Fitness",
  "Pool & Outdoor",
];

export const WHATSAPP_NUMBER = "250784909020";
