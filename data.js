const externalData = [
    {
        "c": "Analyzers",
        "t": "3121A001",
        "s": "pH Cooling Water Return",
        "r": "",
        "l": "AH 10.00 pH <br>AL 4.00 pH"
    },
    {
        "c": "Analyzers",
        "t": "3121A009",
        "s": "NITRIC ACID FROM 3121C003 (CONC)",
        "r": "",
        "l": "AH 62.00 wt% <br>AL 58.00 wt%"
    },
    {
        "c": "Analyzers",
        "t": "3121A013",
        "s": "ACID CD at 3121U005-E022",
        "r": "",
        "l": "AH 1.00 µS/cm"
    },
    {
        "c": "Analyzers",
        "t": "3121A014",
        "s": "AT 3121ANA002 (pH)",
        "r": "",
        "l": "AH 10.50 pH <br>AL 9.10 pH"
    },
    {
        "c": "Analyzers",
        "t": "3121A015",
        "s": "AT 3121ANA003 (pH)",
        "r": "",
        "l": "AH 10.50 pH <br>AL 9.10 pH"
    },
    {
        "c": "Analyzers",
        "t": "3121A017",
        "s": "DENOX ANALYSER NOX LOW RANGE",
        "r": "",
        "l": "AH 40.0 vppm <br>AL 15.0 vppm"
    },
    {
        "c": "Analyzers",
        "t": "3121A018",
        "s": "DENOX ANALYSER NOX HIGH RANGE",
        "r": "",
        "l": "AH 800.0 vppm"
    },
    {
        "c": "Analyzers",
        "t": "3121A019",
        "s": "DENOX ANALYSER O2",
        "r": "",
        "l": "AL 1.80 vol%"
    },
    {
        "c": "Analyzers",
        "t": "3121A031",
        "s": "DISS O2 AT 3121U005-E020",
        "r": "",
        "l": "AH 0.1 mg/L"
    },
    {
        "c": "Analyzers",
        "t": "3121A033",
        "s": "CD AT POLISHED WATER LINE",
        "r": "",
        "l": "AH 60.00 µS/cm"
    },
    {
        "c": "Analyzers",
        "t": "3121A034",
        "s": "NH3 AT 3121V004/CEMS (GAS)",
        "r": "",
        "l": "No thresholds defined"
    },
    {
        "c": "Analyzers",
        "t": "3121A036",
        "s": "NOX AT 3121V004/CEMS (GAS)",
        "r": "",
        "l": "No thresholds defined"
    },
    {
        "c": "Analyzers",
        "t": "3121A037",
        "s": "CD AT 31210005-E021",
        "r": "",
        "l": "AH 80.00 µS/cm <br>AL 2.00 µS/cm"
    },
    {
        "c": "Analyzers",
        "t": "3121A038",
        "s": "ACID CD 3121U005-E021",
        "r": "",
        "l": "AHH 20.0 µS/cm<br>AH 5.00 µS/cm"
    },
    {
        "c": "Analyzers",
        "t": "3121A039",
        "s": "CD AT 31210005-E020",
        "r": "",
        "l": "AH 80.00 µS/cm <br>AL 4.30 µS/cm <br>ALL 1.10 µS/cm  "
    },
    {
        "c": "Analyzers",
        "t": "3121A040",
        "s": "ACID CD 3121U005-E020",
        "r": "",
        "l": "AHH 1.00 µS/cm<br>AH 0.20 µS/cm"
    },
    {
        "c": "Analyzers",
        "t": "3121A042",
        "s": "pH 3121U005-E020",
        "r": "",
        "l": "AL 9.20 pH"
    },
    {
        "c": "Analyzers",
        "t": "3121A043",
        "s": "pH 3121U005-E021",
        "r": "",
        "l": "AL 9.10 pH"
    },
    {
        "c": "Analyzers",
        "t": "8831AT301/2/9/10",
        "s": "NOX GAS DETECTOR",
        "r": "",
        "l": "No thresholds defined"
    },
    {
        "c": "Analyzers",
        "t": "8831AT303/4/7/8",
        "s": "AMMONIA GAS DETECTOR",
        "r": "",
        "l": "No thresholds defined"
    },
    {
        "c": "Analyzers",
        "t": "8831AT305/6",
        "s": "HYDROGEN GAS DETECTOR",
        "r": "",
        "l": "No thresholds defined"
    },
    {
        "c": "Flow",
        "t": "3121FT030",
        "s": "AT 3121ANA001 (SAMPLE FLOW)",
        "r": "",
        "l": "AL 0.02 m³/h"
    },
    {
        "c": "Flow",
        "t": "3121FT031",
        "s": "AT 3121ANA002 (SAMPLE FLOW)",
        "r": "",
        "l": "AL 0.02 m³/h"
    },
    {
        "c": "Flow",
        "t": "3121FT032",
        "s": "AT 3121ANA003 (SAMPLE FLOW)",
        "r": "",
        "l": "AL 0.02 m³/h"
    },
    {
        "c": "Flow",
        "t": "3121FT058",
        "s": "AT 3121ANA005 (SAMPLE FLOW)",
        "r": "",
        "l": "AL 0.02 m³/h"
    },
    {
        "c": "Flow",
        "t": "3121FT059",
        "s": "AT 3121ANA003 (SAMPLE FLOW)",
        "r": "",
        "l": "AL 0.02 m³/h"
    },
    {
        "c": "Flow",
        "t": "3121FT060",
        "s": "AT 3121ANA003 (SAMPLE FLOW)",
        "r": "",
        "l": "AL 0.02 m³/h"
    },
    {
        "c": "Flow",
        "t": "3121FT061",
        "s": "AT 3121ANA002 (SAMPLE FLOW)",
        "r": "",
        "l": "AL 0.02 m³/h"
    },
    {
        "c": "Flow",
        "t": "3121FT062",
        "s": "AT 3121ANA004 (SAMPLE FLOW)",
        "r": "",
        "l": "AL 0.32 m³/h"
    },
    {
        "c": "Flow",
        "t": "3121FT063",
        "s": "BOILER FEED WATER",
        "r": "",
        "l": "SAH 44.00 m³/h <br>AH 1.80 m³/h"
    },
    {
        "c": "Flow",
        "t": "3121FT003B",
        "s": "MP STEAM SUPERHEATED LINE",
        "r": "",
        "l": "SH 8000.0 kg/h "
    },
    {
        "c": "Flow",
        "t": "3121FT005",
        "s": "WATER POLISHED 31214008/N01",
        "r": "",
        "l": "AL 18.6 m³/h"
    },
    {
        "c": "Flow",
        "t": "3121FT009",
        "s": "NITROGEN INLINE",
        "r": "",
        "l": "AH 80.00 Nm³/h<br>AL 20.00 Nm³/h"
    },
    {
        "c": "Flow",
        "t": "3121FT010",
        "s": "(MEDIAN) CW SUPPLY",
        "r": "",
        "l": "DEV 10.00%"
    },
    {
        "c": "Flow",
        "t": "3121FT010A/B/C",
        "s": "CW SUPPLY TO 3121C001",
        "r": "",
        "l": "AL 2400.00 m³/h ZALL 1900.0 m³/h"
    },
    {
        "c": "Flow",
        "t": "3121FT011",
        "s": "DOWN STREAM COOLER FLOW",
        "r": "",
        "l": "AH 31010.0 kg/hr <br>AL 8000.0 kg/hr"
    },
    {
        "c": "Flow",
        "t": "3121FT019",
        "s": "TURBINE CONSUMPTION",
        "r": "",
        "l": "No thresholds defined"
    },
    {
        "c": "Flow",
        "t": "3121FT026",
        "s": "PROCESS AIR TO 31210003",
        "r": "",
        "l": "AH 18000.0 Nm³/h<br>AL 8000.0 Nm³/h"
    },
    {
        "c": "Flow",
        "t": "3121FT033",
        "s": "(MEDIAN) BOILER WATER",
        "r": "",
        "l": "DEV 10.00%<br>SAL 185.00 m³/h "
    },
    {
        "c": "Flow",
        "t": "3121FT033A/B/C",
        "s": "BOILER CIRC WATER OUT",
        "r": "",
        "l": "AL 190.00 m³/h<br>ZALL 175.00 m³/h"
    },
    {
        "c": "Flow",
        "t": "3121FT034",
        "s": "BOILER CIRC WATER OUT",
        "r": "",
        "l": "AL 190.00 m³/h<br>SALL 185.00 m³/h"
    },
    {
        "c": "Flow",
        "t": "3121FT035/36",
        "s": "3121U005-P01A TO CW RETURN",
        "r": "",
        "l": "AL 2.5 m³/h"
    },
    {
        "c": "Flow",
        "t": "3121FT037",
        "s": "NITRIC ACID TO 33121E014",
        "r": "",
        "l": "AL 2.5 m³/h"
    },
    {
        "c": "Flow",
        "t": "3121FT040",
        "s": "AMMONIA GAS TO 3121N002",
        "r": "",
        "l": "SL 4.5 m³/h"
    },
    {
        "c": "Flow",
        "t": "3121FT041",
        "s": "NITROUS/TAIL GAS TO 3121V004",
        "r": "",
        "l": "AL 13000.0 Nm³/h<br>ZAL 10000.0 Nm³/h"
    },
    {
        "c": "Flow",
        "t": "3121FT042",
        "s": "(MEDIAN) AMMONIA GAS",
        "r": "",
        "l": "DEV 10.00 %"
    },
    {
        "c": "Flow",
        "t": "3121FT043",
        "s": "AIR FLOW",
        "r": "",
        "l": "DEV 10.00%<br>SL 20000.0 Nm³/h "
    },
    {
        "c": "Flow",
        "t": "3121FT043A/B/C",
        "s": "PROCESS AIR TO 3121N001",
        "r": "",
        "l": "AL 41000.0 Nm³/h<br>ZAL 39500.0 Nm³/h<br>ZALL 13000.0 Nm³/h"
    },
    {
        "c": "Flow",
        "t": "3121FT044",
        "s": "(MEDIAN) RATIO BURNER",
        "r": "",
        "l": "DEV 10%"
    },
    {
        "c": "Flow",
        "t": "3121FT044A/B/C",
        "s": "RATIO BURNER/COOLER",
        "r": "",
        "l": "ZAHH 11.5 <br>AH 10.9<br>AL 9.3<br>ZALL 8.8"
    },
    {
        "c": "Flow",
        "t": "3121FT051",
        "s": "PROCESS WATER TO 3121C001",
        "r": "",
        "l": "AL 3.6 m³/h"
    },
    {
        "c": "Flow",
        "t": "3121FT056",
        "s": "NITRIC ACID FROM P007A/B",
        "r": "",
        "l": "AH 20.00 m³/h"
    },
    {
        "c": "Flow",
        "t": "3121FT057",
        "s": "WB OUTLINE 3121E006",
        "r": "",
        "l": "AH 4.00 m³/h<br>AL 0.51 m³/h<br>SALL 0.40 m³/h"
    },
    {
        "c": "Flow",
        "t": "3121FT466",
        "s": "WASHING WATER FLOW",
        "r": "",
        "l": "AH 1.80 m³/h<br>AL 1.00 m³/h"
    },
    {
        "c": "Flow",
        "t": "9521FI001",
        "s": "PROCESS WATER FLOW TO SCRUBBER",
        "r": "",
        "l": "No thresholds defined"
    },
    {
        "c": "Level",
        "t": "3121LI004",
        "s": "STRIPPER LEVEL",
        "r": "",
        "l": "No thresholds defined"
    },
    {
        "c": "Level",
        "t": "3121LI008",
        "s": "VESSEL 1 LEVEL",
        "r": "",
        "l": "No thresholds defined"
    },
    {
        "c": "Level",
        "t": "3121LI010",
        "s": "VESSEL 2 LEVEL",
        "r": "",
        "l": "No thresholds defined"
    },
    {
        "c": "Level",
        "t": "3121LI014",
        "s": "CONDENSER LEVEL",
        "r": "",
        "l": "No thresholds defined"
    },
    {
        "c": "Level",
        "t": "3121LI016",
        "s": "NO GAS SEPARATOR LEVEL",
        "r": "",
        "l": "No thresholds defined"
    },
    {
        "c": "Level",
        "t": "3121LI019",
        "s": "BLEACHING TOWER LEVEL",
        "r": "",
        "l": "No thresholds defined"
    },
    {
        "c": "Level",
        "t": "3121LI021",
        "s": "TANK LEVEL",
        "r": "",
        "l": "No thresholds defined"
    },
    {
        "c": "Level",
        "t": "3121LI024",
        "s": "DRUM LEVEL",
        "r": "",
        "l": "No thresholds defined"
    },
    {
        "c": "Level",
        "t": "3121LI027/37",
        "s": "COOLER CONDENSER SUMP",
        "r": "",
        "l": "No thresholds defined"
    },
    {
        "c": "Level",
        "t": "3121LI029",
        "s": "OVER FILLING LEVEL",
        "r": "",
        "l": "No thresholds defined"
    },
    {
        "c": "Level",
        "t": "3121LI031",
        "s": "OUTER SUMP LEVEL",
        "r": "",
        "l": "No thresholds defined"
    },
    {
        "c": "Level",
        "t": "3121LI033/35",
        "s": "INNER SUMP LOW/HIGH",
        "r": "",
        "l": "No thresholds defined"
    },
    {
        "c": "Level",
        "t": "3121LI042",
        "s": "EVAPORATOR LEVEL",
        "r": "",
        "l": "No thresholds defined"
    },
    {
        "c": "Level",
        "t": "3121LI301",
        "s": "MAIN OIL TANK",
        "r": "",
        "l": "No thresholds defined"
    },
    {
        "c": "Level",
        "t": "3121LI391",
        "s": "OVERHEAD OIL TANK",
        "r": "",
        "l": "No thresholds defined"
    },
    {
        "c": "Level",
        "t": "3121LI001/2",
        "s": "AMMONIA GAS LINE TO DRUM",
        "r": "",
        "l": "AH 80%"
    },
    {
        "c": "Level",
        "t": "3121LI003",
        "s": "STRIPPER LEVEL",
        "r": "",
        "l": "ZAHH 85%<br>AH 65%<br>AL 35%"
    },
    {
        "c": "Level",
        "t": "3121LI005A/B/C",
        "s": "AMMONIA LIQUID AT 3121E001",
        "r": "",
        "l": "ZAHH 90%<br>AH 80%"
    },
    {
        "c": "Level",
        "t": "3121LI006",
        "s": "AMMONIA LIQUID AT 3121E001",
        "r": "",
        "l": "SAHH 70%<br>AH 60%<br>AL 20%"
    },
    {
        "c": "Level",
        "t": "3121LI007",
        "s": "VESSEL 1 LEVEL",
        "r": "",
        "l": "AHH 34%<br>SAH 25%<br>AL 5%"
    },
    {
        "c": "Level",
        "t": "3121LI011",
        "s": "VESSEL 2 LEVEL",
        "r": "",
        "l": "SAHH 45%<br>AH 40%<br>SAL 20%"
    },
    {
        "c": "Level",
        "t": "3121LI012/13",
        "s": "STEAM TURBINE CONDENSER LEVEL",
        "r": "",
        "l": "SAHH 85%<br>AH 70%<br>AL 25%<br>SAL 15%"
    },
    {
        "c": "Level",
        "t": "3121LI015A/B/C",
        "s": "NO GAS SEPARATOR LEVEL",
        "r": "",
        "l": "ZAHH 90%<br>AH 10%"
    },
    {
        "c": "Level",
        "t": "3121LI017",
        "s": "AT 3121C003",
        "r": "",
        "l": "SAHH 80%<br>AH 70%<br>AL 20%"
    },
    {
        "c": "Level",
        "t": "3121LI018A/B/C",
        "s": "AT 3121C003",
        "r": "",
        "l": "AL 20%<br>ZALL 10%"
    },
    {
        "c": "Level",
        "t": "3121LI020",
        "s": "AT 3121D014",
        "r": "",
        "l": "AHH 90%<br>SH 80%<br>SL 20%<br>ALL 10%"
    },
    {
        "c": "Level",
        "t": "3121LI021",
        "s": "AT 3121D014",
        "r": "",
        "l": "AHH 90%<br>SH 80%<br>SL 20%<br>ALL 10%"
    },
    {
        "c": "Level",
        "t": "3121LI022A/B/C",
        "s": "AT 3121U005",
        "r": "",
        "l": "ZAHH 75%<br>AH 62%<br>AL 31%<br>ZALL 12%"
    },
    {
        "c": "Level",
        "t": "3121LI023",
        "s": "AT 3121U005",
        "r": "",
        "l": "AH 62%<br>AL 31%"
    },
    {
        "c": "Level",
        "t": "3121LI025A/B/C",
        "s": "AT 3121E007",
        "r": "",
        "l": "ZAHH 90%<br>AH 70%<br>AL 20%"
    },
    {
        "c": "Level",
        "t": "3121LI026",
        "s": "AT 3121E007",
        "r": "",
        "l": "SAHH 80%<br>AH 70%<br>AL 20%"
    },
    {
        "c": "Level",
        "t": "3121LI028A/B/C",
        "s": "AT 3121C001",
        "r": "",
        "l": "ZAHH 80%<br>AH 70%"
    },
    {
        "c": "Level",
        "t": "3121LI030",
        "s": "AT 3121C001 OUTER",
        "r": "",
        "l": "AH 70%<br>AL 10%"
    },
    {
        "c": "Level",
        "t": "3121LI032",
        "s": "AT 31210001 INNER",
        "r": "",
        "l": "AH 70%<br>AL 30%"
    },
    {
        "c": "Level",
        "t": "3121LI036",
        "s": "AT 3121E009",
        "r": "",
        "l": "AH 80%"
    },
    {
        "c": "Level",
        "t": "3121LI038",
        "s": "AT PIT 1",
        "r": "",
        "l": "AHH 90%<br>SH 80%<br>SL 20%<br>ALL 10%"
    },
    {
        "c": "Level",
        "t": "3121LI039",
        "s": "AT PIT 2",
        "r": "",
        "l": "AHH 90%<br>SH 80%<br>SL 20%<br>ALL 10%"
    },
    {
        "c": "Level",
        "t": "3121LI041",
        "s": "AT 3121D008",
        "r": "",
        "l": "AH 90%<br>AL 20%<br>SALL 15%"
    },
    {
        "c": "Level",
        "t": "3121LI043",
        "s": "AT 31210001 IN",
        "r": "",
        "l": "AH 80%<br>AL 20%<br>SALL 10%"
    },
    {
        "c": "Level",
        "t": "3121LI300",
        "s": "AT 31210002-T001",
        "r": "",
        "l": "AH 60%<br>AL 54%<br>SALL 20%"
    },
    {
        "c": "Level",
        "t": "3121LI390",
        "s": "AT 3121U002-T02",
        "r": "",
        "l": "AL 97%<br>SALL 95%"
    },
    {
        "c": "Level",
        "t": "9521LI001",
        "s": "AT 95210001",
        "r": "",
        "l": "AH 70%<br>AL 20%"
    },
    {
        "c": "Level",
        "t": "9521LI002A/B",
        "s": "AT 9521T001",
        "r": "",
        "l": "ZAHH 90%<br>AH 82%<br>AL 12%<br>SALL 8%"
    },
    {
        "c": "Level",
        "t": "9521LI003",
        "s": "AT 9521T001",
        "r": "",
        "l": "No thresholds defined"
    },
    {
        "c": "Level",
        "t": "9521LI004",
        "s": "AT 9521P002",
        "r": "",
        "l": "AHH 65%<br>SH 60%<br>SL 20%<br>ALL 15%"
    },
    {
        "c": "Level",
        "t": "9521LI005",
        "s": "AT 9521C001",
        "r": "",
        "l": "AH 70%<br>AL 20%<br>SALL 15%"
    },
    {
        "c": "Mech/Vibration",
        "t": "3121Z004",
        "s": "RUPTURE DISC 3121D028",
        "r": "",
        "l": "No thresholds defined"
    },
    {
        "c": "Mech/Vibration",
        "t": "3121H418",
        "s": "INLET GUIDE BANES",
        "r": "",
        "l": "No thresholds defined"
    },
    {
        "c": "Mech/Vibration",
        "t": "3121K001",
        "s": "TIGHTNESS TEST TIMER",
        "r": "",
        "l": "No thresholds defined"
    },
    {
        "c": "Mech/Vibration",
        "t": "3121S001",
        "s": "TURBINE SPEED",
        "r": "",
        "l": "No thresholds defined"
    },
    {
        "c": "Mech/Vibration",
        "t": "3121S002",
        "s": "RESET CONDITION Z3121.20",
        "r": "",
        "l": "No thresholds defined"
    },
    {
        "c": "Mech/Vibration",
        "t": "3121SI447",
        "s": "TURBINE SPEED",
        "r": "",
        "l": "No thresholds defined"
    },
    {
        "c": "Mech/Vibration",
        "t": "3121TYI424",
        "s": "COLD CASING CONDITION",
        "r": "",
        "l": "No thresholds defined"
    },
    {
        "c": "Mech/Vibration",
        "t": "3121V483",
        "s": "SHAFT VIBRATION (ST)",
        "r": "",
        "l": "No thresholds defined"
    },
    {
        "c": "Mech/Vibration",
        "t": "3121V485",
        "s": "RADIAL VIBRATION (NOX)",
        "r": "",
        "l": "No thresholds defined"
    },
    {
        "c": "Mech/Vibration",
        "t": "3121V494",
        "s": "RADIAL VIBRATION (AC)",
        "r": "",
        "l": "No thresholds defined"
    },
    {
        "c": "Mech/Vibration",
        "t": "3121V496",
        "s": "RADIAL VIBRATION (EXP)",
        "r": "",
        "l": "No thresholds defined"
    },
    {
        "c": "Mech/Vibration",
        "t": "3121VI463",
        "s": "EXPANDER SPEED",
        "r": "",
        "l": "No thresholds defined"
    },
    {
        "c": "Mech/Vibration",
        "t": "3121Z452",
        "s": "AXIAL DISPLACEMENT (ST)",
        "r": "",
        "l": "No thresholds defined"
    },
    {
        "c": "Mech/Vibration",
        "t": "3121Z455",
        "s": "AXIAL DISPLACEMENT (NOX)",
        "r": "",
        "l": "No thresholds defined"
    },
    {
        "c": "Mech/Vibration",
        "t": "3121Z464",
        "s": "AXIAL DISPLACEMENT (AC)",
        "r": "",
        "l": "No thresholds defined"
    },
    {
        "c": "Mech/Vibration",
        "t": "3121Z467",
        "s": "AXIAL DISPLACEMENT (EXP)",
        "r": "",
        "l": "No thresholds defined"
    },
    {
        "c": "Pressure",
        "t": "3121PT002A/B/C",
        "s": "IA LINE (INSTRUMENT AIR)",
        "r": "",
        "l": "AL 4.5 bar g<br>ZAL 4.0 bar g"
    },
    {
        "c": "Pressure",
        "t": "3121PT002",
        "s": "IA LINE (INSTRUMENT AIR) (MEDIAN)",
        "r": "",
        "l": "DEV 10.0%"
    },
    {
        "c": "Pressure",
        "t": "3121PT004",
        "s": "MP STEAM SUPERHEATED LINE",
        "r": "",
        "l": "SAHH 49.0 bar g<br>AH 48.0 bar g"
    },
    {
        "c": "Pressure",
        "t": "3121PT013",
        "s": "AT 3121F003",
        "r": "",
        "l": "No thresholds defined"
    },
    {
        "c": "Pressure",
        "t": "3121PT019",
        "s": "AT 3121F005",
        "r": "",
        "l": "AH 0.01 bar"
    },
    {
        "c": "Pressure",
        "t": "3121PT020",
        "s": "AT 3121F005",
        "r": "",
        "l": "AH 0.01 bar"
    },
    {
        "c": "Pressure",
        "t": "3121PT021",
        "s": "AT 3121F005",
        "r": "",
        "l": "AH 0.02 bar"
    },
    {
        "c": "Pressure",
        "t": "3121PT048",
        "s": "TAIL GAS TO 3121U001-MT02",
        "r": "",
        "l": "AH 11.00 bar g"
    },
    {
        "c": "Pressure",
        "t": "3121PDT055",
        "s": "ROCESS AIR FROM 3121U001-K01 (MEDIAN) DIFF",
        "r": "",
        "l": "DEV 10.0%<br>SH 0.040 bar g"
    },
    {
        "c": "Pressure",
        "t": "3121PT056",
        "s": "3121D028 OUTLET NITROUS GAS",
        "r": "",
        "l": "AH 1.000 bar g"
    },
    {
        "c": "Pressure",
        "t": "3121PT075",
        "s": "AMMONIA GASEUS TO 3121N002",
        "r": "",
        "l": "ZL 2.000 bar g"
    },
    {
        "c": "Pressure",
        "t": "3121PDT077",
        "s": "DIFF AMMONIA TO TAIL GAS",
        "r": "",
        "l": "AL 1.500 bar g<br>SH 0.500 bar g<br>ZALL 0.000 bar g"
    },
    {
        "c": "Pressure",
        "t": "3121PT087",
        "s": "TUBING AT 3121U005-R01",
        "r": "",
        "l": "ZAH 8.0 bar g<br>ZAL 1.00 bar g"
    },
    {
        "c": "Pressure",
        "t": "3121PT098",
        "s": "AT MP STEAM LINE TO 1031501",
        "r": "",
        "l": "ZAHH 50.500 bar g<br>AH 48.000 bar g"
    },
    {
        "c": "Pressure",
        "t": "3121PT105",
        "s": "AG TO 3121N001",
        "r": "",
        "l": "No thresholds defined"
    },
    {
        "c": "Pressure",
        "t": "3121PT106",
        "s": "PROCESS AIR TO 3121C001",
        "r": "",
        "l": "No thresholds defined"
    },
    {
        "c": "Pressure",
        "t": "3121PDT107",
        "s": "DP ACROSS 3121N001",
        "r": "",
        "l": "AL 0.8 bar<br>ZALL 0.01 bar"
    },
    {
        "c": "Pressure",
        "t": "3121PT300",
        "s": "AT 31210002-T01",
        "r": "",
        "l": "AH -20.0 mbar g"
    },
    {
        "c": "Pressure",
        "t": "3121PT301",
        "s": "AT 31210002-P01-ME1",
        "r": "",
        "l": "AH 20.250 bar g<br>AL 15.700 bar g"
    },
    {
        "c": "Pressure",
        "t": "3121PT302",
        "s": "AT 31210002-P02-ME1",
        "r": "",
        "l": "AH 20.250 bar g<br>AL 15.700 bar g"
    },
    {
        "c": "Pressure",
        "t": "3121PT303",
        "s": "AT 3121U002-P03-ME1",
        "r": "",
        "l": "AH 5.000 bar g,<br>AL 3.500 bar g"
    },
    {
        "c": "Pressure",
        "t": "3121PT330",
        "s": "AT 3121U002-F03",
        "r": "",
        "l": "AH 0.01 bar"
    },
    {
        "c": "Pressure",
        "t": "3121PT361",
        "s": "AT 3121U002-F01",
        "r": "",
        "l": "AH 0.01 bar"
    },
    {
        "c": "Pressure",
        "t": "3121PT371",
        "s": "N12 TO 3121U002-T01",
        "r": "",
        "l": "AH 12.900 bar g<br>SLL 12.000 bar g"
    },
    {
        "c": "Pressure",
        "t": "3121PT373",
        "s": "AT 3121U002-D01 LUBE OIL OUTLET",
        "r": "",
        "l": "AH 5.00 bar g"
    },
    {
        "c": "Pressure",
        "t": "3121PT385",
        "s": "AT 3121U002-F05",
        "r": "",
        "l": "AH 1.00 bar"
    },
    {
        "c": "Pressure",
        "t": "3121PDT079",
        "s": "TAIL GAS REACTOR DP",
        "r": "",
        "l": "AH 100.00 mbar"
    },
    {
        "c": "Pressure",
        "t": "3121PDT418",
        "s": "AIR COMP. SUCTION ",
        "r": "",
        "l": "No thresholds defined"
    },
    {
        "c": "Pressure",
        "t": "3121PI005",
        "s": "SERVICE WATER PRESSURE",
        "r": "",
        "l": "No thresholds defined"
    },
    {
        "c": "Pressure",
        "t": "3121PI007",
        "s": "ACIDIC WASTE WATER",
        "r": "",
        "l": "No thresholds defined"
    },
    {
        "c": "Pressure",
        "t": "3121PI011",
        "s": "NITROGEN PRESSURE",
        "r": "",
        "l": "No thresholds defined"
    },
    {
        "c": "Pressure",
        "t": "3121PI014",
        "s": "AMMONIA LIQUID PRESSURE",
        "r": "",
        "l": "No thresholds defined"
    },
    {
        "c": "Pressure",
        "t": "3121PI015",
        "s": "STRIPPER PRESSURE",
        "r": "",
        "l": "No thresholds defined"
    },
    {
        "c": "Pressure",
        "t": "3121PI018",
        "s": "EVAPORATOR PRESSURE",
        "r": "",
        "l": "No thresholds defined"
    },
    {
        "c": "Pressure",
        "t": "3121PI022",
        "s": "CWS PRESSURE",
        "r": "",
        "l": "No thresholds defined"
    },
    {
        "c": "Pressure",
        "t": "3121PI023",
        "s": "CWR PRESSURE",
        "r": "",
        "l": "No thresholds defined"
    },
    {
        "c": "Pressure",
        "t": "3121PI024",
        "s": "DOWN STREAM COOLER PRESSURE",
        "r": "",
        "l": "No thresholds defined"
    },
    {
        "c": "Pressure",
        "t": "3121PT025 A/B/C",
        "s": "MP STEAM FROM 3121U005-E02 TO 3121D018",
        "r": "",
        "l": "AH 51.000 bar g<br>AL 40.000 bar g"
    },
    {
        "c": "Pressure",
        "t": "3121PI027/28",
        "s": "P024 A/B DISCHARGE PRESSURE",
        "r": "",
        "l": "No thresholds defined"
    },
    {
        "c": "Pressure",
        "t": "3121PI029",
        "s": "VACUUM PRESSURE",
        "r": "",
        "l": "No thresholds defined"
    },
    {
        "c": "Pressure",
        "t": "3121PI030/31",
        "s": "P016 A/B DISCHARGE PRESSURE",
        "r": "",
        "l": "No thresholds defined"
    },
    {
        "c": "Pressure",
        "t": "3121PI032",
        "s": "LP STEAM PRESSURE",
        "r": "",
        "l": "No thresholds defined"
    },
    {
        "c": "Pressure",
        "t": "3121PI033",
        "s": "HOGGING EJECTOR LP",
        "r": "",
        "l": "No thresholds defined"
    },
    {
        "c": "Pressure",
        "t": "3121PI035",
        "s": "F01STAGE LP STEAM",
        "r": "",
        "l": "No thresholds defined"
    },
    {
        "c": "Pressure",
        "t": "3121PI034",
        "s": "F02 STAGE LP STEAM",
        "r": "",
        "l": "No thresholds defined"
    },
    {
        "c": "Pressure",
        "t": "3121PI036",
        "s": "F03 STAGE LP STEAM",
        "r": "",
        "l": "No thresholds defined"
    },
    {
        "c": "Pressure",
        "t": "3121PI037",
        "s": "F04 STAGE LP STEAM",
        "r": "",
        "l": "No thresholds defined"
    },
    {
        "c": "Pressure",
        "t": "3121PI038",
        "s": "VAPORS PRESSURE",
        "r": "",
        "l": "No thresholds defined"
    },
    {
        "c": "Pressure",
        "t": "3121PI045",
        "s": "UP STREAM TRIP VALVE PRESSURE",
        "r": "",
        "l": "No thresholds defined"
    },
    {
        "c": "Pressure",
        "t": "3121PI049",
        "s": "EXPANDER SUCTION PRESSURE",
        "r": "",
        "l": "No thresholds defined"
    },
    {
        "c": "Pressure",
        "t": "3121PI059",
        "s": "P014 DISCHARGE PRESSURE",
        "r": "",
        "l": "No thresholds defined"
    },
    {
        "c": "Pressure",
        "t": "3121PI064/66",
        "s": "U005-P01/P02 DISCHARGE",
        "r": "",
        "l": "No thresholds defined"
    },
    {
        "c": "Pressure",
        "t": "3121PI065/67",
        "s": "U005-P01/P02 SUCTION",
        "r": "",
        "l": "No thresholds defined"
    },
    {
        "c": "Pressure",
        "t": "3121PI068",
        "s": "STEAM DRUM PRESSURE",
        "r": "",
        "l": "No thresholds defined"
    },
    {
        "c": "Pressure",
        "t": "3121PI069",
        "s": "START UP STEAM PRESSURE",
        "r": "",
        "l": "No thresholds defined"
    },
    {
        "c": "Pressure",
        "t": "3121PI071",
        "s": "PFW PRESSURE",
        "r": "",
        "l": "No thresholds defined"
    },
    {
        "c": "Pressure",
        "t": "3121PI072/73",
        "s": "P007 A/B DISCHARGE",
        "r": "",
        "l": "No thresholds defined"
    },
    {
        "c": "Pressure",
        "t": "3121PI078",
        "s": "TAIL GAS UPSTREAM REACTOR",
        "r": "",
        "l": "No thresholds defined"
    },
    {
        "c": "Pressure",
        "t": "3121PI086",
        "s": "MIXED GAS PRESSURE",
        "r": "",
        "l": "No thresholds defined"
    },
    {
        "c": "Pressure",
        "t": "3121PI088",
        "s": "H2 PRESSURE",
        "r": "",
        "l": "No thresholds defined"
    },
    {
        "c": "Pressure",
        "t": "3121PI089/90",
        "s": "P021/P022 DISCHARGE",
        "r": "",
        "l": "No thresholds defined"
    },
    {
        "c": "Pressure",
        "t": "3121PI091/92",
        "s": "P008 A/B DISCHARGE",
        "r": "",
        "l": "No thresholds defined"
    },
    {
        "c": "Pressure",
        "t": "3121PI093",
        "s": "UP STREAM BV10 PRESSURE",
        "r": "",
        "l": "No thresholds defined"
    },
    {
        "c": "Pressure",
        "t": "3121PI096",
        "s": "BFW PREHEATER OUTLET",
        "r": "",
        "l": "No thresholds defined"
    },
    {
        "c": "Pressure",
        "t": "3121PI099",
        "s": "PULSING AIR PRESSURE",
        "r": "",
        "l": "No thresholds defined"
    },
    {
        "c": "Pressure",
        "t": "3121PI100",
        "s": "PFW TO CONTROL EVAPORATOR",
        "r": "",
        "l": "No thresholds defined"
    },
    {
        "c": "Pressure",
        "t": "3121PT001",
        "s": "AMMONIA LIQUID/GAS LINE",
        "r": "",
        "l": "AL 8.5 bar g"
    },
    {
        "c": "Pressure",
        "t": "3121PT008",
        "s": "CW SUPPLY LINE",
        "r": "",
        "l": "AL 4.00 bar g"
    },
    {
        "c": "Pressure",
        "t": "3121PT009",
        "s": "CW RETURN LINE",
        "r": "",
        "l": "AL 1.50 bar g"
    },
    {
        "c": "Pressure",
        "t": "3121PT012",
        "s": "PLANT AIR LINE",
        "r": "",
        "l": "AL 4.500 bar g"
    },
    {
        "c": "Pressure",
        "t": "3121PT017",
        "s": "AMMONIA GAS FROM 3121E004",
        "r": "",
        "l": "SAHH 7.000 bar g<br>AH 6.500 bar g<br>AL 4.500 bar g"
    },
    {
        "c": "Pressure",
        "t": "3121PT026",
        "s": "EXPORT STEAM PRESSURE",
        "r": "",
        "l": "No thresholds defined"
    },
    {
        "c": "Pressure",
        "t": "3121PT039",
        "s": "NOX COMP DISCHARGE ASP",
        "r": "",
        "l": "A<br>C"
    },
    {
        "c": "Pressure",
        "t": "3121PT040A/B/C",
        "s": "NOX COMP. DISCHARGE PRESSURE",
        "r": "",
        "l": "ZAHH 12.200 bar g<br>AH 11.900 bar g"
    },
    {
        "c": "Pressure",
        "t": "3121PT040",
        "s": "(MEDIAN) NITROUS GAS COMP",
        "r": "",
        "l": "DEV 10.00%"
    },
    {
        "c": "Pressure",
        "t": "3121PT041B",
        "s": "NITROUS GAS OUTLINE AT COMPRESSOR TRAIN",
        "r": "",
        "l": "SH 0.200 bar g"
    },
    {
        "c": "Pressure",
        "t": "3121PT042A/B",
        "s": "NITROUS GAS OUT DIFF",
        "r": "",
        "l": "DEV 10.00%<br>ZAH 0.3 bar g"
    },
    {
        "c": "Pressure",
        "t": "3121PT043",
        "s": "NOX COMP SUCTION ASP",
        "r": "",
        "l": "No thresholds defined"
    },
    {
        "c": "Pressure",
        "t": "3121PT102A/B/C",
        "s": "NOX COMP. SUCTION PRESSURE",
        "r": "",
        "l": "ZAHHH 4.700 bar g<br>AHH 3.900 bar g<br>SH 0.070 bar g<br>AL -0.020 bar g<br>ZALL -0.050 bar g"
    },
    {
        "c": "Pressure",
        "t": "3121PT052",
        "s": "DISCHARGE PRESSURE ASP (AC)",
        "r": "",
        "l": "No thresholds defined"
    },
    {
        "c": "Pressure",
        "t": "3121PT053",
        "s": "AIR COMP. SUCTION PRESSURE ASP",
        "r": "",
        "l": "No thresholds defined"
    },
    {
        "c": "Pressure",
        "t": "3121PT054",
        "s": "(MEDIAN) PROCESS AIR",
        "r": "",
        "l": "DEV 10.00 %"
    },
    {
        "c": "Pressure",
        "t": "3121PT054A/B/C",
        "s": "PROCESS AIR AT 3121U001-K01",
        "r": "",
        "l": "ZAHH 4.600 bar g<br>AH 4.100 bar g"
    },
    {
        "c": "Pressure",
        "t": "3121PT082",
        "s": "AMMONIA GAS PRESSURE",
        "r": "",
        "l": "No thresholds defined"
    },
    {
        "c": "Pressure",
        "t": "3121PT084",
        "s": "AIR PRESSURE",
        "r": "",
        "l": "No thresholds defined"
    },
    {
        "c": "Pressure",
        "t": "3121PT101",
        "s": "INLET STEAM / TRIP VALVE",
        "r": "",
        "l": "No thresholds defined"
    },
    {
        "c": "Pressure",
        "t": "3121PT102",
        "s": "(MEDIAN) NITROUS GAS",
        "r": "",
        "l": "DEV 10.00 %"
    },
    {
        "c": "Pressure",
        "t": "3121PT432",
        "s": "SEAL STEAM CONTROLLER",
        "r": "",
        "l": "No thresholds defined"
    },
    {
        "c": "Pressure",
        "t": "3121PT441",
        "s": "VALVE CHEST PRESSURE",
        "r": "",
        "l": "No thresholds defined"
    },
    {
        "c": "Pressure",
        "t": "3121PT444",
        "s": "EXHAUST STEAM PRESSURE (ST)",
        "r": "",
        "l": "No thresholds defined"
    },
    {
        "c": "Pressure",
        "t": "3121PT445",
        "s": "WHEEL CHAMBER PRESSURE",
        "r": "",
        "l": "No thresholds defined"
    },
    {
        "c": "Pressure",
        "t": "9521PI005",
        "s": "STORAGE TANK PIT",
        "r": "",
        "l": "No thresholds defined"
    },
    {
        "c": "Pressure",
        "t": "9521PT006",
        "s": "AT 9521T001",
        "r": "",
        "l": "SHH 15.00 mbar g<br>AH 10.00 mbar g<br>AL -8.00 mbar g"
    },
    {
        "c": "Pressure",
        "t": "9521PI001/2",
        "s": "P003 A/B DISCHARGE",
        "r": "",
        "l": "No thresholds defined"
    },
    {
        "c": "Pressure",
        "t": "9521PI003/4",
        "s": "P001 A/B DISCHARGE",
        "r": "",
        "l": "No thresholds defined"
    },
    {
        "c": "Temperature",
        "t": "3121TT014A",
        "s": "MP STEAM FROM 3121U005-E02",
        "r": "",
        "l": "ZAHH 450.0 °C<br>AH 410.0 °C<br>AL 365.0 °C"
    },
    {
        "c": "Temperature",
        "t": "3121TT014B",
        "s": "MP STEAM FROM 3121U005-E02",
        "r": "",
        "l": "ZAHH 450.0 °C<br>AH 410.0 °C<br>AL 365.0 °C"
    },
    {
        "c": "Temperature",
        "t": "3121TT014C",
        "s": "MP STEAM FROM 3121U005-E02",
        "r": "",
        "l": "ZAHH 450.0 °C<br>AH 410.0 °C<br>AL 365.0 °C"
    },
    {
        "c": "Temperature",
        "t": "3121TT014",
        "s": "MP STEAM FROM 3121U005-E02 (MEDIAN)",
        "r": "",
        "l": "Dev 10.00 %"
    },
    {
        "c": "Temperature",
        "t": "3121TT080",
        "s": "AT PROCESS GAS COOLER",
        "r": "",
        "l": "ZAHH 920.0 °C<br>AH 900.0 °C<br>AL 870.0 °C<br>ZALL 830.0 °C<br>ZALLL 500.0 °C"
    },
    {
        "c": "Temperature",
        "t": "3121TDI420",
        "s": "CASING DT (EXPANDER)",
        "r": "",
        "l": "No thresholds defined"
    },
    {
        "c": "Temperature",
        "t": "3121TDI422",
        "s": "FLANGE DT (EXPANDER)",
        "r": "",
        "l": "No thresholds defined"
    },
    {
        "c": "Temperature",
        "t": "3121TDI441",
        "s": "LIVE STEAM/VALVE CHEST DT",
        "r": "",
        "l": "No thresholds defined"
    },
    {
        "c": "Temperature",
        "t": "3121TDI443",
        "s": "CASING DT (ST)",
        "r": "",
        "l": "No thresholds defined"
    },
    {
        "c": "Temperature",
        "t": "3121TI006",
        "s": "AMMONIA LIQUID TEMP.",
        "r": "",
        "l": "No thresholds defined"
    },
    {
        "c": "Temperature",
        "t": "3121TI010",
        "s": "CWS TEMP. TO CC1",
        "r": "",
        "l": "No thresholds defined"
    },
    {
        "c": "Temperature",
        "t": "3121TI011",
        "s": "CWR TEMP. FROM CC1",
        "r": "",
        "l": "No thresholds defined"
    },
    {
        "c": "Temperature",
        "t": "3121TI012",
        "s": "COOLER CONDENSER 2 TEMP",
        "r": "",
        "l": "No thresholds defined"
    },
    {
        "c": "Temperature",
        "t": "3121TI013",
        "s": "CWR TEMP. FROM AMMONIA EVAPORATOR",
        "r": "",
        "l": "No thresholds defined"
    },
    {
        "c": "Temperature",
        "t": "3121TI094",
        "s": "CWR TEMP.FROM MOTIVE VACCUM SYSTEM",
        "r": "",
        "l": "No thresholds defined"
    },
    {
        "c": "Temperature",
        "t": "3121TI094",
        "s": "CWR TEMP. FROM STEAM TURBINE CONDENSER",
        "r": "",
        "l": "No thresholds defined"
    },
    {
        "c": "Temperature",
        "t": "3121TI015",
        "s": "UPSTREAM BV 5 TEMP.",
        "r": "",
        "l": "No thresholds defined"
    },
    {
        "c": "Temperature",
        "t": "3121TI016",
        "s": "IMPORT STEAM TEMP.",
        "r": "",
        "l": "No thresholds defined"
    },
    {
        "c": "Temperature",
        "t": "3121TI018",
        "s": "BLOW DOWN WATER TEMP.",
        "r": "",
        "l": "No thresholds defined"
    },
    {
        "c": "Temperature",
        "t": "3121TI020",
        "s": "LP STEAM TEMP.",
        "r": "",
        "l": "No thresholds defined"
    },
    {
        "c": "Temperature",
        "t": "3121TI025",
        "s": "TRIP VALVE TEMP.",
        "r": "",
        "l": "No thresholds defined"
    },
    {
        "c": "Temperature",
        "t": "3121TI027",
        "s": "UP STREAM BV10 TEMP.",
        "r": "",
        "l": "No thresholds defined"
    },
    {
        "c": "Temperature",
        "t": "3121TI030",
        "s": "EXPANDER SUCTION TEMP.",
        "r": "",
        "l": "No thresholds defined"
    },
    {
        "c": "Temperature",
        "t": "3121TI031",
        "s": "EXPANDER DISCHARGE TEMP.",
        "r": "",
        "l": "No thresholds defined"
    },
    {
        "c": "Temperature",
        "t": "3121TI049",
        "s": "PFW TEMP.",
        "r": "",
        "l": "No thresholds defined"
    },
    {
        "c": "Temperature",
        "t": "3121TI056",
        "s": "NOX GAS TEMP.",
        "r": "",
        "l": "No thresholds defined"
    },
    {
        "c": "Temperature",
        "t": "3121TI057",
        "s": "BFW PREHEATER OUTLET TEMP.",
        "r": "",
        "l": "No thresholds defined"
    },
    {
        "c": "Temperature",
        "t": "3121TI058",
        "s": "NOX GAS TEMP.",
        "r": "",
        "l": "No thresholds defined"
    },
    {
        "c": "Temperature",
        "t": "3121TI070",
        "s": "AFTER MIXING (TV100)",
        "r": "",
        "l": "No thresholds defined"
    },
    {
        "c": "Temperature",
        "t": "3121TI071",
        "s": "BEFORE MIXING (TV100)",
        "r": "",
        "l": "No thresholds defined"
    },
    {
        "c": "Temperature",
        "t": "3121TI092",
        "s": "PROCESS WATER TANK TEMP.",
        "r": "",
        "l": "No thresholds defined"
    },
    {
        "c": "Temperature",
        "t": "3121TI301",
        "s": "LUBE OIL TANK TEMP.",
        "r": "",
        "l": "No thresholds defined"
    },
    {
        "c": "Temperature",
        "t": "3121TI101",
        "s": "CONTROL EVAPORATOR INLET",
        "r": "",
        "l": "No thresholds defined"
    },
    {
        "c": "Temperature",
        "t": "3121TI361",
        "s": "AFTER COOLER OIL TEMP.",
        "r": "",
        "l": "No thresholds defined"
    },
    {
        "c": "Temperature",
        "t": "3121TI445/446",
        "s": "U005-P01/P02 CWR TEMP.",
        "r": "",
        "l": "No thresholds defined"
    },
    {
        "c": "Temperature",
        "t": "3121TT002",
        "s": "LP STEAM LINE",
        "r": "",
        "l": "AH 190.0 °C"
    },
    {
        "c": "Temperature",
        "t": "3121TT003",
        "s": "MP STEAM LINE",
        "r": "",
        "l": "SAHH 420.0 °C<br>AH 405.0 °C"
    },
    {
        "c": "Temperature",
        "t": "3121TT004",
        "s": "COOLING WATER SUPPLY",
        "r": "",
        "l": "AH 33.0 °C"
    },
    {
        "c": "Temperature",
        "t": "3121TT005",
        "s": "COOLING WATER RETURN",
        "r": "",
        "l": "AH 43.0 °C"
    },
    {
        "c": "Temperature",
        "t": "3121TT007",
        "s": "AW AT 3121E003",
        "r": "",
        "l": "AH 130.0 °C<br>AL 10.0 °C"
    },
    {
        "c": "Temperature",
        "t": "3121TT008A/B/C",
        "s": "AMMONIA GAS FROM 3121E004 TO 3121F004",
        "r": "",
        "l": "AH 150.0 °C<br>AL 60.0 °C<br>ZALL 50.0°C"
    },
    {
        "c": "Temperature",
        "t": "3121TT009",
        "s": "AMMONIA GAS OUTLET",
        "r": "",
        "l": "AH 40.0 °C"
    },
    {
        "c": "Temperature",
        "t": "3121TT017",
        "s": "MP STEAM AT IMPORT/EXPORT LINE",
        "r": "",
        "l": "ZAHH 420.0 °C<br>AH 410.0 °C<br>AL 385.0°C"
    },
    {
        "c": "Temperature",
        "t": "3121TT019",
        "s": "AT 31210003-E01",
        "r": "",
        "l": "AH 55.0 °C"
    },
    {
        "c": "Temperature",
        "t": "3121TT021",
        "s": "DISCHARGE TEMP. ASP",
        "r": "",
        "l": "No thresholds defined"
    },
    {
        "c": "Temperature",
        "t": "3121TT022A/B/C",
        "s": "NITROUS GAS AT COMP",
        "r": "",
        "l": "ZAHH 240.0°C<br>AH 215.0°C"
    },
    {
        "c": "Temperature",
        "t": "3121TT023",
        "s": "NOX COMPRESSOR SUCTION TEMP. ASP",
        "r": "",
        "l": "No thresholds defined"
    },
    {
        "c": "Temperature",
        "t": "3121TT024",
        "s": "SEAL STEAM TEMP.",
        "r": "",
        "l": "No thresholds defined"
    },
    {
        "c": "Temperature",
        "t": "3121TT028",
        "s": "NOX COMPRESSOR SUCTION TEMP. ",
        "r": "",
        "l": "AH 70.0 °C"
    },
    {
        "c": "Temperature",
        "t": "3121TT029",
        "s": "EXPANDER DISCHARGE TEMP.",
        "r": "",
        "l": "AL 90.0 °C<br>ZALL 70.0 °C"
    },
    {
        "c": "Temperature",
        "t": "3121TT032",
        "s": "AIR COMPRESSOR DISCHARGE TEMP ASP",
        "r": "",
        "l": "No thresholds defined"
    },
    {
        "c": "Temperature",
        "t": "3121TT035",
        "s": "PROCESS AIR FROM 3121U001-K01",
        "r": "",
        "l": "AH 260.0 °C"
    },
    {
        "c": "Temperature",
        "t": "3121TT039",
        "s": "TAIL GAS INLINE 3121E010",
        "r": "",
        "l": "AH 45.0 °C"
    },
    {
        "c": "Temperature",
        "t": "3121TT037",
        "s": "NITRIC ACID FROM 3121C003",
        "r": "",
        "l": "AH 62.0 °C"
    },
    {
        "c": "Temperature",
        "t": "3121TT040",
        "s": "NITRIC ACID TO 3121P014",
        "r": "",
        "l": "AH 100.0 °C"
    },
    {
        "c": "Temperature",
        "t": "3121TT062",
        "s": "NITRIC ACID OUTLINE 3121E007",
        "r": "",
        "l": "AH 65.0 °C"
    },
    {
        "c": "Temperature",
        "t": "3121TT050",
        "s": "BOILER WATER TO 3121E006",
        "r": "",
        "l": "SL 100.0  °C<br>ALL 90.0  °C"
    },
    {
        "c": "Temperature",
        "t": "3121TT053",
        "s": "NITROUS GAS OUTLINE 3121E006",
        "r": "",
        "l": "AH 230.0 °C<br>AL 140.0  °C"
    },
    {
        "c": "Temperature",
        "t": "3121TT055",
        "s": "NITROUS GAS FROM 3121E007",
        "r": "",
        "l": "AH 70.0 °C"
    },
    {
        "c": "Temperature",
        "t": "3121TT059",
        "s": "AT 3121E014",
        "r": "",
        "l": "AH 120.0 °C<br>AL 90.0 °C"
    },
    {
        "c": "Temperature",
        "t": "3121TT063A/B/C",
        "s": "NITROUS GAS TO 3121C001",
        "r": "",
        "l": "ZAHH 90.0 °C<br>AH 70.0 °C"
    },
    {
        "c": "Temperature",
        "t": "3121TT066",
        "s": "AMMONIA GASEOUS AR 3121N002",
        "r": "",
        "l": "SH 74.0 °C<br>AL 72.0 °C<br>ZALL 60.0°C"
    },
    {
        "c": "Temperature",
        "t": "3121TT067",
        "s": "TAIL GAS FROM 3121N002 TO 3121R003",
        "r": "",
        "l": "AH 410.0 °C<br>AL 300.0 °C<br>ZALL 200.0°C"
    },
    {
        "c": "Temperature",
        "t": "3121TT068",
        "s": "TAIL GAS OUTLINE 3121R003",
        "r": "",
        "l": "AH 430.0 °C<br>AL 300.0 °C<br>ZALL 200.0°C"
    },
    {
        "c": "Temperature",
        "t": "3121TT072A/B/C",
        "s": "MP STEAM SUPERHEATED OUTLINE 3121U005-23",
        "r": "",
        "l": "ZAHH 470.0 °C<br>AH 4500.0 °C<br>AL 395.0°C"
    },
    {
        "c": "Temperature",
        "t": "3121TT078",
        "s": "PROCESS GAS COOLER TEMP.",
        "r": "",
        "l": "ZAHH 920.0 °C<br>AH 900.0 °C<br>AL 870.0 °C<br>ZALL 830.0 °C<br>ZALLL 500.0 °C"
    },
    {
        "c": "Temperature",
        "t": "3121TT079",
        "s": "PROCESS GAS COOLER TEMP.",
        "r": "",
        "l": "ZAHH 920.0 °C<br>AH 900.0 °C<br>AL 870.0 °C<br>ZALL 830.0 °C<br>ZALLL 500.0 °C"
    },
    {
        "c": "Temperature",
        "t": "3121TT080",
        "s": "PROCESS GAS COOLER TEMP.",
        "r": "",
        "l": "ZAHH 920.0 °C<br>AH 900.0 °C<br>AL 870.0 °C<br>ZALL 830.0 °C<br>ZALLL 500.0 °C"
    },
    {
        "c": "Temperature",
        "t": "3121TY081",
        "s": "(MEDIAN) AT 3121U005",
        "r": "",
        "l": "Dev 10.00%"
    },
    {
        "c": "Temperature",
        "t": "3121TYI082",
        "s": "(MEDIAN) AT 3121U005",
        "r": "",
        "l": "DEV 10.00%"
    },
    {
        "c": "Temperature",
        "t": "3121TT083",
        "s": "AT 3121U005 NITROUS OUTLIN",
        "r": "",
        "l": "AH 470.0 °C<br>AL 350.0 °C"
    },
    {
        "c": "Temperature",
        "t": "3121TT086",
        "s": "NITROUS GAS INLINE 3121E012",
        "r": "",
        "l": "AH 480.0 °C"
    },
    {
        "c": "Temperature",
        "t": "3121TT087",
        "s": "NITROUS GAS OUTLINE 3121E012",
        "r": "",
        "l": "AH 410.0 °C"
    },
    {
        "c": "Temperature",
        "t": "3121TT096",
        "s": "AT 3121C003",
        "r": "",
        "l": "AH 90.0 °C"
    },
    {
        "c": "Temperature",
        "t": "3121TT100",
        "s": "MP STEAM FROM 3121U005-E02",
        "r": "",
        "l": "AH 410.0 °C<br>AL 365.0 °C"
    },
    {
        "c": "Temperature",
        "t": "3121TT106",
        "s": "AT 3121E014",
        "r": "",
        "l": "AH 120.0 °C<br>AL 90.0 °C"
    },
    {
        "c": "Temperature",
        "t": "3121TT098",
        "s": "INLET STEAM TEMP.",
        "r": "",
        "l": "No thresholds defined"
    },
    {
        "c": "Temperature",
        "t": "3121TT099",
        "s": "SUCTION TEMP. (EXPANDER)",
        "r": "",
        "l": "No thresholds defined"
    },
    {
        "c": "Temperature",
        "t": "3121TT104",
        "s": "BOILER FEED WATER LINE",
        "r": "",
        "l": "AH 150.0 °C"
    },
    {
        "c": "Temperature",
        "t": "3121TT300",
        "s": "AT LUBE OIL UNIT",
        "r": "",
        "l": "AHH 70.0 °C<br>AH 65.0 °C<br>AL 40.0 °C<br>SLL 10.0 °C"
    },
    {
        "c": "Temperature",
        "t": "3121TT362",
        "s": "AT 3121U002-F01/F02 OUTLET",
        "r": "",
        "l": "AH 55.0 °C<br>AL 35.0 °C<br>SLL 30.0 °C"
    },
    {
        "c": "Temperature",
        "t": "3121TT419",
        "s": "SUCTION TEMP. SD",
        "r": "",
        "l": "No thresholds defined"
    },
    {
        "c": "Temperature",
        "t": "3121TT427",
        "s": "DISCHARGE TEMP. UCP",
        "r": "",
        "l": "No thresholds defined"
    },
    {
        "c": "Temperature",
        "t": "3121TT443",
        "s": "UPPER CASING TEMP (ST)",
        "r": "",
        "l": "No thresholds defined"
    },
    {
        "c": "Temperature",
        "t": "3121TT444",
        "s": "EXHAUST STEAM TEMP (ST)",
        "r": "",
        "l": "No thresholds defined"
    },
    {
        "c": "Temperature",
        "t": "3121TT446",
        "s": "LOWER CASING TEMP (ST)",
        "r": "",
        "l": "No thresholds defined"
    },
    {
        "c": "Temperature",
        "t": "3121TT480",
        "s": "TURBINE BEARING TEMP (ST)",
        "r": "",
        "l": "No thresholds defined"
    },
    {
        "c": "Temperature",
        "t": "3121TT481",
        "s": "BEARING TEMP (NOX COMP)",
        "r": "",
        "l": "No thresholds defined"
    },
    {
        "c": "Temperature",
        "t": "3121TT491",
        "s": "BEARING TEMP (AIR COMP)",
        "r": "",
        "l": "No thresholds defined"
    },
    {
        "c": "Temperature",
        "t": "3121TT492",
        "s": "BEARING TEMP (EXPANDER)",
        "r": "",
        "l": "No thresholds defined"
    }
];
