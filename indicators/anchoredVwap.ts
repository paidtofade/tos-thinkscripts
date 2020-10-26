# Created by @paidtofade in 2020
#
# If you find this indicator helpful, give me some love on twitter @paidtofade
#
# This program is free software: you can redistribute it and/or modify
# it under the terms of the GNU General Public License as published by
# the Free Software Foundation, either version 3 of the License, or
# (at your option) any later version.
# 
# This program is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU General Public License for more details.
# 
# You should have received a copy of the GNU General Public License
# along with this program.  If not, see <https://www.gnu.org/licenses/>.

input anchorYear = {"1985", "1986", "1987", "1988", "1989", "1990", "1991", "1992", "1993", "1994", "1995", "1996", "1997", "1998", "1999", "2000", "2001", "2002", "2003", "2004", "2005", "2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", default "2020", "2021", "2022", "2023", "2024", "2025", "2026", "2027", "2028", "2029", "2030", "2031", "2032", "2033", "2034", "2035", "2036", "2037", "2038", "2039", "2040", "2041", "2042", "2043", "2044", "2045", "2046", "2047", "2048", "2049", "2050", "2051", "2052", "2053", "2054", "2055"};

input anchorMonth = {default "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"};

input anchorDay = {default "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"};

input anchorHourEastern = {"00", "01", "02", "03", "04", "05", "06", "07", "08", default "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"};

input anchorMinuteEastern = {"00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", default "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59"};

input deviationChannel = 2.0;

def yearPart;
switch (anchorYear) {
  case "1985": yearPart = 1985;
  case "1986": yearPart = 1986;
  case "1987": yearPart = 1987;
  case "1988": yearPart = 1988;
  case "1989": yearPart = 1989;
  case "1990": yearPart = 1990;
  case "1991": yearPart = 1991;
  case "1992": yearPart = 1992;
  case "1993": yearPart = 1993;
  case "1994": yearPart = 1994;
  case "1995": yearPart = 1995;
  case "1996": yearPart = 1996;
  case "1997": yearPart = 1997;
  case "1998": yearPart = 1998;
  case "1999": yearPart = 1999;
  case "2000": yearPart = 2000;
  case "2001": yearPart = 2001;
  case "2002": yearPart = 2002;
  case "2003": yearPart = 2003;
  case "2004": yearPart = 2004;
  case "2005": yearPart = 2005;
  case "2006": yearPart = 2006;
  case "2007": yearPart = 2007;
  case "2008": yearPart = 2008;
  case "2009": yearPart = 2009;
  case "2010": yearPart = 2010;
  case "2011": yearPart = 2011;
  case "2012": yearPart = 2012;
  case "2013": yearPart = 2013;
  case "2014": yearPart = 2014;
  case "2015": yearPart = 2015;
  case "2016": yearPart = 2016;
  case "2017": yearPart = 2017;
  case "2018": yearPart = 2018;
  case "2019": yearPart = 2019;
  case "2020": yearPart = 2020;
  case "2021": yearPart = 2021;
  case "2022": yearPart = 2022;
  case "2023": yearPart = 2023;
  case "2024": yearPart = 2024;
  case "2025": yearPart = 2025;
  case "2026": yearPart = 2026;
  case "2027": yearPart = 2027;
  case "2028": yearPart = 2028;
  case "2029": yearPart = 2029;
  case "2030": yearPart = 2030;
  case "2031": yearPart = 2031;
  case "2032": yearPart = 2032;
  case "2033": yearPart = 2033;
  case "2034": yearPart = 2034;
  case "2035": yearPart = 2035;
  case "2036": yearPart = 2036;
  case "2037": yearPart = 2037;
  case "2038": yearPart = 2038;
  case "2039": yearPart = 2039;
  case "2040": yearPart = 2040;
  case "2041": yearPart = 2041;
  case "2042": yearPart = 2042;
  case "2043": yearPart = 2043;
  case "2044": yearPart = 2044;
  case "2045": yearPart = 2045;
  case "2046": yearPart = 2046;
  case "2047": yearPart = 2047;
  case "2048": yearPart = 2048;
  case "2049": yearPart = 2049;
  case "2050": yearPart = 2050;
  case "2051": yearPart = 2051;
  case "2052": yearPart = 2052;
  case "2053": yearPart = 2053;
  case "2054": yearPart = 2054;
  case "2055": yearPart = 2055;
}

def monthPart;
switch (anchorMonth) {
  case "01": monthPart = 1;
  case "02": monthPart = 2;
  case "03": monthPart = 3;
  case "04": monthPart = 4;
  case "05": monthPart = 5;
  case "06": monthPart = 6;
  case "07": monthPart = 7;
  case "08": monthPart = 8;
  case "09": monthPart = 9;
  case "10": monthPart = 10;
  case "11": monthPart = 11;
  case "12": monthPart = 12;
}

def dayPart;
switch (anchorDay) {
  case "01": dayPart = 1;
  case "02": dayPart = 2;
  case "03": dayPart = 3;
  case "04": dayPart = 4;
  case "05": dayPart = 5;
  case "06": dayPart = 6;
  case "07": dayPart = 7;
  case "08": dayPart = 8;
  case "09": dayPart = 9;
  case "10": dayPart = 10;
  case "11": dayPart = 11;
  case "12": dayPart = 12;
  case "13": dayPart = 13;
  case "14": dayPart = 14;
  case "15": dayPart = 15;
  case "16": dayPart = 16;
  case "17": dayPart = 17;
  case "18": dayPart = 18;
  case "19": dayPart = 19;
  case "20": dayPart = 20;
  case "21": dayPart = 21;
  case "22": dayPart = 22;
  case "23": dayPart = 23;
  case "24": dayPart = 24;
  case "25": dayPart = 25;
  case "26": dayPart = 26;
  case "27": dayPart = 27;
  case "28": dayPart = 28;
  case "29": dayPart = 29;
  case "30": dayPart = 30;
  case "31": dayPart = 31;
}

def hourPart;
switch (anchorHourEastern) {
  case "00": hourPart = 0;
  case "01": hourPart = 1;
  case "02": hourPart = 2;
  case "03": hourPart = 3;
  case "04": hourPart = 4;
  case "05": hourPart = 5;
  case "06": hourPart = 6;
  case "07": hourPart = 7;
  case "08": hourPart = 8;
  case "09": hourPart = 9;
  case "10": hourPart = 10;
  case "11": hourPart = 11;
  case "12": hourPart = 12;
  case "13": hourPart = 13;
  case "14": hourPart = 14;
  case "15": hourPart = 15;
  case "16": hourPart = 16;
  case "17": hourPart = 17;
  case "18": hourPart = 18;
  case "19": hourPart = 19;
  case "20": hourPart = 20;
  case "21": hourPart = 21;
  case "22": hourPart = 22;
  case "23": hourPart = 23;
}

def minutePart;
switch (anchorMinuteEastern) {
  case "00": minutePart = 0;
  case "01": minutePart = 1;
  case "02": minutePart = 2;
  case "03": minutePart = 3;
  case "04": minutePart = 4;
  case "05": minutePart = 5;
  case "06": minutePart = 6;
  case "07": minutePart = 7;
  case "08": minutePart = 8;
  case "09": minutePart = 9;
  case "10": minutePart = 10;
  case "11": minutePart = 11;
  case "12": minutePart = 12;
  case "13": minutePart = 13;
  case "14": minutePart = 14;
  case "15": minutePart = 15;
  case "16": minutePart = 16;
  case "17": minutePart = 17;
  case "18": minutePart = 18;
  case "19": minutePart = 19;
  case "20": minutePart = 20;
  case "21": minutePart = 21;
  case "22": minutePart = 22;
  case "23": minutePart = 23;
  case "24": minutePart = 24;
  case "25": minutePart = 25;
  case "26": minutePart = 26;
  case "27": minutePart = 27;
  case "28": minutePart = 28;
  case "29": minutePart = 29;
  case "30": minutePart = 30;
  case "31": minutePart = 31;
  case "32": minutePart = 32;
  case "33": minutePart = 33;
  case "34": minutePart = 34;
  case "35": minutePart = 35;
  case "36": minutePart = 36;
  case "37": minutePart = 37;
  case "38": minutePart = 38;
  case "39": minutePart = 39;
  case "40": minutePart = 40;
  case "41": minutePart = 41;
  case "42": minutePart = 42;
  case "43": minutePart = 43;
  case "44": minutePart = 44;
  case "45": minutePart = 45;
  case "46": minutePart = 46;
  case "47": minutePart = 47;
  case "48": minutePart = 48;
  case "49": minutePart = 49;
  case "50": minutePart = 50;
  case "51": minutePart = 51;
  case "52": minutePart = 52;
  case "53": minutePart = 53;
  case "54": minutePart = 54;
  case "55": minutePart = 55;
  case "56": minutePart = 56;
  case "57": minutePart = 57;
  case "58": minutePart = 58;
  case "59": minutePart = 59;
}

def anchorDate = (yearPart * 10000) + (monthPart * 100) + dayPart;
def anchorTime = (hourPart * 100) + minutePart;

def postAnchorDate = if GetYYYYMMDD()  >= anchorDate then 1 else 0;
def postAnchorTime = if SecondsFromTime(anchorTime) >= 0 then 1 else 0;
def postAnchor = if postAnchorDate == 1 and postAnchorTime == 1 then 1 else postAnchor[1];

def volumeSum;
def volumeVwapSum;
def volumeVwap2Sum;

if (postAnchor == 0) {
    volumeSum = Double.NaN;
    volumeVwapSum = Double.NaN;
    volumeVwap2Sum = Double.NaN;

} else if (postAnchor[1] == 0 and postAnchor == 1) {
    volumeSum = volume;
    volumeVwapSum = volume * vwap;
    volumeVwap2Sum = volume * Sqr(vwap);

} else {
    volumeSum = CompoundValue(1, volumeSum[1] + volume, volume);
    volumeVwapSum = CompoundValue(1, volumeVwapSum[1] + volume * vwap, volume * vwap);
    volumeVwap2Sum = CompoundValue(1, volumeVwap2Sum[1] + volume * Sqr(vwap), volume * Sqr(vwap));
}

def price = volumeVwapSum / volumeSum;
def deviation = Sqrt(Max(volumeVwap2Sum / volumeSum - Sqr(price), 0));

plot VWAP = price;
plot UpperBand = if deviationChannel > 0 then (price + deviationChannel * deviation) else Double.NaN;
plot LowerBand = if deviationChannel > 0 then (price - deviationChannel * deviation) else Double.NaN;
